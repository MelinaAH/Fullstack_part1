import '../index.css';

const Notification = ({ message }) => {
    if (message === null) {
        return null
    }

    return (
        <div className="errorNote">{message}</div>
    )
}

export default Notification;