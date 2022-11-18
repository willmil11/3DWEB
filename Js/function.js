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
function ImportRenderer(width, height){
    if (A78DE2D2D853B4B9A6D2D534EA428BD0 === false){
        A78DE2D2D853B4B9A6D2D534EA428BD0 = true;
        document.body.innerHTML += ("<canvas id='A0C06182E8033F89ECFE5DE6A308B07A' width='" + width + "' height='" + height + "'>");
    }   
    else{
        throw "[3DWEB] Renderer already exists...";
    }
}

function RendererSetSize(width, height){
    document.getElementById("A0C06182E8033F89ECFE5DE6A308B07A").width = width;
    document.getElementById("A0C06182E8033F89ECFE5DE6A308B07A").height = height;
}

function Render(){
    
}