import { TestBed } from '@angular/core/testing';

import { QuestaoMockService } from './questao-mock.service';

describe('QuestaoMockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestaoMockService = TestBed.get(QuestaoMockService);
    expect(service).toBeTruthy();
  });
});
