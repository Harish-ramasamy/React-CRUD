export default function ContactsShow({contact}) {
    return (
        <>
        <div>
            {contact.map((res,index) => (
                <p key={res}>{res}</p>
            ))}
        </div>
        </>
    )
}