"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var RequestsQueue = /** @class */ (function () {
    function RequestsQueue() {
        this.queue = new Map();
    }
    RequestsQueue.prototype.get = function (key) {
        return this.queue.get(key);
    };
    RequestsQueue.prototype.has = function (key) {
        return this.queue.has(key);
    };
    RequestsQueue.prototype.set = function (key, shared) {
        this.queue.set(key, shared);
    };
    RequestsQueue.prototype.delete = function (key) {
        this.queue.delete(key);
    };
    RequestsQueue = tslib_1.__decorate([
        core_1.Injectable()
    ], RequestsQueue);
    return RequestsQueue;
}());
exports.RequestsQueue = RequestsQueue;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFxJdGF5XFxwcm9qZWN0c1xcb3BlbnNvdXJjZXNcXGh0dHAtY2FjaGVcXHByb2plY3RzXFxuZ25lYXRcXGh0dHAtY2FjaGVcXHNyY1xcbGliXFxyZXF1ZXN0c1F1ZXVlLnRzIiwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUEyQztBQUszQztJQURBO1FBRVUsVUFBSyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7SUFpQjVCLENBQUM7SUFmQywyQkFBRyxHQUFILFVBQUksR0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELDJCQUFHLEdBQUgsVUFBSSxHQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsMkJBQUcsR0FBSCxVQUFJLEdBQVcsRUFBRSxNQUFrQztRQUNqRCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELDhCQUFNLEdBQU4sVUFBTyxHQUFXO1FBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFqQlUsYUFBYTtRQUR6QixpQkFBVSxFQUFFO09BQ0EsYUFBYSxDQWtCekI7SUFBRCxvQkFBQztDQUFBLEFBbEJELElBa0JDO0FBbEJZLHNDQUFhIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSXRheVxccHJvamVjdHNcXG9wZW5zb3VyY2VzXFxodHRwLWNhY2hlXFxwcm9qZWN0c1xcbmduZWF0XFxodHRwLWNhY2hlXFxzcmNcXGxpYlxccmVxdWVzdHNRdWV1ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwRXZlbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSZXF1ZXN0c1F1ZXVlIHtcbiAgcHJpdmF0ZSBxdWV1ZSA9IG5ldyBNYXAoKTtcblxuICBnZXQoa2V5OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5xdWV1ZS5nZXQoa2V5KTtcbiAgfVxuXG4gIGhhcyhrZXk6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnF1ZXVlLmhhcyhrZXkpO1xuICB9XG5cbiAgc2V0KGtleTogc3RyaW5nLCBzaGFyZWQ6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+KSB7XG4gICAgdGhpcy5xdWV1ZS5zZXQoa2V5LCBzaGFyZWQpO1xuICB9XG5cbiAgZGVsZXRlKGtleTogc3RyaW5nKSB7XG4gICAgdGhpcy5xdWV1ZS5kZWxldGUoa2V5KTtcbiAgfVxufVxuIl0sInZlcnNpb24iOjN9