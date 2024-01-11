import { useFirestore } from "../hooks/useFirestore"
// import delBtn from '../assets/remove.svg'
import { deleteDoc, doc } from "firebase/firestore"
import { db, storage } from "../firebase/config"
import { deleteObject, ref } from "firebase/storage"
import { useState } from "react"
import {motion} from "framer-motion"


export const  ImageGrid = ({setSelectedImg}) =>{
    const {docs} = useFirestore('images')
    const [showDeleteBtn,setShowDeleteBtn] = useState(false)

    const handleDelete =  async (e,docId,imageUrl)=>{
        e.stopPropagation()
        try {
            await deleteDoc(doc(db,'images',docId))
            const imageRef = ref(storage,imageUrl)
            await deleteObject(imageRef)
        } catch (err) {
            console.log(err)
        }
    }

    const ShowBtnAfterDelay = ()=>{
        setTimeout(()=>{
            setShowDeleteBtn(true)
        },1000)
    }
    return(

        <div className="img-grid">
            {docs && docs.map(doc =>(
                < motion.div 
                className="img-wrapper" 
                key={doc.id} 
                onClick={()=>setSelectedImg(doc.url)}
                whileHover={{opacity:1}}
                layout

                onMouseEnter={ShowBtnAfterDelay}
                onMouseLeave={()=>setShowDeleteBtn(false)}
                >
                    <motion.img 
                    src={doc.url} 
                    alt="upload-img"
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{delay:1}}
                    />
                    {/* <img  className = "del-img" src={delBtn} alt="" /> */}

                    {showDeleteBtn &&  (
                        <button 
                        className="delete-btn" 
                        onClick={e => handleDelete(e,doc.id,doc.url)}>
                            -
                        </button>
                    )}

                </motion.div>
            ))}
        </div>
    )
}