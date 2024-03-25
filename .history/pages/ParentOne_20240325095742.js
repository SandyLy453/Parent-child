import { useState } from "react"

export default function ParentOne() {
    const [data, setData] = useState();

    const ParentToChild = () => (
        setData("this is the data frm the parent page which will be passed to the child page")
    )
    return(
        <>
            <button onClick={() => ParentToChild()}>Click here!</button>
        </>
    )
}


