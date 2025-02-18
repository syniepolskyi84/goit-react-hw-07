import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({data: { id, name, number}}){
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteContact(id))
    } 

    return (
        <div className={css.div}>
            <p className={css.p}><FaUser />      {name}</p>
            <p className={css.p}><FaPhoneAlt />     {number}</p>
            <button className={css.btn} onClick={handleDelete}>
            Delete</button>
        </div>
    )
}