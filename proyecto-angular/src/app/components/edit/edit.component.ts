import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { Global } from 'src/app/services/global';
import { UploadService } from 'src/app/services/upload.service';
import { ActivatedRoute, Router, Params } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['../create/create.component.scss'],
  providers: [
    ProjectService,
    UploadService
  ]
})
export class EditComponent implements OnInit {
  public title: string;
  public project: Project;
  public saved_project;
  public status: string;
  public filesToUpload: Array<File>;
  public url: string;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.title = "Editar proyecto";
    this.url = Global.url;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params.id;

      this.getProject(id);
    });
  }

  getProject(id) {
    this._projectService.getProject(id).subscribe(
      response => {
        this.project = response.project;
      },
      error => { console.log(error); }
    );
  }

  onSubmit(form) {
    this._projectService.updateProject(this.project).subscribe(
      response => {
        if (response.project) {
          // Subir la imagen
          if (this.filesToUpload) {
            this._uploadService.makeFileRequest(`${Global.url}upload-image/${response.project._id}`, [], this.filesToUpload, 'image')
              .then((result: any) => {
                this.saved_project = result.project;
                this.status = 'success';
              });
          } else {
            this.saved_project = response.project;
            this.status = 'success';
          }
        } else {
          this.status = 'failed';
        }
      },
      error => { console.log(error); }
    )
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }
}
