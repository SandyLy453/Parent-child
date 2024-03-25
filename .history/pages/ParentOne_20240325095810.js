import { useState } from "react"

export default function ParentOne() {
    const [data, setData] = useState();

    const parentToChild = () => (
        setData("this is the data frm the parent page which will be passed to the child page")
    )
    return(
        <>
            <button onClick={() => parentToChild()}>Click here!</button>
        </>
    )
}


