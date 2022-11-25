import hiService from '../service/hi.service';

class HIController {
  hi() {
    return hiService.hi();
  }
}

export default new HIController();
