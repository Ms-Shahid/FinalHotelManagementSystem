import React from "react";

export class User extends React.Component{

    render(){
        return(

            <div>
               <form class="align-items-center">
                    <div class="row justify-content-center align-items-center h-100">
                        <div class="col col-sm-6 col-md-6 col-lg-4 col-xl-3">
                    
                            <div class="form-group">
                                <div class="row">
                                    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Name</label>
                                    <input type="name" class="form-control" id="inputName" />
                                    
                                    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Email</label>
                                    <input type="email" class="form-control" id="inputEmail4" placeholder="example@com"/>
                                
                                    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Password</label>
                                    <input type="password" class="form-control" id="inputPassword4" />
                            
                                    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Role</label>
                                    <input type="text" class="form-control" id="inputRole" />
                            
                                    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Mobile</label>
                                    <input type="text" class="form-control" id="inputMobile" />
                                </div>
                                <div class="row">
                                    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Address</label>
                                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                                </div>
                                <br/>
                                <div class="d-grid gap-2 col-6 mx-auto">
                                    <button type="submit" class="btn btn-primary" >Sign in</button>
                                </div>
                            </div> 
                        </div>
                    </div>      
                </form>
            </div>
        )
    }


}