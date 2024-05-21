export default function Chat(props){

    function HandleResponse(){ 
        const response = fetch("/api/ai", {
            method: POST,
            body: {text: "Vreau sa imi zici ce zi e maine"}
        })
        console.log(HandleResponse)
    }

    return(
        <button onClick={() => {
            HandleResponse
        }}
        className="px-10 text-2xl py-2 bg-blue-200"
        >INTREABA</button>
    )
}