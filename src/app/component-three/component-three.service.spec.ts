import { TestBed } from '@angular/core/testing';

import { ComponentThreeService } from './component-three.service';


describe('ComponentThreeService', () => {
  let service: ComponentThreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentThreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should create a post in an array", () => {
    const qouteText = "This is my first post";
    service.addNewQuote(qouteText);
    expect(service.quoteList.length).toBeGreaterThanOrEqual(1);
  });

  it("should remove a created post from the array of posts", () => {
    service.addNewQuote("This is my first post");
    service.removeQuote(0);
    expect(service.quoteList.length).toBeLessThan(1);
  });
  
});


 

 
