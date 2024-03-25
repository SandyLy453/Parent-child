export default function ChildTwo({childParent}) {
    const data = "This is the data from child page to parent page"
    return(
        <>
            <button onClick={() => childParent(data)}>Click here~</button>
        </>
    )
}


