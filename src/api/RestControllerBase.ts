import { Router, Express } from 'express';

export abstract class RestControllerBase {
  private router: Router;

  public urlPrefix() : string {
    return "";
  }
}
