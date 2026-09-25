window.editVoiceDemo = {
  "paper": {
    "title": "EditVoice: Variable-Length Non-Autoregressive Zero-Shot TTS and Speech Editing with Edit Flows",
    "authors": [
      "Hongyao Deng¹",
      "Wenhao Guan²",
      "Xuetao Lin¹",
      "Peijie Chen¹",
      "Weijie Wu¹",
      "Lin Li²*",
      "Qingyang Hong¹*"
    ],
    "affiliations": [
      "¹ School of Informatics, Xiamen University, China",
      "² School of Electronic Science and Engineering, Xiamen University, China"
    ],
    "summary": "EditVoice is a variable-length non-autoregressive zero-shot TTS model that uses Edit Flows to jointly update speech content and sequence length through insertions, deletions, and substitutions. Speech-infilling training unifies zero-shot TTS and text-based speech editing, while Complementary Prompt Sampling combines predictions from prefix and suffix prompt placements and enables training-free post-generation refinement.",
    "overviewImage": "assets/images/editvoice-overview.png"
  },
  "seedTTS": [
    {
      "id": "common_voice_en_36069016-common_voice_en_36069015",
      "targetText": "They were the first known people to have fished for the Arctic char.",
      "audios": [
        {
          "label": "Prompt",
          "audio": "assets/audio/seedtts/common_voice_en_36069016-common_voice_en_36069015/prompt.wav"
        },
        {
          "label": "Ground Truth",
          "audio": "assets/audio/seedtts/common_voice_en_36069016-common_voice_en_36069015/ground-truth.wav"
        },
        {
          "label": "EditVoice",
          "audio": "assets/audio/seedtts/common_voice_en_36069016-common_voice_en_36069015/editvoice.wav"
        },
        {
          "label": "CosyVoice2",
          "audio": "assets/audio/seedtts/common_voice_en_36069016-common_voice_en_36069015/cosyvoice2.wav"
        },
        {
          "label": "CosyVoice3",
          "audio": "assets/audio/seedtts/common_voice_en_36069016-common_voice_en_36069015/cosyvoice3.wav"
        },
        {
          "label": "VoxCPM",
          "audio": "assets/audio/seedtts/common_voice_en_36069016-common_voice_en_36069015/voxcpm.wav"
        },
        {
          "label": "Qwen3-TTS",
          "audio": "assets/audio/seedtts/common_voice_en_36069016-common_voice_en_36069015/qwen3-tts.wav"
        },
        {
          "label": "OmniVoice",
          "audio": "assets/audio/seedtts/common_voice_en_36069016-common_voice_en_36069015/omnivoice.wav"
        },
        {
          "label": "F5-TTS",
          "audio": "assets/audio/seedtts/common_voice_en_36069016-common_voice_en_36069015/f5-tts.wav"
        },
        {
          "label": "ZipVoice",
          "audio": "assets/audio/seedtts/common_voice_en_36069016-common_voice_en_36069015/zipvoice.wav"
        },
        {
          "label": "MaskGCT",
          "audio": "assets/audio/seedtts/common_voice_en_36069016-common_voice_en_36069015/maskgct.wav"
        }
      ]
    },
    {
      "id": "common_voice_en_19686493-common_voice_en_19686496",
      "targetText": "The rest of the money can be based on playing time.",
      "audios": [
        {
          "label": "Prompt",
          "audio": "assets/audio/seedtts/common_voice_en_19686493-common_voice_en_19686496/prompt.wav"
        },
        {
          "label": "Ground Truth",
          "audio": "assets/audio/seedtts/common_voice_en_19686493-common_voice_en_19686496/ground-truth.wav"
        },
        {
          "label": "EditVoice",
          "audio": "assets/audio/seedtts/common_voice_en_19686493-common_voice_en_19686496/editvoice.wav"
        },
        {
          "label": "CosyVoice2",
          "audio": "assets/audio/seedtts/common_voice_en_19686493-common_voice_en_19686496/cosyvoice2.wav"
        },
        {
          "label": "CosyVoice3",
          "audio": "assets/audio/seedtts/common_voice_en_19686493-common_voice_en_19686496/cosyvoice3.wav"
        },
        {
          "label": "VoxCPM",
          "audio": "assets/audio/seedtts/common_voice_en_19686493-common_voice_en_19686496/voxcpm.wav"
        },
        {
          "label": "Qwen3-TTS",
          "audio": "assets/audio/seedtts/common_voice_en_19686493-common_voice_en_19686496/qwen3-tts.wav"
        },
        {
          "label": "OmniVoice",
          "audio": "assets/audio/seedtts/common_voice_en_19686493-common_voice_en_19686496/omnivoice.wav"
        },
        {
          "label": "F5-TTS",
          "audio": "assets/audio/seedtts/common_voice_en_19686493-common_voice_en_19686496/f5-tts.wav"
        },
        {
          "label": "ZipVoice",
          "audio": "assets/audio/seedtts/common_voice_en_19686493-common_voice_en_19686496/zipvoice.wav"
        },
        {
          "label": "MaskGCT",
          "audio": "assets/audio/seedtts/common_voice_en_19686493-common_voice_en_19686496/maskgct.wav"
        }
      ]
    },
    {
      "id": "common_voice_en_17875915-common_voice_en_17875925",
      "targetText": "The grass is always greener on the other side of the fence.",
      "audios": [
        {
          "label": "Prompt",
          "audio": "assets/audio/seedtts/common_voice_en_17875915-common_voice_en_17875925/prompt.wav"
        },
        {
          "label": "Ground Truth",
          "audio": "assets/audio/seedtts/common_voice_en_17875915-common_voice_en_17875925/ground-truth.wav"
        },
        {
          "label": "EditVoice",
          "audio": "assets/audio/seedtts/common_voice_en_17875915-common_voice_en_17875925/editvoice.wav"
        },
        {
          "label": "CosyVoice2",
          "audio": "assets/audio/seedtts/common_voice_en_17875915-common_voice_en_17875925/cosyvoice2.wav"
        },
        {
          "label": "CosyVoice3",
          "audio": "assets/audio/seedtts/common_voice_en_17875915-common_voice_en_17875925/cosyvoice3.wav"
        },
        {
          "label": "VoxCPM",
          "audio": "assets/audio/seedtts/common_voice_en_17875915-common_voice_en_17875925/voxcpm.wav"
        },
        {
          "label": "Qwen3-TTS",
          "audio": "assets/audio/seedtts/common_voice_en_17875915-common_voice_en_17875925/qwen3-tts.wav"
        },
        {
          "label": "OmniVoice",
          "audio": "assets/audio/seedtts/common_voice_en_17875915-common_voice_en_17875925/omnivoice.wav"
        },
        {
          "label": "F5-TTS",
          "audio": "assets/audio/seedtts/common_voice_en_17875915-common_voice_en_17875925/f5-tts.wav"
        },
        {
          "label": "ZipVoice",
          "audio": "assets/audio/seedtts/common_voice_en_17875915-common_voice_en_17875925/zipvoice.wav"
        },
        {
          "label": "MaskGCT",
          "audio": "assets/audio/seedtts/common_voice_en_17875915-common_voice_en_17875925/maskgct.wav"
        }
      ]
    },
    {
      "id": "common_voice_en_32717587-common_voice_en_32717586",
      "targetText": "Mabuchi is known for introducing the Mabuchi functional.",
      "audios": [
        {
          "label": "Prompt",
          "audio": "assets/audio/seedtts/common_voice_en_32717587-common_voice_en_32717586/prompt.wav"
        },
        {
          "label": "Ground Truth",
          "audio": "assets/audio/seedtts/common_voice_en_32717587-common_voice_en_32717586/ground-truth.wav"
        },
        {
          "label": "EditVoice",
          "audio": "assets/audio/seedtts/common_voice_en_32717587-common_voice_en_32717586/editvoice.wav"
        },
        {
          "label": "CosyVoice2",
          "audio": "assets/audio/seedtts/common_voice_en_32717587-common_voice_en_32717586/cosyvoice2.wav"
        },
        {
          "label": "CosyVoice3",
          "audio": "assets/audio/seedtts/common_voice_en_32717587-common_voice_en_32717586/cosyvoice3.wav"
        },
        {
          "label": "VoxCPM",
          "audio": "assets/audio/seedtts/common_voice_en_32717587-common_voice_en_32717586/voxcpm.wav"
        },
        {
          "label": "Qwen3-TTS",
          "audio": "assets/audio/seedtts/common_voice_en_32717587-common_voice_en_32717586/qwen3-tts.wav"
        },
        {
          "label": "OmniVoice",
          "audio": "assets/audio/seedtts/common_voice_en_32717587-common_voice_en_32717586/omnivoice.wav"
        },
        {
          "label": "F5-TTS",
          "audio": "assets/audio/seedtts/common_voice_en_32717587-common_voice_en_32717586/f5-tts.wav"
        },
        {
          "label": "ZipVoice",
          "audio": "assets/audio/seedtts/common_voice_en_32717587-common_voice_en_32717586/zipvoice.wav"
        },
        {
          "label": "MaskGCT",
          "audio": "assets/audio/seedtts/common_voice_en_32717587-common_voice_en_32717586/maskgct.wav"
        }
      ]
    },
    {
      "id": "common_voice_en_21851751-common_voice_en_21851747",
      "targetText": "These two methods allow moisture to penetrate the tough outer casing, stimulating germination.",
      "audios": [
        {
          "label": "Prompt",
          "audio": "assets/audio/seedtts/common_voice_en_21851751-common_voice_en_21851747/prompt.wav"
        },
        {
          "label": "Ground Truth",
          "audio": "assets/audio/seedtts/common_voice_en_21851751-common_voice_en_21851747/ground-truth.wav"
        },
        {
          "label": "EditVoice",
          "audio": "assets/audio/seedtts/common_voice_en_21851751-common_voice_en_21851747/editvoice.wav"
        },
        {
          "label": "CosyVoice2",
          "audio": "assets/audio/seedtts/common_voice_en_21851751-common_voice_en_21851747/cosyvoice2.wav"
        },
        {
          "label": "CosyVoice3",
          "audio": "assets/audio/seedtts/common_voice_en_21851751-common_voice_en_21851747/cosyvoice3.wav"
        },
        {
          "label": "VoxCPM",
          "audio": "assets/audio/seedtts/common_voice_en_21851751-common_voice_en_21851747/voxcpm.wav"
        },
        {
          "label": "Qwen3-TTS",
          "audio": "assets/audio/seedtts/common_voice_en_21851751-common_voice_en_21851747/qwen3-tts.wav"
        },
        {
          "label": "OmniVoice",
          "audio": "assets/audio/seedtts/common_voice_en_21851751-common_voice_en_21851747/omnivoice.wav"
        },
        {
          "label": "F5-TTS",
          "audio": "assets/audio/seedtts/common_voice_en_21851751-common_voice_en_21851747/f5-tts.wav"
        },
        {
          "label": "ZipVoice",
          "audio": "assets/audio/seedtts/common_voice_en_21851751-common_voice_en_21851747/zipvoice.wav"
        },
        {
          "label": "MaskGCT",
          "audio": "assets/audio/seedtts/common_voice_en_21851751-common_voice_en_21851747/maskgct.wav"
        }
      ]
    },
    {
      "id": "common_voice_en_25896925-common_voice_en_25896927",
      "targetText": "He lived with a skinny dog for five years.",
      "audios": [
        {
          "label": "Prompt",
          "audio": "assets/audio/seedtts/common_voice_en_25896925-common_voice_en_25896927/prompt.wav"
        },
        {
          "label": "Ground Truth",
          "audio": "assets/audio/seedtts/common_voice_en_25896925-common_voice_en_25896927/ground-truth.wav"
        },
        {
          "label": "EditVoice",
          "audio": "assets/audio/seedtts/common_voice_en_25896925-common_voice_en_25896927/editvoice.wav"
        },
        {
          "label": "CosyVoice2",
          "audio": "assets/audio/seedtts/common_voice_en_25896925-common_voice_en_25896927/cosyvoice2.wav"
        },
        {
          "label": "CosyVoice3",
          "audio": "assets/audio/seedtts/common_voice_en_25896925-common_voice_en_25896927/cosyvoice3.wav"
        },
        {
          "label": "VoxCPM",
          "audio": "assets/audio/seedtts/common_voice_en_25896925-common_voice_en_25896927/voxcpm.wav"
        },
        {
          "label": "Qwen3-TTS",
          "audio": "assets/audio/seedtts/common_voice_en_25896925-common_voice_en_25896927/qwen3-tts.wav"
        },
        {
          "label": "OmniVoice",
          "audio": "assets/audio/seedtts/common_voice_en_25896925-common_voice_en_25896927/omnivoice.wav"
        },
        {
          "label": "F5-TTS",
          "audio": "assets/audio/seedtts/common_voice_en_25896925-common_voice_en_25896927/f5-tts.wav"
        },
        {
          "label": "ZipVoice",
          "audio": "assets/audio/seedtts/common_voice_en_25896925-common_voice_en_25896927/zipvoice.wav"
        },
        {
          "label": "MaskGCT",
          "audio": "assets/audio/seedtts/common_voice_en_25896925-common_voice_en_25896927/maskgct.wav"
        }
      ]
    },
    {
      "id": "common_voice_en_36074033-common_voice_en_36074034",
      "targetText": "There is some argument as to when and why the wall was built.",
      "audios": [
        {
          "label": "Prompt",
          "audio": "assets/audio/seedtts/common_voice_en_36074033-common_voice_en_36074034/prompt.wav"
        },
        {
          "label": "Ground Truth",
          "audio": "assets/audio/seedtts/common_voice_en_36074033-common_voice_en_36074034/ground-truth.wav"
        },
        {
          "label": "EditVoice",
          "audio": "assets/audio/seedtts/common_voice_en_36074033-common_voice_en_36074034/editvoice.wav"
        },
        {
          "label": "CosyVoice2",
          "audio": "assets/audio/seedtts/common_voice_en_36074033-common_voice_en_36074034/cosyvoice2.wav"
        },
        {
          "label": "CosyVoice3",
          "audio": "assets/audio/seedtts/common_voice_en_36074033-common_voice_en_36074034/cosyvoice3.wav"
        },
        {
          "label": "VoxCPM",
          "audio": "assets/audio/seedtts/common_voice_en_36074033-common_voice_en_36074034/voxcpm.wav"
        },
        {
          "label": "Qwen3-TTS",
          "audio": "assets/audio/seedtts/common_voice_en_36074033-common_voice_en_36074034/qwen3-tts.wav"
        },
        {
          "label": "OmniVoice",
          "audio": "assets/audio/seedtts/common_voice_en_36074033-common_voice_en_36074034/omnivoice.wav"
        },
        {
          "label": "F5-TTS",
          "audio": "assets/audio/seedtts/common_voice_en_36074033-common_voice_en_36074034/f5-tts.wav"
        },
        {
          "label": "ZipVoice",
          "audio": "assets/audio/seedtts/common_voice_en_36074033-common_voice_en_36074034/zipvoice.wav"
        },
        {
          "label": "MaskGCT",
          "audio": "assets/audio/seedtts/common_voice_en_36074033-common_voice_en_36074034/maskgct.wav"
        }
      ]
    },
    {
      "id": "common_voice_en_24518104-common_voice_en_24518111",
      "targetText": "The absence of 'a' waves may be seen in atrial fibrillation.",
      "audios": [
        {
          "label": "Prompt",
          "audio": "assets/audio/seedtts/common_voice_en_24518104-common_voice_en_24518111/prompt.wav"
        },
        {
          "label": "Ground Truth",
          "audio": "assets/audio/seedtts/common_voice_en_24518104-common_voice_en_24518111/ground-truth.wav"
        },
        {
          "label": "EditVoice",
          "audio": "assets/audio/seedtts/common_voice_en_24518104-common_voice_en_24518111/editvoice.wav"
        },
        {
          "label": "CosyVoice2",
          "audio": "assets/audio/seedtts/common_voice_en_24518104-common_voice_en_24518111/cosyvoice2.wav"
        },
        {
          "label": "CosyVoice3",
          "audio": "assets/audio/seedtts/common_voice_en_24518104-common_voice_en_24518111/cosyvoice3.wav"
        },
        {
          "label": "VoxCPM",
          "audio": "assets/audio/seedtts/common_voice_en_24518104-common_voice_en_24518111/voxcpm.wav"
        },
        {
          "label": "Qwen3-TTS",
          "audio": "assets/audio/seedtts/common_voice_en_24518104-common_voice_en_24518111/qwen3-tts.wav"
        },
        {
          "label": "OmniVoice",
          "audio": "assets/audio/seedtts/common_voice_en_24518104-common_voice_en_24518111/omnivoice.wav"
        },
        {
          "label": "F5-TTS",
          "audio": "assets/audio/seedtts/common_voice_en_24518104-common_voice_en_24518111/f5-tts.wav"
        },
        {
          "label": "ZipVoice",
          "audio": "assets/audio/seedtts/common_voice_en_24518104-common_voice_en_24518111/zipvoice.wav"
        },
        {
          "label": "MaskGCT",
          "audio": "assets/audio/seedtts/common_voice_en_24518104-common_voice_en_24518111/maskgct.wav"
        }
      ]
    },
    {
      "id": "common_voice_en_25035745-common_voice_en_25035744",
      "targetText": "It will be the jolliest piece I have ever done, especially the last movement.",
      "audios": [
        {
          "label": "Prompt",
          "audio": "assets/audio/seedtts/common_voice_en_25035745-common_voice_en_25035744/prompt.wav"
        },
        {
          "label": "Ground Truth",
          "audio": "assets/audio/seedtts/common_voice_en_25035745-common_voice_en_25035744/ground-truth.wav"
        },
        {
          "label": "EditVoice",
          "audio": "assets/audio/seedtts/common_voice_en_25035745-common_voice_en_25035744/editvoice.wav"
        },
        {
          "label": "CosyVoice2",
          "audio": "assets/audio/seedtts/common_voice_en_25035745-common_voice_en_25035744/cosyvoice2.wav"
        },
        {
          "label": "CosyVoice3",
          "audio": "assets/audio/seedtts/common_voice_en_25035745-common_voice_en_25035744/cosyvoice3.wav"
        },
        {
          "label": "VoxCPM",
          "audio": "assets/audio/seedtts/common_voice_en_25035745-common_voice_en_25035744/voxcpm.wav"
        },
        {
          "label": "Qwen3-TTS",
          "audio": "assets/audio/seedtts/common_voice_en_25035745-common_voice_en_25035744/qwen3-tts.wav"
        },
        {
          "label": "OmniVoice",
          "audio": "assets/audio/seedtts/common_voice_en_25035745-common_voice_en_25035744/omnivoice.wav"
        },
        {
          "label": "F5-TTS",
          "audio": "assets/audio/seedtts/common_voice_en_25035745-common_voice_en_25035744/f5-tts.wav"
        },
        {
          "label": "ZipVoice",
          "audio": "assets/audio/seedtts/common_voice_en_25035745-common_voice_en_25035744/zipvoice.wav"
        },
        {
          "label": "MaskGCT",
          "audio": "assets/audio/seedtts/common_voice_en_25035745-common_voice_en_25035744/maskgct.wav"
        }
      ]
    },
    {
      "id": "common_voice_en_17161-common_voice_en_17159",
      "targetText": "He must be disguised to avoid encounters with thieves.",
      "audios": [
        {
          "label": "Prompt",
          "audio": "assets/audio/seedtts/common_voice_en_17161-common_voice_en_17159/prompt.wav"
        },
        {
          "label": "Ground Truth",
          "audio": "assets/audio/seedtts/common_voice_en_17161-common_voice_en_17159/ground-truth.wav"
        },
        {
          "label": "EditVoice",
          "audio": "assets/audio/seedtts/common_voice_en_17161-common_voice_en_17159/editvoice.wav"
        },
        {
          "label": "CosyVoice2",
          "audio": "assets/audio/seedtts/common_voice_en_17161-common_voice_en_17159/cosyvoice2.wav"
        },
        {
          "label": "CosyVoice3",
          "audio": "assets/audio/seedtts/common_voice_en_17161-common_voice_en_17159/cosyvoice3.wav"
        },
        {
          "label": "VoxCPM",
          "audio": "assets/audio/seedtts/common_voice_en_17161-common_voice_en_17159/voxcpm.wav"
        },
        {
          "label": "Qwen3-TTS",
          "audio": "assets/audio/seedtts/common_voice_en_17161-common_voice_en_17159/qwen3-tts.wav"
        },
        {
          "label": "OmniVoice",
          "audio": "assets/audio/seedtts/common_voice_en_17161-common_voice_en_17159/omnivoice.wav"
        },
        {
          "label": "F5-TTS",
          "audio": "assets/audio/seedtts/common_voice_en_17161-common_voice_en_17159/f5-tts.wav"
        },
        {
          "label": "ZipVoice",
          "audio": "assets/audio/seedtts/common_voice_en_17161-common_voice_en_17159/zipvoice.wav"
        },
        {
          "label": "MaskGCT",
          "audio": "assets/audio/seedtts/common_voice_en_17161-common_voice_en_17159/maskgct.wav"
        }
      ]
    }
  ],
  "realEdit": [
    {
      "id": "1630_96099_000031_000002",
      "originalText": "I had no fear of him, not till the very last, when he played me this evil turn.",
      "targetText": "I had no fear of him, not till I saw him conspire to harm me, when he played me this evil turn.",
      "targetSegments": [
        {
          "text": "I had no fear of him, not till ",
          "emphasis": false
        },
        {
          "text": "I saw him conspire to harm me,",
          "emphasis": true
        },
        {
          "text": " when he played me this evil turn.",
          "emphasis": false
        }
      ],
      "originalAudio": "assets/audio/realedit/1630_96099_000031_000002/original.wav",
      "cascaded": [
        {
          "label": "EditVoice Cascaded",
          "audio": "assets/audio/realedit/1630_96099_000031_000002/editvoice-cascaded.wav?v=2"
        },
        {
          "label": "FluentSpeech",
          "audio": "assets/audio/realedit/1630_96099_000031_000002/fluentspeech.wav"
        },
        {
          "label": "VoiceCraft",
          "audio": "assets/audio/realedit/1630_96099_000031_000002/voicecraft.wav"
        },
        {
          "label": "SSR-Speech",
          "audio": "assets/audio/realedit/1630_96099_000031_000002/ssr-speech.wav"
        }
      ],
      "endToEnd": [
        {
          "label": "EditVoice End-to-End",
          "audio": "assets/audio/realedit/1630_96099_000031_000002/editvoice-end-to-end.wav"
        },
        {
          "label": "Ming-UniAudio",
          "audio": "assets/audio/realedit/1630_96099_000031_000002/ming-uniaudio.wav"
        },
        {
          "label": "CosyEdit",
          "audio": "assets/audio/realedit/1630_96099_000031_000002/cosyedit.wav"
        }
      ]
    },
    {
      "id": "show_2c2IJzenX6Q6gJxc2aGRf8-5eUimgKIjnroT9AZIRQr7p",
      "originalText": "Sort of famous spots to travel and hike and I've been to Lake Louise and I took Lake Louise and and that photo ended up in National Geographic online.",
      "targetText": "Sort of famous spots to travel and hike and I've been to Lake Louise and that photo ended up in National Geographic online.",
      "targetSegments": [
        {
          "text": "Sort of famous spots to travel and hike and I've been to Lake Louise ",
          "emphasis": false
        },
        {
          "text": "and that",
          "emphasis": true
        },
        {
          "text": " photo ended up in National Geographic online.",
          "emphasis": false
        }
      ],
      "originalAudio": "assets/audio/realedit/show_2c2IJzenX6Q6gJxc2aGRf8-5eUimgKIjnroT9AZIRQr7p/original.wav",
      "cascaded": [
        {
          "label": "EditVoice Cascaded",
          "audio": "assets/audio/realedit/show_2c2IJzenX6Q6gJxc2aGRf8-5eUimgKIjnroT9AZIRQr7p/editvoice-cascaded.wav?v=2"
        },
        {
          "label": "FluentSpeech",
          "audio": "assets/audio/realedit/show_2c2IJzenX6Q6gJxc2aGRf8-5eUimgKIjnroT9AZIRQr7p/fluentspeech.wav"
        },
        {
          "label": "VoiceCraft",
          "audio": "assets/audio/realedit/show_2c2IJzenX6Q6gJxc2aGRf8-5eUimgKIjnroT9AZIRQr7p/voicecraft.wav"
        },
        {
          "label": "SSR-Speech",
          "audio": "assets/audio/realedit/show_2c2IJzenX6Q6gJxc2aGRf8-5eUimgKIjnroT9AZIRQr7p/ssr-speech.wav"
        }
      ],
      "endToEnd": [
        {
          "label": "EditVoice End-to-End",
          "audio": "assets/audio/realedit/show_2c2IJzenX6Q6gJxc2aGRf8-5eUimgKIjnroT9AZIRQr7p/editvoice-end-to-end.wav"
        },
        {
          "label": "Ming-UniAudio",
          "audio": "assets/audio/realedit/show_2c2IJzenX6Q6gJxc2aGRf8-5eUimgKIjnroT9AZIRQr7p/ming-uniaudio.wav"
        },
        {
          "label": "CosyEdit",
          "audio": "assets/audio/realedit/show_2c2IJzenX6Q6gJxc2aGRf8-5eUimgKIjnroT9AZIRQr7p/cosyedit.wav"
        }
      ]
    },
    {
      "id": "6345_93302_000075_000009",
      "originalText": "He loved her with all his heart, and he, also, had what she had never suspected in him, the literary sense.",
      "targetText": "He loved her with all his heart, and he, also, had what she had always hoped to be in him, the literary sense.",
      "targetSegments": [
        {
          "text": "He loved her with all his heart, and he, also, had what she had ",
          "emphasis": false
        },
        {
          "text": "always hoped to be",
          "emphasis": true
        },
        {
          "text": " in him, the literary sense.",
          "emphasis": false
        }
      ],
      "originalAudio": "assets/audio/realedit/6345_93302_000075_000009/original.wav",
      "cascaded": [
        {
          "label": "EditVoice Cascaded",
          "audio": "assets/audio/realedit/6345_93302_000075_000009/editvoice-cascaded.wav?v=2"
        },
        {
          "label": "FluentSpeech",
          "audio": "assets/audio/realedit/6345_93302_000075_000009/fluentspeech.wav"
        },
        {
          "label": "VoiceCraft",
          "audio": "assets/audio/realedit/6345_93302_000075_000009/voicecraft.wav"
        },
        {
          "label": "SSR-Speech",
          "audio": "assets/audio/realedit/6345_93302_000075_000009/ssr-speech.wav"
        }
      ],
      "endToEnd": [
        {
          "label": "EditVoice End-to-End",
          "audio": "assets/audio/realedit/6345_93302_000075_000009/editvoice-end-to-end.wav"
        },
        {
          "label": "Ming-UniAudio",
          "audio": "assets/audio/realedit/6345_93302_000075_000009/ming-uniaudio.wav"
        },
        {
          "label": "CosyEdit",
          "audio": "assets/audio/realedit/6345_93302_000075_000009/cosyedit.wav"
        }
      ]
    },
    {
      "id": "show_2cH1Sf7Tg3TiDdGpD3oLiR-0opjgwiSz3AWOOoE49L9pi",
      "originalText": "The Patriots will just skiing blocking but their backs and tight ends, maybe tighten the formations a little bit.",
      "targetText": "The Patriots will just focus on their wide receivers and tight ends, maybe tighten the formations a little bit.",
      "targetSegments": [
        {
          "text": "The Patriots will just ",
          "emphasis": false
        },
        {
          "text": "focus on their wide receivers",
          "emphasis": true
        },
        {
          "text": " and tight ends, maybe tighten the formations a little bit.",
          "emphasis": false
        }
      ],
      "originalAudio": "assets/audio/realedit/show_2cH1Sf7Tg3TiDdGpD3oLiR-0opjgwiSz3AWOOoE49L9pi/original.wav",
      "cascaded": [
        {
          "label": "EditVoice Cascaded",
          "audio": "assets/audio/realedit/show_2cH1Sf7Tg3TiDdGpD3oLiR-0opjgwiSz3AWOOoE49L9pi/editvoice-cascaded.wav?v=2"
        },
        {
          "label": "FluentSpeech",
          "audio": "assets/audio/realedit/show_2cH1Sf7Tg3TiDdGpD3oLiR-0opjgwiSz3AWOOoE49L9pi/fluentspeech.wav"
        },
        {
          "label": "VoiceCraft",
          "audio": "assets/audio/realedit/show_2cH1Sf7Tg3TiDdGpD3oLiR-0opjgwiSz3AWOOoE49L9pi/voicecraft.wav"
        },
        {
          "label": "SSR-Speech",
          "audio": "assets/audio/realedit/show_2cH1Sf7Tg3TiDdGpD3oLiR-0opjgwiSz3AWOOoE49L9pi/ssr-speech.wav"
        }
      ],
      "endToEnd": [
        {
          "label": "EditVoice End-to-End",
          "audio": "assets/audio/realedit/show_2cH1Sf7Tg3TiDdGpD3oLiR-0opjgwiSz3AWOOoE49L9pi/editvoice-end-to-end.wav"
        },
        {
          "label": "Ming-UniAudio",
          "audio": "assets/audio/realedit/show_2cH1Sf7Tg3TiDdGpD3oLiR-0opjgwiSz3AWOOoE49L9pi/ming-uniaudio.wav"
        },
        {
          "label": "CosyEdit",
          "audio": "assets/audio/realedit/show_2cH1Sf7Tg3TiDdGpD3oLiR-0opjgwiSz3AWOOoE49L9pi/cosyedit.wav"
        }
      ]
    },
    {
      "id": "show_2cQVtitXsGYcp9kIYBi9VJ-7wZR6aZIx7PTYFcShbre2k",
      "originalText": "Community so I didn't ever feel that openness until I moved back and I wasn't in that realm anymore.",
      "targetText": "Community so I didn't ever feel that openness until I moved across the country and I wasn't in that realm anymore.",
      "targetSegments": [
        {
          "text": "Community so I didn't ever feel that openness until I moved ",
          "emphasis": false
        },
        {
          "text": "across the country",
          "emphasis": true
        },
        {
          "text": " and I wasn't in that realm anymore.",
          "emphasis": false
        }
      ],
      "originalAudio": "assets/audio/realedit/show_2cQVtitXsGYcp9kIYBi9VJ-7wZR6aZIx7PTYFcShbre2k/original.wav",
      "cascaded": [
        {
          "label": "EditVoice Cascaded",
          "audio": "assets/audio/realedit/show_2cQVtitXsGYcp9kIYBi9VJ-7wZR6aZIx7PTYFcShbre2k/editvoice-cascaded.wav?v=2"
        },
        {
          "label": "FluentSpeech",
          "audio": "assets/audio/realedit/show_2cQVtitXsGYcp9kIYBi9VJ-7wZR6aZIx7PTYFcShbre2k/fluentspeech.wav"
        },
        {
          "label": "VoiceCraft",
          "audio": "assets/audio/realedit/show_2cQVtitXsGYcp9kIYBi9VJ-7wZR6aZIx7PTYFcShbre2k/voicecraft.wav"
        },
        {
          "label": "SSR-Speech",
          "audio": "assets/audio/realedit/show_2cQVtitXsGYcp9kIYBi9VJ-7wZR6aZIx7PTYFcShbre2k/ssr-speech.wav"
        }
      ],
      "endToEnd": [
        {
          "label": "EditVoice End-to-End",
          "audio": "assets/audio/realedit/show_2cQVtitXsGYcp9kIYBi9VJ-7wZR6aZIx7PTYFcShbre2k/editvoice-end-to-end.wav"
        },
        {
          "label": "Ming-UniAudio",
          "audio": "assets/audio/realedit/show_2cQVtitXsGYcp9kIYBi9VJ-7wZR6aZIx7PTYFcShbre2k/ming-uniaudio.wav"
        },
        {
          "label": "CosyEdit",
          "audio": "assets/audio/realedit/show_2cQVtitXsGYcp9kIYBi9VJ-7wZR6aZIx7PTYFcShbre2k/cosyedit.wav"
        }
      ]
    },
    {
      "id": "2506_11278_000011_000000",
      "originalText": "We are three sisters, from seventeen to twenty two.",
      "targetText": "We are six hundred siblings, from negative seventeen to twenty two.",
      "targetSegments": [
        {
          "text": "We are ",
          "emphasis": false
        },
        {
          "text": "six hundred siblings, from negative",
          "emphasis": true
        },
        {
          "text": " seventeen to twenty two.",
          "emphasis": false
        }
      ],
      "originalAudio": "assets/audio/realedit/2506_11278_000011_000000/original.wav",
      "cascaded": [
        {
          "label": "EditVoice Cascaded",
          "audio": "assets/audio/realedit/2506_11278_000011_000000/editvoice-cascaded.wav?v=2"
        },
        {
          "label": "FluentSpeech",
          "audio": "assets/audio/realedit/2506_11278_000011_000000/fluentspeech.wav"
        },
        {
          "label": "VoiceCraft",
          "audio": "assets/audio/realedit/2506_11278_000011_000000/voicecraft.wav"
        },
        {
          "label": "SSR-Speech",
          "audio": "assets/audio/realedit/2506_11278_000011_000000/ssr-speech.wav"
        }
      ],
      "endToEnd": [
        {
          "label": "EditVoice End-to-End",
          "audio": "assets/audio/realedit/2506_11278_000011_000000/editvoice-end-to-end.wav"
        },
        {
          "label": "Ming-UniAudio",
          "audio": "assets/audio/realedit/2506_11278_000011_000000/ming-uniaudio.wav"
        },
        {
          "label": "CosyEdit",
          "audio": "assets/audio/realedit/2506_11278_000011_000000/cosyedit.wav"
        }
      ]
    },
    {
      "id": "show_1TH2TkfOKETXMhheVKhnSF-4OR6mYxdRwIdRfZAZyIg0d",
      "originalText": "Interesting and I think this is a comment a much more common phenomenon nowadays is that she just found out that she has a fifth sibling?",
      "targetText": "Interesting and I think she just found out that she has a fifth sibling?",
      "targetSegments": [
        {
          "text": "Interesting and I ",
          "emphasis": false
        },
        {
          "text": "think she",
          "emphasis": true
        },
        {
          "text": " just found out that she has a fifth sibling?",
          "emphasis": false
        }
      ],
      "originalAudio": "assets/audio/realedit/show_1TH2TkfOKETXMhheVKhnSF-4OR6mYxdRwIdRfZAZyIg0d/original.wav",
      "cascaded": [
        {
          "label": "EditVoice Cascaded",
          "audio": "assets/audio/realedit/show_1TH2TkfOKETXMhheVKhnSF-4OR6mYxdRwIdRfZAZyIg0d/editvoice-cascaded.wav?v=2"
        },
        {
          "label": "FluentSpeech",
          "audio": "assets/audio/realedit/show_1TH2TkfOKETXMhheVKhnSF-4OR6mYxdRwIdRfZAZyIg0d/fluentspeech.wav"
        },
        {
          "label": "VoiceCraft",
          "audio": "assets/audio/realedit/show_1TH2TkfOKETXMhheVKhnSF-4OR6mYxdRwIdRfZAZyIg0d/voicecraft.wav"
        },
        {
          "label": "SSR-Speech",
          "audio": "assets/audio/realedit/show_1TH2TkfOKETXMhheVKhnSF-4OR6mYxdRwIdRfZAZyIg0d/ssr-speech.wav"
        }
      ],
      "endToEnd": [
        {
          "label": "EditVoice End-to-End",
          "audio": "assets/audio/realedit/show_1TH2TkfOKETXMhheVKhnSF-4OR6mYxdRwIdRfZAZyIg0d/editvoice-end-to-end.wav"
        },
        {
          "label": "Ming-UniAudio",
          "audio": "assets/audio/realedit/show_1TH2TkfOKETXMhheVKhnSF-4OR6mYxdRwIdRfZAZyIg0d/ming-uniaudio.wav"
        },
        {
          "label": "CosyEdit",
          "audio": "assets/audio/realedit/show_1TH2TkfOKETXMhheVKhnSF-4OR6mYxdRwIdRfZAZyIg0d/cosyedit.wav"
        }
      ]
    },
    {
      "id": "YOU1000000117_S0000077",
      "originalText": "and the specific kind of meditation is what's known as loving kindness meditation or matter.",
      "targetText": "and the specific kind of ancient yogic meditation exercise is what's known as loving kindness meditation or matter.",
      "targetSegments": [
        {
          "text": "and the specific kind of ",
          "emphasis": false
        },
        {
          "text": "ancient yogic meditation exercise",
          "emphasis": true
        },
        {
          "text": " is what's known as loving kindness meditation or matter.",
          "emphasis": false
        }
      ],
      "originalAudio": "assets/audio/realedit/YOU1000000117_S0000077/original.wav",
      "cascaded": [
        {
          "label": "EditVoice Cascaded",
          "audio": "assets/audio/realedit/YOU1000000117_S0000077/editvoice-cascaded.wav?v=2"
        },
        {
          "label": "FluentSpeech",
          "audio": "assets/audio/realedit/YOU1000000117_S0000077/fluentspeech.wav"
        },
        {
          "label": "VoiceCraft",
          "audio": "assets/audio/realedit/YOU1000000117_S0000077/voicecraft.wav"
        },
        {
          "label": "SSR-Speech",
          "audio": "assets/audio/realedit/YOU1000000117_S0000077/ssr-speech.wav"
        }
      ],
      "endToEnd": [
        {
          "label": "EditVoice End-to-End",
          "audio": "assets/audio/realedit/YOU1000000117_S0000077/editvoice-end-to-end.wav"
        },
        {
          "label": "Ming-UniAudio",
          "audio": "assets/audio/realedit/YOU1000000117_S0000077/ming-uniaudio.wav"
        },
        {
          "label": "CosyEdit",
          "audio": "assets/audio/realedit/YOU1000000117_S0000077/cosyedit.wav"
        }
      ]
    },
    {
      "id": "YOU1000000174_S0000066",
      "originalText": "we have done a lot of work around vaccine planning but also realistically it's not gonna be available to community members right away.",
      "targetText": "we have done a lot of work but also realistically it's not gonna be available to community members right away.",
      "targetSegments": [
        {
          "text": "we have done a lot of ",
          "emphasis": false
        },
        {
          "text": "work but",
          "emphasis": true
        },
        {
          "text": " also realistically it's not gonna be available to community members right away.",
          "emphasis": false
        }
      ],
      "originalAudio": "assets/audio/realedit/YOU1000000174_S0000066/original.wav",
      "cascaded": [
        {
          "label": "EditVoice Cascaded",
          "audio": "assets/audio/realedit/YOU1000000174_S0000066/editvoice-cascaded.wav?v=2"
        },
        {
          "label": "FluentSpeech",
          "audio": "assets/audio/realedit/YOU1000000174_S0000066/fluentspeech.wav"
        },
        {
          "label": "VoiceCraft",
          "audio": "assets/audio/realedit/YOU1000000174_S0000066/voicecraft.wav"
        },
        {
          "label": "SSR-Speech",
          "audio": "assets/audio/realedit/YOU1000000174_S0000066/ssr-speech.wav"
        }
      ],
      "endToEnd": [
        {
          "label": "EditVoice End-to-End",
          "audio": "assets/audio/realedit/YOU1000000174_S0000066/editvoice-end-to-end.wav"
        },
        {
          "label": "Ming-UniAudio",
          "audio": "assets/audio/realedit/YOU1000000174_S0000066/ming-uniaudio.wav"
        },
        {
          "label": "CosyEdit",
          "audio": "assets/audio/realedit/YOU1000000174_S0000066/cosyedit.wav"
        }
      ]
    },
    {
      "id": "show_1c8f0MS5LcfbSvwexFC9mn-1MY1u1xOyiFAWXGRqyPJj7",
      "originalText": "You know with hesitation everything is counted to the T and says if every drink is measured, how are you going to give a regular an honest poor?",
      "targetText": "You know with hesitation everything is counted to the T and says if you're calculating the nutritional information, how are you going to provide the same service to an honest poor?",
      "targetSegments": [
        {
          "text": "You know with hesitation everything is counted to the T and says if ",
          "emphasis": false
        },
        {
          "text": "you're calculating the nutritional information,",
          "emphasis": true
        },
        {
          "text": " how are you going to ",
          "emphasis": false
        },
        {
          "text": "provide the same service to",
          "emphasis": true
        },
        {
          "text": " an honest poor?",
          "emphasis": false
        }
      ],
      "originalAudio": "assets/audio/realedit/show_1c8f0MS5LcfbSvwexFC9mn-1MY1u1xOyiFAWXGRqyPJj7/original.wav",
      "cascaded": [
        {
          "label": "EditVoice Cascaded",
          "audio": "assets/audio/realedit/show_1c8f0MS5LcfbSvwexFC9mn-1MY1u1xOyiFAWXGRqyPJj7/editvoice-cascaded.wav?v=2"
        },
        {
          "label": "FluentSpeech",
          "audio": "assets/audio/realedit/show_1c8f0MS5LcfbSvwexFC9mn-1MY1u1xOyiFAWXGRqyPJj7/fluentspeech.wav"
        },
        {
          "label": "VoiceCraft",
          "audio": "assets/audio/realedit/show_1c8f0MS5LcfbSvwexFC9mn-1MY1u1xOyiFAWXGRqyPJj7/voicecraft.wav"
        },
        {
          "label": "SSR-Speech",
          "audio": "assets/audio/realedit/show_1c8f0MS5LcfbSvwexFC9mn-1MY1u1xOyiFAWXGRqyPJj7/ssr-speech.wav"
        }
      ],
      "endToEnd": [
        {
          "label": "EditVoice End-to-End",
          "audio": "assets/audio/realedit/show_1c8f0MS5LcfbSvwexFC9mn-1MY1u1xOyiFAWXGRqyPJj7/editvoice-end-to-end.wav"
        },
        {
          "label": "Ming-UniAudio",
          "audio": "assets/audio/realedit/show_1c8f0MS5LcfbSvwexFC9mn-1MY1u1xOyiFAWXGRqyPJj7/ming-uniaudio.wav"
        },
        {
          "label": "CosyEdit",
          "audio": "assets/audio/realedit/show_1c8f0MS5LcfbSvwexFC9mn-1MY1u1xOyiFAWXGRqyPJj7/cosyedit.wav"
        }
      ]
    }
  ],
  "promptConsistency": [
    {
      "id": "common_voice_en_590785-common_voice_en_590794",
      "targetText": "Did you write it or didn't you?",
      "audios": [
        {
          "label": "Prompt",
          "audio": "assets/audio/prompt-consistency/common_voice_en_590785-common_voice_en_590794/prompt.wav"
        },
        {
          "label": "Ground Truth",
          "audio": "assets/audio/prompt-consistency/common_voice_en_590785-common_voice_en_590794/ground-truth.wav"
        },
        {
          "label": "CPS w/o Prompt Consistency",
          "audio": "assets/audio/prompt-consistency/common_voice_en_590785-common_voice_en_590794/cps-without-prompt-consistency.wav"
        },
        {
          "label": "CPS",
          "audio": "assets/audio/prompt-consistency/common_voice_en_590785-common_voice_en_590794/cps.wav"
        }
      ]
    },
    {
      "id": "common_voice_en_2586258-common_voice_en_2586260",
      "targetText": "Oh, what are you going to when he arrives?",
      "audios": [
        {
          "label": "Prompt",
          "audio": "assets/audio/prompt-consistency/common_voice_en_2586258-common_voice_en_2586260/prompt.wav"
        },
        {
          "label": "Ground Truth",
          "audio": "assets/audio/prompt-consistency/common_voice_en_2586258-common_voice_en_2586260/ground-truth.wav"
        },
        {
          "label": "CPS w/o Prompt Consistency",
          "audio": "assets/audio/prompt-consistency/common_voice_en_2586258-common_voice_en_2586260/cps-without-prompt-consistency.wav"
        },
        {
          "label": "CPS",
          "audio": "assets/audio/prompt-consistency/common_voice_en_2586258-common_voice_en_2586260/cps.wav"
        }
      ]
    }
  ]
};
