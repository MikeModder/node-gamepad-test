const XboxController = require('xbox-controller');

let controller = new XboxController();

const keys = {
    vol_up: 'NX_KEYTYPE_SOUND_UP',
    vol_down: 'NX_KEYTYPE_SOUND_DOWN',
    next: 'NX_KEYTYPE_NEXT',
    previous: 'NX_KEYTYPE_PREVIOUS',
    play: 'NX_KEYTYPE_PLAY',
    mute: 'NX_KEYTYPE_MUTE'
}

controller.on('a:pressed', (key) => {
    skey(keys.play);
});
controller.on('dup:pressed', (key) => {
    skey(keys.vol_up);
});
controller.on('ddown:pressed', (key) => {
    skey(keys.vol_down);
});
controller.on('dleft:pressed', (key) => {
    skey(keys.previous);
});
controller.on('dright:pressed', (key) => {
    skey(keys.next);
});