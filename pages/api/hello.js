import ServiceManager from '../../services/ServiceManager'

export default async function handler(req,res
) {
  const ds = ServiceManager.getService('dataservice');  
 
  console.log(await ds.getHighlightedFollowups());
  ds.getSomeEntity().then(r=>{
    res.status(200).json({ name: 'John Doe' })
  });
}
