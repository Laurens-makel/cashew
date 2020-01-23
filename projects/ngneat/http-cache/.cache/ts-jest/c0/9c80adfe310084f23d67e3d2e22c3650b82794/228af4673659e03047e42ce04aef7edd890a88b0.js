"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var deleteByRegex_1 = require("./deleteByRegex");
var HttpCacheStorage = /** @class */ (function () {
    function HttpCacheStorage() {
    }
    return HttpCacheStorage;
}());
exports.HttpCacheStorage = HttpCacheStorage;
var DefaultHttpCacheStorage = /** @class */ (function () {
    function DefaultHttpCacheStorage() {
        this.cache = new Map();
    }
    DefaultHttpCacheStorage.prototype.has = function (key) {
        return this.cache.has(key);
    };
    DefaultHttpCacheStorage.prototype.get = function (key) {
        return this.cache.get(key);
    };
    DefaultHttpCacheStorage.prototype.set = function (key, response) {
        this.cache.set(key, response);
    };
    DefaultHttpCacheStorage.prototype.delete = function (key) {
        if (!key) {
            this.cache.clear();
            return;
        }
        if (typeof key === 'string') {
            this.cache.delete(key);
            return;
        }
        deleteByRegex_1.deleteByRegex(key, this.cache);
    };
    DefaultHttpCacheStorage = tslib_1.__decorate([
        core_1.Injectable()
    ], DefaultHttpCacheStorage);
    return DefaultHttpCacheStorage;
}());
exports.DefaultHttpCacheStorage = DefaultHttpCacheStorage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFxJdGF5XFxwcm9qZWN0c1xcb3BlbnNvdXJjZXNcXGh0dHAtY2FjaGVcXHByb2plY3RzXFxuZ25lYXRcXGh0dHAtY2FjaGVcXHNyY1xcbGliXFxodHRwQ2FjaGVTdG9yYWdlLnRzIiwibWFwcGluZ3MiOiI7OztBQUNBLHNDQUEyQztBQUMzQyxpREFBZ0Q7QUFFaEQ7SUFBQTtJQUtBLENBQUM7SUFBRCx1QkFBQztBQUFELENBQUMsQUFMRCxJQUtDO0FBTHFCLDRDQUFnQjtBQVF0QztJQURBO1FBRVUsVUFBSyxHQUFHLElBQUksR0FBRyxFQUE2QixDQUFDO0lBMkJ2RCxDQUFDO0lBekJDLHFDQUFHLEdBQUgsVUFBSSxHQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQscUNBQUcsR0FBSCxVQUFJLEdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxxQ0FBRyxHQUFILFVBQUksR0FBVyxFQUFFLFFBQTJCO1FBQzFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsd0NBQU0sR0FBTixVQUFPLEdBQXFCO1FBQzFCLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDUixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ25CLE9BQU87U0FDUjtRQUVELElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxFQUFFO1lBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQWEsQ0FBQyxDQUFDO1lBQ2pDLE9BQU87U0FDUjtRQUVELDZCQUFhLENBQUMsR0FBYSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBM0JVLHVCQUF1QjtRQURuQyxpQkFBVSxFQUFFO09BQ0EsdUJBQXVCLENBNEJuQztJQUFELDhCQUFDO0NBQUEsQUE1QkQsSUE0QkM7QUE1QlksMERBQXVCIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSXRheVxccHJvamVjdHNcXG9wZW5zb3VyY2VzXFxodHRwLWNhY2hlXFxwcm9qZWN0c1xcbmduZWF0XFxodHRwLWNhY2hlXFxzcmNcXGxpYlxcaHR0cENhY2hlU3RvcmFnZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBkZWxldGVCeVJlZ2V4IH0gZnJvbSAnLi9kZWxldGVCeVJlZ2V4JztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEh0dHBDYWNoZVN0b3JhZ2Uge1xuICBhYnN0cmFjdCBoYXMoa2V5OiBzdHJpbmcpOiBib29sZWFuO1xuICBhYnN0cmFjdCBnZXQoa2V5OiBzdHJpbmcpOiBIdHRwUmVzcG9uc2U8YW55PjtcbiAgYWJzdHJhY3Qgc2V0KGtleTogc3RyaW5nLCByZXNwb25zZTogSHR0cFJlc3BvbnNlPGFueT4pOiB2b2lkO1xuICBhYnN0cmFjdCBkZWxldGUoa2V5Pzogc3RyaW5nIHwgUmVnRXhwKTogdm9pZDtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERlZmF1bHRIdHRwQ2FjaGVTdG9yYWdlIGltcGxlbWVudHMgSHR0cENhY2hlU3RvcmFnZSB7XG4gIHByaXZhdGUgY2FjaGUgPSBuZXcgTWFwPHN0cmluZywgSHR0cFJlc3BvbnNlPGFueT4+KCk7XG5cbiAgaGFzKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY2FjaGUuaGFzKGtleSk7XG4gIH1cblxuICBnZXQoa2V5OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5jYWNoZS5nZXQoa2V5KTtcbiAgfVxuXG4gIHNldChrZXk6IHN0cmluZywgcmVzcG9uc2U6IEh0dHBSZXNwb25zZTxhbnk+KTogdm9pZCB7XG4gICAgdGhpcy5jYWNoZS5zZXQoa2V5LCByZXNwb25zZSk7XG4gIH1cblxuICBkZWxldGUoa2V5Pzogc3RyaW5nIHwgUmVnRXhwKTogdm9pZCB7XG4gICAgaWYgKCFrZXkpIHtcbiAgICAgIHRoaXMuY2FjaGUuY2xlYXIoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGtleSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuY2FjaGUuZGVsZXRlKGtleSBhcyBzdHJpbmcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRlbGV0ZUJ5UmVnZXgoa2V5IGFzIFJlZ0V4cCwgdGhpcy5jYWNoZSk7XG4gIH1cbn1cbiJdLCJ2ZXJzaW9uIjozfQ==