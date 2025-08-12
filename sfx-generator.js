const Tone = require('tone');

class AppleSFXGenerator {
    constructor() {
        this.reverb = null;
        this.synth = null;
    }

    async init() {
        await Tone.start();
        
        this.reverb = new Tone.Reverb({
            decay: 1.5,
            wet: 0.3
        }).toDestination();
        
        this.synth = new Tone.Synth({
            oscillator: { type: 'sine' },
            envelope: {
                attack: 0.005,
                decay: 0.1,
                sustain: 0.3,
                release: 0.8
            }
        }).connect(this.reverb);

        await this.reverb.generate();
    }

    // Notification chime (like iOS notification)
    notificationChime() {
        const now = Tone.now();
        this.synth.triggerAttackRelease('G5', '0.15', now);
        this.synth.triggerAttackRelease('C6', '0.2', now + 0.1);
    }

    // Success sound (like completing an action)
    successSound() {
        const now = Tone.now();
        this.synth.triggerAttackRelease('C5', '0.1', now);
        this.synth.triggerAttackRelease('E5', '0.1', now + 0.05);
        this.synth.triggerAttackRelease('G5', '0.15', now + 0.1);
    }

    // Subtle click (like button tap)
    buttonClick() {
        this.synth.triggerAttackRelease('C6', '0.05');
    }

    // Error/warning sound
    errorSound() {
        const now = Tone.now();
        this.synth.triggerAttackRelease('F4', '0.1', now);
        this.synth.triggerAttackRelease('D4', '0.15', now + 0.05);
    }

    // Swipe/gesture sound
    swipeSound() {
        const now = Tone.now();
        this.synth.triggerAttackRelease('A4', '0.08', now);
        this.synth.triggerAttackRelease('C5', '0.06', now + 0.04);
    }

    // Modal/sheet appear
    modalAppear() {
        const now = Tone.now();
        this.synth.triggerAttackRelease('G4', '0.12', now);
        this.synth.triggerAttackRelease('D5', '0.18', now + 0.08);
    }

    // Custom sound with specified note and duration
    customSound(note, duration = '0.1') {
        this.synth.triggerAttackRelease(note, duration);
    }
}

module.exports = AppleSFXGenerator;