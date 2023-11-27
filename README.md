# CapacitorAppTemplate

## Prerequisites

1. Connect to [Azure DevOps Feed](https://dev.azure.com/infosystem-ag/IS/_packaging?_a=feed&feed=infosystem-npm). It's described on the page itself how to do this.

## Running the Capacitor App

### With an Emulator

use
`npm run emulator` (without Android Studio using adb, you have to run the emulator with VS)
`npm run emulator-as` (with Android Studio installed, recommended)

#### Debugging

Use the Run and Debug tool with the
`Run Android on Emulator` (Requires Android Studio and an Android Extension)

### With a Device

`npm run device` (with Android Studio)
There is no simple way to setup without Android Studio. It involves several steps.
