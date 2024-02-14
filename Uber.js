
  
  // UberPriceCalculator class
  class UberPriceCalculator {
    private readonly BASE_FARE: number = 2.0;
    private readonly PER_MILE_COST: number = 1.5;
    private readonly PER_MINUTE_COST: number = 0.25;
  
    calculatePrice(distance: number, duration: number): number {
      const totalCost: number = this.BASE_FARE + (this.PER_MILE_COST * distance) + (this.PER_MINUTE_COST * duration);
      return totalCost;
    }
  }
  
  // Example usage of UberPriceCalculator class
  // const uberCalculator = new UberPriceCalculator();
  // const distance: number = 10;  // in miles
  // const duration: number = 15;  // in minutes
  // const totalPrice: number = uberCalculator.calculatePrice(distance, duration);
  // console.log(`Uber Price: $${totalPrice}`);
  