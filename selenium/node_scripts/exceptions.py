# define Python user-defined exceptions
class Error(Exception):
   """Base class for other exceptions"""
   pass

class WebNotClickable(Error):
   """Raised when website link can not be clicked"""
   pass
class AnimationError(Error):
   """Raised when animation error has accured"""
   pass
class NoDeviceError(Error):
   """Raised when no device was received"""
   pass
class WebNotFound(Error):
   """Raised when web site was not found in max pages"""
   pass
class NextButtonNotFound(Error):
   """Raised when button for next page is not found"""
   pass
class NextButtonCouldNotBeClicked(Error):
   """Raised when button for next page is could not be clicked"""
   pass
class FoundCaptcha(Error):
   """CAPTCHA"""
   pass