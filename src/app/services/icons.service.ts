import { Injectable } from '@angular/core';
import { faClipboardList, faBorderAll, faSquareCheck, faClipboardQuestion, faBars, faTimes, faBoxesStacked, faBriefcase, faCalendarDays, faChartSimple, faEllipsisVertical, faEquals, faFilter, faGlobe, faMagnifyingGlass, faPaperclip, faPlus, faPlusCircle, faUserGroup, faBarsProgress, faPenToSquare, faLink, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { arrow } from '@popperjs/core';

@Injectable({
  providedIn: 'root'
})
export class IconsService {

  faClipboardList=faClipboardList;
  faBorderAll=faBorderAll;
  faSquareCheck=faSquareCheck;
  faClipboardQuestion=faClipboardQuestion;
  faBars = faBars;
  faTimes = faTimes;
  faBoxesStacked = faBoxesStacked;
  faEquals = faEquals;
  faPaperclip = faPaperclip;
  faGlobe = faGlobe;
  faUserGroup = faUserGroup;
  faPlus = faPlus;
  faMagnifyingGlass = faMagnifyingGlass;
  faFilter = faFilter;
  faChartSimple = faChartSimple;
  faBriefcase = faBriefcase;
  faCalendarDays = faCalendarDays;
  faEllipsisVertical =faEllipsisVertical;
  faPlusCircle=faPlusCircle;
  faBarsProgress =faBarsProgress;
  faPenToSquare = faPenToSquare;
  faLink = faLink;
  faArrowRight = faArrowRight;

  constructor() { }
}
