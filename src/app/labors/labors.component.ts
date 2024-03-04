import { Component, Inject, OnInit } from '@angular/core';
import { LaborService } from './services/labors.service';
import { BehaviorSubject, map } from 'rxjs';

@Component({
  selector: 'app-labors',
  templateUrl: './labors.component.html',
  styleUrls: ['./labors.component.scss'],
})
export class LaborsComponent implements OnInit {
  totalItens = 10;
  labors: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor(
    @Inject(LaborService)
    private laborService: LaborService
  ) {}

  ngOnInit() {
    this.getAllLabors();
  }

  getAllLabors(page: number = 0, size: number = 10) {
    this.laborService.getAll(page, size).subscribe((response) => {
      this.totalItens = response.size;
      this.labors.next(response.labors);
    });
  }
}
