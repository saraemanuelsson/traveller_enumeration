const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map(journey => journey.startLocation);
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map(journey => journey.endLocation);
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter(journey => journey.transport === transport );
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(journey => journey.distance > minDistance );
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((runningTotal, journey) => {return runningTotal + journey.distance}, 0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  
  const transports = this.journeys.map((journey) => {
    return journey.transport
  });

  // const uniqueTransports = [];

  // transports.forEach((transport) => {
  //   if (!uniqueTransports.includes(transport)) {
  //     uniqueTransports.push(transport)
  //   }
  // });

  // return uniqueTransports;

  const uniqueTransports = transports.filter((transport, i, array) => {
      return array.indexOf(transport) === i
    });

  return uniqueTransports;


};


module.exports = Traveller;
