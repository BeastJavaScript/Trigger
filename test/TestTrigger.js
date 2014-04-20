// Generated by CoffeeScript 1.7.1
(function() {
  var TestCase, TestResult, TestTrigger, Trigger, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  _ref = require("beast-test"), TestCase = _ref.TestCase, TestResult = _ref.TestResult;

  Trigger = require("../bin/trigger").Trigger;

  new (TestTrigger = (function(_super) {
    __extends(TestTrigger, _super);

    function TestTrigger() {
      TestTrigger.__super__.constructor.call(this);
    }

    TestTrigger.prototype.base = function() {
      return Trigger.getInstance();
    };

    TestTrigger.prototype.testObject = function(master) {
      this.assertTrue(master instanceof Trigger);
      this.assertSame(Trigger.getInstance(), Trigger.getInstance());
      return this.assertEquals(master.trigger, []);
    };

    TestTrigger.prototype.testTrigger = function(master) {
      master.addListener("testing", function() {
        if (process.trigger_fire == null) {
          process.trigger_fire = 0;
        }
        return process.trigger_fire++;
      });
      master.trigger("testing");
      this.assertEquals(process.trigger_fire, 1);
      master.trigger("testing");
      master.trigger("testing");
      return this.assertEquals(process.trigger_fire, 3);
    };

    return TestTrigger;

  })(TestCase));

  console.log(TestCase.getResult());

}).call(this);
