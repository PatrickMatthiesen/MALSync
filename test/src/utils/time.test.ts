import { expect } from 'chai';
import * as timeM from '../../../src/utils/time';

describe('Time', function() {
  const dateNow = Date.now();
  const date = new Date(dateNow);
  this.beforeAll(function() {
    Date.now = () => dateNow;
  });
  describe('dateFromTimezoneToTimezone', function() {
    it('+1', function() {
      const res = timeM.dateFromTimezoneToTimezone(new Date(Date.UTC(2024, 11, 1, 14, 10)), 'UTC', 'Europe/Berlin');
      expect(res).to.deep.equal(new Date(Date.UTC(2024, 11, 1, 15, 10)));
    })
    it('-1', function() {
      const res = timeM.dateFromTimezoneToTimezone(new Date(Date.UTC(2024, 11, 1, 14, 10)), 'Europe/Berlin', 'UTC');
      expect(res).to.deep.equal(new Date(Date.UTC(2024, 11, 1, 13, 10)));
    })
    it('0', function() {
      const res = timeM.dateFromTimezoneToTimezone(new Date(Date.UTC(2024, 11, 1, 14, 10)), 'UTC', 'UTC');
      expect(res).to.deep.equal(new Date(Date.UTC(2024, 11, 1, 14, 10)));
    })
  });
  describe('getWeekTime', function() {
    it('Sunday 2:00', function() {
      const res = timeM.getWeekTime('Sunday', '2:00');
      //NOTE - I have no idea why function returns only 2017...
      expect(res).to.deep.equal(new Date(Date.UTC(2017, 0, 1, 2, 0)));
    })
    it('Monday 12:00', function() {
      const res = timeM.getWeekTime('Monday', '12:00');
      expect(res).to.deep.equal(new Date(Date.UTC(2017, 0, 2, 12, 0)));
    })
    it('Tuesday 20:00', function() {
      const res = timeM.getWeekTime('Tuesday', '20:00');
      expect(res).to.deep.equal(new Date(Date.UTC(2017, 0, 3, 20, 0)));
    })
    it('Wednesday 2:00 AM', function() {
      const res = timeM.getWeekTime('Wednesday', '2:00 AM');
      expect(res).to.deep.equal(new Date(Date.UTC(2017, 0, 4, 2, 0)));
    })
    it('Thursday 2:00 PM', function() {
      const res = timeM.getWeekTime('Thursday', '2:00 PM');
      expect(res).to.deep.equal(new Date(Date.UTC(2017, 0, 5, 14, 0)));
    })
    it('Friday 12:00 PM', function() {
      const res = timeM.getWeekTime('Friday', '12:00 PM');
      expect(res).to.deep.equal(new Date(Date.UTC(2017, 0, 6, 12, 0)));
    })
    it('Saturday 12:00 AM', function() {
      const res = timeM.getWeekTime('Saturday', '12:00 AM');
      expect(res).to.deep.equal(new Date(Date.UTC(2017, 0, 7, 0, 0)));
    })
    it('null', function() {
      const res = timeM.getWeekTime('wow', '12:00 AM');
      expect(res).to.deep.equal(null);
    })
  });
});