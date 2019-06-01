import { async, TestBed } from '@angular/core/testing';
import { NgxChatUiModule } from './ngx-chat-ui.module';

describe('NgxChatUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxChatUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NgxChatUiModule).toBeDefined();
  });
});
