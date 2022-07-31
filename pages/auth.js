import Header from "../components/header";
import Login from "../components/login";




export default function Auth() {


    return <><div className="container" >
       
        <Login></Login>
    </div>
    <style>{`
        .container{
            background: #f2f2f2;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
        }
        `}
    </style>
    </>
}