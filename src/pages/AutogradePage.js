import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Autograde = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = "eyJraWQiOiJkWUwxS1VuXC9iMVBRRTRxQ1RZMEk1TmNKbjNoZGwyOFRXS2NiVXRrdXd1UT0iLCJhbGciOiJSUzI1NiJ9.eyJvcmlnaW5fanRpIjoiNTYyMzY3ZGItYWU5NC00MzQ0LTkxNzMtYzAzMDFlMzgyZWNiIiwic3ViIjoiNDQzNWE2YTctZjM3My00MDg0LTkyZTItMGQ4Mjk4MmY0Yzc5IiwiYXVkIjoiM283djVmajU1MXN1ZmQzMW5odW4yOWtvcDAiLCJldmVudF9pZCI6IjViYzg5YjNmLWVjNDMtNDhiMi05MjM5LTc2NTIxOThhMTcxNCIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNzAyMDQ5MDc3LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0yLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMl83SkdHWEJ5aGwiLCJjb2duaXRvOnVzZXJuYW1lIjoianNrbGZkanNrbGRzamxkIiwiZXhwIjoxNzAyMDUyNjc3LCJpYXQiOjE3MDIwNDkwNzcsImp0aSI6Ijk2MTBmOWUxLTIyNzQtNGY5Zi1hMTQ2LWMwYjc5YjllMjQ4OSJ9.JcjYN70ydLLooZTijgX1iCdnysJvaIsPf3uZ6uA1MSX5ST6-WmP8ZtrKWzr13WWOugNBawe1ypEvtJYa5sov5rV_xur6V5HAvj--CK5tS_cgpA2MPo2oVLQ9RycXfS37qtF7Zb7-qS7cusMEgYe15YnFannNXSoUJJqLmwcW20o81lPcH9YeSnY2MhfnUeUMyLsUK6IJ4XunLTkT9oZPyMri43f03_bFSQtKU7IbKFnaIRdi-HgH8Bta0FPx1xDaksNwVCjsMkYIK9v1yhZ31foUN8Gdj1-eMfPs6I8Sv6UE5y7awo1GTVjMvZpCT227bLsfcHhkG628XsRcmE9cZg"
        sessionStorage.setItem("authToken", token);

        // save to storage 
        //  save to storage

        navigate("/");

    }, [navigate]);


        
    return (

        <div>
        <h1>Loading auth token...</h1>
        </div>
    );
    }

export default Autograde;