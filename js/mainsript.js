let container = document.querySelector("section");
let butmode1 = document.getElementById("ButMode1");
// console.log((container.clientHeight)*(container.clientWidth))
let massforfield = ((container.clientHeight)*(container.clientWidth))/50;
// console.log(Math.sqrt(massforfield))
let allsqueres = []

let widtbox = container.clientWidth/50;
let howmuchfordownuo = 100;
let htmltemolate = "";
let startpos = null;
let goalid2 = null;

function ProcessArray(data, handler, callback) {
    var maxtime = 500;		// chunk processing time
    var delay = 0;		// delay between processes
    var queue = data.concat();	// clone original array

    setTimeout(function() {
        var endtime = +new Date() + maxtime;
        do {
          handler(queue.shift());
        } while (queue.length > 0 && endtime > +new Date());

        if (queue.length > 0) {
            setTimeout(arguments.callee, delay);
          }
          else {
            if (callback) callback();
          }
        }, delay);
      }
      // end of ProcessArray function
// process an individual data item
function Process(dataitem) {
    htmltemolate += `<div class="squerething" id=${dataitem}></div>`;
  }

  // processing is complete
  function Done() {
    container.innerHTML = htmltemolate;
    BoxPropHandler();
  }
  
  // data boxes
  var data = [];
  for (var i = 0; i < 4000; i++) data[i] = i;
  
  // process all items
  ProcessArray(data, Process, Done);

  let mode = 0;
  whichmode(mode);

  let tool = 0
  whichtool(tool);





  let Swalls = [];
  let goalP = null;
  let startP = null;
  let u = new Object();
  function clearboard() {
    resetfunk();
    for (h=0; h<document.getElementsByClassName("squerething").length; h++) {
        if (document.getElementsByClassName("squerething")[h].classList.contains("wall")) {
            document.getElementsByClassName("squerething")[h].classList.remove("wall")
        } else if (document.getElementsByClassName("squerething")[h].classList.contains("goalbox")) {
            document.getElementsByClassName("squerething")[h].classList.remove("goalbox")
        } else if (document.getElementsByClassName("squerething")[h].classList.contains("activeboxstart")) {
            document.getElementsByClassName("squerething")[h].classList.remove("activeboxstart")
        }
    }
  }



  function presetfunction() {
    clearboard();
    let preset = null;
    if (event.target.value == "pre1") {
        preset="../presets/preset2.json"
    } else if (event.target.value == "pre2") {
        preset="../presets/preset1.json"
    } else if (event.target.value == "pre3") {
        preset="../presets/preset3.json"
    } else {
        preset = null;
    }

    if (preset != null) {
        fetch(preset)
        .then(response => response.json())
        .then(data => u = data)
        .then( function () {
            for (z=0; z<u.walls.length; z++) {
                document.getElementsByClassName("squerething")[u.walls[z]].classList.add("wall")
            }
            console.log(u.goal)
            document.getElementsByClassName("squerething")[u.goal].classList.add("goalbox")
            document.getElementsByClassName("squerething")[u.start].classList.add("activeboxstart")
            startpos = u.start;
            goalid2 = u.goal;
        });
    }


  }

//   hover effects MODE
  function mouseover(hejjej) {
      if (mode != hejjej) {
    for (z=0; z<document.getElementsByClassName("butt")[hejjej].getElementsByClassName("st1").length; z++) {
        document.getElementsByClassName("butt")[hejjej].getElementsByClassName("st1")[z].style.fill = "white"
        document.getElementsByClassName("butt")[hejjej].getElementsByClassName("st1")[z].style.stroke = "none"
    }
      for (z=0; z<document.getElementsByClassName("butt")[hejjej].getElementsByClassName("st0").length; z++) {
        document.getElementsByClassName("butt")[hejjej].getElementsByClassName("st0")[z].style.fill = "rgb(45, 45, 45)"
        document.getElementsByClassName("butt")[hejjej].getElementsByClassName("st0")[z].style.stroke = "white"
    }
    }
  }

  function mouseleave(hejjej) {
    if (mode != hejjej) {
    for (z=0; z<document.getElementsByClassName("butt")[hejjej].getElementsByClassName("st1").length; z++) {
        document.getElementsByClassName("butt")[hejjej].getElementsByClassName("st1")[z].style.fill = "rgb(30,30,30)"
        document.getElementsByClassName("butt")[hejjej].getElementsByClassName("st1")[z].style.stroke = "rgb(49, 173, 204)"
    }
      for (z=0; z<document.getElementsByClassName("butt")[hejjej].getElementsByClassName("st0").length; z++) {
        document.getElementsByClassName("butt")[hejjej].getElementsByClassName("st0")[z].style.fill = "rgb(30,30,30)"
        document.getElementsByClassName("butt")[hejjej].getElementsByClassName("st0")[z].style.stroke = "rgb(49, 173, 204)"
    }
}
}


  function whichmode(whichmode) {
    for (z=0; z<document.getElementsByClassName("butt")[mode].getElementsByClassName("st1").length; z++) {
        document.getElementsByClassName("butt")[mode].getElementsByClassName("st1")[z].style.fill = "rgb(30,30,30)"
        document.getElementsByClassName("butt")[mode].getElementsByClassName("st1")[z].style.stroke = "rgb(49, 173, 204)"
    }
      for (z=0; z<document.getElementsByClassName("butt")[mode].getElementsByClassName("st0").length; z++) {
        document.getElementsByClassName("butt")[mode].getElementsByClassName("st0")[z].style.fill = "rgb(30,30,30)"
        document.getElementsByClassName("butt")[mode].getElementsByClassName("st0")[z].style.stroke = "rgb(49, 173, 204)"
    }
    mode = whichmode;
    for (z=0; z<document.getElementsByClassName("butt")[whichmode].getElementsByClassName("st1").length; z++) {
        document.getElementsByClassName("butt")[whichmode].getElementsByClassName("st1")[z].style.fill = "rgb(30,30,30)"
        document.getElementsByClassName("butt")[whichmode].getElementsByClassName("st1")[z].style.stroke = "none"
    }
      for (z=0; z<document.getElementsByClassName("butt")[whichmode].getElementsByClassName("st0").length; z++) {
        document.getElementsByClassName("butt")[whichmode].getElementsByClassName("st0")[z].style.fill = "rgb(49, 173, 204"
        document.getElementsByClassName("butt")[whichmode].getElementsByClassName("st0")[z].style.stroke = "none"
    }
  }

  //   hover effects TOOL
  function mouseoverT(hejjej) {
    if (tool != hejjej) {
        for (z=0; z<document.getElementsByClassName("butt1")[hejjej].getElementsByClassName("st1").length; z++) {
            document.getElementsByClassName("butt1")[hejjej].getElementsByClassName("st1")[z].style.fill = "white"
            document.getElementsByClassName("butt1")[hejjej].getElementsByClassName("st1")[z].style.stroke = "none"
        }
          for (z=0; z<document.getElementsByClassName("butt1")[hejjej].getElementsByClassName("st0").length; z++) {
            document.getElementsByClassName("butt1")[hejjej].getElementsByClassName("st0")[z].style.fill = "rgb(45, 45, 45)"
            document.getElementsByClassName("butt1")[hejjej].getElementsByClassName("st0")[z].style.stroke = "white"
        }
  }
//     for (z=0; z<document.getElementsByClassName("butt")[hejjej].getElementsByClassName("st0").length; z++) {
//       document.getElementsByClassName("butt")[hejjej].getElementsByClassName("st0")[z].style.fill = "rgb(45, 45, 45)"
//       document.getElementsByClassName("butt")[hejjej].getElementsByClassName("st0")[z].style.stroke = "white"
//   }
//   }
}

function mouseleaveT(hejjej) {
    if (tool != hejjej) {
        for (z=0; z<document.getElementsByClassName("butt1")[hejjej].getElementsByClassName("st1").length; z++) {
            document.getElementsByClassName("butt1")[hejjej].getElementsByClassName("st1")[z].style.fill = "rgb(30,30,30)"
            document.getElementsByClassName("butt1")[hejjej].getElementsByClassName("st1")[z].style.stroke = "rgb(49, 173, 204)"
        }
          for (z=0; z<document.getElementsByClassName("butt1")[hejjej].getElementsByClassName("st0").length; z++) {
            document.getElementsByClassName("butt1")[hejjej].getElementsByClassName("st0")[z].style.fill = "rgb(30,30,30)"
            document.getElementsByClassName("butt1")[hejjej].getElementsByClassName("st0")[z].style.stroke = "rgb(49, 173, 204)"
        }
    }
  //     for (z=0; z<document.getElementsByClassName("butt")[hejjej].getElementsByClassName("st0").length; z++) {
  //       document.getElementsByClassName("butt")[hejjej].getElementsByClassName("st0")[z].style.fill = "rgb(45, 45, 45)"
  //       document.getElementsByClassName("butt")[hejjej].getElementsByClassName("st0")[z].style.stroke = "white"
  //   }
  //   }
  }


function whichtool(whichtool) {
    for (z=0; z<document.getElementsByClassName("butt1")[tool].getElementsByClassName("st1").length; z++) {
        document.getElementsByClassName("butt1")[tool].getElementsByClassName("st1")[z].style.fill = "rgb(30,30,30)"
        document.getElementsByClassName("butt1")[tool].getElementsByClassName("st1")[z].style.stroke = "rgb(49, 173, 204)"
    }
      for (z=0; z<document.getElementsByClassName("butt1")[tool].getElementsByClassName("st0").length; z++) {
        document.getElementsByClassName("butt1")[tool].getElementsByClassName("st0")[z].style.fill = "rgb(30,30,30)"
        document.getElementsByClassName("butt1")[tool].getElementsByClassName("st0")[z].style.stroke = "rgb(49, 173, 204)"
      }
    tool = whichtool;
    for (z=0; z<document.getElementsByClassName("butt1")[whichtool].getElementsByClassName("st1").length; z++) {
        document.getElementsByClassName("butt1")[whichtool].getElementsByClassName("st1")[z].style.fill = "rgb(30,30,30)"
        document.getElementsByClassName("butt1")[whichtool].getElementsByClassName("st1")[z].style.stroke = "none"
    }
      for (z=0; z<document.getElementsByClassName("butt1")[whichtool].getElementsByClassName("st0").length; z++) {
        document.getElementsByClassName("butt1")[whichtool].getElementsByClassName("st0")[z].style.fill = "rgb(49, 173, 204"
        document.getElementsByClassName("butt1")[whichtool].getElementsByClassName("st0")[z].style.stroke = "none"
    }
}

// After Datesetup:
let squere = document.getElementsByClassName("squerething")
// set Boarders
function BoxPropHandler() {
    for (q=0; q<40; q++) {
        squere[howmuchfordownuo*q].classList.add("end")
        squere[(howmuchfordownuo*(q+1))-1].classList.add("end")
    }
}

    // set startpoint
    document.addEventListener('click', function (event) {
        if ( event.target.classList.contains( 'squerething' ) ) {
        if (tool == 1) {
            if (!inprogress) {
            if (startpos !=null) {
                squere[startpos].classList.remove("activeboxstart");
            }
            startpos = event.target.id;
                squere[event.target.id].classList.remove("wall");
                squere[event.target.id].classList.add("activeboxstart")
            }
        } else if (tool == 2) {
            if (goalid2 !=null) {
                squere[goalid2].classList.remove("goalbox");
            }
            goalid2 = event.target.id
            squere[event.target.id].classList.remove("wall");
            squere[event.target.id].classList.add("goalbox");
        }

}
    }, false);

    // set goalpoint
    // document.addEventListener('contextmenu', function (event) {
    //     if ( event.target.classList.contains( 'squerething' ) ) {
    //         event.preventDefault();
    //         goalid = Number([event.target.id]);
    //         squere[goalid].classList.add("goalbox");
    //         squere[goalid].classList.remove("wall");
    //     }
    // }, false);

    // draw wall toggle on
    document.addEventListener('mousedown', function (event) {
        if ( event.target.classList.contains( 'squerething' ) ) {
        if (tool == 0 || tool == 3) {
        event.preventDefault();
        let drawsewall = true;
        drawwall(drawsewall, event);
        if (tool == 0) {
            squere[event.target.id].classList.add("wall");
        } else {
            squere[event.target.id].classList.remove("wall");
            if (!inprogress) {
                squere[event.target.id].classList.remove("activeboxstart");
            }
            squere[event.target.id].classList.remove("goalbox");
        }
        }
    }
    }, false);

    // draw wall toggle off
    document.addEventListener('mouseup', function () {
        if (tool == 0 || tool == 3) {
    let drawsewall = false;
    drawwall(drawsewall);
        }
    }, false);

    // ....
function drawwall(drawsewall) {
    if (drawsewall) {
    document.addEventListener('mouseover', last);
    } else {
    document.removeEventListener('mouseover', last);
    }
}

function last(event) {
    if ( event.target.classList.contains( 'squerething' ) ) {
        if ( tool == 0) {
            squere[event.target.id].classList.add("wall");
        } else if ( tool == 3) {
            squere[event.target.id].classList.remove("wall");
            squere[event.target.id].classList.remove("goalbox");
            if (!inprogress) {
            squere[event.target.id].classList.remove("activeboxstart");
        }
        }
    }
}


let activebox = []
let inprogress = false;
// nok midlertidigt
function hererere() {
        if (!inprogress) {
            activebox = []
            inprogress = true;
                activebox.push(squere[startpos])
                window.requestAnimationFrame( function() {
                    searchfunk(activebox);
                });
        }
}

// MODEES and mainscript
let fundet = false;
let animationspeed = 100;
// mode3 specifiks
let activebox3 = [];
let dirrectionwhas = 1;
let VerorHOr
function searchfunk(activebox) {
    if (mode == 2) {
        if(dirrectionwhas & 1) {
            VerorHOr = true;
        }else{
            VerorHOr = false
        }
    }
    setTimeout(function(){ 
        let activebox2 = [];
        for (u=0; u<activebox.length; u++) {
            let savedid2 = Number([activebox[u].id]);
            let nextBoxDown = squere[savedid2+howmuchfordownuo];
            let nextBoxUp = squere[savedid2-howmuchfordownuo];
            let nextBoxRight = squere[savedid2+1];
            let nextBoxLeft = squere[savedid2-1];

            if(VerorHOr || mode != 2) {

            if (nextBoxDown && !nextBoxDown.classList.contains("activebox") && !nextBoxDown.classList.contains("wall") && !squere[savedid2].classList.contains("end")) {
                nextBoxDown.classList.add("activebox")
                nextBoxDown.classList.add("ned")
                activebox2.push(nextBoxDown)
                if (mode == 2) {
                activebox3.push(nextBoxDown)
                }
                if (savedid2+howmuchfordownuo == goalid2) {
                    fundet = true;
                }
            }
            if (nextBoxUp && !nextBoxUp.classList.contains("activebox") && !nextBoxUp.classList.contains("wall") && !squere[savedid2].classList.contains("end")) {
                nextBoxUp.classList.add("activebox")
                nextBoxUp.classList.add("op")
                activebox2.push(nextBoxUp)
                if (mode == 2) {
                    activebox3.push(nextBoxUp)
                    }
                if (savedid2-howmuchfordownuo == goalid2) {
                    fundet = true;
                }
            }
        }
        if( !VerorHOr || mode != 2) {
            if (nextBoxRight && !nextBoxRight.classList.contains("activebox") && !nextBoxRight.classList.contains("wall") && !squere[savedid2].classList.contains("end")) {
                nextBoxRight.classList.add("activebox")
                nextBoxRight.classList.add("right")
                activebox2.push(nextBoxRight)
                if (mode == 2) {
                    activebox3.push(nextBoxRight)
                    }
                if (savedid2+1 == goalid2) {
                    fundet = true;
                }
            }
            if (nextBoxLeft && !nextBoxLeft.classList.contains("activebox") && !nextBoxLeft.classList.contains("wall") && !squere[savedid2].classList.contains("end")) {
                nextBoxLeft.classList.add("activebox")
                nextBoxLeft.classList.add("left")
                activebox2.push(nextBoxLeft)
                if (mode == 2) {
                    activebox3.push(nextBoxLeft)
                    }
                if (savedid2-1 == goalid2) {
                    fundet = true;
                }
            }
        }
            // mode1 specifiks
            if (mode == 0) {
                let nextBoxDownRight = squere[savedid2+howmuchfordownuo+1];
                let nextBoxDownLeft = squere[savedid2+howmuchfordownuo-1];
                let nextBoxUpRight = squere[savedid2-howmuchfordownuo+1];
                let nextBoxUpLeft = squere[savedid2-howmuchfordownuo-1];

                if (nextBoxDownRight && !nextBoxDownRight.classList.contains("activebox") && !nextBoxDownRight.classList.contains("wall") && !nextBoxRight.classList.contains("wall") && !nextBoxDown.classList.contains("wall") && !squere[savedid2].classList.contains("end")) {
                    nextBoxDownRight.classList.add("activebox")
                    nextBoxDownRight.classList.add("nedRight")
                    activebox2.push(nextBoxDownRight)
                    if (savedid2+howmuchfordownuo+1 == goalid2) {
                        fundet = true;
                    }
                }
                if (nextBoxDownLeft && !nextBoxDownLeft.classList.contains("activebox") && !nextBoxDownLeft.classList.contains("wall") && !squere[savedid2].classList.contains("end") && !nextBoxLeft.classList.contains("wall") && !nextBoxDown.classList.contains("wall")) {
                    nextBoxDownLeft.classList.add("activebox")
                    nextBoxDownLeft.classList.add("nedLeft")
                    activebox2.push(nextBoxDownLeft)
                    if (savedid2+howmuchfordownuo-1 == goalid2) {
                        fundet = true;
                    }
                }
                if (nextBoxUpRight && !nextBoxUpRight.classList.contains("activebox") && !nextBoxUpRight.classList.contains("wall") && !squere[savedid2].classList.contains("end") && !nextBoxRight.classList.contains("wall") && !nextBoxUp.classList.contains("wall")) {
                    nextBoxUpRight.classList.add("activebox")
                    nextBoxUpRight.classList.add("opRight")
                    activebox2.push(nextBoxUpRight)
                    if (savedid2-howmuchfordownuo+1 == goalid2) {
                        fundet = true;
                    }
                }
                if (nextBoxUpLeft && !nextBoxUpLeft.classList.contains("activebox") && !nextBoxUpLeft.classList.contains("wall") && !squere[savedid2].classList.contains("end") && !nextBoxLeft.classList.contains("wall") && !nextBoxUp.classList.contains("wall")) {
                    nextBoxUpLeft.classList.add("activebox")
                    nextBoxUpLeft.classList.add("opLeft")
                    activebox2.push(nextBoxUpLeft)
                    if (savedid2-howmuchfordownuo-1 == goalid2) {
                        fundet = true;
                    }
                }

            }
        }

        activebox.length = 0;
        if (!fundet) {
        if (activebox2.length > 0) {
            if (inprogress) {
                window.requestAnimationFrame( function() {
                    searchfunk(activebox2);
                });
            } else {
                resetfunk()
            }
        } else if (activebox3.length > 0 && mode == 2){
            newboxesactive = []
            if (inprogress) {
                mode2extrafunktion(activebox3);
            } else {
                resetfunk()
            }
        } else {
            alert("goal not found")
        }
        } else {
            if (inprogress) {
            BackTraceRoute(goalid2)
            } else {
                resetfunk()
            }
        }
}, animationspeed);
}

let newboxesactive = []
            function mode2extrafunktion(activebox3){
                dirrectionchange = true;
                for (z=0; z<activebox3.length; z++) {
                    let savedid27 = Number([activebox3[z].id]);
                    let nextBoxDown7 = squere[savedid27+howmuchfordownuo];
                    let nextBoxUp7 = squere[savedid27-howmuchfordownuo];
                    let nextBoxRight7 = squere[savedid27+1];
                    let nextBoxLeft7 = squere[savedid27-1];
                    if(dirrectionwhas & 1) {
                        if (nextBoxLeft7 && !nextBoxLeft7.classList.contains("activebox") && !nextBoxLeft7.classList.contains("wall") && !squere[savedid27].classList.contains("end")) {
                            newboxesactive.push(activebox3[z])
                        }
                        if (nextBoxRight7 && !nextBoxRight7.classList.contains("activebox") && !nextBoxRight7.classList.contains("wall") && !squere[savedid27].classList.contains("end")) {
                            newboxesactive.push(activebox3[z])
                        }
                        } else {
                            if (nextBoxDown7 && !nextBoxDown7.classList.contains("activebox") && !nextBoxDown7.classList.contains("wall") && !squere[savedid27].classList.contains("end")) {
                                newboxesactive.push(activebox3[z])
                            }
                            if (nextBoxUp7 && !nextBoxUp7.classList.contains("activebox") && !nextBoxUp7.classList.contains("wall") && !squere[savedid27].classList.contains("end")) {
                                newboxesactive.push(activebox3[z])
                            }
                    }
                }
                activebox3.length = 0;
                dirrectionwhas += 1;
                if (inprogress) {
                    searchfunk(newboxesactive);
                } else {
                    resetfunk()
                }
              };


// DRAWPATH / BACKTRACE
let savedgoalid 
let prewbox = 0;

function BackTraceRoute(goalid) {
    setTimeout(function(){ 
        console.log(goalid)
        savedgoalid = Number(goalid);
            if (squere[goalid].classList.contains("ned") && !squere[goalid].classList.contains("activeboxstart")) {
                savedgoalid -= howmuchfordownuo;
                prewbox = 1;
            } else if (squere[goalid].classList.contains("op") && !squere[goalid].classList.contains("activeboxstart")) {
                savedgoalid += howmuchfordownuo;
                prewbox = 2;
            } else 
            if (squere[goalid].classList.contains("right") && !squere[goalid].classList.contains("activeboxstart")) {
                savedgoalid -= 1;
                prewbox = 3;
            } else 
            if (squere[goalid].classList.contains("left") && !squere[goalid].classList.contains("activeboxstart")) {
                savedgoalid += 1;
                prewbox = 4;
            } else 
            if (squere[goalid].classList.contains("nedRight") && !squere[goalid].classList.contains("activeboxstart")) {
                savedgoalid -= howmuchfordownuo+1;
                prewbox = 4;
            } else 
            if (squere[goalid].classList.contains("nedLeft") && !squere[goalid].classList.contains("activeboxstart")) {
                savedgoalid -= howmuchfordownuo-1;
                prewbox = 4;
            } else 
            if (squere[goalid].classList.contains("opRight") && !squere[goalid].classList.contains("activeboxstart")) {
                savedgoalid += howmuchfordownuo-1;
                prewbox = 4;
            } else 
            if (squere[goalid].classList.contains("opLeft") && !squere[goalid].classList.contains("activeboxstart")) {
                savedgoalid += howmuchfordownuo+1;
                prewbox = 4;
            }
            else {
                savedgoalid = "færdif";
            }
        if (savedgoalid != "færdif") {
            if (!squere[goalid].classList.contains("goalbox")) {
            squere[goalid].innerHTML ='<div class="dottowits"></div>'
            }
            if (inprogress) {
                BackTraceRoute(savedgoalid);
            }
        } else {
            inprogress = false;
        }
    }, 25);
}

function resetfunk() {
    if (inprogress) {
        inprogress = false;
    } else {



    fundet = false;
    for (z=0; z<squere.length; z++) {
        if (squere[z].classList.contains("activebox")) {
            squere[z].classList.remove("activebox", "op", "ned", "left", "right", "opRight", "opLeft", "nedRight", "nedLeft")
            if (squere[z].childNodes[0]) {
                squere[z].innerHTML = ""
            }
        }
    }
}
}





// makepreset::
// for (let i=0; i<document.getElementsByClassName("squerething").length; i++) {
//     if (document.getElementsByClassName("squerething")[i].classList.contains("wall")) {
//         Swalls.push(document.getElementsByClassName("squerething")[i].id)
//     } else if (document.getElementsByClassName("squerething")[i].classList.contains("goalbox")) {
//         goalP = document.getElementsByClassName("squerething")[i].id;
//     } else if (document.getElementsByClassName("squerething")[i].classList.contains("activeboxstart")) {
//         startP = document.getElementsByClassName("squerething")[i].id;
//     }
//     u.walls = Swalls;
//     if (goalP != null) {
//         u.goal = goalP;
//     }
//     if (startP != null) {
//         u.start = startP;
//     }
// }
//   const a = document.createElement("a");
//   a.href = URL.createObjectURL(new Blob([JSON.stringify(u, null, 2)], {
//     type: "text/plain"
//   }));
//   a.setAttribute("download", "data.txt");
//   document.body.appendChild(a);
//   a.click();
//   document.body.removeChild(a);