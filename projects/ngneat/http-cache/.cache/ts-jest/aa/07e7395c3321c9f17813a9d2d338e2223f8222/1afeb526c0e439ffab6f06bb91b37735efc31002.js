"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var httpCacheStorage_1 = require("../httpCacheStorage");
var mocks_spec_1 = require("./mocks.spec");
describe('httpCacheStorage', function () {
    var storage;
    var existingKey = 'existingKey';
    var notExistingKey = 'notExistingKey';
    var response = mocks_spec_1.httpResponse();
    beforeEach(function () {
        storage = new httpCacheStorage_1.DefaultHttpCacheStorage();
        storage.set(existingKey, response);
    });
    describe('has', function () {
        it('should return false if key does not exist', function () {
            expect(storage.has(notExistingKey)).toBeFalsy();
        });
        it('should return true if key exists', function () {
            expect(storage.has(existingKey)).toBeTruthy();
        });
    });
    describe('get', function () {
        it('should get the cached response', function () {
            expect(storage.get(existingKey)).toBe(response);
        });
    });
    describe('delete', function () {
        it('should clear storage when call without a key', function () {
            spyOn(storage.cache, 'clear');
            storage.delete();
            expect(storage.cache.clear).toHaveBeenCalled();
        });
        it('should call delete when given key', function () {
            spyOn(storage.cache, 'delete');
            storage.delete(existingKey);
            expect(storage.cache.delete).toHaveBeenCalled();
        });
        it('should delete by regex', function () {
            var key = 'aaa';
            storage.set(key, response);
            var regex = new RegExp('aa');
            storage.delete(regex);
            expect(storage.has(key)).toBeFalsy();
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFxJdGF5XFxwcm9qZWN0c1xcb3BlbnNvdXJjZXNcXGh0dHAtY2FjaGVcXHByb2plY3RzXFxuZ25lYXRcXGh0dHAtY2FjaGVcXHNyY1xcbGliXFx0ZXN0XFxzdG9yYWdlLnNwZWMudHMiLCJtYXBwaW5ncyI6Ijs7QUFBQSx3REFBNEQ7QUFDNUQsMkNBQTBDO0FBRTFDLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRTtJQUUzQixJQUFJLE9BQWdDLENBQUM7SUFDckMsSUFBTSxXQUFXLEdBQUcsYUFBYSxDQUFDO0lBQ2xDLElBQU0sY0FBYyxHQUFHLGdCQUFnQixDQUFDO0lBQ3hDLElBQU0sUUFBUSxHQUFHLHlCQUFZLEVBQUUsQ0FBQztJQUVoQyxVQUFVLENBQUM7UUFDVCxPQUFPLEdBQUcsSUFBSSwwQ0FBdUIsRUFBRSxDQUFDO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFBO0lBQ3BDLENBQUMsQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLEtBQUssRUFBRTtRQUNkLEVBQUUsQ0FBQywyQ0FBMkMsRUFBRTtZQUM5QyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2xELENBQUMsQ0FBQyxDQUFDO1FBQ0gsRUFBRSxDQUFDLGtDQUFrQyxFQUFFO1lBQ3JDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDaEQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUVILFFBQVEsQ0FBQyxLQUFLLEVBQUU7UUFDZCxFQUFFLENBQUMsZ0NBQWdDLEVBQUU7WUFDbkMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUVILFFBQVEsQ0FBQyxRQUFRLEVBQUU7UUFDakIsRUFBRSxDQUFDLDhDQUE4QyxFQUFFO1lBQ2pELEtBQUssQ0FBRSxPQUFlLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3ZDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNqQixNQUFNLENBQUUsT0FBZSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzFELENBQUMsQ0FBQyxDQUFDO1FBQ0gsRUFBRSxDQUFDLG1DQUFtQyxFQUFFO1lBQ3RDLEtBQUssQ0FBRSxPQUFlLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3hDLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDNUIsTUFBTSxDQUFFLE9BQWUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUMzRCxDQUFDLENBQUMsQ0FBQztRQUNILEVBQUUsQ0FBQyx3QkFBd0IsRUFBRTtZQUMzQixJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUM7WUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDM0IsSUFBTSxLQUFLLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0IsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN0QixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJDOlxcVXNlcnNcXEl0YXlcXHByb2plY3RzXFxvcGVuc291cmNlc1xcaHR0cC1jYWNoZVxccHJvamVjdHNcXG5nbmVhdFxcaHR0cC1jYWNoZVxcc3JjXFxsaWJcXHRlc3RcXHN0b3JhZ2Uuc3BlYy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RlZmF1bHRIdHRwQ2FjaGVTdG9yYWdlfSBmcm9tICcuLi9odHRwQ2FjaGVTdG9yYWdlJztcbmltcG9ydCB7aHR0cFJlc3BvbnNlfSBmcm9tICcuL21vY2tzLnNwZWMnO1xuXG5kZXNjcmliZSgnaHR0cENhY2hlU3RvcmFnZScsICgpID0+IHtcblxuICBsZXQgc3RvcmFnZTogRGVmYXVsdEh0dHBDYWNoZVN0b3JhZ2U7XG4gIGNvbnN0IGV4aXN0aW5nS2V5ID0gJ2V4aXN0aW5nS2V5JztcbiAgY29uc3Qgbm90RXhpc3RpbmdLZXkgPSAnbm90RXhpc3RpbmdLZXknO1xuICBjb25zdCByZXNwb25zZSA9IGh0dHBSZXNwb25zZSgpO1xuXG4gIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgIHN0b3JhZ2UgPSBuZXcgRGVmYXVsdEh0dHBDYWNoZVN0b3JhZ2UoKTtcbiAgICBzdG9yYWdlLnNldChleGlzdGluZ0tleSwgcmVzcG9uc2UpXG4gIH0pO1xuXG4gIGRlc2NyaWJlKCdoYXMnLCAoKSA9PiB7XG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gZmFsc2UgaWYga2V5IGRvZXMgbm90IGV4aXN0JywgKCkgPT4ge1xuICAgICAgZXhwZWN0KHN0b3JhZ2UuaGFzKG5vdEV4aXN0aW5nS2V5KSkudG9CZUZhbHN5KCk7XG4gICAgfSk7XG4gICAgaXQoJ3Nob3VsZCByZXR1cm4gdHJ1ZSBpZiBrZXkgZXhpc3RzJywgKCkgPT4ge1xuICAgICAgZXhwZWN0KHN0b3JhZ2UuaGFzKGV4aXN0aW5nS2V5KSkudG9CZVRydXRoeSgpO1xuICAgIH0pO1xuICB9KTtcblxuICBkZXNjcmliZSgnZ2V0JywgKCkgPT4ge1xuICAgIGl0KCdzaG91bGQgZ2V0IHRoZSBjYWNoZWQgcmVzcG9uc2UnLCAoKSA9PiB7XG4gICAgICBleHBlY3Qoc3RvcmFnZS5nZXQoZXhpc3RpbmdLZXkpKS50b0JlKHJlc3BvbnNlKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ2RlbGV0ZScsICgpID0+IHtcbiAgICBpdCgnc2hvdWxkIGNsZWFyIHN0b3JhZ2Ugd2hlbiBjYWxsIHdpdGhvdXQgYSBrZXknLCAoKSA9PiB7XG4gICAgICBzcHlPbigoc3RvcmFnZSBhcyBhbnkpLmNhY2hlLCAnY2xlYXInKTtcbiAgICAgIHN0b3JhZ2UuZGVsZXRlKCk7XG4gICAgICBleHBlY3QoKHN0b3JhZ2UgYXMgYW55KS5jYWNoZS5jbGVhcikudG9IYXZlQmVlbkNhbGxlZCgpO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgY2FsbCBkZWxldGUgd2hlbiBnaXZlbiBrZXknLCAoKSA9PiB7XG4gICAgICBzcHlPbigoc3RvcmFnZSBhcyBhbnkpLmNhY2hlLCAnZGVsZXRlJyk7XG4gICAgICBzdG9yYWdlLmRlbGV0ZShleGlzdGluZ0tleSk7XG4gICAgICBleHBlY3QoKHN0b3JhZ2UgYXMgYW55KS5jYWNoZS5kZWxldGUpLnRvSGF2ZUJlZW5DYWxsZWQoKTtcbiAgICB9KTtcbiAgICBpdCgnc2hvdWxkIGRlbGV0ZSBieSByZWdleCcsICgpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9ICdhYWEnO1xuICAgICAgc3RvcmFnZS5zZXQoa2V5LCByZXNwb25zZSk7XG4gICAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoJ2FhJyk7XG4gICAgICBzdG9yYWdlLmRlbGV0ZShyZWdleCk7XG4gICAgICBleHBlY3Qoc3RvcmFnZS5oYXMoa2V5KSkudG9CZUZhbHN5KCk7XG4gICAgfSk7XG4gIH0pXG59KTtcbiJdLCJ2ZXJzaW9uIjozfQ==