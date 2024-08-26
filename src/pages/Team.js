import ExecutivePreview from "../components/ExecutivePreview";
import useFetchJSON from "../utils/FetchJSON";

const Team = () => {
    const {data:executiveList, isPending, error} = useFetchJSON("https://api.lesauoft.com/executives");

    return (  
        <>
            <h1 className="team-page-title">Meet the LESA Team!</h1>
            <div style={{display: "flex", gap: "2rem", flexDirection: "column", marginBottom: "2rem"}}>
                {!isPending && error == null && 
                    executiveList.map((info) => (
                        <ExecutivePreview key={info.id} executiveInfo={info}/>
                    ))}
                {(isPending || error != null) && 
                    <>
                        <div className="executive-load shimmerLoad"/>
                        <div className="executive-load shimmerLoad"/>
                        <div className="executive-load shimmerLoad"/>
                        <div className="executive-load shimmerLoad"/>
                    </>}
            </div>
        </>
    );
}
 
export default Team;