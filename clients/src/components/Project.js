import React, { Component } from 'react'
import axios from 'axios'
class Project extends Component {

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
        //         try
        // {

        // var user=JSON.parse(localStorage.getItem("auth_data")).email
        // console.log("user is -=-=-=-=0=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=",user)
        // }
        // catch(e)
        // {
        //     user=""

        // }
        //   var {exp1_org,exp1_pos,exp1_dur,exp1_desc,exp2_org,exp2_pos,exp2_dur,exp2_desc,proj1_title,proj1_link,proj1_desc,proj2_title,proj2_link,proj2_desc} = this.props.values
        // axios.post("/save/education",{user,inst_pos_dur_desc:[`${exp1_org},${exp1_pos},${exp1_dur},${exp1_desc}`,`${exp2_org},${exp2_pos},${exp2_dur},${exp2_desc}`],proj_title_url_desc:[`${proj1_title},${proj1_link},${proj1_desc}`,`${proj2_title},${proj2_link},${proj2_desc}`]}).then(data=>{
        //     console.log("data is ",data)
        // }).catch(err=>{
        //     console.log("error is ",err)
        // })
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <div className="card animated fadeInLeft">
                <div className="card-body">

                    <h3 className="card-title">Projects' Info</h3>
                    <hr />
                </div>
                <form onSubmit={this.continue}>

                    



                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <h3><b><i className="fas fa-check-circle mr-1"></i>1</b></h3>
                        </div>
                        <div className="col-lg-6 text-left">
                            <label>Title</label>
                            <input type="text" name="proj1_title" className="form-control" defaultValue={values.status === 1 ? '' : values.proj1_title} onChange={handleChange}  />
                        </div>
                        <div className="col-lg-6 text-left">
                            <label>Link</label>
                            <input type="text" name="proj1_link" className="form-control" defaultValue={values.status === 1 ? '' : values.proj1_link} onChange={handleChange} />
                        </div>
                        
                    </div>
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <label>Description</label>
                            <input type="text" name="proj1_desc" className="form-control" defaultValue={values.status === 1 ? '' : values.proj1_desc} onChange={handleChange}  />
                        </div>
                    </div>

                    <br />

                    

                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <h3><b><i className="fas fa-check-circle mr-1"></i>2</b></h3>
                            <hr/>
                        </div>
                        <div className="col-lg-6 text-left">
                            <label>Title</label>
                            <input type="text" name="proj2_title" className="form-control" defaultValue={values.status === 1 ? '' : values.proj2_title} onChange={handleChange}  />
                        </div>
                        <div className="col-lg-6 text-left">
                            <label>Link</label>
                            <input type="text" name="proj2_link" className="form-control" defaultValue={values.status === 1 ? '' : values.proj2_link} onChange={handleChange} />
                        </div>
                        
                    </div>
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <label>Description</label>
                            <input type="text" name="proj2_desc" className="form-control" defaultValue={values.status === 1 ? '' : values.proj2_desc} onChange={handleChange}  />
                        </div>
                    </div>
                    <br />
                    <div className="container text-center">
                        <button type="button" className="btn btn-info" onClick={this.back}><i className="fas fa-angle-left mr-1"></i>Back</button>
                        <button type="submit" className="btn btn-info">Next<i className="fas fa-angle-right ml-1"></i></button>
                    </div>
                    <br />
                </form>
            </div>
        )
    }
}

export default Project;