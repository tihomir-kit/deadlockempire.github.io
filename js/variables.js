var IntegerVariable = function (name, defaultValue) {
    this.name = name;
    this.type = "System.Int32";
    this.value = defaultValue;
};
var CountdownEventVariable = function (name, count) {
    this.name = name;
    this.type = "System.Threading.CountdownEvent";
    this.value = count;
};
var ManualResetEventVariable = function (name, value) {
    this.name = name;
    this.type = "System.Threading.ManualResetEventSlim";
    this.value = value;
};
var BarrierVariable = function (name, participantCount) {
    this.name = name;
    this.type = "System.Threading.Barrier";
    this.value = participantCount;
    this.numberOfParticipants = participantCount;
    this.hasArrived = [];
    this.phase = 0;
};
/**
 * Returns the variable value in human-readable form.
 * @param variable A variable.
 * @returns string Its value in human form.
 */
var ToString = function(variable) {
    var type = variable.type;
    var value = variable.value;
    switch (type) {
        case "System.Threading.CountdownEvent":
            return value == 0 ? "[event set]" : (value == 1 ? "[waits for one more signal]" : "[waits for " + value + " more signals]");
        case "System.Threading.ManualResetEventSlim":
            return "[" + (value ? "signaled" : "nonsignaled" ) + "]";
        case "System.Threading.Barrier":
            return "[phase " + variable.phase + ", waiting for " + value + " threads]";

    }
    return null;
};