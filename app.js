const SqlGeneratorClass = {
    loader: function () { 
        $('body').append(this.genBlock());
        $('.descBodyForAdd').sortable({
             handle: '.InpforSortable'
        });
        
       
    },
    genBlock: function () {
        return `  <div class="container">
                    ${this.genHeader()}
                    ${this.genPhotoContainer()}
                    ${this.genConBodyb()}                   
                  </div>
                  ${this.genAddToTAskModal()}
                  ${this.grnAddToTaskModalMulti()}
                  ${this.cellGripModal()}
                  ${this.cellGripModal()}

                `
    },
    genHeader: function () {
        return `
                 <div class="cardheader">
                    <div class="cardTitle">
                        NEWS PAGE
                    </div>
                    <div class="titleAcar">
                        
                        <div class="dropdown show">
                        <a class="" href="#" role="button" style="color: #595959;" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           <i class="far fa-wrench"></i>
                        </a>

                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a class="dropdown-item" href="#">New Story Card</a>
                            <a class="dropdown-item" href="#">Print</a>
                            <a class="dropdown-item" href="#">Save as PDF</a>
                            <a class="dropdown-item" href="#">Share URL</a>
                            <a class="dropdown-item" href="#">Copy Prototype URL</a>
                            <a class="dropdown-item" href="#">View Story Card</a>
                            <a class="dropdown-item" href="#">View Live Prototype</a>
                            <a class="dropdown-item" href="#">Edit</a>
                            <a class="dropdown-item" href="#">Add to Task</a>
                            <hr style="margin: 2px 0px;">
                            <a class="dropdown-item" href="#">Export</a>
                            <a class="dropdown-item" href="#">Copy</a>
                            <a class="dropdown-item" href="#">Import</a>
                            <a class="dropdown-item" href="#">History</a>
                            <hr style="margin: 2px 0px;">
                            <a class="dropdown-item" href="#">Delete</a>
                           
                        </div>
                        </div>
                        
                    </div>
                 </div>    
        `
    },
    cartConHeader: function () {
        return `
         <!--add desc header -->
            <div class="cardHeader">
                <div class="d-flex">
                    <input class="trans" placeholder="Add new input" type="text" name="" id="addInput">
                    <button class="cardHeaderPlus">
                        <i class="far fa-plus"></i>
                    </button>
                </div>
            </div>`
    },
    genConBodyb: function () {
        return `
        <!-- body -->
        <div class="cartContainer">           
            ${this.cartConHeader()}
            <div class="descBodyForAdd">          
             
            ${this.genIPsumContainer()}
            </div>
        </div>`
    },
    genPhotoContainer: function () {
        return `
                <!--  photo -->
        <div class="photoContainer">
            <img src="fontawsome/Apple-iPhone12Pro-iOS15-health-sharing-060721_carousel.jpg 1.jpg" alt="">
        </div>
        `
    },
    genIPsumContainer: function () {
       return `   <!--flow list -->
                <div class="ipsumContainer">
                        <!-- ipsum header -->
                        <div class="d-flex" style="height: 25px;">

                            <div class="tableTitle_ipsum text-light">
                                <div class="ipsumDragIcon InpforSortable" id="ipsumCartDragandDrop">
                                    <i class="far fa-ellipsis-v"></i>
                                    <i class="far fa-ellipsis-v"></i>
                                </div>
                                <div class="title ipsumDragIcon numForNumbering">
                                    2
                                </div>
                                <div class="ipsumMwnuIcon" id="ipsumCartmenuIcon">
                                    <i class="far fa-angle-double-up"></i>
                                </div>

                            </div>
                            <div class="ipsumheadTitleHisse">
                                <div class="text-light title ipsum_title">ipsum</div>

                                <div class="ipsum_title_end">
                                     <div class="dropdown">
                                    <button class="btnMEnuAcan" type="" id="dropdownMenuButton" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">
                                        <i class="fal fa-ellipsis-v text-light"></i>
                                    </button>
                                    <div class="dropdown-menu btnMEnuAcanselectUcun"
                                        aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item dropFontSize" href="#">Add Descriptions </a>
                                        <a class="dropdown-item dropFontSize" href="#">Set as Output</a>
                                        <a class="dropdown-item dropFontSize" onclick='SqlGeneratorClass.showPopSell()' href="#">Sel/Grid</a>
                                        <a class="dropdown-item dropFontSize" onclick='SqlGeneratorClass.addToTAskModal()' href="#">Add to Task </a>
                                        <a class="dropdown-item dropFontSize" onclick='SqlGeneratorClass.addToTAskModalMulti()' href="#">Add to Task Events</a>
                                        <a class="dropdown-item dropFontSize" href="#">Copy/Move</a>
                                        <a class="dropdown-item dropFontSize" onclick='SqlGeneratorClass.deleteINPcRov(this)' href="#">Delete</a>
                                        <hr style="margin:3px 0px;">
                                        <a class="dropdown-item dropFontSize" href="#">Add Fields of Table as Input</a>
                                        <a class="dropdown-item dropFontSize" href="#">Add Input of Story Card As</a>                                     

                                    </div>
                            </div>

                                    <button class="ipsum_title_plus ipsum_title_end_icons" id="plusAddIpsum">
                                        <i class="far fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>                        
                        <div class="ipsumInpAdd">
                            <input id="addIpsumInputt" class="bodyEndInp d-none" placeholder="Title" type="text">
                        </div>
                        <!-- ipsum body -->
                        <div class="ipsumConForAdd d-none">
                       
                         </div>        

                        
                </div>

        `
    },
    genNewInpbody: function (text) {
        return `
              <div class="descBodyrow">
                    <div class="descSortArrow InpforSortable">
                        <i class="far fa-ellipsis-v"></i>
                        <i class="far fa-ellipsis-v"></i>
                    </div>
                    <div class="titlebodyCheck dFlex">
                        <input type="checkbox" class='desckCheckBox desckCheckBox'>
                    </div>
                             <div class="titlebodyText">${text}</div>
                   
                            <div class="dropdown dropdowndesc">
                                <button class="btnMEnuAcan" type="" id="dropdownMenuButton" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    <i class="far fa-ellipsis-h"></i>
                                </button>
                                <div class="dropdown-menu btnMEnuAcanselectUcun"
                                    aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item dropFontSize" href="#">Edit</a>
                                    <a class="dropdown-item dropFontSize" onclick='SqlGeneratorClass.addToTAskModal()' href="#">Add to Task</a>
                                    <a class="dropdown-item dropFontSize" onclick='SqlGeneratorClass.desReng(this)' href="#">Oranged</a>
                                    <a class="dropdown-item dropFontSize" onclick='SqlGeneratorClass.desReng(this)' href="#">Blued</a>
                                    <a class="dropdown-item dropFontSize" onclick='SqlGeneratorClass.desReng(this)' href="#">Greened</a>
                                    <a class="dropdown-item dropFontSize" onclick='SqlGeneratorClass.desReng(this)' href="#">Yellowed</a>
                                    <a class="dropdown-item dropFontSize" onclick='SqlGeneratorClass.desReng(this)' href="#">Remove Highlight</a>
                                    <a class="dropdown-item dropFontSize" onclick='SqlGeneratorClass.deleteDescRov(this)' href="#">Delete</a>                                                                 
                                </div>
                            </div>      
                    
               </div>
        `
    },    
    genNewInp: function (text) {
        return `<!-- desc title  -->
            <div class="pb-2 mr-2 descCont bgF7F7F7">

                <div class="d-flex" style="position:relative;">
                       <div class = "descSortArrowTitle bg59 InpforSortable">
                        <i class="far fa-ellipsis-v text-light"></i>
                        <i class="far fa-ellipsis-v text-light"></i>
                        </div>

                    <div class="descTitle_sira dFlex text-light">                        
                        <span class="title numForNumbering">1</span>
                    </div>
                    <div class="descTitle_title dFlex">                             
                        <div class="text-light title descHeaderr">${text}</div>
                         <!-- drop -->
                            <div class="dropdown">
                                    <button class="btnMEnuAcan" type="" id="dropdownMenuButton" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">
                                        <i class="fal fa-ellipsis-v text-light"></i>
                                    </button>
                                    <div class="dropdown-menu btnMEnuAcanselectUcun"
                                        aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item dropFontSize" href="#">Add Descriptions </a>
                                        <a class="dropdown-item dropFontSize" href="#">Set as Output</a>
                                        <a class="dropdown-item dropFontSize" onclick='SqlGeneratorClass.showPopSell()' href="#">Sel/Grid</a>
                                        <a class="dropdown-item dropFontSize" onclick='SqlGeneratorClass.addToTAskModal()' href="#">Add to Task </a>
                                        <a class="dropdown-item dropFontSize" onclick='SqlGeneratorClass.addToTAskModalMulti()' href="#">Add to Task Events</a>
                                        <a class="dropdown-item dropFontSize" href="#">Copy/Move</a>
                                        <a class="dropdown-item dropFontSize" onclick='SqlGeneratorClass.deleteINPcRov(this)' href="#">Delete</a>
                                        <hr style="margin:3px 0px;">
                                        <a class="dropdown-item dropFontSize" href="#">Add Fields of Table as Input</a>
                                        <a class="dropdown-item dropFontSize" href="#">Add Input of Story Card As</a>                                     

                                    </div>
                            </div>                         
                        <input onclick='SqlGeneratorClass.inpCheckChange(this)' type="checkbox" style="width: 14px;margin-left: 5px;">
                    </div>
                    <div class="dFlex">
                        <button class="descPlusIcon">
                            <i class="far fa-plus"></i>
                        </button>
                    </div>
                </div>
                 <div class="desctBodyContAddUcun">
                     
                </div>              

                <div class="d-flex justify-content-end bodyEndInpDiv">
                    <input class="bodyEndInp addInput d-none" placeholder="Title" type="text">
                </div>
            </div>`
    },    
    genAddToTAskModal: function () {
        return ` <div class="modal fade" id="addNewDetailedTaskModal" tabindex="-1" style="margin-top:50px;" role="dialog" aria-labelledby="" aria-hidden="true">
        <div class="modal-dialog modal-lg" style="width: 50%;max-width: 50%" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="">Add NewTask</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body" style="font-size: 12px;">
                    <div class="row ">
                        <div class="col-9  hidden" hidden>
                            <input id="addNewDetailedTaskModal_filelist" rows="2" type='hidden' value='-1' class="form-control">
                            <input id="addNewDetailedTaskModal_backlogid" rows="2" type='hidden' value='-1' class="form-control">
                            <input id="addNewDetailedTaskModal_projectid" rows="2" type='hidden' value='-1' class="form-control">
                        </div>
                        <div class="col-9  ">
                            <label>Description</label>
                            <input id="addNewDetailedTaskModal_description" rows="2" type='' class="form-control">
                        </div>
                        <div class="col-3  ">
                            <label>Task Nature</label>
                            <select class="form-control" style="width:100%" id="addNewDetailedTaskModal_tasknature">
                                <option value="new">New Request</option>
                                <option value="change" selected> Change Request</option>
                                <option value="bug">Bug</option>
                            </select>
                        </div>
                        <div class="col-12">
                            <br>
                            <label>Comment</label>
                            <textarea id="addNewDetailedTaskModal_comment" rows="4" class="form-control"></textarea>
                        </div>
                        <div class="col-12 " style="padding:5px 20px;">
                            <br> <br>
                            <table class="table table-borderless">
                                <thead>
                                    <tr>
                                        <th>
                                            <label>Assignee</label>
                                            <select class="form-control" style="width:100%" id="addNewDetailedTaskModal_assignee">
                                            </select>
                                        </th>
                                        <th>
                                            <label>Task Type</label>
                                            <select class="form-control" style="width:100%; " id="addNewDetailedTaskModal_tasktype">
                                            </select>
                                        </th>
                                        <th>
                                            <i class="fa fa-plus" onclick="" style="padding-bottom:10px;font-size: 23px;color:blue;"></i>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody id='addNewDetailedTaskModal_assigneelist'>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" onclick="">
                        Add
                    </button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>`
    },
    grnAddToTaskModalMulti: function () {
        return `<div class="modal fade" id="addNewDetailedTaskModal-multi-new" tabindex="-1" style="margin-top:50px;" role="dialog" aria-labelledby="" aria-hidden="true">
        <div class="modal-dialog modal-lg" style="width: 50%;max-width: 50%" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="">Add NewTask</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body" style="font-size: 12px;">
                    <div class="row ">
                        <div class="col-9  hidden" hidden>

                            <input id="addNewDetailedTaskModal_filelist-new" rows="2" type='hidden' value='-1' class="form-control">
                            <input id="addNewDetailedTaskModal_backlogid-new" rows="2" type='hidden' value='-1' class="form-control">
                            <input id="addNewDetailedTaskModal_projectid-new" rows="2" type='hidden' value='-1' class="form-control">
                        </div>
                        <div class="col-12 p-4 ">
                            <label>Comment</label>
                            <textarea id="addNewDetailedTaskModal_description-new" rows="3" type="" class="form-control"></textarea>
                        </div>

                        <div class="col-12 ">
                            <table class="table table-borderless">
                                <thead>
                                    <tr>

                                        <th>
                                            <label>Assignee</label>
                                            <select class="form-control" style="width:100%" id="addNewDetailedTaskModal_assignee-new">
                                            </select>
                                        </th>
                                        <th>
                                            <label>Task Type</label>
                                            <select class="form-control" style="width:100%; " id="addNewDetailedTaskModal_tasktype-new">
                                            </select>
                                        </th>
                                        <th>

                                            <i class="fa fa-plus" onclick="addUserStoryToTask_addAssignees_event()" style="padding-bottom:10px;font-size: 23px;color:blue;"></i>
                                        </th>
                                        <th>
                                            <label>Task Nature</label>
                                            <select class="form-control" style="width:100%" id="addNewDetailedTaskModal_tasknature-new">
                                                <option value="new">New Request</option>
                                                <option value="change" selected> Change Request</option>
                                                <option value="bug">Bug</option>
                                            </select>
                                        </th>
                                    </tr>

                                </thead>
                                <tbody id='addNewDetailedTaskModal_assigneelist-new'>

                                </tbody>
                            </table>
                        </div>
                        <div class="col-12" id="addNewDetailedTaskModal_list">

                        </div>



                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" onclick="addNewDetailedTaskActionEvent1()">
                        Add
                    </button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>`
    },
    cellGripModal: function () {
        return `
        <div class="modal fade" id="cellGridModal" tabindex="-1" style="margin-top:50px;" role="dialog" aria-labelledby="" aria-hidden="true">
        <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content">               
                <div class="modal-body" style="font-size: 12px;">
                     <div>Cell/Grid</div><hr>
                     <div class='cellGridItem'>1
                      <input type="radio" name="cell" value="1">
                      </div>
                     <div class='cellGridItem'>2
                    <input type="radio" id="" name="cell" value="2">
                    </div>
                     <div class='cellGridItem'>3
                     <input type="radio" id="" name="cell" value="3">
                     </div>
                      <div class='cellGridItem'>4
                      <input type="radio" id="" name="cell" value="4">
                      </div>
                       <div class='cellGridItem'>5
                      <input type="radio" id="" name="cell" value="5">
                      </div>
                      <div class='cellGridItem'>6
                      <input type="radio" id="" name="cell" value="6">
                      </div>
                      <div class='cellGridItem'>7
                      <input type="radio" id="" name="cell" value="7">
                      </div>
                       <div class='cellGridItem'>8
                      <input type="radio" id="" name="cell" value="8">
                      </div>
                      <div class='cellGridItem'>9
                      <input type="radio" id="" name="cell" value="9">
                      </div>
                       <div class='cellGridItem'>10
                      <input type="radio" id="" name="cell" value="10">
                      </div>
                       <div class='cellGridItem'>11
                      <input type="radio" id="" name="cell" value="11">
                      </div>
                       <div class='cellGridItem'>12
                      <input type="radio" id="" name="cell" value="12">
                      </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-sm btn-primary" onclick="">
                        Add
                    </button>
                    <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
            `
    },
    deleteDescRov: function (e) {
         if (confirm('are you sure')) {
             $(e).closest('.descBodyrow').remove();
             }
    },
    deleteINPcRov: function (e, clas) {
        if(confirm('are you sure')){
        $(e).closest('.descCont').remove();       
            SqlGeneratorClass.genForNumbering($('.numForNumbering'));
            }
    },
    genForNumbering: function (title) {        
        title.each(function (index) {
            $(this).text(index + 1);
        })
    },
    desReng: function (el) {
        var reng = $(el).text();
        var elem = $(el).closest('.descBodyrow').find('.titlebodyText');
        
        if (reng == 'Oranged') {          
            $(elem).css('background-color', '#e9c88b');             
        }
        if (reng == 'Blued') {
            $(elem).css('background-color', '#82a8d0');
        }
        if (reng == 'Greened') {
            $(elem).css('background-color', '#66e6c0');            
        }
        if (reng == 'Yellowed') {
            $(elem).css('background-color', '#f0f091');          
        }
        if (reng == 'Remove Highlight') {
             console.log(reng);
             $(elem).css('background', 'none');
        }
    },
    inpCheckChange: function (el) {
        var check = $(el).closest('.descCont').find('.desckCheckBox');
      
        if ($(el).prop('checked')) {              
            check.each(function () {                
                 $(this).prop('checked', true);
            })           
        } else {
            check.each(function () {
                $(this).prop('checked', false);
            })
        }
    },
     ipsumCheckChange: function (el) {
         var check = $(el).closest('.ipsumContaineriAddUcun').find('.desckCheckBox');

         if ($(el).prop('checked')) {
             check.each(function () {
                 $(this).prop('checked', true);
             })
         } else {
             check.each(function () {
                 $(this).prop('checked', false);
             })
         }
     },
    addToTAskModal: function () {
         $('#addNewDetailedTaskModal').modal('show');
    },
    addToTAskModalMulti: function () {
        $('#addNewDetailedTaskModal-multi-new').modal('show');
    },
    showPopSell: function () {
        $('#cellGridModal').modal('show');
    }

}

SqlGeneratorClass.loader();


// add desc inp
$(document).on('change', '.addInput', function () {
    var text = $(this).val();
    var body = $(this).closest('.descCont').find('.desctBodyContAddUcun');
    body.append(SqlGeneratorClass.genNewInpbody(text));
    $(this).val('');    
})
// add desc plus icon
$(document).on('click', '.descPlusIcon', function () {
    var el = $(this).closest('.descCont').find('.addInput');
    $(this).toggleClass('descPlusIconclick');
    $(this).find('i').toggleClass('fa-times fa-plus')
    el.toggleClass('d-none');    
})
// add desc
$(document).on('click', '.cardHeaderPlus', function () {
    $(this).toggleClass('cardHeaderPlusToggle');
    $(this).find('i').toggleClass('fa-times fa-plus');
    $('#addInput').toggleClass('headAddNewInp width0');
})

// header add desc
$(document).on('change', '.headAddNewInp', function () {
    var text = $(this).val();
    $('.descBodyForAdd').prepend(SqlGeneratorClass.genNewInp(text));
    $(this).val('');

    $(".desctBodyContAddUcun").sortable({
        handle: ".descSortArrow",
    });
    $('.ipsumConForAdd').sortable({});   
    SqlGeneratorClass.genForNumbering($('.numForNumbering'));
});
//ipsum menu ac
$(document).on('click', '#ipsumCartmenuIcon', function() {
    $(this).toggleClass('ipsumMwnuIconactive ipsumMwnuIcon');
    $(this).find('i').toggleClass('fa-angle-double-up fa-angle-double-down')
    $('.ipsumConForAdd').toggleClass('d-none')
});
// ipsum menu 
$(document).on('click', '.ipsum_title_end_icons', function () {   
    $('#addIpsumInputt').toggleClass('d-none')
    $(this).find('i').toggleClass('fa-times fa-plus')
   
})
//ipsum ad inp
$(document).on('change', '#addIpsumInputt', function () {   
    var text = $(this).val();   
    $('.ipsumConForAdd').prepend(SqlGeneratorClass.genNewInp(text));
    var elem = $(this).closest('.ipsumContainer').find('.ipsumConForAdd .numForNumbering')    
    SqlGeneratorClass.genForNumbering($(elem));
     $(this).val('');
})
//desc CHILD dbl click
$(document).on('dblclick', '.titlebodyText', function () {
    el = $(this);
    var text = el.text();
    el.text('')  
    el.toggleClass('w-100');
    el.append(`<input id="" class="updateDescInp" type="text">`);
    $('.updateDescInp').focus();
    $('.updateDescInp').val(text);

})

// DESC INP CHANGE
$(document).on('change', '.updateDescInp', function () {
    var text = $(this).val();
    $(this).closest('div').append(text)    
    $(this).closest('div').toggleClass('w-100');
    $(this).remove();
})

//desc dbl click
$(document).on('dblclick', '.title', function () {
    el = $(this);
    var text = el.text();
    el.text('')
    el.append(`<input id="" class="updateDescInp" value="${text}" type="text">`);
})

$(document).on('click', '.btnMEnuAcanselectUcun', function(event) {
    event.stopPropagation();
})



 


    

  
