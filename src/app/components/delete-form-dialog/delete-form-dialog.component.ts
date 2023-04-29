import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlunoService } from 'src/app/shared/services/aluno.service';

@Component({
  selector: 'app-delete-form-dialog',
  templateUrl: './delete-form-dialog.component.html',
  styleUrls: ['./delete-form-dialog.component.css'],
})
export class DeleteFormDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private alunoService: AlunoService,
    public dialogRef: MatDialogRef<DeleteFormDialogComponent>,

  ) {}

  get id(): number {
    return this.data.id;
  }

  cancel(): void {
    this.dialogRef.close();

  }

  deleteAluno() {
    this.alunoService.deleteAluno(this.id).subscribe();
    location.reload();
  }
}
