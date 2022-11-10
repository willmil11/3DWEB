//This file include the function of the 3DWEB library
//3DWEB by willmil11
//V0.1 in-dev build

//System functions
function AB6250655368566D597133743677397A(){
    //Generate random 128 bits HEX key
    var F46A576E5A7234753778214125442A47 = "";
    var B273357638792F423F4528482B4D6250 = 0;
    while (F46A576E5A7234753778214125442A47.length < 32){
        B273357638792F423F4528482B4D6250 = Math.floor(Math.random() * 16);
        if (B273357638792F423F4528482B4D6250 < 10){
            F46A576E5A7234753778214125442A47 += `${B273357638792F423F4528482B4D6250}`
        }
        else{
            if (B273357638792F423F4528482B4D6250 === 10){
                F46A576E5A7234753778214125442A47 += "A";
            }
            else{
                if (B273357638792F423F4528482B4D6250 === 11){
                    F46A576E5A7234753778214125442A47 += "B";
                }
                else{
                    if (B273357638792F423F4528482B4D6250 === 12){
                        F46A576E5A7234753778214125442A47 += "C";
                    }
                    else{
                        if (B273357638792F423F4528482B4D6250 === 13){
                            F46A576E5A7234753778214125442A47 += "D";
                        }
                        else{
                            if (B273357638792F423F4528482B4D6250 === 14){
                                F46A576E5A7234753778214125442A47 += "E";
                            }
                            else{
                                if (B273357638792F423F4528482B4D6250 === 15){
                                    F46A576E5A7234753778214125442A47 += "F";
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    F46A576E5A7234753778214125442A47 = ("A" + (F46A576E5A7234753778214125442A47.slice(1)));
    //Return the 128 bits HEX key
    return F46A576E5A7234753778214125442A47;
}

//User function
function NewCanvas(variable){
    try{
        //Set the variable to the default canvas profile
        eval((variable + " = BA576D5A7134743777217A25432A462D"));
        //Set the canvas element to it's id
        eval((variable = ".elem = " + AB6250655368566D597133743677397A()));
        //Return true if operation suceed else return false
        return true;
    }
    catch (error){
        console.error("[3DWEB] An error has occured while creating the new canvas as the variable ('" + variable + "')");
        //Return false if operation hasn't suceed else return true
        return false;
    }
}

function CreateObj(variable, Shape, Rgb_color){
    try{
        //Set the variable to the default Object default profile
        eval((variable + " = A884EF8CDE36B16A58EC2A44E670995F;"));
        //Set the shape of the obj
        eval((variable + ".shape = " + Shape + ";"));
        //Set the Color of the obj
        eval((variable + ".color = " + Rgb_color + ";"));
        //Return true if operation suceed else return false
        return true;
    }
    catch (error){
        console.error("[3DWEB] An error has occured while creating the new object as the variable ('" + variable + "')");
        //Return false if operation hasn't suceed else return true
        return false;
    }
}