export default function Card(props){

    return <>
           <a href="https://nextjs.org/docs" className="card">
            <h3>{props.title} &rarr;</h3>
            <p>{props.body}.</p>
          </a>
     </>
}
