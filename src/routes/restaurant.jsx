import { getRestaurant } from "../restaurants";


export async function loader({params}){
    const contact = await getRestaurant(params.contactId);
    
}

export default function Restaurant(){

}