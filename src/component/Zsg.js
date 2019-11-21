import React, {Component, Fragment} from 'react'

class Zsg extends Component {
    constructor(props){
        super(props)
        this.state= {
            list:[],
            inputV:''
        }
    }

    aa(e){
        this.setState({
            inputV : e.target.value
        })
    }

    tianjia(){
        const list = [...this.state.list,this.state.inputV]
        this.setState({
            list
        })
    }

    render() {
        return(
            <Fragment>
                <input type="text"
                       value={this.state.inputV}
                       onChange={this.aa.bind(this)}
                />
                <button
                onClick={this.tianjia.bind(this)}>
                    提交
                </button>

            </Fragment>
            )
    }
}
