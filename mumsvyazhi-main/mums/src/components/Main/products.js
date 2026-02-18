import React, {Component} from "react"
import Card from "./card";
import Frog from "./frog";
const frog = () => {
    return <Frog></Frog>
}
export class Products extends Component{

    render(){
        return(
                <main>
                    {this.props.products.slice(0,3).map(el => (
                        <Card key = {el.id} product = {el}  />
                    ))}
                    {frog()}
                    {this.props.products.slice(3,6).map(el => (
                        <Card key = {el.id} product = {el}  />
                    ))}
                </main>

        )
    }
}
export default Products;