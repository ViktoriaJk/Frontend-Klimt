
const InputForm = ({newPaint}) =>{

    const sendData = (e) =>{
        e.preventDefault()
        console.log(e)
    }

    return(
        <div>
            <form action="" onSubmit={sendData}>
                <label htmlFor="">Name</label>
                <input type="text"  />
                <label htmlFor="">Title</label>
                <input type="text"  />
                <label htmlFor="">Type</label>
                <input type="text" />
                <button>submit</button>
            </form>
        </div>
    )
}
export default InputForm