Content.makeFrontInterface(680, 500);

const var EQ = Engine.addModuleStateToUserPreset("EQ");

const var Convolution = Synth.getAudioSampleProcessor("CONVOLUTION");

Engine.loadAudioFilesIntoPool();
const var CONVOBOX = Content.getComponent("CONVOBOX");
CONVOBOX.setControlCallback(loadImpulse);

inline function loadImpulse(control, value)
{
    Convolution.setFile("{PROJECT_FOLDER}"+ control.getItemText() + ".wav");
}


// LFO 1 frequency mode script

const var LFO1FREQ = Content.getComponent("LFO1_TIME");

// [JSON Knob]
Content.setPropertiesFromJSON("LFO1_TIME", {
  "mode": "Frequency",
  "stepSize": 0.01,
  "defaultValue": "1",
  "suffix": " Hz"
});

const var LFO1MOD = Synth.getModulator("LFO1");

const var LFO1_Sync = Content.getComponent("LFO1_Sync");

inline function onLFO1_SyncControl(component, value)
{
	// Sync Mode LFO1
	LFO1MOD.setAttribute(LFO1MOD.TempoSync, value);
	
	if(value)
	{
		// Switch to tempo sync mode
		LFO1FREQ.set("mode", "TempoSync");
		LFO1FREQ.set("max", 18);
	}
	else
	{
		// Switch to frequency mode
		LFO1FREQ.set("mode", "Frequency");
		LFO1FREQ.set("min", 0.00);
		LFO1FREQ.set("max", 50);
		LFO1FREQ.set("middlePosition", 5);
	}
};

LFO1_Sync.setControlCallback(onLFO1_SyncControl);

// LFO 2 frequency mode script

const var LFO2FREQ = Content.getComponent("LFO2_TIME");

// [JSON Knob]
Content.setPropertiesFromJSON("LFO2_TIME", {
  "mode": "Frequency",
  "stepSize": 0.01,
  "defaultValue": "1",
  "suffix": " Hz"
});

const var LFO2MOD = Synth.getModulator("LFO2");

const var LFO2_Sync = Content.getComponent("LFO2_Sync");

inline function onLFO2_SyncControl(component, value)
{
	// Sync Mode LFO2
	LFO2MOD.setAttribute(LFO2MOD.TempoSync, value);
	
	if(value)
	{
		// Switch to tempo sync mode
		LFO2FREQ.set("mode", "TempoSync");
		LFO2FREQ.set("max", 18);
	}
	else
	{
		// Switch to frequency mode
		LFO2FREQ.set("mode", "Frequency");
		LFO2FREQ.set("min", 0.00);
		LFO2FREQ.set("max", 50);
		LFO2FREQ.set("middlePosition", 5);
	}
};

LFO2_Sync.setControlCallback(onLFO2_SyncControl);

// Edit panels and buttons

const var Edit1 = Content.getComponent("Edit1");
const var EditButton1 = Content.getComponent("EditButton1");
EditButton1.setControlCallback(EditButton1CB);

inline function EditButton1CB(control, value)
{
    Edit1.showControl(value);
}

const var Edit2 = Content.getComponent("Edit2");
const var EditButton2 = Content.getComponent("EditButton2");
EditButton2.setControlCallback(EditButton2CB);

inline function EditButton2CB(control, value)
{
    Edit2.showControl(value);
};


const var Edit3 = Content.getComponent("Edit3");
const var EditButton3 = Content.getComponent("EditButton3");
EditButton3.setControlCallback(EditButton3CB);

inline function EditButton3CB(control, value)
{
    Edit3.showControl(value);
}

const var Edit4 = Content.getComponent("Edit4");
const var EditButton4 = Content.getComponent("EditButton4");
EditButton4.setControlCallback(EditButton4CB);

inline function EditButton4CB(control, value)
{
    Edit4.showControl(value);
}

// samplemaps setup for comboboxes

const var E1 = Synth.getChildSynth("E1");
const var sampleMaps1 = Sampler.getSampleMapList();

const var Element1 = Content.getComponent("Element1");
Element1.set("items", sampleMaps1.join("\n"));

inline function onElement1Control(component, value)
{
	E1.asSampler().loadSampleMap(sampleMaps1[value-1]);
};

Content.getComponent("Element1").setControlCallback(onElement1Control);

const var E2 = Synth.getChildSynth("E2");
const var sampleMaps2 = Sampler.getSampleMapList();

const var Element2 = Content.getComponent("Element2");
Element2.set("items", sampleMaps2.join("\n"));

inline function onElement2Control(component, value)
{
	E2.asSampler().loadSampleMap(sampleMaps2[value-1]);
};

Content.getComponent("Element2").setControlCallback(onElement2Control);

const var E3 = Synth.getChildSynth("E3");
const var sampleMaps3 = Sampler.getSampleMapList();

const var Element3 = Content.getComponent("Element3");
Element3.set("items", sampleMaps3.join("\n"));

inline function onElement3Control(component, value)
{
	E3.asSampler().loadSampleMap(sampleMaps3[value-1]);
};

Content.getComponent("Element3").setControlCallback(onElement3Control);

const var E4 = Synth.getChildSynth("E4");
const var sampleMaps4 = Sampler.getSampleMapList();

const var Element4 = Content.getComponent("Element4");
Element4.set("items", sampleMaps4.join("\n"));

inline function onElement4Control(component, value)
{
	E4.asSampler().loadSampleMap(sampleMaps4[value-1]);
};

Content.getComponent("Element4").setControlCallback(onElement4Control);

// FIlter combobox setup;

const var E1_FILTER = Synth.getEffect("E1_FILTER");

const var modes1 = {"1 Pole LP": 9,"1 Pole HP": 10, "Biquad LP": 0, "Biquad HP": 1, "SVF LP": 6, "SVF HP": 7, "Moog LP": 8, "Biquad LP Rez": 5, "Ladder 4 Pole": 14, "Lo Shelf EQ": 2, "Hi Shelf EQ": 3, "Peak EQ": 4, "SVF Notch": 11, "SVF BP": 12, "Allpass": 13, "RingMod": 17,};

const var E1FILTERLIST = Content.getComponent("E1FILTERLIST");

E1FILTERLIST.set("items", ""); //Clear list

for (k in modes1)
{
    E1FILTERLIST.addItem(k); //Add mode name to list
}

inline function onE1FILTERLISTControl(component, value)
{
    E1_FILTER.setAttribute(E1_FILTER.Mode, modes1[component.getItemText()]);
};

Content.getComponent("E1FILTERLIST").setControlCallback(onE1FILTERLISTControl);

// Filters P2

const var E2_FILTER = Synth.getEffect("E2_FILTER");

const var modes2 = {"1 Pole LP": 9,"1 Pole HP": 10, "Biquad LP": 0, "Biquad HP": 1, "SVF LP": 6, "SVF HP": 7, "Moog LP": 8, "Biquad LP Rez": 5, "Ladder 4 Pole": 14, "Lo Shelf EQ": 2, "Hi Shelf EQ": 3, "Peak EQ": 4, "SVF Notch": 11, "SVF BP": 12, "Allpass": 13, "RingMod": 17,};

const var E2FILTERLIST = Content.getComponent("E2FILTERLIST");

E2FILTERLIST.set("items", ""); //Clear list

for (k in modes2)
{
    E2FILTERLIST.addItem(k); //Add mode name to list
}

inline function onE2FILTERLISTControl(component, value)
{
    E2_FILTER.setAttribute(E2_FILTER.Mode, modes2[component.getItemText()]);
};

Content.getComponent("E2FILTERLIST").setControlCallback(onE2FILTERLISTControl);

// Filters P3

const var E3_FILTER = Synth.getEffect("E3_FILTER");

const var modes3 = {"1 Pole LP": 9,"1 Pole HP": 10, "Biquad LP": 0, "Biquad HP": 1, "SVF LP": 6, "SVF HP": 7, "Moog LP": 8, "Biquad LP Rez": 5, "Ladder 4 Pole": 14, "Lo Shelf EQ": 2, "Hi Shelf EQ": 3, "Peak EQ": 4, "SVF Notch": 11, "SVF BP": 12, "Allpass": 13, "RingMod": 17,};

const var E3FILTERLIST = Content.getComponent("E3FILTERLIST");

E3FILTERLIST.set("items", ""); //Clear list

for (k in modes3)
{
    E3FILTERLIST.addItem(k); //Add mode name to list
}

inline function onE3FILTERLISTControl(component, value)
{
    E3_FILTER.setAttribute(E3_FILTER.Mode, modes3[component.getItemText()]);
};

Content.getComponent("E3FILTERLIST").setControlCallback(onE3FILTERLISTControl);

// Filters P4

const var E4_FILTER = Synth.getEffect("E4_FILTER");

const var modes4 = {"1 Pole LP": 9,"1 Pole HP": 10, "Biquad LP": 0, "Biquad HP": 1, "SVF LP": 6, "SVF HP": 7, "Moog LP": 8, "Biquad LP Rez": 5, "Ladder 4 Pole": 14, "Lo Shelf EQ": 2, "Hi Shelf EQ": 3, "Peak EQ": 4, "SVF Notch": 11, "SVF BP": 12, "Allpass": 13, "RingMod": 17,};

const var E4FILTERLIST = Content.getComponent("E4FILTERLIST");

E4FILTERLIST.set("items", ""); //Clear list

for (k in modes4)
{
    E4FILTERLIST.addItem(k); //Add mode name to list
}

inline function onE4FILTERLISTControl(component, value)
{
    E4_FILTER.setAttribute(E4_FILTER.Mode, modes4[component.getItemText()]);
};

Content.getComponent("E4FILTERLIST").setControlCallback(onE4FILTERLISTControl);

// EQPanel 

const var FXPANEL = Content.getComponent("FXPANEL");
const var FXButton = Content.getComponent("FXButton");
FXButton.setControlCallback(FXButtonCB);

inline function FXButtonCB(control, value)
{
    FXPANEL.showControl(value);
}

// Library panel

const var LibButton= Content.getComponent("LibButton");
const var LIBRARYBROWSER = Content.getComponent("LIBRARYBROWSER");

inline function onLibButtonControl(component, value)
{
	if (value)
    {
        LIBRARYBROWSER.showControl(true);
    }
    else
    {
        LIBRARYBROWSER.showControl(false);
    }
};

Content.getComponent("LibButton").setControlCallback(onLibButtonControl);

// SettingsPanel 

const var SettingsPanel = Content.getComponent("SettingsPanel");
const var SettingsButton = Content.getComponent("SettingsButton");
SettingsButton.setControlCallback(SettingsButtonCB);

inline function SettingsButtonCB(control, value)
{
    SettingsPanel.showControl(value);
}function onNoteOn()
{
	
}
 function onNoteOff()
{
	
}
 function onController()
{
	
}
 function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
 