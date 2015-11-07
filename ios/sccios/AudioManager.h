//
//  AudioManager.h
//  sccios
//
//  Created by Manfred Touron on 07/11/15.
//  Copyright © 2015 Facebook. All rights reserved.
//

#ifndef AudioManager_h
#define AudioManager_h

#import "RCTBridgeModule.h"
#import "STKAudioPlayer.h"

@interface AudioManager : NSObject <RCTBridgeModule, STKAudioPlayerDelegate>

@property (nonatomic, strong) STKAudioPlayer *audioPlayer;
@property (nonatomic, readwrite) BOOL isPlayingWithOthers;

- (void)play;
- (void)pause;

@end

#endif /* AudioManager_h */
