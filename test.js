const AppleSFXGenerator = require('./sfx-generator');

async function testSounds() {
    const sfx = new AppleSFXGenerator();
    await sfx.init();

    console.log('Testing Apple-like sound effects...');
    
    // Test each sound with delays
    setTimeout(() => {
        console.log('Playing notification chime...');
        sfx.notificationChime();
    }, 1000);

    setTimeout(() => {
        console.log('Playing success sound...');
        sfx.successSound();
    }, 3000);

    setTimeout(() => {
        console.log('Playing button click...');
        sfx.buttonClick();
    }, 5000);

    setTimeout(() => {
        console.log('Playing error sound...');
        sfx.errorSound();
    }, 7000);

    setTimeout(() => {
        console.log('Playing swipe sound...');
        sfx.swipeSound();
    }, 9000);

    setTimeout(() => {
        console.log('Playing modal appear...');
        sfx.modalAppear();
    }, 11000);

    setTimeout(() => {
        console.log('Test complete!');
        process.exit(0);
    }, 13000);
}

testSounds().catch(console.error);