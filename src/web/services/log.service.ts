import { Injectable } from '@angular/core';
import { HttpRequestService } from "./http-request.service";
import { ResourceEndpoints } from "../types/api-const";
import { Observable } from "rxjs";

/**
 * Handles logging related logic provision.
 */
@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private httpRequestService: HttpRequestService) { }

  /**
   * Creates a log for feedback session by calling API.
   */
  createFeedbackSessionLog(queryParams: {
    courseId: string,
    studentEmail: string,
    logType: string }): Observable<string> {
    const paramMap: Record<string, string> = {
      courseId: queryParams.courseId,
      studentEmail: queryParams.studentEmail,
      fsltype: queryParams.logType,
    };

    return this.httpRequestService.get(ResourceEndpoints.TRACK_SESSION, paramMap);
  }

}
