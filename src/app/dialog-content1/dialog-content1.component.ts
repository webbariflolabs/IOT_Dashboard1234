
import { Component,Inject } from '@angular/core';

import { DataSharingService } from '../data-sharing.service';
import { AuthenticationService } from '../authentication.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-content1',
  templateUrl: './dialog-content1.component.html',
  styleUrls: ['./dialog-content1.component.css']
})
export class DialogContent1Component {
  constructor(@Inject (MAT_DIALOG_DATA) public data:any, private auth:AuthenticationService,private dataSharingService: DataSharingService,private dialog:MatDialogRef<DialogContent1Component>){}

  graph_label=''
  graph_color=''
  graph_dis_name='';
  graph_allow_user= false;


  showListlabel:any[]=[]
  newlabel=''

  // addforlabel(){
  //   this.ts.addforserviceLabel(this.newlabel)
  // }

  // deleteLabel(index:any){
  //   // this.ts.
  //   this.ts.deleteAddService(index)
  // }

  // ngOnInit():void{
  // this.showListlabel=this.ts.labelList
  // // if(this.labelvalue==='' &&this.labelcolor===''){
  // //   this.buttonlabel=true
  // //  }else{
  // //   this.buttonlabel=false
  // //   console.log("Naresh")
  // //  }
  // }

 
  lineDetails:any;

 
    onLineGraph(){
      this.lineDetails = {graph_dis_name: this.graph_dis_name, graph_label:this.graph_label,graph_color:this.graph_color,type_name: this.data.type_name,type_ver: this.data.type_ver, graph_allow_user: this.graph_allow_user}
      this.auth.onDeviceLineGraph(this.lineDetails).subscribe(response=>
        console.log(response), error=>
        console.log(error))
     window.location.reload();
        this.dialog.close()
    }

}