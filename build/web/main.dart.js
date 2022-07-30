define('zapp_user_main', ['dart_sdk', 'flutter_sdk'], (function load__zapp_user_main(dart_sdk, flutter_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const js = dart_sdk.js;
  const ui = dart_sdk.ui;
  const _internal = dart_sdk._internal;
  const _js_helper = dart_sdk._js_helper;
  const convert = dart_sdk.convert;
  const typed_data = dart_sdk.typed_data;
  const developer = dart_sdk.developer;
  const _native_typed_data = dart_sdk._native_typed_data;
  const collection = dart_sdk.collection;
  const math = dart_sdk.math;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const binding = flutter_sdk.src__widgets__binding;
  const app = flutter_sdk.src__material__app;
  const scaffold = flutter_sdk.src__material__scaffold;
  const app_bar = flutter_sdk.src__material__app_bar;
  const text = flutter_sdk.src__widgets__text;
  const framework = flutter_sdk.src__widgets__framework;
  const assertions = flutter_sdk.src__foundation__assertions;
  const basic = flutter_sdk.src__widgets__basic;
  const change_notifier = flutter_sdk.src__foundation__change_notifier;
  const scroll_controller = flutter_sdk.src__widgets__scroll_controller;
  const alignment = flutter_sdk.src__painting__alignment;
  const scroll_view = flutter_sdk.src__widgets__scroll_view;
  const progress_indicator = flutter_sdk.src__material__progress_indicator;
  const diagnostics = flutter_sdk.src__foundation__diagnostics;
  const sliver = flutter_sdk.src__widgets__sliver;
  const layout_builder = flutter_sdk.src__widgets__layout_builder;
  const equality = flutter_sdk.src__equality;
  const value_listenable_builder = flutter_sdk.src__widgets__value_listenable_builder;
  const theme = flutter_sdk.src__material__theme;
  const material = flutter_sdk.src__material__material;
  const list_tile = flutter_sdk.src__material__list_tile;
  const iterable_extensions = flutter_sdk.src__iterable_extensions;
  const string_scanner = flutter_sdk.src__string_scanner;
  const canonicalized_map = flutter_sdk.src__canonicalized_map;
  const span_exception = flutter_sdk.src__span_exception;
  const queue_list = flutter_sdk.src__queue_list;
  var $46zapp_entry = Object.create(dart.library);
  var main = Object.create(dart.library);
  var bloc = Object.create(dart.library);
  var app$ = Object.create(dart.library);
  var simple_bloc_observer = Object.create(dart.library);
  var flutter_bloc = Object.create(dart.library);
  var bloc$ = Object.create(dart.library);
  var bloc_observer = Object.create(dart.library);
  var change = Object.create(dart.library);
  var cubit = Object.create(dart.library);
  var transition = Object.create(dart.library);
  var post_page = Object.create(dart.library);
  var provider = Object.create(dart.library);
  var bloc_builder = Object.create(dart.library);
  var bloc_consumer = Object.create(dart.library);
  var bloc_listener = Object.create(dart.library);
  var bloc_provider = Object.create(dart.library);
  var bloc_selector = Object.create(dart.library);
  var multi_bloc_listener = Object.create(dart.library);
  var multi_bloc_provider = Object.create(dart.library);
  var multi_repository_provider = Object.create(dart.library);
  var repository_provider = Object.create(dart.library);
  var post_bloc = Object.create(dart.library);
  var post_event = Object.create(dart.library);
  var post_list = Object.create(dart.library);
  var http = Object.create(dart.library);
  var async_provider = Object.create(dart.library);
  var change_notifier_provider = Object.create(dart.library);
  var consumer = Object.create(dart.library);
  var listenable_provider = Object.create(dart.library);
  var provider$ = Object.create(dart.library);
  var proxy_provider = Object.create(dart.library);
  var reassemble_handler = Object.create(dart.library);
  var selector$ = Object.create(dart.library);
  var value_listenable_provider = Object.create(dart.library);
  var single_child_widget = Object.create(dart.library);
  var bloc_concurrency = Object.create(dart.library);
  var equatable = Object.create(dart.library);
  var post_state = Object.create(dart.library);
  var post = Object.create(dart.library);
  var stream_transform = Object.create(dart.library);
  var bottom_loader = Object.create(dart.library);
  var post_list_item = Object.create(dart.library);
  var client$ = Object.create(dart.library);
  var exception = Object.create(dart.library);
  var request$ = Object.create(dart.library);
  var response$ = Object.create(dart.library);
  var streamed_request = Object.create(dart.library);
  var base_client = Object.create(dart.library);
  var base_request = Object.create(dart.library);
  var base_response = Object.create(dart.library);
  var byte_stream = Object.create(dart.library);
  var multipart_file = Object.create(dart.library);
  var multipart_request = Object.create(dart.library);
  var streamed_response = Object.create(dart.library);
  var nested = Object.create(dart.library);
  var concurrent = Object.create(dart.library);
  var droppable = Object.create(dart.library);
  var restartable = Object.create(dart.library);
  var sequential = Object.create(dart.library);
  var equatable$ = Object.create(dart.library);
  var equatable_config = Object.create(dart.library);
  var equatable_mixin = Object.create(dart.library);
  var async_map = Object.create(dart.library);
  var combine_latest = Object.create(dart.library);
  var concatenate = Object.create(dart.library);
  var merge = Object.create(dart.library);
  var rate_limit = Object.create(dart.library);
  var scan = Object.create(dart.library);
  var $switch = Object.create(dart.library);
  var take_until = Object.create(dart.library);
  var tap = Object.create(dart.library);
  var where = Object.create(dart.library);
  var browser_client = Object.create(dart.library);
  var http_parser = Object.create(dart.library);
  var utils = Object.create(dart.library);
  var multipart_file_stub = Object.create(dart.library);
  var boundary_characters = Object.create(dart.library);
  var equatable_utils = Object.create(dart.library);
  var aggregate_sample = Object.create(dart.library);
  var from_handlers = Object.create(dart.library);
  var authentication_challenge = Object.create(dart.library);
  var case_insensitive_map = Object.create(dart.library);
  var chunked_coding = Object.create(dart.library);
  var http_date = Object.create(dart.library);
  var media_type = Object.create(dart.library);
  var scan$ = Object.create(dart.library);
  var utils$ = Object.create(dart.library);
  var decoder = Object.create(dart.library);
  var encoder = Object.create(dart.library);
  var typed_data$ = Object.create(dart.library);
  var charcodes = Object.create(dart.library);
  var typed_queue = Object.create(dart.library);
  var typed_buffers = Object.create(dart.library);
  var typed_buffer = Object.create(dart.library);
  var $toString = dartx.toString;
  var $any = dartx.any;
  var $runtimeType = dartx.runtimeType;
  var $add = dartx.add;
  var $remove = dartx.remove;
  var $map = dartx.map;
  var $isEmpty = dartx.isEmpty;
  var $clear = dartx.clear;
  var $hashCode = dartx.hashCode;
  var $_equals = dartx._equals;
  var $isNotEmpty = dartx.isNotEmpty;
  var $length = dartx.length;
  var $addAll = dartx.addAll;
  var $toList = dartx.toList;
  var $_get = dartx._get;
  var $entries = dartx.entries;
  var $_set = dartx._set;
  var $containsKey = dartx.containsKey;
  var $toLowerCase = dartx.toLowerCase;
  var $cast = dartx.cast;
  var $forEach = dartx.forEach;
  var $replaceAll = dartx.replaceAll;
  var $reversed = dartx.reversed;
  var $removeWhere = dartx.removeWhere;
  var $contains = dartx.contains;
  var $responseType = dartx.responseType;
  var $onLoad = dartx.onLoad;
  var $response = dartx.response;
  var $asUint8List = dartx.asUint8List;
  var $responseHeaders = dartx.responseHeaders;
  var $onError = dartx.onError;
  var $join = dartx.join;
  var $buffer = dartx.buffer;
  var $fold = dartx.fold;
  var $keys = dartx.keys;
  var $rightShift = dartx['>>'];
  var $indexOf = dartx.indexOf;
  var $split = dartx.split;
  var $replaceAllMapped = dartx.replaceAllMapped;
  var $substring = dartx.substring;
  var $toRadixString = dartx.toRadixString;
  var $toUpperCase = dartx.toUpperCase;
  var $codeUnits = dartx.codeUnits;
  var $setRange = dartx.setRange;
  var $fillRange = dartx.fillRange;
  var $sublist = dartx.sublist;
  var $noSuchMethod = dartx.noSuchMethod;
  var $elementSizeInBytes = dartx.elementSizeInBytes;
  var $offsetInBytes = dartx.offsetInBytes;
  var $insertAll = dartx.insertAll;
  dart._checkModuleNullSafetyMode(true);
  var T$ = {
    VoidTovoid: () => (T$.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    ListOfString: () => (T$.ListOfString = dart.constFn(core.List$(core.String)))(),
    ListOfStringTodynamic: () => (T$.ListOfStringTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T$.ListOfString()])))(),
    JSArrayOfString: () => (T$.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    VoidToNull: () => (T$.VoidToNull = dart.constFn(dart.fnType(core.Null, [])))(),
    ObjectAndStackTraceTovoid: () => (T$.ObjectAndStackTraceTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace])))(),
    ZoneAndZoneDelegateAndZone__Tovoid: () => (T$.ZoneAndZoneDelegateAndZone__Tovoid = dart.constFn(dart.fnType(dart.void, [async.Zone, async.ZoneDelegate, async.Zone, core.String])))(),
    JSArrayOfStreamSubscription: () => (T$.JSArrayOfStreamSubscription = dart.constFn(_interceptors.JSArray$(async.StreamSubscription)))(),
    JSArrayOf_Handler: () => (T$.JSArrayOf_Handler = dart.constFn(_interceptors.JSArray$(bloc$._Handler)))(),
    JSArrayOf_Emitter: () => (T$.JSArrayOf_Emitter = dart.constFn(_interceptors.JSArray$(bloc$._Emitter)))(),
    _HandlerTobool: () => (T$._HandlerTobool = dart.constFn(dart.fnType(core.bool, [bloc$._Handler])))(),
    VoidTobool: () => (T$.VoidTobool = dart.constFn(dart.fnType(core.bool, [])))(),
    dynamicTobool: () => (T$.dynamicTobool = dart.constFn(dart.fnType(core.bool, [dart.dynamic])))(),
    FutureOfvoid: () => (T$.FutureOfvoid = dart.constFn(async.Future$(dart.void)))(),
    _EmitterToFutureOfvoid: () => (T$._EmitterToFutureOfvoid = dart.constFn(dart.fnType(T$.FutureOfvoid(), [bloc$._Emitter])))(),
    StreamSubscriptionToFutureOfvoid: () => (T$.StreamSubscriptionToFutureOfvoid = dart.constFn(dart.fnType(T$.FutureOfvoid(), [async.StreamSubscription])))(),
    BlocOverridesN: () => (T$.BlocOverridesN = dart.constFn(dart.nullable(bloc$.BlocOverrides)))(),
    ObjectN: () => (T$.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    LinkedMapOfObjectN$ObjectN: () => (T$.LinkedMapOfObjectN$ObjectN = dart.constFn(_js_helper.LinkedMap$(T$.ObjectN(), T$.ObjectN())))(),
    JSArrayOfFutureOfvoid: () => (T$.JSArrayOfFutureOfvoid = dart.constFn(_interceptors.JSArray$(T$.FutureOfvoid())))(),
    ListOfvoid: () => (T$.ListOfvoid = dart.constFn(core.List$(dart.void)))(),
    ListOfvoidToNull: () => (T$.ListOfvoidToNull = dart.constFn(dart.fnType(core.Null, [T$.ListOfvoid()])))(),
    FutureNOfvoid: () => (T$.FutureNOfvoid = dart.constFn(dart.nullable(T$.FutureOfvoid())))(),
    VoidToFutureNOfvoid: () => (T$.VoidToFutureNOfvoid = dart.constFn(dart.fnType(T$.FutureNOfvoid(), [])))(),
    CompleterOfvoid: () => (T$.CompleterOfvoid = dart.constFn(async.Completer$(dart.void)))(),
    VoidToFutureOrOfvoid: () => (T$.VoidToFutureOrOfvoid = dart.constFn(dart.fnType(dart.void, [])))(),
    JSArrayOfVoidToFutureOrOfvoid: () => (T$.JSArrayOfVoidToFutureOrOfvoid = dart.constFn(_interceptors.JSArray$(T$.VoidToFutureOrOfvoid())))(),
    FutureOrNOfvoidTovoid: () => (T$.FutureOrNOfvoidTovoid = dart.constFn(dart.fnType(dart.void, [], [dart.void])))(),
    dynamicToStream: () => (T$.dynamicToStream = dart.constFn(dart.fnType(async.Stream, [dart.dynamic])))(),
    StreamAndFnToStream: () => (T$.StreamAndFnToStream = dart.constFn(dart.fnType(async.Stream, [async.Stream, T$.dynamicToStream()])))(),
    FunctionN: () => (T$.FunctionN = dart.constFn(dart.nullable(core.Function)))(),
    ZoneSpecificationN: () => (T$.ZoneSpecificationN = dart.constFn(dart.nullable(async.ZoneSpecification)))(),
    MapOfObjectN$ObjectN: () => (T$.MapOfObjectN$ObjectN = dart.constFn(core.Map$(T$.ObjectN(), T$.ObjectN())))(),
    MapNOfObjectN$ObjectN: () => (T$.MapNOfObjectN$ObjectN = dart.constFn(dart.nullable(T$.MapOfObjectN$ObjectN())))(),
    Fn__ToR: () => (T$.Fn__ToR = dart.constFn(dart.gFnType(R => [R, [dart.fnType(R, [])], {onError: T$.FunctionN(), zoneSpecification: T$.ZoneSpecificationN(), zoneValues: T$.MapNOfObjectN$ObjectN()}, {}], R => [T$.ObjectN()])))(),
    BlocProviderOfPostBloc: () => (T$.BlocProviderOfPostBloc = dart.constFn(bloc_provider.BlocProvider$(post_bloc.PostBloc)))(),
    BuildContextToPostBloc: () => (T$.BuildContextToPostBloc = dart.constFn(dart.fnType(post_bloc.PostBloc, [framework.BuildContext])))(),
    StateStreamableN: () => (T$.StateStreamableN = dart.constFn(dart.nullable(bloc$.StateStreamable)))(),
    InheritedContextOfStateStreamableN: () => (T$.InheritedContextOfStateStreamableN = dart.constFn(provider$.InheritedContext$(T$.StateStreamableN())))(),
    InheritedContextOfStateStreamableNAndStateStreamableToFn: () => (T$.InheritedContextOfStateStreamableNAndStateStreamableToFn = dart.constFn(dart.fnType(T$.VoidTovoid(), [T$.InheritedContextOfStateStreamableN(), bloc$.StateStreamable])))(),
    dynamicTovoid: () => (T$.dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))(),
    BuildContextToWidget: () => (T$.BuildContextToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext])))(),
    TTovoid$2: () => (T$.TTovoid$2 = dart.constFn(dart.gFnType(T => [dart.void, [T]], T => [T$.ObjectN()])))(),
    ListOfPost: () => (T$.ListOfPost = dart.constFn(core.List$(post.Post)))(),
    IdentityMapOfString$String: () => (T$.IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))(),
    dynamicToPost: () => (T$.dynamicToPost = dart.constFn(dart.fnType(post.Post, [dart.dynamic])))(),
    JSArrayOfObject: () => (T$.JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))(),
    BlocBuilderOfPostBloc$PostState: () => (T$.BlocBuilderOfPostBloc$PostState = dart.constFn(bloc_builder.BlocBuilder$(post_bloc.PostBloc, post_state.PostState)))(),
    BuildContextAndintToStatelessWidget: () => (T$.BuildContextAndintToStatelessWidget = dart.constFn(dart.fnType(framework.StatelessWidget, [framework.BuildContext, core.int])))(),
    BuildContextAndPostStateToWidget: () => (T$.BuildContextAndPostStateToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, post_state.PostState])))(),
    FutureOfResponse: () => (T$.FutureOfResponse = dart.constFn(async.Future$(response$.Response)))(),
    ClientToFutureOfResponse: () => (T$.ClientToFutureOfResponse = dart.constFn(dart.fnType(T$.FutureOfResponse(), [client$.Client])))(),
    FutureOfString: () => (T$.FutureOfString = dart.constFn(async.Future$(core.String)))(),
    ClientToFutureOfString: () => (T$.ClientToFutureOfString = dart.constFn(dart.fnType(T$.FutureOfString(), [client$.Client])))(),
    FutureOfUint8List: () => (T$.FutureOfUint8List = dart.constFn(async.Future$(typed_data.Uint8List)))(),
    ClientToFutureOfUint8List: () => (T$.ClientToFutureOfUint8List = dart.constFn(dart.fnType(T$.FutureOfUint8List(), [client$.Client])))(),
    ObjectNToNull: () => (T$.ObjectNToNull = dart.constFn(dart.fnType(core.Null, [T$.ObjectN()])))(),
    ChangeNotifierN: () => (T$.ChangeNotifierN = dart.constFn(dart.nullable(change_notifier.ChangeNotifier)))(),
    BuildContextAndChangeNotifierNTovoid: () => (T$.BuildContextAndChangeNotifierNTovoid = dart.constFn(dart.fnType(dart.void, [framework.BuildContext, T$.ChangeNotifierN()])))(),
    ListenableN: () => (T$.ListenableN = dart.constFn(dart.nullable(change_notifier.Listenable)))(),
    InheritedContextAndListenableNToFn: () => (T$.InheritedContextAndListenableNToFn = dart.constFn(dart.fnType(T$.VoidTovoid(), [provider$.InheritedContext, T$.ListenableN()])))(),
    JSArrayOfPostEventCall: () => (T$.JSArrayOfPostEventCall = dart.constFn(_interceptors.JSArray$(provider$.PostEventCall)))(),
    IdentityMapOfString$ProviderNode: () => (T$.IdentityMapOfString$ProviderNode = dart.constFn(_js_helper.IdentityMap$(core.String, provider$.ProviderNode)))(),
    ElementTovoid: () => (T$.ElementTovoid = dart.constFn(dart.fnType(dart.void, [framework.Element])))(),
    _NestedHookElementN: () => (T$._NestedHookElementN = dart.constFn(dart.nullable(nested._NestedHookElement)))(),
    ElementTobool: () => (T$.ElementTobool = dart.constFn(dart.fnType(core.bool, [framework.Element])))(),
    FutureOfNull: () => (T$.FutureOfNull = dart.constFn(async.Future$(core.Null)))(),
    JSArrayOfDiagnosticsNode: () => (T$.JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))(),
    DefaultEqualityOfNever: () => (T$.DefaultEqualityOfNever = dart.constFn(equality.DefaultEquality$(dart.Never)))(),
    FnToR: () => (T$.FnToR = dart.constFn(dart.gFnType((T, R) => {
      var __t$TToR = () => (__t$TToR = dart.constFn(dart.fnType(R, [T])))();
      return [R, [__t$TToR()]];
    }, (T, R) => {
      var __t$TToR = () => (__t$TToR = dart.constFn(dart.fnType(R, [T])))();
      return [T$.ObjectN(), T$.ObjectN()];
    })))(),
    VoidToT: () => (T$.VoidToT = dart.constFn(dart.gFnType(T => [T, []], T => [T$.ObjectN()])))(),
    intN: () => (T$.intN = dart.constFn(dart.nullable(core.int)))(),
    JSArrayOfintN: () => (T$.JSArrayOfintN = dart.constFn(_interceptors.JSArray$(T$.intN())))(),
    ListOfint: () => (T$.ListOfint = dart.constFn(core.List$(core.int)))(),
    WidgetN: () => (T$.WidgetN = dart.constFn(dart.nullable(framework.Widget)))(),
    LinkedHashMapOfString$String: () => (T$.LinkedHashMapOfString$String = dart.constFn(collection.LinkedHashMap$(core.String, core.String)))(),
    StringAndStringTobool: () => (T$.StringAndStringTobool = dart.constFn(dart.fnType(core.bool, [core.String, core.String])))(),
    StringToint: () => (T$.StringToint = dart.constFn(dart.fnType(core.int, [core.String])))(),
    _EmptyStreamOfListOfint: () => (T$._EmptyStreamOfListOfint = dart.constFn(async._EmptyStream$(T$.ListOfint())))(),
    StreamControllerOfListOfint: () => (T$.StreamControllerOfListOfint = dart.constFn(async.StreamController$(T$.ListOfint())))(),
    StreamOfListOfint: () => (T$.StreamOfListOfint = dart.constFn(async.Stream$(T$.ListOfint())))(),
    CompleterOfUint8List: () => (T$.CompleterOfUint8List = dart.constFn(async.Completer$(typed_data.Uint8List)))(),
    ListOfintTovoid: () => (T$.ListOfintTovoid = dart.constFn(dart.fnType(dart.void, [T$.ListOfint()])))(),
    JSArrayOfMultipartFile: () => (T$.JSArrayOfMultipartFile = dart.constFn(_interceptors.JSArray$(multipart_file.MultipartFile)))(),
    StringAndStringTovoid: () => (T$.StringAndStringTovoid = dart.constFn(dart.fnType(dart.void, [core.String, core.String])))(),
    _AsyncStarImplOfListOfint: () => (T$._AsyncStarImplOfListOfint = dart.constFn(async._AsyncStarImpl$(T$.ListOfint())))(),
    intToint: () => (T$.intToint = dart.constFn(dart.fnType(core.int, [core.int])))(),
    LinkedHashSetOf_NestedHookElement: () => (T$.LinkedHashSetOf_NestedHookElement = dart.constFn(collection.LinkedHashSet$(nested._NestedHookElement)))(),
    SingleChildStateOfSingleChildStatefulWidget: () => (T$.SingleChildStateOfSingleChildStatefulWidget = dart.constFn(nested.SingleChildState$(nested.SingleChildStatefulWidget)))(),
    SingleChildStateMixinOfStatefulWidget: () => (T$.SingleChildStateMixinOfStatefulWidget = dart.constFn(nested.SingleChildStateMixin$(framework.StatefulWidget)))(),
    VoidToFutureOfvoid: () => (T$.VoidToFutureOfvoid = dart.constFn(dart.fnType(T$.FutureOfvoid(), [])))(),
    StreamControllerOfvoid: () => (T$.StreamControllerOfvoid = dart.constFn(async.StreamController$(dart.void)))(),
    voidTovoid: () => (T$.voidTovoid = dart.constFn(dart.fnType(dart.void, [dart.void])))(),
    TAnddynamicToT: () => (T$.TAnddynamicToT = dart.constFn(dart.gFnType(T => [T, [T, dart.dynamic]], T => [T$.ObjectN()])))(),
    VoidToFutureOfNull: () => (T$.VoidToFutureOfNull = dart.constFn(dart.fnType(T$.FutureOfNull(), [])))(),
    ObjectNTobool: () => (T$.ObjectNTobool = dart.constFn(dart.fnType(core.bool, [T$.ObjectN()])))(),
    LinkedHashSetOfint: () => (T$.LinkedHashSetOfint = dart.constFn(collection.LinkedHashSet$(core.int)))(),
    VoidToFn: () => (T$.VoidToFn = dart.constFn(dart.fnType(T$.VoidTovoid(), [])))(),
    FnTodynamic: () => (T$.FnTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T$.VoidTovoid()])))(),
    TAnddynamicToT$1: () => (T$.TAnddynamicToT$1 = dart.constFn(dart.gFnType(T => [T, [T, dart.dynamic]], T => [T$.ObjectN()])))(),
    TAndListNOfTToListOfT: () => (T$.TAndListNOfTToListOfT = dart.constFn(dart.gFnType(T => [core.List$(T), [T, dart.nullable(core.List$(T))]], T => [T$.ObjectN()])))(),
    StreamOfvoid: () => (T$.StreamOfvoid = dart.constFn(async.Stream$(dart.void)))(),
    voidToNull: () => (T$.voidToNull = dart.constFn(dart.fnType(core.Null, [dart.void])))(),
    VoidToNvoid: () => (T$.VoidToNvoid = dart.constFn(dart.nullable(T$.VoidTovoid())))(),
    ObjectAndStackTraceToNvoid: () => (T$.ObjectAndStackTraceToNvoid = dart.constFn(dart.nullable(T$.ObjectAndStackTraceTovoid())))(),
    VoidToStreamOfS: () => (T$.VoidToStreamOfS = dart.constFn(dart.gFnType(S => {
      var __t$StreamOfS = () => (__t$StreamOfS = dart.constFn(async.Stream$(S)))();
      return [__t$StreamOfS(), []];
    }, S => {
      var __t$StreamOfS = () => (__t$StreamOfS = dart.constFn(async.Stream$(S)))();
      return [T$.ObjectN()];
    })))(),
    FutureOrOfbool: () => (T$.FutureOrOfbool = dart.constFn(async.FutureOr$(core.bool)))(),
    LinkedHashSetOfHttpRequest: () => (T$.LinkedHashSetOfHttpRequest = dart.constFn(collection.LinkedHashSet$(html.HttpRequest)))(),
    CompleterOfStreamedResponse: () => (T$.CompleterOfStreamedResponse = dart.constFn(async.Completer$(streamed_response.StreamedResponse)))(),
    ProgressEventToNull: () => (T$.ProgressEventToNull = dart.constFn(dart.fnType(core.Null, [html.ProgressEvent])))(),
    JSArrayOfListOfString: () => (T$.JSArrayOfListOfString = dart.constFn(_interceptors.JSArray$(T$.ListOfString())))(),
    ListOfStringToString: () => (T$.ListOfStringToString = dart.constFn(dart.fnType(core.String, [T$.ListOfString()])))(),
    intAnddynamicToint: () => (T$.intAnddynamicToint = dart.constFn(dart.fnType(core.int, [core.int, dart.dynamic])))(),
    dynamicAnddynamicToint: () => (T$.dynamicAnddynamicToint = dart.constFn(dart.fnType(core.int, [dart.dynamic, dart.dynamic])))(),
    ObjectNToString: () => (T$.ObjectNToString = dart.constFn(dart.fnType(core.String, [T$.ObjectN()])))(),
    SAndEventSinkOfTTovoid: () => (T$.SAndEventSinkOfTTovoid = dart.constFn(dart.gFnType((S, T) => [dart.void, [S, async.EventSink$(T)]], (S, T) => [T$.ObjectN(), T$.ObjectN()])))(),
    ObjectAndStackTraceAndEventSinkOfTTovoid: () => (T$.ObjectAndStackTraceAndEventSinkOfTTovoid = dart.constFn(dart.gFnType(T => [dart.void, [core.Object, core.StackTrace, async.EventSink$(T)]], T => [T$.ObjectN()])))(),
    EventSinkOfTTovoid: () => (T$.EventSinkOfTTovoid = dart.constFn(dart.gFnType(T => [dart.void, [async.EventSink$(T)]], T => [T$.ObjectN()])))(),
    ObjectAndStackTraceToNull: () => (T$.ObjectAndStackTraceToNull = dart.constFn(dart.fnType(core.Null, [core.Object, core.StackTrace])))(),
    UnmodifiableMapViewOfString$String: () => (T$.UnmodifiableMapViewOfString$String = dart.constFn(collection.UnmodifiableMapView$(core.String, core.String)))(),
    CaseInsensitiveMapOfString: () => (T$.CaseInsensitiveMapOfString = dart.constFn(case_insensitive_map.CaseInsensitiveMap$(core.String)))(),
    ListOfAuthenticationChallenge: () => (T$.ListOfAuthenticationChallenge = dart.constFn(core.List$(authentication_challenge.AuthenticationChallenge)))(),
    VoidToAuthenticationChallenge: () => (T$.VoidToAuthenticationChallenge = dart.constFn(dart.fnType(authentication_challenge.AuthenticationChallenge, [])))(),
    VoidToListOfAuthenticationChallenge: () => (T$.VoidToListOfAuthenticationChallenge = dart.constFn(dart.fnType(T$.ListOfAuthenticationChallenge(), [])))(),
    StringToString: () => (T$.StringToString = dart.constFn(dart.fnType(core.String, [core.String])))(),
    VoidToDateTime: () => (T$.VoidToDateTime = dart.constFn(dart.fnType(core.DateTime, [])))(),
    VoidToMediaType: () => (T$.VoidToMediaType = dart.constFn(dart.fnType(media_type.MediaType, [])))(),
    MatchToString: () => (T$.MatchToString = dart.constFn(dart.fnType(core.String, [core.Match])))(),
    SinkOfListOfint: () => (T$.SinkOfListOfint = dart.constFn(core.Sink$(T$.ListOfint())))(),
    intAndStringTovoid: () => (T$.intAndStringTovoid = dart.constFn(dart.fnType(dart.void, [core.int, core.String])))(),
    JSArrayOfint: () => (T$.JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))(),
    ListOfintN: () => (T$.ListOfintN = dart.constFn(core.List$(T$.intN())))(),
    doubleN: () => (T$.doubleN = dart.constFn(dart.nullable(core.double)))(),
    ListOfdoubleN: () => (T$.ListOfdoubleN = dart.constFn(core.List$(T$.doubleN())))(),
    Int32x4N: () => (T$.Int32x4N = dart.constFn(dart.nullable(typed_data.Int32x4)))(),
    ListOfInt32x4N: () => (T$.ListOfInt32x4N = dart.constFn(core.List$(T$.Int32x4N())))(),
    Float32x4N: () => (T$.Float32x4N = dart.constFn(dart.nullable(typed_data.Float32x4)))(),
    ListOfFloat32x4N: () => (T$.ListOfFloat32x4N = dart.constFn(core.List$(T$.Float32x4N())))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(main.main, T$.VoidTovoid());
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: bloc$._FlatMapStreamTransformer.prototype
      });
    },
    get C2() {
      return C[2] = dart.fn(async.runZoned, T$.Fn__ToR());
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Posts"
      });
    },
    get C4() {
      return C[4] = dart.fn(bloc_provider.BlocProvider._startListening, T$.InheritedContextOfStateStreamableNAndStateStreamableToFn());
    },
    get C6() {
      return C[6] = dart.constList([], post.Post);
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: post_state.PostStatus.prototype,
        [_Enum__name]: "initial",
        [_Enum_index]: 0
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: post_state.PostState.prototype,
        [PostState_hasReachedMax]: false,
        [PostState_posts]: C[6] || CT.C6,
        [PostState_status]: C[7] || CT.C7
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 100000
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "failed to fetch posts"
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: 0,
        [Alignment_x]: 0
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: basic.Center.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: C[10] || CT.C10,
        [Align_heightFactor]: null,
        [Align_widthFactor]: null,
        [Align_alignment]: C[11] || CT.C11
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: post_state.PostStatus.prototype,
        [_Enum__name]: "failure",
        [_Enum_index]: 2
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "no posts"
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: basic.Center.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: C[14] || CT.C14,
        [Align_heightFactor]: null,
        [Align_widthFactor]: null,
        [Align_alignment]: C[11] || CT.C11
      });
    },
    get C15() {
      return C[15] = dart.const({
        __proto__: post_state.PostStatus.prototype,
        [_Enum__name]: "success",
        [_Enum_index]: 1
      });
    },
    get C18() {
      return C[18] = dart.const({
        __proto__: progress_indicator._ActivityIndicatorType.prototype,
        [_Enum__name]: "material",
        [_Enum_index]: 0
      });
    },
    get C17() {
      return C[17] = dart.const({
        __proto__: progress_indicator.CircularProgressIndicator.prototype,
        [Widget_key]: null,
        [ProgressIndicator_semanticsValue]: null,
        [ProgressIndicator_semanticsLabel]: null,
        [ProgressIndicator_valueColor]: null,
        [ProgressIndicator_color]: null,
        [ProgressIndicator_backgroundColor]: null,
        [ProgressIndicator_value]: null,
        [CircularProgressIndicator_strokeWidth]: 4,
        [CircularProgressIndicator__indicatorType]: C[18] || CT.C18
      });
    },
    get C16() {
      return C[16] = dart.const({
        __proto__: basic.Center.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: C[17] || CT.C17,
        [Align_heightFactor]: null,
        [Align_widthFactor]: null,
        [Align_alignment]: C[11] || CT.C11
      });
    },
    get C19() {
      return C[19] = dart.fn(change_notifier_provider.ChangeNotifierProvider._dispose, T$.BuildContextAndChangeNotifierNTovoid());
    },
    get C20() {
      return C[20] = dart.fn(listenable_provider.ListenableProvider._startListening, T$.InheritedContextAndListenableNToFn());
    },
    get C21() {
      return C[21] = dart.constList([], core.String);
    },
    get C22() {
      return C[22] = dart.const({
        __proto__: core.Object.prototype
      });
    },
    get C23() {
      return C[23] = dart.constMap(T$.ObjectN(), T$.ObjectN(), []);
    },
    get C25() {
      return C[25] = dart.const({
        __proto__: T$.DefaultEqualityOfNever().prototype
      });
    },
    get C24() {
      return C[24] = dart.const({
        __proto__: equality.DeepCollectionEquality.prototype,
        [DeepCollectionEquality__unordered]: false,
        [DeepCollectionEquality__base]: C[25] || CT.C25
      });
    },
    get C26() {
      return C[26] = dart.constList([C[7] || CT.C7, C[15] || CT.C15, C[12] || CT.C12], post_state.PostStatus);
    },
    get C29() {
      return C[29] = dart.const({
        __proto__: progress_indicator.CircularProgressIndicator.prototype,
        [Widget_key]: null,
        [ProgressIndicator_semanticsValue]: null,
        [ProgressIndicator_semanticsLabel]: null,
        [ProgressIndicator_valueColor]: null,
        [ProgressIndicator_color]: null,
        [ProgressIndicator_backgroundColor]: null,
        [ProgressIndicator_value]: null,
        [CircularProgressIndicator_strokeWidth]: 1.5,
        [CircularProgressIndicator__indicatorType]: C[18] || CT.C18
      });
    },
    get C28() {
      return C[28] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: C[29] || CT.C29,
        [SizedBox_height]: 24,
        [SizedBox_width]: 24
      });
    },
    get C27() {
      return C[27] = dart.const({
        __proto__: basic.Center.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: C[28] || CT.C28,
        [Align_heightFactor]: null,
        [Align_widthFactor]: null,
        [Align_alignment]: C[11] || CT.C11
      });
    },
    get C31() {
      return C[31] = dart.const({
        __proto__: T$._EmptyStreamOfListOfint().prototype
      });
    },
    get C30() {
      return C[30] = dart.const({
        __proto__: byte_stream.ByteStream.prototype,
        [StreamView__stream]: C[31] || CT.C31
      });
    },
    get C32() {
      return C[32] = dart.constMap(core.String, core.String, []);
    },
    get C33() {
      return C[33] = dart.const({
        __proto__: convert.Utf8Codec.prototype,
        [Utf8Codec__allowMalformed]: false
      });
    },
    get C34() {
      return C[34] = dart.constList([13, 10], core.int);
    },
    get C35() {
      return C[35] = dart.fn(async_map._dropPrevious, T$.TAnddynamicToT());
    },
    get C36() {
      return C[36] = dart.fn(rate_limit._dropPrevious, T$.TAnddynamicToT$1());
    },
    get C37() {
      return C[37] = dart.fn(rate_limit._collect, T$.TAndListNOfTToListOfT());
    },
    get C38() {
      return C[38] = dart.const({
        __proto__: convert.Latin1Codec.prototype,
        [Latin1Codec__allowInvalid]: false
      });
    },
    get C39() {
      return C[39] = dart.constList([43, 95, 45, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122], core.int);
    },
    get C40() {
      return C[40] = dart.fn(equatable_utils._combine, T$.intAnddynamicToint());
    },
    get C41() {
      return C[41] = dart.fn(from_handlers['TransformByHandlers|_defaultHandleData'], T$.SAndEventSinkOfTTovoid());
    },
    get C42() {
      return C[42] = dart.fn(from_handlers['TransformByHandlers|_defaultHandleError'], T$.ObjectAndStackTraceAndEventSinkOfTTovoid());
    },
    get C43() {
      return C[43] = dart.fn(from_handlers['TransformByHandlers|_defaultHandleDone'], T$.EventSinkOfTTovoid());
    },
    get C44() {
      return C[44] = dart.const({
        __proto__: chunked_coding.ChunkedCodingCodec.prototype
      });
    },
    get C45() {
      return C[45] = dart.constList(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], core.String);
    },
    get C46() {
      return C[46] = dart.constList(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], core.String);
    },
    get C47() {
      return C[47] = dart.const({
        __proto__: decoder._State.prototype,
        [_State__name]: "boundary"
      });
    },
    get C48() {
      return C[48] = dart.const({
        __proto__: decoder._State.prototype,
        [_State__name]: "size"
      });
    },
    get C49() {
      return C[49] = dart.const({
        __proto__: decoder._State.prototype,
        [_State__name]: "size before LF"
      });
    },
    get C50() {
      return C[50] = dart.const({
        __proto__: decoder._State.prototype,
        [_State__name]: "body"
      });
    },
    get C51() {
      return C[51] = dart.const({
        __proto__: decoder._State.prototype,
        [_State__name]: "body before CR"
      });
    },
    get C52() {
      return C[52] = dart.const({
        __proto__: decoder._State.prototype,
        [_State__name]: "body before LF"
      });
    },
    get C53() {
      return C[53] = dart.const({
        __proto__: decoder._State.prototype,
        [_State__name]: "end before CR"
      });
    },
    get C54() {
      return C[54] = dart.const({
        __proto__: decoder._State.prototype,
        [_State__name]: "end before LF"
      });
    },
    get C55() {
      return C[55] = dart.const({
        __proto__: decoder._State.prototype,
        [_State__name]: "end"
      });
    },
    get C56() {
      return C[56] = dart.const({
        __proto__: decoder.ChunkedCodingDecoder.prototype
      });
    },
    get C57() {
      return C[57] = dart.constList([], core.int);
    },
    get C58() {
      return C[58] = dart.const({
        __proto__: encoder.ChunkedCodingEncoder.prototype
      });
    },
    get C59() {
      return C[59] = dart.const(new _js_helper.PrivateSymbol.new('_add', _add));
    },
    get C60() {
      return C[60] = dart.const(new _js_helper.PrivateSymbol.new('_head', _head$));
    },
    get C61() {
      return C[61] = dart.const(new _js_helper.PrivateSymbol.new('_writeToList', _writeToList));
    },
    get C62() {
      return C[62] = dart.const(new _js_helper.PrivateSymbol.new('_grow', _grow));
    },
    get C63() {
      return C[63] = dart.const(new _js_helper.PrivateSymbol.new('_preGrow', _preGrow));
    },
    get C64() {
      return C[64] = dart.const(new _js_helper.PrivateSymbol.new('_table', _table$));
    },
    get C65() {
      return C[65] = dart.const(new _js_helper.PrivateSymbol.new('_tail', _tail$));
    },
    get C66() {
      return C[66] = dart.const(new _js_helper.PrivateSymbol.new('_head=', _head_));
    },
    get C67() {
      return C[67] = dart.const(new _js_helper.PrivateSymbol.new('_table=', _table_));
    },
    get C68() {
      return C[68] = dart.const(new _js_helper.PrivateSymbol.new('_tail=', _tail_));
    }
  }, false);
  var C = Array(69).fill(void 0);
  var I = [
    "package:flutter_app/app.dart",
    "package:bloc/src/bloc_observer.dart",
    "package:flutter_app/simple_bloc_observer.dart",
    "package:bloc/src/bloc.dart",
    "file:///zapp/pub/.pub_cache/hosted/pub.dartlang.org/bloc-8.0.3/lib/src/bloc.dart",
    "file:///zapp/pub/.pub_cache/hosted/pub.dartlang.org/bloc-8.0.3/lib/src/emitter.dart",
    "package:bloc/src/change.dart",
    "package:bloc/src/cubit.dart",
    "package:bloc/src/transition.dart",
    "package:flutter_app/posts/view/post_page.dart",
    "package:flutter_bloc/src/bloc_builder.dart",
    "package:flutter_bloc/src/bloc_consumer.dart",
    "package:nested/nested.dart",
    "package:flutter_bloc/src/bloc_listener.dart",
    "file:///zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_bloc-8.0.1/lib/src/bloc_listener.dart",
    "package:flutter_bloc/src/bloc_provider.dart",
    "file:///zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_bloc-8.0.1/lib/src/bloc_provider.dart",
    "package:flutter_bloc/src/bloc_selector.dart",
    "file:///zapp/pub/.pub_cache/hosted/pub.dartlang.org/nested-1.0.0/lib/nested.dart",
    "package:provider/src/provider.dart",
    "package:flutter_bloc/src/multi_bloc_listener.dart",
    "package:flutter_bloc/src/multi_bloc_provider.dart",
    "package:flutter_bloc/src/multi_repository_provider.dart",
    "package:flutter_bloc/src/repository_provider.dart",
    "file:///zapp/pub/.pub_cache/hosted/pub.dartlang.org/provider-6.0.3/lib/src/provider.dart",
    "file:///zapp/pub/.pub_cache/hosted/pub.dartlang.org/provider-6.0.3/lib/src/inherited_provider.dart",
    "package:equatable/src/equatable.dart",
    "package:flutter_app/posts/bloc/post_event.dart",
    "package:flutter_app/posts/bloc/post_state.dart",
    "package:flutter_app/posts/bloc/post_bloc.dart",
    "package:flutter_app/posts/view/post_list.dart",
    "package:provider/src/async_provider.dart",
    "package:provider/src/listenable_provider.dart",
    "package:provider/src/change_notifier_provider.dart",
    "package:provider/src/consumer.dart",
    "file:///zapp/pub/.pub_cache/hosted/pub.dartlang.org/provider-6.0.3/lib/src/deferred_inherited_provider.dart",
    "file:///zapp/pub/.pub_cache/hosted/pub.dartlang.org/provider-6.0.3/lib/src/devtool.dart",
    "package:provider/src/proxy_provider.dart",
    "package:provider/src/reassemble_handler.dart",
    "package:provider/src/selector.dart",
    "package:provider/src/value_listenable_provider.dart",
    "package:flutter_app/posts/models/post.dart",
    "package:flutter_app/posts/widgets/bottom_loader.dart",
    "package:flutter_app/posts/widgets/post_list_item.dart",
    "package:http/src/client.dart",
    "package:http/src/exception.dart",
    "package:http/src/base_request.dart",
    "package:http/src/request.dart",
    "package:http/src/base_response.dart",
    "package:http/src/response.dart",
    "package:http/src/streamed_request.dart",
    "package:http/src/base_client.dart",
    "package:http/src/byte_stream.dart",
    "package:http/src/multipart_file.dart",
    "package:http/src/multipart_request.dart",
    "package:http/src/streamed_response.dart",
    "package:bloc_concurrency/src/droppable.dart",
    "file:///zapp/pub/.pub_cache/hosted/pub.dartlang.org/equatable-2.0.3/lib/src/equatable_config.dart",
    "package:equatable/src/equatable_config.dart",
    "package:equatable/src/equatable_mixin.dart",
    "file:///zapp/pub/.pub_cache/hosted/pub.dartlang.org/stream_transform-2.0.0/lib/src/combine_latest.dart",
    "file:///zapp/pub/.pub_cache/hosted/pub.dartlang.org/stream_transform-2.0.0/lib/src/concatenate.dart",
    "package:http/src/browser_client.dart",
    "file:///zapp/pub/.pub_cache/hosted/pub.dartlang.org/stream_transform-2.0.0/lib/src/aggregate_sample.dart",
    "file:///zapp/pub/.pub_cache/hosted/pub.dartlang.org/stream_transform-2.0.0/lib/src/from_handlers.dart",
    "package:http_parser/src/authentication_challenge.dart",
    "package:http_parser/src/case_insensitive_map.dart",
    "package:http_parser/src/chunked_coding.dart",
    "package:http_parser/src/media_type.dart",
    "package:http_parser/src/chunked_coding/decoder.dart",
    "package:http_parser/src/chunked_coding/encoder.dart",
    "file:///zapp/pub/.pub_cache/hosted/pub.dartlang.org/typed_data-1.3.1/lib/src/typed_queue.dart",
    "package:typed_data/src/typed_queue.dart",
    "package:typed_data/src/typed_buffer.dart"
  ];
  $46zapp_entry.runAppGuarded = function runAppGuarded() {
    async.runZonedGuarded(core.Null, dart.fn(() => {
      if (T$.ListOfStringTodynamic().is(C[0] || CT.C0)) {
        T$.ListOfStringTodynamic().as(C[0] || CT.C0)(T$.JSArrayOfString().of([]));
      } else {
        (C[0] || CT.C0)();
      }
    }, T$.VoidToNull()), dart.fn((e, stackTrace) => {
      if (js.context.hasProperty("zappHandlerUserError")) {
        js.context.callMethod("zappHandlerUserError", [e[$toString](), stackTrace.toString()]);
      }
    }, T$.ObjectAndStackTraceTovoid()), {zoneSpecification: new async._ZoneSpecification.new({print: dart.fn((self, parent, zone, line) => {
          if (js.context.hasProperty("zappHandlerUserPrint")) {
            js.context.callMethod("zappHandlerUserPrint", [line]);
          }
        }, T$.ZoneAndZoneDelegateAndZone__Tovoid())})});
  };
  $46zapp_entry.main = function main$() {
    return async.async(dart.void, function* main() {
      yield ui.webOnlyWarmupEngine({runApp: dart.fn(() => {
          $46zapp_entry.runAppGuarded();
        }, T$.VoidToNull()), registerPlugins: dart.fn(() => {
        }, T$.VoidToNull())});
    });
  };
  main.main = function main$0() {
    bloc$.BlocOverrides.runZoned(dart.void, dart.fn(() => binding.runApp(new app$.App.new()), T$.VoidTovoid()), {blocObserver: new simple_bloc_observer.SimpleBlocObserver.new()});
  };
  app$.App = class App extends app.MaterialApp {
    static ['_#new#tearOff']() {
      return new app$.App.new();
    }
  };
  (app$.App.new = function() {
    app$.App.__proto__.new.call(this, {home: new post_page.PostsPage.new()});
    ;
  }).prototype = app$.App.prototype;
  dart.addTypeTests(app$.App);
  dart.addTypeCaches(app$.App);
  dart.setLibraryUri(app$.App, I[0]);
  bloc_observer.BlocObserver = class BlocObserver extends core.Object {
    onCreate(bloc) {
    }
    onEvent(bloc, event) {
    }
    onChange(bloc, change) {
    }
    onTransition(bloc, transition) {
    }
    onError(bloc, error, stackTrace) {
    }
    onClose(bloc) {
    }
  };
  (bloc_observer.BlocObserver.new = function() {
    ;
  }).prototype = bloc_observer.BlocObserver.prototype;
  dart.addTypeTests(bloc_observer.BlocObserver);
  dart.addTypeCaches(bloc_observer.BlocObserver);
  dart.setMethodSignature(bloc_observer.BlocObserver, () => ({
    __proto__: dart.getMethods(bloc_observer.BlocObserver.__proto__),
    onCreate: dart.fnType(dart.void, [bloc$.BlocBase]),
    onEvent: dart.fnType(dart.void, [bloc$.Bloc, dart.nullable(core.Object)]),
    onChange: dart.fnType(dart.void, [bloc$.BlocBase, change.Change]),
    onTransition: dart.fnType(dart.void, [bloc$.Bloc, transition.Transition]),
    onError: dart.fnType(dart.void, [bloc$.BlocBase, core.Object, core.StackTrace]),
    onClose: dart.fnType(dart.void, [bloc$.BlocBase])
  }));
  dart.setLibraryUri(bloc_observer.BlocObserver, I[1]);
  simple_bloc_observer.SimpleBlocObserver = class SimpleBlocObserver extends bloc_observer.BlocObserver {
    onTransition(bloc, transition) {
      super.onTransition(bloc, transition);
      core.print(transition);
    }
    onError(bloc, error, stackTrace) {
      core.print(error);
      super.onError(bloc, error, stackTrace);
    }
    static ['_#new#tearOff']() {
      return new simple_bloc_observer.SimpleBlocObserver.new();
    }
  };
  (simple_bloc_observer.SimpleBlocObserver.new = function() {
    ;
  }).prototype = simple_bloc_observer.SimpleBlocObserver.prototype;
  dart.addTypeTests(simple_bloc_observer.SimpleBlocObserver);
  dart.addTypeCaches(simple_bloc_observer.SimpleBlocObserver);
  dart.setLibraryUri(simple_bloc_observer.SimpleBlocObserver, I[2]);
  const _is_BlocEventSink_default = Symbol('_is_BlocEventSink_default');
  bloc$.BlocEventSink$ = dart.generic(Event => {
    class BlocEventSink extends core.Object {}
    (BlocEventSink.new = function() {
      ;
    }).prototype = BlocEventSink.prototype;
    dart.addTypeTests(BlocEventSink);
    BlocEventSink.prototype[_is_BlocEventSink_default] = true;
    dart.addTypeCaches(BlocEventSink);
    BlocEventSink[dart.implements] = () => [bloc$.ErrorSink];
    dart.setLibraryUri(BlocEventSink, I[3]);
    return BlocEventSink;
  });
  bloc$.BlocEventSink = bloc$.BlocEventSink$();
  dart.addTypeTests(bloc$.BlocEventSink, _is_BlocEventSink_default);
  var isType$ = dart.privateName(bloc$, "_Handler.isType");
  var type$ = dart.privateName(bloc$, "_Handler.type");
  bloc$._Handler = class _Handler extends core.Object {
    get isType() {
      return this[isType$];
    }
    set isType(value) {
      super.isType = value;
    }
    get type() {
      return this[type$];
    }
    set type(value) {
      super.type = value;
    }
    static ['_#new#tearOff'](opts) {
      let isType = opts && 'isType' in opts ? opts.isType : null;
      let type = opts && 'type' in opts ? opts.type : null;
      return new bloc$._Handler.new({isType: isType, type: type});
    }
  };
  (bloc$._Handler.new = function(opts) {
    let isType = opts && 'isType' in opts ? opts.isType : null;
    let type = opts && 'type' in opts ? opts.type : null;
    this[isType$] = isType;
    this[type$] = type;
    ;
  }).prototype = bloc$._Handler.prototype;
  dart.addTypeTests(bloc$._Handler);
  dart.addTypeCaches(bloc$._Handler);
  dart.setLibraryUri(bloc$._Handler, I[3]);
  dart.setFieldSignature(bloc$._Handler, () => ({
    __proto__: dart.getFields(bloc$._Handler.__proto__),
    isType: dart.finalFieldType(dart.fnType(core.bool, [dart.dynamic])),
    type: dart.finalFieldType(core.Type)
  }));
  var _eventController = dart.privateName(bloc$, "_eventController");
  var _subscriptions = dart.privateName(bloc$, "_subscriptions");
  var _handlers = dart.privateName(bloc$, "_handlers");
  var _emitters = dart.privateName(bloc$, "_emitters");
  var _eventTransformer$ = dart.privateName(bloc$, "_eventTransformer");
  var _blocObserver$ = dart.privateName(bloc$, "_blocObserver");
  var _emitted = dart.privateName(bloc$, "_emitted");
  var __BlocBase__stateController = dart.privateName(bloc$, "_#BlocBase#_stateController");
  var __BlocBase__stateController_isSet = dart.privateName(bloc$, "_#BlocBase#_stateController#isSet");
  var _state$ = dart.privateName(bloc$, "_state");
  var _stateController = dart.privateName(bloc$, "_stateController");
  const _is_BlocBase_default = Symbol('_is_BlocBase_default');
  bloc$.BlocBase$ = dart.generic(State => {
    var __t$StreamControllerOfState = () => (__t$StreamControllerOfState = dart.constFn(async.StreamController$(State)))();
    var __t$ChangeOfState = () => (__t$ChangeOfState = dart.constFn(change.Change$(State)))();
    class BlocBase extends core.Object {
      get [_stateController]() {
        let t3, t2;
        t2 = this[__BlocBase__stateController];
        return t2 == null ? (t3 = __t$StreamControllerOfState().broadcast(), this[__BlocBase__stateController] == null ? this[__BlocBase__stateController] = t3 : dart.throw(new _internal.LateError.fieldADI("_stateController"))) : t2;
      }
      get state() {
        return this[_state$];
      }
      get stream() {
        return this[_stateController].stream;
      }
      get isClosed() {
        return this[_stateController].isClosed;
      }
      emit(state) {
        State.as(state);
        try {
          if (this.isClosed) {
            dart.throw(new core.StateError.new("Cannot emit new states after calling close"));
          }
          if (dart.equals(state, this[_state$]) && this[_emitted]) return;
          this.onChange(new (__t$ChangeOfState()).new({currentState: this.state, nextState: state}));
          this[_state$] = state;
          this[_stateController].add(this[_state$]);
          this[_emitted] = true;
        } catch (e) {
          let error = dart.getThrown(e);
          let stackTrace = dart.stackTrace(e);
          if (core.Object.is(error)) {
            this.onError(error, stackTrace);
            dart.rethrow(e);
          } else
            throw e;
        }
      }
      onChange(change) {
        let t3;
        __t$ChangeOfState().as(change);
        t3 = this[_blocObserver$];
        t3 == null ? null : t3.onChange(this, change);
      }
      addError(error, stackTrace = null) {
        let t3;
        this.onError(error, (t3 = stackTrace, t3 == null ? core.StackTrace.current : t3));
      }
      onError(error, stackTrace) {
        let t3;
        t3 = this[_blocObserver$];
        t3 == null ? null : t3.onError(this, error, stackTrace);
      }
      close() {
        return async.async(dart.void, (function* close() {
          let t3;
          t3 = this[_blocObserver$];
          t3 == null ? null : t3.onClose(this);
          yield this[_stateController].close();
        }).bind(this));
      }
    }
    (BlocBase.new = function(_state) {
      let t2, t2$;
      this[_blocObserver$] = (t2 = bloc$.BlocOverrides.current, t2 == null ? null : t2.blocObserver);
      this[__BlocBase__stateController] = null;
      this[__BlocBase__stateController_isSet] = false;
      this[_emitted] = false;
      this[_state$] = _state;
      t2$ = this[_blocObserver$];
      t2$ == null ? null : t2$.onCreate(this);
    }).prototype = BlocBase.prototype;
    dart.addTypeTests(BlocBase);
    BlocBase.prototype[_is_BlocBase_default] = true;
    dart.addTypeCaches(BlocBase);
    BlocBase[dart.implements] = () => [bloc$.StateStreamableSource$(State), bloc$.Emittable$(State), bloc$.ErrorSink];
    dart.setMethodSignature(BlocBase, () => ({
      __proto__: dart.getMethods(BlocBase.__proto__),
      emit: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      onChange: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      addError: dart.fnType(dart.void, [core.Object], [dart.nullable(core.StackTrace)]),
      onError: dart.fnType(dart.void, [core.Object, core.StackTrace]),
      close: dart.fnType(async.Future$(dart.void), [])
    }));
    dart.setGetterSignature(BlocBase, () => ({
      __proto__: dart.getGetters(BlocBase.__proto__),
      [_stateController]: async.StreamController$(State),
      state: State,
      stream: async.Stream$(State),
      isClosed: core.bool
    }));
    dart.setLibraryUri(BlocBase, I[3]);
    dart.setFieldSignature(BlocBase, () => ({
      __proto__: dart.getFields(BlocBase.__proto__),
      [_blocObserver$]: dart.finalFieldType(dart.nullable(bloc_observer.BlocObserver)),
      [__BlocBase__stateController]: dart.fieldType(dart.nullable(async.StreamController$(State))),
      [__BlocBase__stateController_isSet]: dart.fieldType(core.bool),
      [_state$]: dart.fieldType(State),
      [_emitted]: dart.fieldType(core.bool)
    }));
    return BlocBase;
  });
  bloc$.BlocBase = bloc$.BlocBase$();
  dart.addTypeTests(bloc$.BlocBase, _is_BlocBase_default);
  const _is_Bloc_default = Symbol('_is_Bloc_default');
  bloc$.Bloc$ = dart.generic((Event, State) => {
    var __t$StreamControllerOfEvent = () => (__t$StreamControllerOfEvent = dart.constFn(async.StreamController$(Event)))();
    var __t$EventTobool = () => (__t$EventTobool = dart.constFn(dart.fnType(core.bool, [Event])))();
    var __t$TransitionOfEvent$State = () => (__t$TransitionOfEvent$State = dart.constFn(transition.Transition$(Event, State)))();
    var __t$StateTovoid = () => (__t$StateTovoid = dart.constFn(dart.fnType(dart.void, [State])))();
    var __t$_EmitterOfState = () => (__t$_EmitterOfState = dart.constFn(bloc$._Emitter$(State)))();
    const close = Symbol("close");
    class Bloc extends bloc$.BlocBase$(State) {
      add(event) {
        Event.as(event);
        if (!dart.fn(() => {
          let handlerExists = this[_handlers][$any](dart.fn(handler => {
            let t1, t0;
            t0 = handler;
            t1 = event;
            return t0.isType(t1);
          }, T$._HandlerTobool()));
          if (!handlerExists) {
            let eventType = dart.runtimeType(event);
            dart.throw(new core.StateError.new("add(" + dart.str(eventType) + ") was called without a registered event handler.\n" + "Make sure to register a handler via on<" + dart.str(eventType) + ">((event, emit) {...})"));
          }
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[4], 71, 12, "() {\n      final handlerExists = _handlers.any((handler) => handler.isType(event));\n      if (!handlerExists) {\n        final eventType = event.runtimeType;\n        throw StateError(\n          '''add($eventType) was called without a registered event handler.\\n'''\n          '''Make sure to register a handler via on<$eventType>((event, emit) {...})''',\n        );\n      }\n      return true;\n    }()");
        try {
          this.onEvent(event);
          this[_eventController].add(event);
        } catch (e) {
          let error = dart.getThrown(e);
          let stackTrace = dart.stackTrace(e);
          if (core.Object.is(error)) {
            this.onError(error, stackTrace);
            dart.rethrow(e);
          } else
            throw e;
        }
      }
      onEvent(event) {
        let t1;
        Event.as(event);
        t1 = this[_blocObserver$];
        t1 == null ? null : t1.onEvent(this, event);
      }
      emit(state) {
        State.as(state);
        return super.emit(state);
      }
      on(E, handler, opts) {
        let t1;
        dart.checkTypeBound(E, Event, 'E');
        let transformer = opts && 'transformer' in opts ? opts.transformer : null;
        if (!dart.fn(() => {
          let handlerExists = this[_handlers][$any](dart.fn(handler => handler.type._equals(dart.wrapType(E)), T$._HandlerTobool()));
          if (handlerExists) {
            dart.throw(new core.StateError.new("on<" + dart.str(dart.wrapType(E)) + "> was called multiple times. " + "There should only be a single event handler per event type."));
          }
          this[_handlers][$add](new bloc$._Handler.new({isType: dart.fn(e => E.is(e), T$.dynamicTobool()), type: dart.wrapType(E)}));
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[4], 169, 12, "() {\n      final handlerExists = _handlers.any((handler) => handler.type == E);\n      if (handlerExists) {\n        throw StateError(\n          'on<$E> was called multiple times. '\n          'There should only be a single event handler per event type.',\n        );\n      }\n      _handlers.add(_Handler(isType: (dynamic e) => e is E, type: E));\n      return true;\n    }()");
        let _transformer = (t1 = transformer, t1 == null ? this[_eventTransformer$] : t1);
        let subscription = dart.dsend(dart.dcall(_transformer, [this[_eventController].stream.where(dart.fn(event => E.is(event), __t$EventTobool())).cast(E), dart.fn(event => {
            const onEmit = state => {
              if (this.isClosed) return;
              if (dart.equals(this.state, state) && this[_emitted]) return;
              this.onTransition(new (__t$TransitionOfEvent$State()).new({currentState: this.state, event: E.as(event), nextState: state}));
              this.emit(state);
            };
            dart.fn(onEmit, __t$StateTovoid());
            let emitter = new (__t$_EmitterOfState()).new(onEmit);
            let controller = async.StreamController$(E).broadcast({sync: true, onCancel: dart.bind(emitter, 'cancel')});
            const handleEvent = () => {
              return async.async(dart.void, (function* handleEvent() {
                const onDone = () => {
                  emitter.complete();
                  this[_emitters][$remove](emitter);
                  if (!controller.isClosed) controller.close();
                };
                dart.fn(onDone, T$.VoidTovoid());
                try {
                  this[_emitters][$add](emitter);
                  yield handler(E.as(event), emitter);
                } catch (e) {
                  let error = dart.getThrown(e);
                  let stackTrace = dart.stackTrace(e);
                  if (core.Object.is(error)) {
                    this.onError(error, stackTrace);
                    dart.rethrow(e);
                  } else
                    throw e;
                } finally {
                  onDone();
                }
              }).bind(this));
            };
            dart.fn(handleEvent, T$.VoidTovoid());
            handleEvent();
            return controller.stream;
          }, dart.fnType(async.Stream$(E), [dart.dynamic]))]), 'listen', [null]);
        this[_subscriptions][$add](async.StreamSubscription.as(subscription));
      }
      onTransition(transition) {
        let t2;
        __t$TransitionOfEvent$State().as(transition);
        t2 = this[_blocObserver$];
        t2 == null ? null : t2.onTransition(this, transition);
      }
      close() {
        return async.async(dart.void, (function* close$() {
          yield this[_eventController].close();
          for (let emitter of this[_emitters]) {
            emitter.cancel();
          }
          yield async.Future.wait(dart.void, this[_emitters][$map](T$.FutureOfvoid(), dart.fn(e => e.future, T$._EmitterToFutureOfvoid())));
          yield async.Future.wait(dart.void, this[_subscriptions][$map](T$.FutureOfvoid(), dart.fn(s => s.cancel(), T$.StreamSubscriptionToFutureOfvoid())));
          return this[close]();
        }).bind(this));
      }
      [close]() {
        return super.close();
      }
    }
    (Bloc.new = function(initialState) {
      let t0, t0$;
      this[_eventController] = __t$StreamControllerOfEvent().broadcast();
      this[_subscriptions] = T$.JSArrayOfStreamSubscription().of([]);
      this[_handlers] = T$.JSArrayOf_Handler().of([]);
      this[_emitters] = T$.JSArrayOf_Emitter().of([]);
      this[_eventTransformer$] = (t0$ = (t0 = bloc$.BlocOverrides.current, t0 == null ? null : t0.eventTransformer), t0$ == null ? bloc$._defaultEventTransformer : t0$);
      Bloc.__proto__.new.call(this, initialState);
      ;
    }).prototype = Bloc.prototype;
    dart.addTypeTests(Bloc);
    Bloc.prototype[_is_Bloc_default] = true;
    dart.addTypeCaches(Bloc);
    Bloc[dart.implements] = () => [bloc$.BlocEventSink$(Event)];
    dart.setMethodSignature(Bloc, () => ({
      __proto__: dart.getMethods(Bloc.__proto__),
      add: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      onEvent: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      on: dart.gFnType(E => [dart.void, [dart.fnType(dart.void, [E, bloc$.Emitter$(State)])], {transformer: dart.nullable(dart.fnType(async.Stream$(E), [async.Stream$(E), dart.fnType(async.Stream$(E), [E])]))}, {}], E => [Event]),
      onTransition: dart.fnType(dart.void, [dart.nullable(core.Object)])
    }));
    dart.setLibraryUri(Bloc, I[3]);
    dart.setFieldSignature(Bloc, () => ({
      __proto__: dart.getFields(Bloc.__proto__),
      [_eventController]: dart.finalFieldType(async.StreamController$(Event)),
      [_subscriptions]: dart.finalFieldType(core.List$(async.StreamSubscription)),
      [_handlers]: dart.finalFieldType(core.List$(bloc$._Handler)),
      [_emitters]: dart.finalFieldType(core.List$(bloc$._Emitter)),
      [_eventTransformer$]: dart.finalFieldType(dart.dynamic)
    }));
    return Bloc;
  });
  bloc$.Bloc = bloc$.Bloc$();
  dart.addTypeTests(bloc$.Bloc, _is_Bloc_default);
  const _is_Streamable_default = Symbol('_is_Streamable_default');
  bloc$.Streamable$ = dart.generic(State => {
    class Streamable extends core.Object {}
    (Streamable.new = function() {
      ;
    }).prototype = Streamable.prototype;
    dart.addTypeTests(Streamable);
    Streamable.prototype[_is_Streamable_default] = true;
    dart.addTypeCaches(Streamable);
    dart.setLibraryUri(Streamable, I[3]);
    return Streamable;
  });
  bloc$.Streamable = bloc$.Streamable$();
  dart.addTypeTests(bloc$.Streamable, _is_Streamable_default);
  const _is_StateStreamable_default = Symbol('_is_StateStreamable_default');
  bloc$.StateStreamable$ = dart.generic(State => {
    class StateStreamable extends core.Object {}
    (StateStreamable.new = function() {
      ;
    }).prototype = StateStreamable.prototype;
    dart.addTypeTests(StateStreamable);
    StateStreamable.prototype[_is_StateStreamable_default] = true;
    dart.addTypeCaches(StateStreamable);
    StateStreamable[dart.implements] = () => [bloc$.Streamable$(State)];
    dart.setLibraryUri(StateStreamable, I[3]);
    return StateStreamable;
  });
  bloc$.StateStreamable = bloc$.StateStreamable$();
  dart.addTypeTests(bloc$.StateStreamable, _is_StateStreamable_default);
  const _is_StateStreamableSource_default = Symbol('_is_StateStreamableSource_default');
  bloc$.StateStreamableSource$ = dart.generic(State => {
    class StateStreamableSource extends core.Object {}
    (StateStreamableSource.new = function() {
      ;
    }).prototype = StateStreamableSource.prototype;
    dart.addTypeTests(StateStreamableSource);
    StateStreamableSource.prototype[_is_StateStreamableSource_default] = true;
    dart.addTypeCaches(StateStreamableSource);
    StateStreamableSource[dart.implements] = () => [bloc$.StateStreamable$(State), bloc$.Closable];
    dart.setLibraryUri(StateStreamableSource, I[3]);
    return StateStreamableSource;
  });
  bloc$.StateStreamableSource = bloc$.StateStreamableSource$();
  dart.addTypeTests(bloc$.StateStreamableSource, _is_StateStreamableSource_default);
  bloc$.Closable = class Closable extends core.Object {};
  (bloc$.Closable.new = function() {
    ;
  }).prototype = bloc$.Closable.prototype;
  dart.addTypeTests(bloc$.Closable);
  dart.addTypeCaches(bloc$.Closable);
  dart.setLibraryUri(bloc$.Closable, I[3]);
  const _is_Emittable_default = Symbol('_is_Emittable_default');
  bloc$.Emittable$ = dart.generic(State => {
    class Emittable extends core.Object {}
    (Emittable.new = function() {
      ;
    }).prototype = Emittable.prototype;
    dart.addTypeTests(Emittable);
    Emittable.prototype[_is_Emittable_default] = true;
    dart.addTypeCaches(Emittable);
    dart.setLibraryUri(Emittable, I[3]);
    return Emittable;
  });
  bloc$.Emittable = bloc$.Emittable$();
  dart.addTypeTests(bloc$.Emittable, _is_Emittable_default);
  bloc$.ErrorSink = class ErrorSink extends core.Object {};
  (bloc$.ErrorSink.new = function() {
    ;
  }).prototype = bloc$.ErrorSink.prototype;
  dart.addTypeTests(bloc$.ErrorSink);
  dart.addTypeCaches(bloc$.ErrorSink);
  bloc$.ErrorSink[dart.implements] = () => [bloc$.Closable];
  dart.setLibraryUri(bloc$.ErrorSink, I[3]);
  bloc$.BlocOverrides = class BlocOverrides extends core.Object {
    static get current() {
      return T$.BlocOverridesN().as(async.Zone.current._get(bloc$.BlocOverrides._token));
    }
    static runZoned(R, body, opts) {
      let blocObserver = opts && 'blocObserver' in opts ? opts.blocObserver : null;
      let eventTransformer = opts && 'eventTransformer' in opts ? opts.eventTransformer : null;
      let overrides = new bloc$._BlocOverridesScope.new(blocObserver, eventTransformer);
      return bloc$._asyncRunZoned(R, body, {zoneValues: new (T$.LinkedMapOfObjectN$ObjectN()).from([bloc$.BlocOverrides._token, overrides])});
    }
    get blocObserver() {
      return bloc$._defaultBlocObserver;
    }
    get eventTransformer() {
      return bloc$._defaultEventTransformer;
    }
  };
  (bloc$.BlocOverrides.new = function() {
    ;
  }).prototype = bloc$.BlocOverrides.prototype;
  dart.addTypeTests(bloc$.BlocOverrides);
  dart.addTypeCaches(bloc$.BlocOverrides);
  dart.setStaticMethodSignature(bloc$.BlocOverrides, () => ['runZoned']);
  dart.setGetterSignature(bloc$.BlocOverrides, () => ({
    __proto__: dart.getGetters(bloc$.BlocOverrides.__proto__),
    blocObserver: bloc_observer.BlocObserver,
    eventTransformer: dart.fnType(async.Stream, [async.Stream, dart.fnType(async.Stream, [dart.dynamic])])
  }));
  dart.setStaticGetterSignature(bloc$.BlocOverrides, () => ['current']);
  dart.setLibraryUri(bloc$.BlocOverrides, I[3]);
  dart.setStaticFieldSignature(bloc$.BlocOverrides, () => ['_token']);
  dart.defineLazy(bloc$.BlocOverrides, {
    /*bloc$.BlocOverrides._token*/get _token() {
      return new core.Object.new();
    }
  }, false);
  var _previous = dart.privateName(bloc$, "_previous");
  bloc$._BlocOverridesScope = class _BlocOverridesScope extends bloc$.BlocOverrides {
    static ['_#new#tearOff'](_blocObserver, _eventTransformer) {
      return new bloc$._BlocOverridesScope.new(_blocObserver, _eventTransformer);
    }
    get blocObserver() {
      let blocObserver = this[_blocObserver$];
      if (blocObserver != null) return blocObserver;
      let previous = this[_previous];
      if (previous != null) return previous.blocObserver;
      return super.blocObserver;
    }
    get eventTransformer() {
      let eventTransformer = this[_eventTransformer$];
      if (eventTransformer != null) return eventTransformer;
      let previous = this[_previous];
      if (previous != null) return previous.eventTransformer;
      return super.eventTransformer;
    }
  };
  (bloc$._BlocOverridesScope.new = function(_blocObserver, _eventTransformer) {
    this[_previous] = bloc$.BlocOverrides.current;
    this[_blocObserver$] = _blocObserver;
    this[_eventTransformer$] = _eventTransformer;
    ;
  }).prototype = bloc$._BlocOverridesScope.prototype;
  dart.addTypeTests(bloc$._BlocOverridesScope);
  dart.addTypeCaches(bloc$._BlocOverridesScope);
  dart.setLibraryUri(bloc$._BlocOverridesScope, I[3]);
  dart.setFieldSignature(bloc$._BlocOverridesScope, () => ({
    __proto__: dart.getFields(bloc$._BlocOverridesScope.__proto__),
    [_previous]: dart.finalFieldType(dart.nullable(bloc$.BlocOverrides)),
    [_blocObserver$]: dart.finalFieldType(dart.nullable(bloc_observer.BlocObserver)),
    [_eventTransformer$]: dart.finalFieldType(dart.nullable(dart.fnType(async.Stream, [async.Stream, dart.fnType(async.Stream, [dart.dynamic])])))
  }));
  bloc$._DefaultBlocObserver = class _DefaultBlocObserver extends bloc_observer.BlocObserver {
    static ['_#new#tearOff']() {
      return new bloc$._DefaultBlocObserver.new();
    }
  };
  (bloc$._DefaultBlocObserver.new = function() {
    ;
  }).prototype = bloc$._DefaultBlocObserver.prototype;
  dart.addTypeTests(bloc$._DefaultBlocObserver);
  dart.addTypeCaches(bloc$._DefaultBlocObserver);
  dart.setLibraryUri(bloc$._DefaultBlocObserver, I[3]);
  const _is__FlatMapStreamTransformer_default = Symbol('_is__FlatMapStreamTransformer_default');
  bloc$._FlatMapStreamTransformer$ = dart.generic(T => {
    var __t$StreamOfT = () => (__t$StreamOfT = dart.constFn(async.Stream$(T)))();
    var __t$StreamOfStreamOfT = () => (__t$StreamOfStreamOfT = dart.constFn(async.Stream$(__t$StreamOfT())))();
    var __t$StreamControllerOfT = () => (__t$StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    var __t$TTovoid = () => (__t$TTovoid = dart.constFn(dart.fnType(dart.void, [T])))();
    var __t$StreamOfTTovoid = () => (__t$StreamOfTTovoid = dart.constFn(dart.fnType(dart.void, [__t$StreamOfT()])))();
    class _FlatMapStreamTransformer extends async.StreamTransformerBase$(async.Stream$(T), T) {
      static ['_#new#tearOff'](T) {
        return new (bloc$._FlatMapStreamTransformer$(T)).new();
      }
      bind(stream) {
        __t$StreamOfStreamOfT().as(stream);
        let controller = __t$StreamControllerOfT().broadcast({sync: true});
        controller.onListen = dart.fn(() => {
          let subscriptions = T$.JSArrayOfStreamSubscription().of([]);
          let outerSubscription = stream.listen(dart.fn(inner => {
            let subscription = inner.listen(__t$TTovoid().as(dart.bind(controller, 'add')), {onError: dart.bind(controller, 'addError')});
            subscription.onDone(dart.fn(() => {
              subscriptions[$remove](subscription);
              if (subscriptions[$isEmpty]) controller.close();
            }, T$.VoidTovoid()));
            subscriptions[$add](subscription);
          }, __t$StreamOfTTovoid()), {onError: dart.bind(controller, 'addError')});
          outerSubscription.onDone(dart.fn(() => {
            subscriptions[$remove](outerSubscription);
            if (subscriptions[$isEmpty]) controller.close();
          }, T$.VoidTovoid()));
          subscriptions[$add](outerSubscription);
          controller.onCancel = dart.fn(() => {
            if (subscriptions[$isEmpty]) return null;
            let cancels = (() => {
              let t3 = T$.JSArrayOfFutureOfvoid().of([]);
              for (let s of subscriptions)
                t3.push(s.cancel());
              return t3;
            })();
            return async.Future.wait(dart.void, cancels).then(dart.void, dart.fn(_ => {
            }, T$.ListOfvoidToNull()));
          }, T$.VoidToFutureNOfvoid());
        }, T$.VoidTovoid());
        return controller.stream;
      }
    }
    (_FlatMapStreamTransformer.new = function() {
      _FlatMapStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = _FlatMapStreamTransformer.prototype;
    dart.addTypeTests(_FlatMapStreamTransformer);
    _FlatMapStreamTransformer.prototype[_is__FlatMapStreamTransformer_default] = true;
    dart.addTypeCaches(_FlatMapStreamTransformer);
    dart.setMethodSignature(_FlatMapStreamTransformer, () => ({
      __proto__: dart.getMethods(_FlatMapStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [dart.nullable(core.Object)])
    }));
    dart.setLibraryUri(_FlatMapStreamTransformer, I[3]);
    return _FlatMapStreamTransformer;
  });
  bloc$._FlatMapStreamTransformer = bloc$._FlatMapStreamTransformer$();
  dart.addTypeTests(bloc$._FlatMapStreamTransformer, _is__FlatMapStreamTransformer_default);
  const _is_Emitter_default = Symbol('_is_Emitter_default');
  bloc$.Emitter$ = dart.generic(State => {
    class Emitter extends core.Object {}
    (Emitter.new = function() {
      ;
    }).prototype = Emitter.prototype;
    dart.addTypeTests(Emitter);
    Emitter.prototype[_is_Emitter_default] = true;
    dart.addTypeCaches(Emitter);
    dart.setLibraryUri(Emitter, I[3]);
    return Emitter;
  });
  bloc$.Emitter = bloc$.Emitter$();
  dart.addTypeTests(bloc$.Emitter, _is_Emitter_default);
  var _completer = dart.privateName(bloc$, "_completer");
  var _disposables = dart.privateName(bloc$, "_disposables");
  var _isCanceled = dart.privateName(bloc$, "_isCanceled");
  var _isCompleted = dart.privateName(bloc$, "_isCompleted");
  var _emit$ = dart.privateName(bloc$, "_emit");
  var _close = dart.privateName(bloc$, "_close");
  const _is__Emitter_default = Symbol('_is__Emitter_default');
  bloc$._Emitter$ = dart.generic(State => {
    var __t$ObjectAndStackTraceToState = () => (__t$ObjectAndStackTraceToState = dart.constFn(dart.fnType(State, [core.Object, core.StackTrace])))();
    var __t$ObjectAndStackTraceToNState = () => (__t$ObjectAndStackTraceToNState = dart.constFn(dart.nullable(__t$ObjectAndStackTraceToState())))();
    class _Emitter extends core.Object {
      static ['_#new#tearOff'](State, _emit) {
        return new (bloc$._Emitter$(State)).new(_emit);
      }
      onEach(T, stream, opts) {
        let onData = opts && 'onData' in opts ? opts.onData : null;
        let onError = opts && 'onError' in opts ? opts.onError : null;
        return async.async(dart.void, (function* onEach() {
          let t4;
          let completer = T$.CompleterOfvoid().new();
          let subscription = stream.listen(onData, {onDone: T$.FutureOrNOfvoidTovoid().as(dart.bind(completer, 'complete')), onError: (t4 = onError, t4 == null ? dart.bind(completer, 'completeError') : t4), cancelOnError: onError == null});
          this[_disposables][$add](dart.bind(subscription, 'cancel'));
          return async.Future.any(dart.void, T$.JSArrayOfFutureOfvoid().of([this.future, completer.future])).whenComplete(dart.fn(() => {
            subscription.cancel();
            this[_disposables][$remove](dart.bind(subscription, 'cancel'));
          }, T$.VoidToNull()));
        }).bind(this));
      }
      forEach(T, stream, opts) {
        let onData = opts && 'onData' in opts ? opts.onData : null;
        dart.fnType(State, [T]).as(onData);
        let onError = opts && 'onError' in opts ? opts.onError : null;
        __t$ObjectAndStackTraceToNState().as(onError);
        return this.onEach(T, stream, {onData: dart.fn(data => this.call(onData(data)), dart.fnType(dart.void, [T])), onError: onError != null ? dart.fn((error, stackTrace) => {
            this.call(onError(error, stackTrace));
          }, T$.ObjectAndStackTraceTovoid()) : null});
      }
      call(state) {
        let t4;
        State.as(state);
        if (!!this[_isCompleted]) dart.assertFailed("\n\n\nemit was called after an event handler completed normally.\nThis is usually due to an unawaited future in an event handler.\nPlease make sure to await all asynchronous operations with event handlers\nand use emit.isDone after asynchronous operations before calling emit() to\nensure the event handler has not completed.\n\n  **BAD**\n  on<Event>((event, emit) {\n    future.whenComplete(() => emit(...));\n  });\n\n  **GOOD**\n  on<Event>((event, emit) async {\n    await future.whenComplete(() => emit(...));\n  });\n", I[5], 114, 7, "!_isCompleted");
        if (!this[_isCanceled]) {
          t4 = state;
          this[_emit$](t4);
        }
      }
      get isDone() {
        return this[_isCanceled] || this[_isCompleted];
      }
      cancel() {
        if (this.isDone) return;
        this[_isCanceled] = true;
        this[_close]();
      }
      complete() {
        if (this.isDone) return;
        if (!this[_disposables][$isEmpty]) dart.assertFailed("\n\n\nAn event handler completed but left pending subscriptions behind.\nThis is most likely due to an unawaited emit.forEach or emit.onEach. \nPlease make sure to await all asynchronous operations within event handlers.\n\n  **BAD**\n  on<Event>((event, emit) {\n    emit.forEach(...);\n  });  \n  \n  **GOOD**\n  on<Event>((event, emit) async {\n    await emit.forEach(...);\n  });\n\n  **GOOD**\n  on<Event>((event, emit) {\n    return emit.forEach(...);\n  });\n\n  **GOOD**\n  on<Event>((event, emit) => emit.forEach(...));\n\n", I[5], 148, 7, "_disposables.isEmpty");
        this[_isCompleted] = true;
        this[_close]();
      }
      [_close]() {
        for (let disposable of this[_disposables]) {
          disposable();
        }
        this[_disposables][$clear]();
        if (!this[_completer].isCompleted) this[_completer].complete();
      }
      get future() {
        return this[_completer].future;
      }
    }
    (_Emitter.new = function(_emit) {
      this[_completer] = T$.CompleterOfvoid().new();
      this[_disposables] = T$.JSArrayOfVoidToFutureOrOfvoid().of([]);
      this[_isCanceled] = false;
      this[_isCompleted] = false;
      this[_emit$] = _emit;
      ;
    }).prototype = _Emitter.prototype;
    dart.addTypeTests(_Emitter);
    _Emitter.prototype[_is__Emitter_default] = true;
    dart.addTypeCaches(_Emitter);
    _Emitter[dart.implements] = () => [bloc$.Emitter$(State)];
    dart.setMethodSignature(_Emitter, () => ({
      __proto__: dart.getMethods(_Emitter.__proto__),
      onEach: dart.gFnType(T => [async.Future$(dart.void), [async.Stream$(T)], {onError: dart.nullable(dart.fnType(dart.void, [core.Object, core.StackTrace]))}, {onData: dart.fnType(dart.void, [T])}], T => [dart.nullable(core.Object)]),
      forEach: dart.gFnType(T => [async.Future$(dart.void), [async.Stream$(T)], {onData: dart.nullable(core.Object), onError: dart.nullable(core.Object)}, {}], T => [dart.nullable(core.Object)]),
      call: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      cancel: dart.fnType(dart.void, []),
      complete: dart.fnType(dart.void, []),
      [_close]: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(_Emitter, () => ({
      __proto__: dart.getGetters(_Emitter.__proto__),
      isDone: core.bool,
      future: async.Future$(dart.void)
    }));
    dart.setLibraryUri(_Emitter, I[3]);
    dart.setFieldSignature(_Emitter, () => ({
      __proto__: dart.getFields(_Emitter.__proto__),
      [_emit$]: dart.finalFieldType(dart.fnType(dart.void, [State])),
      [_completer]: dart.finalFieldType(async.Completer$(dart.void)),
      [_disposables]: dart.finalFieldType(core.List$(dart.fnType(dart.void, []))),
      [_isCanceled]: dart.fieldType(core.bool),
      [_isCompleted]: dart.fieldType(core.bool)
    }));
    return _Emitter;
  });
  bloc$._Emitter = bloc$._Emitter$();
  dart.addTypeTests(bloc$._Emitter, _is__Emitter_default);
  dart.copyProperties(bloc$, {
    get _defaultBlocObserver() {
      let t5, t4;
      t4 = bloc$['_#_defaultBlocObserver'];
      return t4 == null ? (t5 = new bloc$._DefaultBlocObserver.new(), bloc$['_#_defaultBlocObserver'] == null ? bloc$['_#_defaultBlocObserver'] = t5 : dart.throw(new _internal.LateError.fieldADI("_defaultBlocObserver"))) : t4;
    },
    get _defaultEventTransformer() {
      let t5, t4;
      t4 = bloc$['_#_defaultEventTransformer'];
      return t4 == null ? (t5 = dart.fn((events, mapper) => events.map(async.Stream, mapper).transform(dart.dynamic, C[1] || CT.C1), T$.StreamAndFnToStream()), bloc$['_#_defaultEventTransformer'] == null ? bloc$['_#_defaultEventTransformer'] = t5 : dart.throw(new _internal.LateError.fieldADI("_defaultEventTransformer"))) : t4;
    }
  });
  dart.defineLazy(bloc$, {
    /*bloc$._asyncRunZoned*/get _asyncRunZoned() {
      return C[2] || CT.C2;
    },
    /*bloc$['_#_defaultBlocObserver']*/get ['_#_defaultBlocObserver']() {
      return null;
    },
    set ['_#_defaultBlocObserver'](_) {},
    /*bloc$['_#_defaultBlocObserver#isSet']*/get ['_#_defaultBlocObserver#isSet']() {
      return false;
    },
    set ['_#_defaultBlocObserver#isSet'](_) {},
    /*bloc$['_#_defaultEventTransformer']*/get ['_#_defaultEventTransformer']() {
      return null;
    },
    set ['_#_defaultEventTransformer'](_) {},
    /*bloc$['_#_defaultEventTransformer#isSet']*/get ['_#_defaultEventTransformer#isSet']() {
      return false;
    },
    set ['_#_defaultEventTransformer#isSet'](_) {}
  }, false);
  var currentState$ = dart.privateName(change, "Change.currentState");
  var nextState$ = dart.privateName(change, "Change.nextState");
  const _is_Change_default = Symbol('_is_Change_default');
  change.Change$ = dart.generic(State => {
    var __t$ChangeOfState = () => (__t$ChangeOfState = dart.constFn(change.Change$(State)))();
    class Change extends core.Object {
      get currentState() {
        return this[currentState$];
      }
      set currentState(value) {
        super.currentState = value;
      }
      get nextState() {
        return this[nextState$];
      }
      set nextState(value) {
        super.nextState = value;
      }
      static ['_#new#tearOff'](State, opts) {
        let currentState = opts && 'currentState' in opts ? opts.currentState : null;
        let nextState = opts && 'nextState' in opts ? opts.nextState : null;
        return new (change.Change$(State)).new({currentState: currentState, nextState: nextState});
      }
      _equals(other) {
        if (other == null) return false;
        return this === other || __t$ChangeOfState().is(other) && this[$runtimeType]._equals(other[$runtimeType]) && dart.equals(this.currentState, other.currentState) && dart.equals(this.nextState, other.nextState);
      }
      get hashCode() {
        return (dart.hashCode(this.currentState) ^ dart.hashCode(this.nextState)) >>> 0;
      }
      toString() {
        return "Change { currentState: " + dart.str(this.currentState) + ", nextState: " + dart.str(this.nextState) + " }";
      }
    }
    (Change.new = function(opts) {
      let currentState = opts && 'currentState' in opts ? opts.currentState : null;
      let nextState = opts && 'nextState' in opts ? opts.nextState : null;
      this[currentState$] = currentState;
      this[nextState$] = nextState;
      ;
    }).prototype = Change.prototype;
    dart.addTypeTests(Change);
    Change.prototype[_is_Change_default] = true;
    dart.addTypeCaches(Change);
    dart.setLibraryUri(Change, I[6]);
    dart.setFieldSignature(Change, () => ({
      __proto__: dart.getFields(Change.__proto__),
      currentState: dart.finalFieldType(State),
      nextState: dart.finalFieldType(State)
    }));
    dart.defineExtensionMethods(Change, ['_equals', 'toString']);
    dart.defineExtensionAccessors(Change, ['hashCode']);
    return Change;
  });
  change.Change = change.Change$();
  dart.addTypeTests(change.Change, _is_Change_default);
  const _is_Cubit_default = Symbol('_is_Cubit_default');
  cubit.Cubit$ = dart.generic(State => {
    class Cubit extends bloc$.BlocBase$(State) {}
    (Cubit.new = function(initialState) {
      Cubit.__proto__.new.call(this, initialState);
      ;
    }).prototype = Cubit.prototype;
    dart.addTypeTests(Cubit);
    Cubit.prototype[_is_Cubit_default] = true;
    dart.addTypeCaches(Cubit);
    dart.setLibraryUri(Cubit, I[7]);
    return Cubit;
  });
  cubit.Cubit = cubit.Cubit$();
  dart.addTypeTests(cubit.Cubit, _is_Cubit_default);
  var event$ = dart.privateName(transition, "Transition.event");
  const _is_Transition_default = Symbol('_is_Transition_default');
  transition.Transition$ = dart.generic((Event, State) => {
    var __t$TransitionOfEvent$State = () => (__t$TransitionOfEvent$State = dart.constFn(transition.Transition$(Event, State)))();
    class Transition extends change.Change$(State) {
      get event() {
        return this[event$];
      }
      set event(value) {
        super.event = value;
      }
      static ['_#new#tearOff'](Event, State, opts) {
        let currentState = opts && 'currentState' in opts ? opts.currentState : null;
        let event = opts && 'event' in opts ? opts.event : null;
        let nextState = opts && 'nextState' in opts ? opts.nextState : null;
        return new (transition.Transition$(Event, State)).new({currentState: currentState, event: event, nextState: nextState});
      }
      _equals(other) {
        if (other == null) return false;
        return this === other || __t$TransitionOfEvent$State().is(other) && this[$runtimeType]._equals(other[$runtimeType]) && dart.equals(this.currentState, other.currentState) && dart.equals(this.event, other.event) && dart.equals(this.nextState, other.nextState);
      }
      get hashCode() {
        return (dart.hashCode(this.currentState) ^ dart.hashCode(this.event) ^ dart.hashCode(this.nextState)) >>> 0;
      }
      toString() {
        return "Transition { currentState: " + dart.str(this.currentState) + ", event: " + dart.str(this.event) + ", nextState: " + dart.str(this.nextState) + " }";
      }
    }
    (Transition.new = function(opts) {
      let currentState = opts && 'currentState' in opts ? opts.currentState : null;
      let event = opts && 'event' in opts ? opts.event : null;
      let nextState = opts && 'nextState' in opts ? opts.nextState : null;
      this[event$] = event;
      Transition.__proto__.new.call(this, {currentState: currentState, nextState: nextState});
      ;
    }).prototype = Transition.prototype;
    dart.addTypeTests(Transition);
    Transition.prototype[_is_Transition_default] = true;
    dart.addTypeCaches(Transition);
    dart.setLibraryUri(Transition, I[8]);
    dart.setFieldSignature(Transition, () => ({
      __proto__: dart.getFields(Transition.__proto__),
      event: dart.finalFieldType(Event)
    }));
    dart.defineExtensionMethods(Transition, ['_equals', 'toString']);
    dart.defineExtensionAccessors(Transition, ['hashCode']);
    return Transition;
  });
  transition.Transition = transition.Transition$();
  dart.addTypeTests(transition.Transition, _is_Transition_default);
  var Widget_key = dart.privateName(framework, "Widget.key");
  var Text_textHeightBehavior = dart.privateName(text, "Text.textHeightBehavior");
  var Text_textWidthBasis = dart.privateName(text, "Text.textWidthBasis");
  var Text_semanticsLabel = dart.privateName(text, "Text.semanticsLabel");
  var Text_maxLines = dart.privateName(text, "Text.maxLines");
  var Text_textScaleFactor = dart.privateName(text, "Text.textScaleFactor");
  var Text_overflow = dart.privateName(text, "Text.overflow");
  var Text_softWrap = dart.privateName(text, "Text.softWrap");
  var Text_locale = dart.privateName(text, "Text.locale");
  var Text_textDirection = dart.privateName(text, "Text.textDirection");
  var Text_textAlign = dart.privateName(text, "Text.textAlign");
  var Text_strutStyle = dart.privateName(text, "Text.strutStyle");
  var Text_style = dart.privateName(text, "Text.style");
  var Text_textSpan = dart.privateName(text, "Text.textSpan");
  var Text_data = dart.privateName(text, "Text.data");
  post_page.PostsPage = class PostsPage extends framework.StatelessWidget {
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: C[3] || CT.C3}), body: new (T$.BlocProviderOfPostBloc()).new({create: dart.fn(_ => {
            let t4;
            t4 = new post_bloc.PostBloc.new({httpClient: client$.Client.new()});
            return (() => {
              t4.add(new post_event.PostFetched.new());
              return t4;
            })();
          }, T$.BuildContextToPostBloc()), child: new post_list.PostsList.new()})});
    }
    static ['_#new#tearOff']() {
      return new post_page.PostsPage.new();
    }
  };
  (post_page.PostsPage.new = function() {
    post_page.PostsPage.__proto__.new.call(this);
    ;
  }).prototype = post_page.PostsPage.prototype;
  dart.addTypeTests(post_page.PostsPage);
  dart.addTypeCaches(post_page.PostsPage);
  dart.setMethodSignature(post_page.PostsPage, () => ({
    __proto__: dart.getMethods(post_page.PostsPage.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(post_page.PostsPage, I[9]);
  var builder$ = dart.privateName(bloc_builder, "BlocBuilder.builder");
  var bloc$0 = dart.privateName(bloc_builder, "BlocBuilderBase.bloc");
  var buildWhen$ = dart.privateName(bloc_builder, "BlocBuilderBase.buildWhen");
  const _is_BlocBuilderBase_default = Symbol('_is_BlocBuilderBase_default');
  bloc_builder.BlocBuilderBase$ = dart.generic((B, S) => {
    var __t$_BlocBuilderBaseStateOfB$S = () => (__t$_BlocBuilderBaseStateOfB$S = dart.constFn(bloc_builder._BlocBuilderBaseState$(B, S)))();
    class BlocBuilderBase extends framework.StatefulWidget {
      get bloc() {
        return this[bloc$0];
      }
      set bloc(value) {
        super.bloc = value;
      }
      get buildWhen() {
        return this[buildWhen$];
      }
      set buildWhen(value) {
        super.buildWhen = value;
      }
      createState() {
        return new (__t$_BlocBuilderBaseStateOfB$S()).new();
      }
    }
    (BlocBuilderBase.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let bloc = opts && 'bloc' in opts ? opts.bloc : null;
      let buildWhen = opts && 'buildWhen' in opts ? opts.buildWhen : null;
      this[bloc$0] = bloc;
      this[buildWhen$] = buildWhen;
      BlocBuilderBase.__proto__.new.call(this, {key: key});
      ;
    }).prototype = BlocBuilderBase.prototype;
    dart.addTypeTests(BlocBuilderBase);
    BlocBuilderBase.prototype[_is_BlocBuilderBase_default] = true;
    dart.addTypeCaches(BlocBuilderBase);
    dart.setMethodSignature(BlocBuilderBase, () => ({
      __proto__: dart.getMethods(BlocBuilderBase.__proto__),
      createState: dart.fnType(framework.State$(bloc_builder.BlocBuilderBase$(B, S)), [])
    }));
    dart.setLibraryUri(BlocBuilderBase, I[10]);
    dart.setFieldSignature(BlocBuilderBase, () => ({
      __proto__: dart.getFields(BlocBuilderBase.__proto__),
      bloc: dart.finalFieldType(dart.nullable(B)),
      buildWhen: dart.finalFieldType(dart.nullable(dart.fnType(core.bool, [S, S])))
    }));
    return BlocBuilderBase;
  });
  bloc_builder.BlocBuilderBase = bloc_builder.BlocBuilderBase$();
  dart.addTypeTests(bloc_builder.BlocBuilderBase, _is_BlocBuilderBase_default);
  const _is_BlocBuilder_default = Symbol('_is_BlocBuilder_default');
  bloc_builder.BlocBuilder$ = dart.generic((B, S) => {
    class BlocBuilder extends bloc_builder.BlocBuilderBase$(B, S) {
      get builder() {
        return this[builder$];
      }
      set builder(value) {
        super.builder = value;
      }
      static ['_#new#tearOff'](B, S, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let bloc = opts && 'bloc' in opts ? opts.bloc : null;
        let buildWhen = opts && 'buildWhen' in opts ? opts.buildWhen : null;
        return new (bloc_builder.BlocBuilder$(B, S)).new({key: key, builder: builder, bloc: bloc, buildWhen: buildWhen});
      }
      build(context, state) {
        let t5, t4;
        S.as(state);
        t4 = context;
        t5 = state;
        return this.builder(t4, t5);
      }
    }
    (BlocBuilder.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let bloc = opts && 'bloc' in opts ? opts.bloc : null;
      let buildWhen = opts && 'buildWhen' in opts ? opts.buildWhen : null;
      this[builder$] = builder;
      BlocBuilder.__proto__.new.call(this, {key: key, bloc: bloc, buildWhen: buildWhen});
      ;
    }).prototype = BlocBuilder.prototype;
    dart.addTypeTests(BlocBuilder);
    BlocBuilder.prototype[_is_BlocBuilder_default] = true;
    dart.addTypeCaches(BlocBuilder);
    dart.setMethodSignature(BlocBuilder, () => ({
      __proto__: dart.getMethods(BlocBuilder.__proto__),
      build: dart.fnType(framework.Widget, [framework.BuildContext, dart.nullable(core.Object)])
    }));
    dart.setLibraryUri(BlocBuilder, I[10]);
    dart.setFieldSignature(BlocBuilder, () => ({
      __proto__: dart.getFields(BlocBuilder.__proto__),
      builder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, S]))
    }));
    return BlocBuilder;
  });
  bloc_builder.BlocBuilder = bloc_builder.BlocBuilder$();
  dart.addTypeTests(bloc_builder.BlocBuilder, _is_BlocBuilder_default);
  var ___BlocBuilderBaseState__bloc = dart.privateName(bloc_builder, "_#_BlocBuilderBaseState#_bloc");
  var ___BlocBuilderBaseState__state = dart.privateName(bloc_builder, "_#_BlocBuilderBaseState#_state");
  var ___BlocBuilderBaseState__state_isSet = dart.privateName(bloc_builder, "_#_BlocBuilderBaseState#_state#isSet");
  var _bloc = dart.privateName(bloc_builder, "_bloc");
  var _state = dart.privateName(bloc_builder, "_state");
  const _is__BlocBuilderBaseState_default = Symbol('_is__BlocBuilderBaseState_default');
  bloc_builder._BlocBuilderBaseState$ = dart.generic((B, S) => {
    var __t$BlocBuilderBaseOfB$S = () => (__t$BlocBuilderBaseOfB$S = dart.constFn(bloc_builder.BlocBuilderBase$(B, S)))();
    var __t$BTobool = () => (__t$BTobool = dart.constFn(dart.fnType(core.bool, [B])))();
    var __t$BlocListenerOfB$S = () => (__t$BlocListenerOfB$S = dart.constFn(bloc_listener.BlocListener$(B, S)))();
    var __t$SAndSTobool = () => (__t$SAndSTobool = dart.constFn(dart.fnType(core.bool, [S, S])))();
    var __t$SAndSToNbool = () => (__t$SAndSToNbool = dart.constFn(dart.nullable(__t$SAndSTobool())))();
    var __t$BuildContextAndSTovoid = () => (__t$BuildContextAndSTovoid = dart.constFn(dart.fnType(dart.void, [framework.BuildContext, S])))();
    class _BlocBuilderBaseState extends framework.State$(bloc_builder.BlocBuilderBase$(B, S)) {
      get [_bloc]() {
        let t4;
        t4 = this[___BlocBuilderBaseState__bloc];
        return t4 == null ? dart.throw(new _internal.LateError.fieldNI("_bloc")) : t4;
      }
      set [_bloc](library$32package$58flutter_bloc$47src$47bloc_builder$46dart$58$58_bloc$35param) {
        this[___BlocBuilderBaseState__bloc] = library$32package$58flutter_bloc$47src$47bloc_builder$46dart$58$58_bloc$35param;
      }
      get [_state]() {
        let t4;
        return this[___BlocBuilderBaseState__state_isSet] ? (t4 = this[___BlocBuilderBaseState__state], t4) : dart.throw(new _internal.LateError.fieldNI("_state"));
      }
      set [_state](library$32package$58flutter_bloc$47src$47bloc_builder$46dart$58$58_state$35param) {
        this[___BlocBuilderBaseState__state_isSet] = true;
        this[___BlocBuilderBaseState__state] = library$32package$58flutter_bloc$47src$47bloc_builder$46dart$58$58_state$35param;
      }
      initState() {
        let t4;
        super.initState();
        this[_bloc] = (t4 = this.widget.bloc, t4 == null ? provider$['ReadContext|read'](B, this.context) : t4);
        this[_state] = this[_bloc].state;
      }
      didUpdateWidget(oldWidget) {
        let t4, t4$;
        __t$BlocBuilderBaseOfB$S().as(oldWidget);
        super.didUpdateWidget(oldWidget);
        let oldBloc = (t4 = oldWidget.bloc, t4 == null ? provider$['ReadContext|read'](B, this.context) : t4);
        let currentBloc = (t4$ = this.widget.bloc, t4$ == null ? oldBloc : t4$);
        if (!oldBloc[$_equals](currentBloc)) {
          this[_bloc] = currentBloc;
          this[_state] = this[_bloc].state;
        }
      }
      didChangeDependencies() {
        let t4;
        super.didChangeDependencies();
        let bloc = (t4 = this.widget.bloc, t4 == null ? provider$['ReadContext|read'](B, this.context) : t4);
        if (!this[_bloc][$_equals](bloc)) {
          this[_bloc] = bloc;
          this[_state] = this[_bloc].state;
        }
      }
      build(context) {
        if (this.widget.bloc == null) {
          provider$['SelectContext|select'](B, core.bool, context, dart.fn(bloc => this[_bloc] === bloc, __t$BTobool()));
        }
        return new (__t$BlocListenerOfB$S()).new({bloc: this[_bloc], listenWhen: __t$SAndSToNbool().as(this.widget.buildWhen), listener: dart.fn((context, state) => this.setState(dart.fn(() => this[_state] = state, T$.VoidTovoid())), __t$BuildContextAndSTovoid()), child: this.widget.build(context, this[_state])});
      }
      static ['_#new#tearOff'](B, S) {
        return new (bloc_builder._BlocBuilderBaseState$(B, S)).new();
      }
    }
    (_BlocBuilderBaseState.new = function() {
      this[___BlocBuilderBaseState__bloc] = null;
      this[___BlocBuilderBaseState__state] = null;
      this[___BlocBuilderBaseState__state_isSet] = false;
      _BlocBuilderBaseState.__proto__.new.call(this);
      ;
    }).prototype = _BlocBuilderBaseState.prototype;
    dart.addTypeTests(_BlocBuilderBaseState);
    _BlocBuilderBaseState.prototype[_is__BlocBuilderBaseState_default] = true;
    dart.addTypeCaches(_BlocBuilderBaseState);
    dart.setMethodSignature(_BlocBuilderBaseState, () => ({
      __proto__: dart.getMethods(_BlocBuilderBaseState.__proto__),
      build: dart.fnType(framework.Widget, [framework.BuildContext])
    }));
    dart.setGetterSignature(_BlocBuilderBaseState, () => ({
      __proto__: dart.getGetters(_BlocBuilderBaseState.__proto__),
      [_bloc]: B,
      [_state]: S
    }));
    dart.setSetterSignature(_BlocBuilderBaseState, () => ({
      __proto__: dart.getSetters(_BlocBuilderBaseState.__proto__),
      [_bloc]: B,
      [_state]: S
    }));
    dart.setLibraryUri(_BlocBuilderBaseState, I[10]);
    dart.setFieldSignature(_BlocBuilderBaseState, () => ({
      __proto__: dart.getFields(_BlocBuilderBaseState.__proto__),
      [___BlocBuilderBaseState__bloc]: dart.fieldType(dart.nullable(B)),
      [___BlocBuilderBaseState__state]: dart.fieldType(dart.nullable(S)),
      [___BlocBuilderBaseState__state_isSet]: dart.fieldType(core.bool)
    }));
    return _BlocBuilderBaseState;
  });
  bloc_builder._BlocBuilderBaseState = bloc_builder._BlocBuilderBaseState$();
  dart.addTypeTests(bloc_builder._BlocBuilderBaseState, _is__BlocBuilderBaseState_default);
  var bloc$1 = dart.privateName(bloc_consumer, "BlocConsumer.bloc");
  var builder$0 = dart.privateName(bloc_consumer, "BlocConsumer.builder");
  var listener$ = dart.privateName(bloc_consumer, "BlocConsumer.listener");
  var buildWhen$0 = dart.privateName(bloc_consumer, "BlocConsumer.buildWhen");
  var listenWhen$ = dart.privateName(bloc_consumer, "BlocConsumer.listenWhen");
  const _is_BlocConsumer_default = Symbol('_is_BlocConsumer_default');
  bloc_consumer.BlocConsumer$ = dart.generic((B, S) => {
    var __t$_BlocConsumerStateOfB$S = () => (__t$_BlocConsumerStateOfB$S = dart.constFn(bloc_consumer._BlocConsumerState$(B, S)))();
    class BlocConsumer extends framework.StatefulWidget {
      get bloc() {
        return this[bloc$1];
      }
      set bloc(value) {
        super.bloc = value;
      }
      get builder() {
        return this[builder$0];
      }
      set builder(value) {
        super.builder = value;
      }
      get listener() {
        return this[listener$];
      }
      set listener(value) {
        super.listener = value;
      }
      get buildWhen() {
        return this[buildWhen$0];
      }
      set buildWhen(value) {
        super.buildWhen = value;
      }
      get listenWhen() {
        return this[listenWhen$];
      }
      set listenWhen(value) {
        super.listenWhen = value;
      }
      static ['_#new#tearOff'](B, S, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let listener = opts && 'listener' in opts ? opts.listener : null;
        let bloc = opts && 'bloc' in opts ? opts.bloc : null;
        let buildWhen = opts && 'buildWhen' in opts ? opts.buildWhen : null;
        let listenWhen = opts && 'listenWhen' in opts ? opts.listenWhen : null;
        return new (bloc_consumer.BlocConsumer$(B, S)).new({key: key, builder: builder, listener: listener, bloc: bloc, buildWhen: buildWhen, listenWhen: listenWhen});
      }
      createState() {
        return new (__t$_BlocConsumerStateOfB$S()).new();
      }
    }
    (BlocConsumer.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let listener = opts && 'listener' in opts ? opts.listener : null;
      let bloc = opts && 'bloc' in opts ? opts.bloc : null;
      let buildWhen = opts && 'buildWhen' in opts ? opts.buildWhen : null;
      let listenWhen = opts && 'listenWhen' in opts ? opts.listenWhen : null;
      this[builder$0] = builder;
      this[listener$] = listener;
      this[bloc$1] = bloc;
      this[buildWhen$0] = buildWhen;
      this[listenWhen$] = listenWhen;
      BlocConsumer.__proto__.new.call(this, {key: key});
      ;
    }).prototype = BlocConsumer.prototype;
    dart.addTypeTests(BlocConsumer);
    BlocConsumer.prototype[_is_BlocConsumer_default] = true;
    dart.addTypeCaches(BlocConsumer);
    dart.setMethodSignature(BlocConsumer, () => ({
      __proto__: dart.getMethods(BlocConsumer.__proto__),
      createState: dart.fnType(framework.State$(bloc_consumer.BlocConsumer$(B, S)), [])
    }));
    dart.setLibraryUri(BlocConsumer, I[11]);
    dart.setFieldSignature(BlocConsumer, () => ({
      __proto__: dart.getFields(BlocConsumer.__proto__),
      bloc: dart.finalFieldType(dart.nullable(B)),
      builder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, S])),
      listener: dart.finalFieldType(dart.fnType(dart.void, [framework.BuildContext, S])),
      buildWhen: dart.finalFieldType(dart.nullable(dart.fnType(core.bool, [S, S]))),
      listenWhen: dart.finalFieldType(dart.nullable(dart.fnType(core.bool, [S, S])))
    }));
    return BlocConsumer;
  });
  bloc_consumer.BlocConsumer = bloc_consumer.BlocConsumer$();
  dart.addTypeTests(bloc_consumer.BlocConsumer, _is_BlocConsumer_default);
  var ___BlocConsumerState__bloc = dart.privateName(bloc_consumer, "_#_BlocConsumerState#_bloc");
  var _bloc$ = dart.privateName(bloc_consumer, "_bloc");
  const _is__BlocConsumerState_default = Symbol('_is__BlocConsumerState_default');
  bloc_consumer._BlocConsumerState$ = dart.generic((B, S) => {
    var __t$BlocConsumerOfB$S = () => (__t$BlocConsumerOfB$S = dart.constFn(bloc_consumer.BlocConsumer$(B, S)))();
    var __t$BTobool = () => (__t$BTobool = dart.constFn(dart.fnType(core.bool, [B])))();
    var __t$BlocBuilderOfB$S = () => (__t$BlocBuilderOfB$S = dart.constFn(bloc_builder.BlocBuilder$(B, S)))();
    var __t$BuildContextAndSToWidget = () => (__t$BuildContextAndSToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, S])))();
    var __t$SAndSTobool = () => (__t$SAndSTobool = dart.constFn(dart.fnType(core.bool, [S, S])))();
    var __t$SAndSToNbool = () => (__t$SAndSToNbool = dart.constFn(dart.nullable(__t$SAndSTobool())))();
    var __t$BuildContextAndSTovoid = () => (__t$BuildContextAndSTovoid = dart.constFn(dart.fnType(dart.void, [framework.BuildContext, S])))();
    class _BlocConsumerState extends framework.State$(bloc_consumer.BlocConsumer$(B, S)) {
      get [_bloc$]() {
        let t4;
        t4 = this[___BlocConsumerState__bloc];
        return t4 == null ? dart.throw(new _internal.LateError.fieldNI("_bloc")) : t4;
      }
      set [_bloc$](library$32package$58flutter_bloc$47src$47bloc_consumer$46dart$58$58_bloc$35param) {
        this[___BlocConsumerState__bloc] = library$32package$58flutter_bloc$47src$47bloc_consumer$46dart$58$58_bloc$35param;
      }
      initState() {
        let t4;
        super.initState();
        this[_bloc$] = (t4 = this.widget.bloc, t4 == null ? provider$['ReadContext|read'](B, this.context) : t4);
      }
      didUpdateWidget(oldWidget) {
        let t4, t4$;
        __t$BlocConsumerOfB$S().as(oldWidget);
        super.didUpdateWidget(oldWidget);
        let oldBloc = (t4 = oldWidget.bloc, t4 == null ? provider$['ReadContext|read'](B, this.context) : t4);
        let currentBloc = (t4$ = this.widget.bloc, t4$ == null ? oldBloc : t4$);
        if (!oldBloc[$_equals](currentBloc)) this[_bloc$] = currentBloc;
      }
      didChangeDependencies() {
        let t4;
        super.didChangeDependencies();
        let bloc = (t4 = this.widget.bloc, t4 == null ? provider$['ReadContext|read'](B, this.context) : t4);
        if (!this[_bloc$][$_equals](bloc)) this[_bloc$] = bloc;
      }
      build(context) {
        if (this.widget.bloc == null) {
          provider$['SelectContext|select'](B, core.bool, context, dart.fn(bloc => this[_bloc$] === bloc, __t$BTobool()));
        }
        return new (__t$BlocBuilderOfB$S()).new({bloc: this[_bloc$], builder: __t$BuildContextAndSToWidget().as(this.widget.builder), buildWhen: dart.fn((previous, current) => {
            let t4, t4$, t6, t5, t4$0, t4$1, t4$2;
            if (dart.test((t4$ = (t4 = __t$SAndSToNbool().as(this.widget.listenWhen), t4 == null ? null : t4(previous, current)), t4$ == null ? true : t4$))) {
              t4$0 = this.widget;
              t5 = context;
              t6 = current;
              __t$BuildContextAndSTovoid().as(t4$0.listener)(t5, t6);
            }
            t4$2 = (t4$1 = __t$SAndSToNbool().as(this.widget.buildWhen), t4$1 == null ? null : t4$1(previous, current));
            return t4$2 == null ? true : t4$2;
          }, __t$SAndSTobool())});
      }
      static ['_#new#tearOff'](B, S) {
        return new (bloc_consumer._BlocConsumerState$(B, S)).new();
      }
    }
    (_BlocConsumerState.new = function() {
      this[___BlocConsumerState__bloc] = null;
      _BlocConsumerState.__proto__.new.call(this);
      ;
    }).prototype = _BlocConsumerState.prototype;
    dart.addTypeTests(_BlocConsumerState);
    _BlocConsumerState.prototype[_is__BlocConsumerState_default] = true;
    dart.addTypeCaches(_BlocConsumerState);
    dart.setMethodSignature(_BlocConsumerState, () => ({
      __proto__: dart.getMethods(_BlocConsumerState.__proto__),
      build: dart.fnType(framework.Widget, [framework.BuildContext])
    }));
    dart.setGetterSignature(_BlocConsumerState, () => ({
      __proto__: dart.getGetters(_BlocConsumerState.__proto__),
      [_bloc$]: B
    }));
    dart.setSetterSignature(_BlocConsumerState, () => ({
      __proto__: dart.getSetters(_BlocConsumerState.__proto__),
      [_bloc$]: B
    }));
    dart.setLibraryUri(_BlocConsumerState, I[11]);
    dart.setFieldSignature(_BlocConsumerState, () => ({
      __proto__: dart.getFields(_BlocConsumerState.__proto__),
      [___BlocConsumerState__bloc]: dart.fieldType(dart.nullable(B))
    }));
    return _BlocConsumerState;
  });
  bloc_consumer._BlocConsumerState = bloc_consumer._BlocConsumerState$();
  dart.addTypeTests(bloc_consumer._BlocConsumerState, _is__BlocConsumerState_default);
  nested.SingleChildWidget = class SingleChildWidget extends core.Object {};
  (nested.SingleChildWidget.new = function() {
    ;
  }).prototype = nested.SingleChildWidget.prototype;
  dart.addTypeTests(nested.SingleChildWidget);
  dart.addTypeCaches(nested.SingleChildWidget);
  nested.SingleChildWidget[dart.implements] = () => [framework.Widget];
  dart.setLibraryUri(nested.SingleChildWidget, I[12]);
  bloc_listener.BlocListenerSingleChildWidget = class BlocListenerSingleChildWidget extends nested.SingleChildWidget {};
  bloc_listener.BlocListenerSingleChildWidget[dart.mixinOn] = SingleChildWidget => class BlocListenerSingleChildWidget extends SingleChildWidget {};
  dart.addTypeTests(bloc_listener.BlocListenerSingleChildWidget);
  dart.addTypeCaches(bloc_listener.BlocListenerSingleChildWidget);
  bloc_listener.BlocListenerSingleChildWidget[dart.implements] = () => [nested.SingleChildWidget];
  dart.setLibraryUri(bloc_listener.BlocListenerSingleChildWidget, I[13]);
  var child$ = dart.privateName(bloc_listener, "BlocListenerBase.child");
  var bloc$2 = dart.privateName(bloc_listener, "BlocListenerBase.bloc");
  var listener$0 = dart.privateName(bloc_listener, "BlocListenerBase.listener");
  var listenWhen$0 = dart.privateName(bloc_listener, "BlocListenerBase.listenWhen");
  var _child = dart.privateName(nested, "SingleChildStatefulWidget._child");
  var _child$ = dart.privateName(nested, "_child");
  nested.SingleChildStatefulWidget = class SingleChildStatefulWidget extends framework.StatefulWidget {
    get [_child$]() {
      return this[_child];
    }
    set [_child$](value) {
      super[_child$] = value;
    }
    createElement() {
      return new nested.SingleChildStatefulElement.new(this);
    }
  };
  (nested.SingleChildStatefulWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    this[_child] = child;
    nested.SingleChildStatefulWidget.__proto__.new.call(this, {key: key});
    ;
  }).prototype = nested.SingleChildStatefulWidget.prototype;
  dart.addTypeTests(nested.SingleChildStatefulWidget);
  dart.addTypeCaches(nested.SingleChildStatefulWidget);
  nested.SingleChildStatefulWidget[dart.implements] = () => [nested.SingleChildWidget];
  dart.setMethodSignature(nested.SingleChildStatefulWidget, () => ({
    __proto__: dart.getMethods(nested.SingleChildStatefulWidget.__proto__),
    createElement: dart.fnType(nested.SingleChildStatefulElement, [])
  }));
  dart.setLibraryUri(nested.SingleChildStatefulWidget, I[12]);
  dart.setFieldSignature(nested.SingleChildStatefulWidget, () => ({
    __proto__: dart.getFields(nested.SingleChildStatefulWidget.__proto__),
    [_child$]: dart.finalFieldType(dart.nullable(framework.Widget))
  }));
  const _is_BlocListenerBase_default = Symbol('_is_BlocListenerBase_default');
  bloc_listener.BlocListenerBase$ = dart.generic((B, S) => {
    var __t$_BlocListenerBaseStateOfB$S = () => (__t$_BlocListenerBaseStateOfB$S = dart.constFn(bloc_listener._BlocListenerBaseState$(B, S)))();
    class BlocListenerBase extends nested.SingleChildStatefulWidget {
      get child() {
        return this[child$];
      }
      set child(value) {
        super.child = value;
      }
      get bloc() {
        return this[bloc$2];
      }
      set bloc(value) {
        super.bloc = value;
      }
      get listener() {
        return this[listener$0];
      }
      set listener(value) {
        super.listener = value;
      }
      get listenWhen() {
        return this[listenWhen$0];
      }
      set listenWhen(value) {
        super.listenWhen = value;
      }
      createState() {
        return new (__t$_BlocListenerBaseStateOfB$S()).new();
      }
    }
    (BlocListenerBase.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let listener = opts && 'listener' in opts ? opts.listener : null;
      let bloc = opts && 'bloc' in opts ? opts.bloc : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let listenWhen = opts && 'listenWhen' in opts ? opts.listenWhen : null;
      this[listener$0] = listener;
      this[bloc$2] = bloc;
      this[child$] = child;
      this[listenWhen$0] = listenWhen;
      BlocListenerBase.__proto__.new.call(this, {key: key, child: child});
      ;
    }).prototype = BlocListenerBase.prototype;
    dart.addTypeTests(BlocListenerBase);
    BlocListenerBase.prototype[_is_BlocListenerBase_default] = true;
    dart.addTypeCaches(BlocListenerBase);
    dart.setMethodSignature(BlocListenerBase, () => ({
      __proto__: dart.getMethods(BlocListenerBase.__proto__),
      createState: dart.fnType(nested.SingleChildState$(bloc_listener.BlocListenerBase$(B, S)), [])
    }));
    dart.setLibraryUri(BlocListenerBase, I[13]);
    dart.setFieldSignature(BlocListenerBase, () => ({
      __proto__: dart.getFields(BlocListenerBase.__proto__),
      child: dart.finalFieldType(dart.nullable(framework.Widget)),
      bloc: dart.finalFieldType(dart.nullable(B)),
      listener: dart.finalFieldType(dart.fnType(dart.void, [framework.BuildContext, S])),
      listenWhen: dart.finalFieldType(dart.nullable(dart.fnType(core.bool, [S, S])))
    }));
    return BlocListenerBase;
  });
  bloc_listener.BlocListenerBase = bloc_listener.BlocListenerBase$();
  dart.addTypeTests(bloc_listener.BlocListenerBase, _is_BlocListenerBase_default);
  const _is_BlocListener_default = Symbol('_is_BlocListener_default');
  bloc_listener.BlocListener$ = dart.generic((B, S) => {
    const BlocListenerBase_BlocListenerSingleChildWidget$36 = class BlocListenerBase_BlocListenerSingleChildWidget extends bloc_listener.BlocListenerBase$(B, S) {};
    (BlocListenerBase_BlocListenerSingleChildWidget$36.new = function(opts) {
      BlocListenerBase_BlocListenerSingleChildWidget$36.__proto__.new.call(this, opts);
    }).prototype = BlocListenerBase_BlocListenerSingleChildWidget$36.prototype;
    dart.applyMixin(BlocListenerBase_BlocListenerSingleChildWidget$36, bloc_listener.BlocListenerSingleChildWidget);
    class BlocListener extends BlocListenerBase_BlocListenerSingleChildWidget$36 {
      static ['_#new#tearOff'](B, S, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let listener = opts && 'listener' in opts ? opts.listener : null;
        let bloc = opts && 'bloc' in opts ? opts.bloc : null;
        let listenWhen = opts && 'listenWhen' in opts ? opts.listenWhen : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (bloc_listener.BlocListener$(B, S)).new({key: key, listener: listener, bloc: bloc, listenWhen: listenWhen, child: child});
      }
    }
    (BlocListener.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let listener = opts && 'listener' in opts ? opts.listener : null;
      let bloc = opts && 'bloc' in opts ? opts.bloc : null;
      let listenWhen = opts && 'listenWhen' in opts ? opts.listenWhen : null;
      let child = opts && 'child' in opts ? opts.child : null;
      BlocListener.__proto__.new.call(this, {key: key, child: child, listener: listener, bloc: bloc, listenWhen: listenWhen});
      ;
    }).prototype = BlocListener.prototype;
    dart.addTypeTests(BlocListener);
    BlocListener.prototype[_is_BlocListener_default] = true;
    dart.addTypeCaches(BlocListener);
    dart.setLibraryUri(BlocListener, I[13]);
    return BlocListener;
  });
  bloc_listener.BlocListener = bloc_listener.BlocListener$();
  dart.addTypeTests(bloc_listener.BlocListener, _is_BlocListener_default);
  var _subscription = dart.privateName(bloc_listener, "_subscription");
  var ___BlocListenerBaseState__bloc = dart.privateName(bloc_listener, "_#_BlocListenerBaseState#_bloc");
  var ___BlocListenerBaseState__previousState = dart.privateName(bloc_listener, "_#_BlocListenerBaseState#_previousState");
  var ___BlocListenerBaseState__previousState_isSet = dart.privateName(bloc_listener, "_#_BlocListenerBaseState#_previousState#isSet");
  var _bloc$0 = dart.privateName(bloc_listener, "_bloc");
  var _previousState = dart.privateName(bloc_listener, "_previousState");
  var _subscribe = dart.privateName(bloc_listener, "_subscribe");
  var _unsubscribe = dart.privateName(bloc_listener, "_unsubscribe");
  const _is_SingleChildState_default = Symbol('_is_SingleChildState_default');
  nested.SingleChildState$ = dart.generic(T => {
    class SingleChildState extends framework.State$(T) {
      build(context) {
        return this.buildWithChild(context, this.widget[_child$]);
      }
    }
    (SingleChildState.new = function() {
      SingleChildState.__proto__.new.call(this);
      ;
    }).prototype = SingleChildState.prototype;
    dart.addTypeTests(SingleChildState);
    SingleChildState.prototype[_is_SingleChildState_default] = true;
    dart.addTypeCaches(SingleChildState);
    dart.setMethodSignature(SingleChildState, () => ({
      __proto__: dart.getMethods(SingleChildState.__proto__),
      build: dart.fnType(framework.Widget, [framework.BuildContext])
    }));
    dart.setLibraryUri(SingleChildState, I[12]);
    return SingleChildState;
  });
  nested.SingleChildState = nested.SingleChildState$();
  dart.addTypeTests(nested.SingleChildState, _is_SingleChildState_default);
  const _is__BlocListenerBaseState_default = Symbol('_is__BlocListenerBaseState_default');
  bloc_listener._BlocListenerBaseState$ = dart.generic((B, S) => {
    var __t$BlocListenerBaseOfB$S = () => (__t$BlocListenerBaseOfB$S = dart.constFn(bloc_listener.BlocListenerBase$(B, S)))();
    var __t$BTobool = () => (__t$BTobool = dart.constFn(dart.fnType(core.bool, [B])))();
    var __t$SAndSTobool = () => (__t$SAndSTobool = dart.constFn(dart.fnType(core.bool, [S, S])))();
    var __t$SAndSToNbool = () => (__t$SAndSToNbool = dart.constFn(dart.nullable(__t$SAndSTobool())))();
    var __t$BuildContextAndSTovoid = () => (__t$BuildContextAndSTovoid = dart.constFn(dart.fnType(dart.void, [framework.BuildContext, S])))();
    var __t$STovoid = () => (__t$STovoid = dart.constFn(dart.fnType(dart.void, [S])))();
    class _BlocListenerBaseState extends nested.SingleChildState$(bloc_listener.BlocListenerBase$(B, S)) {
      get [_bloc$0]() {
        let t4;
        t4 = this[___BlocListenerBaseState__bloc];
        return t4 == null ? dart.throw(new _internal.LateError.fieldNI("_bloc")) : t4;
      }
      set [_bloc$0](library$32package$58flutter_bloc$47src$47bloc_listener$46dart$58$58_bloc$35param) {
        this[___BlocListenerBaseState__bloc] = library$32package$58flutter_bloc$47src$47bloc_listener$46dart$58$58_bloc$35param;
      }
      get [_previousState]() {
        let t4;
        return this[___BlocListenerBaseState__previousState_isSet] ? (t4 = this[___BlocListenerBaseState__previousState], t4) : dart.throw(new _internal.LateError.fieldNI("_previousState"));
      }
      set [_previousState](library$32package$58flutter_bloc$47src$47bloc_listener$46dart$58$58_previousState$35param) {
        this[___BlocListenerBaseState__previousState_isSet] = true;
        this[___BlocListenerBaseState__previousState] = library$32package$58flutter_bloc$47src$47bloc_listener$46dart$58$58_previousState$35param;
      }
      initState() {
        let t4;
        super.initState();
        this[_bloc$0] = (t4 = this.widget.bloc, t4 == null ? provider$['ReadContext|read'](B, this.context) : t4);
        this[_previousState] = this[_bloc$0].state;
        this[_subscribe]();
      }
      didUpdateWidget(oldWidget) {
        let t4, t4$;
        __t$BlocListenerBaseOfB$S().as(oldWidget);
        super.didUpdateWidget(oldWidget);
        let oldBloc = (t4 = oldWidget.bloc, t4 == null ? provider$['ReadContext|read'](B, this.context) : t4);
        let currentBloc = (t4$ = this.widget.bloc, t4$ == null ? oldBloc : t4$);
        if (!oldBloc[$_equals](currentBloc)) {
          if (this[_subscription] != null) {
            this[_unsubscribe]();
            this[_bloc$0] = currentBloc;
            this[_previousState] = this[_bloc$0].state;
          }
          this[_subscribe]();
        }
      }
      didChangeDependencies() {
        let t4;
        super.didChangeDependencies();
        let bloc = (t4 = this.widget.bloc, t4 == null ? provider$['ReadContext|read'](B, this.context) : t4);
        if (!this[_bloc$0][$_equals](bloc)) {
          if (this[_subscription] != null) {
            this[_unsubscribe]();
            this[_bloc$0] = bloc;
            this[_previousState] = this[_bloc$0].state;
          }
          this[_subscribe]();
        }
      }
      buildWithChild(context, child) {
        if (!(child != null)) dart.assertFailed(dart.str(this.widget[$runtimeType]) + " used outside of MultiBlocListener must specify a child", I[14], 184, 7, "child != null");
        if (this.widget.bloc == null) {
          provider$['SelectContext|select'](B, core.bool, context, dart.fn(bloc => this[_bloc$0] === bloc, __t$BTobool()));
        }
        return dart.nullCheck(child);
      }
      dispose() {
        this[_unsubscribe]();
        super.dispose();
      }
      [_subscribe]() {
        this[_subscription] = this[_bloc$0].stream.listen(dart.fn(state => {
          let t4, t4$, t6, t5, t4$0;
          if (dart.test((t4$ = (t4 = __t$SAndSToNbool().as(this.widget.listenWhen), t4 == null ? null : t4(this[_previousState], state)), t4$ == null ? true : t4$))) {
            t4$0 = this.widget;
            t5 = this.context;
            t6 = state;
            __t$BuildContextAndSTovoid().as(t4$0.listener)(t5, t6);
          }
          this[_previousState] = state;
        }, __t$STovoid()));
      }
      [_unsubscribe]() {
        let t4;
        t4 = this[_subscription];
        t4 == null ? null : t4.cancel();
        this[_subscription] = null;
      }
      static ['_#new#tearOff'](B, S) {
        return new (bloc_listener._BlocListenerBaseState$(B, S)).new();
      }
    }
    (_BlocListenerBaseState.new = function() {
      this[_subscription] = null;
      this[___BlocListenerBaseState__bloc] = null;
      this[___BlocListenerBaseState__previousState] = null;
      this[___BlocListenerBaseState__previousState_isSet] = false;
      _BlocListenerBaseState.__proto__.new.call(this);
      ;
    }).prototype = _BlocListenerBaseState.prototype;
    dart.addTypeTests(_BlocListenerBaseState);
    _BlocListenerBaseState.prototype[_is__BlocListenerBaseState_default] = true;
    dart.addTypeCaches(_BlocListenerBaseState);
    dart.setMethodSignature(_BlocListenerBaseState, () => ({
      __proto__: dart.getMethods(_BlocListenerBaseState.__proto__),
      buildWithChild: dart.fnType(framework.Widget, [framework.BuildContext, dart.nullable(framework.Widget)]),
      [_subscribe]: dart.fnType(dart.void, []),
      [_unsubscribe]: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(_BlocListenerBaseState, () => ({
      __proto__: dart.getGetters(_BlocListenerBaseState.__proto__),
      [_bloc$0]: B,
      [_previousState]: S
    }));
    dart.setSetterSignature(_BlocListenerBaseState, () => ({
      __proto__: dart.getSetters(_BlocListenerBaseState.__proto__),
      [_bloc$0]: B,
      [_previousState]: S
    }));
    dart.setLibraryUri(_BlocListenerBaseState, I[13]);
    dart.setFieldSignature(_BlocListenerBaseState, () => ({
      __proto__: dart.getFields(_BlocListenerBaseState.__proto__),
      [_subscription]: dart.fieldType(dart.nullable(async.StreamSubscription$(S))),
      [___BlocListenerBaseState__bloc]: dart.fieldType(dart.nullable(B)),
      [___BlocListenerBaseState__previousState]: dart.fieldType(dart.nullable(S)),
      [___BlocListenerBaseState__previousState_isSet]: dart.fieldType(core.bool)
    }));
    return _BlocListenerBaseState;
  });
  bloc_listener._BlocListenerBaseState = bloc_listener._BlocListenerBaseState$();
  dart.addTypeTests(bloc_listener._BlocListenerBaseState, _is__BlocListenerBaseState_default);
  bloc_provider.BlocProviderSingleChildWidget = class BlocProviderSingleChildWidget extends nested.SingleChildWidget {};
  bloc_provider.BlocProviderSingleChildWidget[dart.mixinOn] = SingleChildWidget => class BlocProviderSingleChildWidget extends SingleChildWidget {};
  dart.addTypeTests(bloc_provider.BlocProviderSingleChildWidget);
  dart.addTypeCaches(bloc_provider.BlocProviderSingleChildWidget);
  bloc_provider.BlocProviderSingleChildWidget[dart.implements] = () => [nested.SingleChildWidget];
  dart.setLibraryUri(bloc_provider.BlocProviderSingleChildWidget, I[15]);
  var child$0 = dart.privateName(bloc_provider, "BlocProvider.child");
  var lazy$ = dart.privateName(bloc_provider, "BlocProvider.lazy");
  var _create = dart.privateName(bloc_provider, "BlocProvider._create");
  var _value = dart.privateName(bloc_provider, "BlocProvider._value");
  var _create$ = dart.privateName(bloc_provider, "_create");
  var _value$ = dart.privateName(bloc_provider, "_value");
  var _child$0 = dart.privateName(nested, "SingleChildStatelessWidget._child");
  nested.SingleChildStatelessWidget = class SingleChildStatelessWidget extends framework.StatelessWidget {
    get [_child$]() {
      return this[_child$0];
    }
    set [_child$](value) {
      super[_child$] = value;
    }
    build(context) {
      return this.buildWithChild(context, this[_child$]);
    }
    createElement() {
      return new nested.SingleChildStatelessElement.new(this);
    }
  };
  (nested.SingleChildStatelessWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    this[_child$0] = child;
    nested.SingleChildStatelessWidget.__proto__.new.call(this, {key: key});
    ;
  }).prototype = nested.SingleChildStatelessWidget.prototype;
  dart.addTypeTests(nested.SingleChildStatelessWidget);
  dart.addTypeCaches(nested.SingleChildStatelessWidget);
  nested.SingleChildStatelessWidget[dart.implements] = () => [nested.SingleChildWidget];
  dart.setMethodSignature(nested.SingleChildStatelessWidget, () => ({
    __proto__: dart.getMethods(nested.SingleChildStatelessWidget.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    createElement: dart.fnType(nested.SingleChildStatelessElement, [])
  }));
  dart.setLibraryUri(nested.SingleChildStatelessWidget, I[12]);
  dart.setFieldSignature(nested.SingleChildStatelessWidget, () => ({
    __proto__: dart.getFields(nested.SingleChildStatelessWidget.__proto__),
    [_child$]: dart.finalFieldType(dart.nullable(framework.Widget))
  }));
  const _is_BlocProvider_default = Symbol('_is_BlocProvider_default');
  bloc_provider.BlocProvider$ = dart.generic(T => {
    var __t$InheritedProviderOfT = () => (__t$InheritedProviderOfT = dart.constFn(provider$.InheritedProvider$(T)))();
    var __t$BuildContextAndTTovoid = () => (__t$BuildContextAndTTovoid = dart.constFn(dart.fnType(dart.void, [framework.BuildContext, T])))();
    const SingleChildStatelessWidget_BlocProviderSingleChildWidget$36 = class SingleChildStatelessWidget_BlocProviderSingleChildWidget extends nested.SingleChildStatelessWidget {};
    (SingleChildStatelessWidget_BlocProviderSingleChildWidget$36.new = function(opts) {
      SingleChildStatelessWidget_BlocProviderSingleChildWidget$36.__proto__.new.call(this, opts);
    }).prototype = SingleChildStatelessWidget_BlocProviderSingleChildWidget$36.prototype;
    dart.applyMixin(SingleChildStatelessWidget_BlocProviderSingleChildWidget$36, bloc_provider.BlocProviderSingleChildWidget);
    class BlocProvider extends SingleChildStatelessWidget_BlocProviderSingleChildWidget$36 {
      get child() {
        return this[child$0];
      }
      set child(value) {
        super.child = value;
      }
      get lazy() {
        return this[lazy$];
      }
      set lazy(value) {
        super.lazy = value;
      }
      get [_create$]() {
        return this[_create];
      }
      set [_create$](value) {
        super[_create$] = value;
      }
      get [_value$]() {
        return this[_value];
      }
      set [_value$](value) {
        super[_value$] = value;
      }
      static ['_#new#tearOff'](T, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let create = opts && 'create' in opts ? opts.create : null;
        let child = opts && 'child' in opts ? opts.child : null;
        let lazy = opts && 'lazy' in opts ? opts.lazy : true;
        return new (bloc_provider.BlocProvider$(T)).new({key: key, create: create, child: child, lazy: lazy});
      }
      static ['_#value#tearOff'](T, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let value = opts && 'value' in opts ? opts.value : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (bloc_provider.BlocProvider$(T)).value({key: key, value: value, child: child});
      }
      static of(T, context, opts) {
        let listen = opts && 'listen' in opts ? opts.listen : false;
        try {
          return provider$.Provider.of(T, context, {listen: listen});
        } catch (e$) {
          let e = dart.getThrown(e$);
          if (provider$.ProviderNotFoundException.is(e)) {
            if (!e.valueType._equals(dart.wrapType(T))) dart.rethrow(e$);
            dart.throw(assertions.FlutterError.new("        BlocProvider.of() called with a context that does not contain a " + dart.str(dart.wrapType(T)) + ".\n        No ancestor could be found starting from the context that was passed to BlocProvider.of<" + dart.str(dart.wrapType(T)) + ">().\n\n        This can happen if the context you used comes from a widget above the BlocProvider.\n\n        The context used was: " + dart.str(context) + "\n        "));
          } else
            throw e$;
        }
      }
      buildWithChild(context, child) {
        if (!(child != null)) dart.assertFailed(dart.str(this[$runtimeType]) + " used outside of MultiBlocProvider must specify a child", I[16], 119, 7, "child != null");
        let value = this[_value$];
        return value != null ? new (__t$InheritedProviderOfT()).value({value: value, startListening: C[4] || CT.C4, lazy: this.lazy, child: child}) : new (__t$InheritedProviderOfT()).new({create: this[_create$], dispose: dart.fn((_, bloc) => bloc.close(), __t$BuildContextAndTTovoid()), startListening: C[4] || CT.C4, child: child, lazy: this.lazy});
      }
      static _startListening(e, value) {
        let subscription = value.stream.listen(dart.fn(_ => e.markNeedsNotifyDependents(), T$.dynamicTovoid()));
        return dart.bind(subscription, 'cancel');
      }
    }
    (BlocProvider.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : true;
      this[child$0] = child;
      this[lazy$] = lazy;
      this[_create] = create;
      this[_value] = null;
      BlocProvider.__proto__.new.call(this, {key: key, child: child});
      ;
    }).prototype = BlocProvider.prototype;
    (BlocProvider.value = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let child = opts && 'child' in opts ? opts.child : null;
      this[child$0] = child;
      this[_value] = value;
      this[_create] = null;
      this[lazy$] = true;
      BlocProvider.__proto__.new.call(this, {key: key, child: child});
      ;
    }).prototype = BlocProvider.prototype;
    dart.addTypeTests(BlocProvider);
    BlocProvider.prototype[_is_BlocProvider_default] = true;
    dart.addTypeCaches(BlocProvider);
    dart.setMethodSignature(BlocProvider, () => ({
      __proto__: dart.getMethods(BlocProvider.__proto__),
      buildWithChild: dart.fnType(framework.Widget, [framework.BuildContext, dart.nullable(framework.Widget)])
    }));
    dart.setStaticMethodSignature(BlocProvider, () => ['of', '_startListening']);
    dart.setLibraryUri(BlocProvider, I[15]);
    dart.setFieldSignature(BlocProvider, () => ({
      __proto__: dart.getFields(BlocProvider.__proto__),
      child: dart.finalFieldType(dart.nullable(framework.Widget)),
      lazy: dart.finalFieldType(core.bool),
      [_create$]: dart.finalFieldType(dart.nullable(dart.fnType(T, [framework.BuildContext]))),
      [_value$]: dart.finalFieldType(dart.nullable(T))
    }));
    return BlocProvider;
  });
  bloc_provider.BlocProvider = bloc_provider.BlocProvider$();
  dart.addTypeTests(bloc_provider.BlocProvider, _is_BlocProvider_default);
  var bloc$3 = dart.privateName(bloc_selector, "BlocSelector.bloc");
  var builder$1 = dart.privateName(bloc_selector, "BlocSelector.builder");
  var selector$0 = dart.privateName(bloc_selector, "BlocSelector.selector");
  const _is_BlocSelector_default = Symbol('_is_BlocSelector_default');
  bloc_selector.BlocSelector$ = dart.generic((B, S, T) => {
    var __t$_BlocSelectorStateOfB$S$T = () => (__t$_BlocSelectorStateOfB$S$T = dart.constFn(bloc_selector._BlocSelectorState$(B, S, T)))();
    class BlocSelector extends framework.StatefulWidget {
      get bloc() {
        return this[bloc$3];
      }
      set bloc(value) {
        super.bloc = value;
      }
      get builder() {
        return this[builder$1];
      }
      set builder(value) {
        super.builder = value;
      }
      get selector() {
        return this[selector$0];
      }
      set selector(value) {
        super.selector = value;
      }
      static ['_#new#tearOff'](B, S, T, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let selector = opts && 'selector' in opts ? opts.selector : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let bloc = opts && 'bloc' in opts ? opts.bloc : null;
        return new (bloc_selector.BlocSelector$(B, S, T)).new({key: key, selector: selector, builder: builder, bloc: bloc});
      }
      createState() {
        return new (__t$_BlocSelectorStateOfB$S$T()).new();
      }
    }
    (BlocSelector.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let selector = opts && 'selector' in opts ? opts.selector : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let bloc = opts && 'bloc' in opts ? opts.bloc : null;
      this[selector$0] = selector;
      this[builder$1] = builder;
      this[bloc$3] = bloc;
      BlocSelector.__proto__.new.call(this, {key: key});
      ;
    }).prototype = BlocSelector.prototype;
    dart.addTypeTests(BlocSelector);
    BlocSelector.prototype[_is_BlocSelector_default] = true;
    dart.addTypeCaches(BlocSelector);
    dart.setMethodSignature(BlocSelector, () => ({
      __proto__: dart.getMethods(BlocSelector.__proto__),
      createState: dart.fnType(framework.State$(bloc_selector.BlocSelector$(B, S, T)), [])
    }));
    dart.setLibraryUri(BlocSelector, I[17]);
    dart.setFieldSignature(BlocSelector, () => ({
      __proto__: dart.getFields(BlocSelector.__proto__),
      bloc: dart.finalFieldType(dart.nullable(B)),
      builder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, T])),
      selector: dart.finalFieldType(dart.fnType(T, [S]))
    }));
    return BlocSelector;
  });
  bloc_selector.BlocSelector = bloc_selector.BlocSelector$();
  dart.addTypeTests(bloc_selector.BlocSelector, _is_BlocSelector_default);
  var ___BlocSelectorState__bloc = dart.privateName(bloc_selector, "_#_BlocSelectorState#_bloc");
  var ___BlocSelectorState__state = dart.privateName(bloc_selector, "_#_BlocSelectorState#_state");
  var ___BlocSelectorState__state_isSet = dart.privateName(bloc_selector, "_#_BlocSelectorState#_state#isSet");
  var _bloc$1 = dart.privateName(bloc_selector, "_bloc");
  var _state$0 = dart.privateName(bloc_selector, "_state");
  const _is__BlocSelectorState_default = Symbol('_is__BlocSelectorState_default');
  bloc_selector._BlocSelectorState$ = dart.generic((B, S, T) => {
    var __t$BlocSelectorOfB$S$T = () => (__t$BlocSelectorOfB$S$T = dart.constFn(bloc_selector.BlocSelector$(B, S, T)))();
    var __t$BTobool = () => (__t$BTobool = dart.constFn(dart.fnType(core.bool, [B])))();
    var __t$BlocListenerOfB$S = () => (__t$BlocListenerOfB$S = dart.constFn(bloc_listener.BlocListener$(B, S)))();
    var __t$SToT = () => (__t$SToT = dart.constFn(dart.fnType(T, [S])))();
    var __t$BuildContextAndSTovoid = () => (__t$BuildContextAndSTovoid = dart.constFn(dart.fnType(dart.void, [framework.BuildContext, S])))();
    var __t$BuildContextAndTToWidget = () => (__t$BuildContextAndTToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, T])))();
    class _BlocSelectorState extends framework.State$(bloc_selector.BlocSelector$(B, S, T)) {
      get [_bloc$1]() {
        let t5;
        t5 = this[___BlocSelectorState__bloc];
        return t5 == null ? dart.throw(new _internal.LateError.fieldNI("_bloc")) : t5;
      }
      set [_bloc$1](library$32package$58flutter_bloc$47src$47bloc_selector$46dart$58$58_bloc$35param) {
        this[___BlocSelectorState__bloc] = library$32package$58flutter_bloc$47src$47bloc_selector$46dart$58$58_bloc$35param;
      }
      get [_state$0]() {
        let t5;
        return this[___BlocSelectorState__state_isSet] ? (t5 = this[___BlocSelectorState__state], t5) : dart.throw(new _internal.LateError.fieldNI("_state"));
      }
      set [_state$0](library$32package$58flutter_bloc$47src$47bloc_selector$46dart$58$58_state$35param) {
        this[___BlocSelectorState__state_isSet] = true;
        this[___BlocSelectorState__state] = library$32package$58flutter_bloc$47src$47bloc_selector$46dart$58$58_state$35param;
      }
      initState() {
        let t5, t6, t5$;
        super.initState();
        this[_bloc$1] = (t5 = this.widget.bloc, t5 == null ? provider$['ReadContext|read'](B, this.context) : t5);
        this[_state$0] = (t5$ = this.widget, t6 = this[_bloc$1].state, __t$SToT().as(t5$.selector)(t6));
      }
      didUpdateWidget(oldWidget) {
        let t5, t5$, t6, t5$0;
        __t$BlocSelectorOfB$S$T().as(oldWidget);
        super.didUpdateWidget(oldWidget);
        let oldBloc = (t5 = oldWidget.bloc, t5 == null ? provider$['ReadContext|read'](B, this.context) : t5);
        let currentBloc = (t5$ = this.widget.bloc, t5$ == null ? oldBloc : t5$);
        if (!oldBloc[$_equals](currentBloc)) {
          this[_bloc$1] = currentBloc;
          this[_state$0] = (t5$0 = this.widget, t6 = this[_bloc$1].state, __t$SToT().as(t5$0.selector)(t6));
        }
      }
      didChangeDependencies() {
        let t5, t6, t5$;
        super.didChangeDependencies();
        let bloc = (t5 = this.widget.bloc, t5 == null ? provider$['ReadContext|read'](B, this.context) : t5);
        if (!this[_bloc$1][$_equals](bloc)) {
          this[_bloc$1] = bloc;
          this[_state$0] = (t5$ = this.widget, t6 = this[_bloc$1].state, __t$SToT().as(t5$.selector)(t6));
        }
      }
      build(context) {
        let t7, t6, t5;
        if (this.widget.bloc == null) {
          provider$['SelectContext|select'](B, core.bool, context, dart.fn(bloc => this[_bloc$1] === bloc, __t$BTobool()));
        }
        return new (__t$BlocListenerOfB$S()).new({bloc: this[_bloc$1], listener: dart.fn((context, state) => {
            let t6, t5;
            let selectedState = (t5 = this.widget, t6 = state, __t$SToT().as(t5.selector)(t6));
            if (!dart.equals(this[_state$0], selectedState)) this.setState(dart.fn(() => this[_state$0] = selectedState, T$.VoidTovoid()));
          }, __t$BuildContextAndSTovoid()), child: (t5 = this.widget, t6 = context, t7 = this[_state$0], __t$BuildContextAndTToWidget().as(t5.builder)(t6, t7))});
      }
      static ['_#new#tearOff'](B, S, T) {
        return new (bloc_selector._BlocSelectorState$(B, S, T)).new();
      }
    }
    (_BlocSelectorState.new = function() {
      this[___BlocSelectorState__bloc] = null;
      this[___BlocSelectorState__state] = null;
      this[___BlocSelectorState__state_isSet] = false;
      _BlocSelectorState.__proto__.new.call(this);
      ;
    }).prototype = _BlocSelectorState.prototype;
    dart.addTypeTests(_BlocSelectorState);
    _BlocSelectorState.prototype[_is__BlocSelectorState_default] = true;
    dart.addTypeCaches(_BlocSelectorState);
    dart.setMethodSignature(_BlocSelectorState, () => ({
      __proto__: dart.getMethods(_BlocSelectorState.__proto__),
      build: dart.fnType(framework.Widget, [framework.BuildContext])
    }));
    dart.setGetterSignature(_BlocSelectorState, () => ({
      __proto__: dart.getGetters(_BlocSelectorState.__proto__),
      [_bloc$1]: B,
      [_state$0]: T
    }));
    dart.setSetterSignature(_BlocSelectorState, () => ({
      __proto__: dart.getSetters(_BlocSelectorState.__proto__),
      [_bloc$1]: B,
      [_state$0]: T
    }));
    dart.setLibraryUri(_BlocSelectorState, I[17]);
    dart.setFieldSignature(_BlocSelectorState, () => ({
      __proto__: dart.getFields(_BlocSelectorState.__proto__),
      [___BlocSelectorState__bloc]: dart.fieldType(dart.nullable(B)),
      [___BlocSelectorState__state]: dart.fieldType(dart.nullable(T)),
      [___BlocSelectorState__state_isSet]: dart.fieldType(core.bool)
    }));
    return _BlocSelectorState;
  });
  bloc_selector._BlocSelectorState = bloc_selector._BlocSelectorState$();
  dart.addTypeTests(bloc_selector._BlocSelectorState, _is__BlocSelectorState_default);
  var _children = dart.privateName(nested, "_children");
  nested.Nested = class Nested extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let children = opts && 'children' in opts ? opts.children : null;
      let child = opts && 'child' in opts ? opts.child : null;
      return new nested.Nested.new({key: key, children: children, child: child});
    }
    build(context) {
      dart.throw(new core.StateError.new("implemented internally"));
    }
    createElement() {
      return new nested._NestedElement.new(this);
    }
  };
  (nested.Nested.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let children = opts && 'children' in opts ? opts.children : null;
    let child = opts && 'child' in opts ? opts.child : null;
    if (!children[$isNotEmpty]) dart.assertFailed(null, I[18], 71, 16, "children.isNotEmpty");
    this[_children] = children;
    this[_child$] = child;
    nested.Nested.__proto__.new.call(this, {key: key});
    ;
  }).prototype = nested.Nested.prototype;
  dart.addTypeTests(nested.Nested);
  dart.addTypeCaches(nested.Nested);
  nested.Nested[dart.implements] = () => [nested.SingleChildWidget];
  dart.setMethodSignature(nested.Nested, () => ({
    __proto__: dart.getMethods(nested.Nested.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    createElement: dart.fnType(nested._NestedElement, [])
  }));
  dart.setLibraryUri(nested.Nested, I[12]);
  dart.setFieldSignature(nested.Nested, () => ({
    __proto__: dart.getFields(nested.Nested.__proto__),
    [_children]: dart.finalFieldType(core.List$(nested.SingleChildWidget)),
    [_child$]: dart.finalFieldType(dart.nullable(framework.Widget))
  }));
  provider$.MultiProvider = class MultiProvider extends nested.Nested {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let providers = opts && 'providers' in opts ? opts.providers : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      return new provider$.MultiProvider.new({key: key, providers: providers, child: child, builder: builder});
    }
  };
  (provider$.MultiProvider.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let providers = opts && 'providers' in opts ? opts.providers : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let builder = opts && 'builder' in opts ? opts.builder : null;
    provider$.MultiProvider.__proto__.new.call(this, {key: key, children: providers, child: builder != null ? new basic.Builder.new({builder: dart.fn(context => builder(context, child), T$.BuildContextToWidget())}) : child});
    ;
  }).prototype = provider$.MultiProvider.prototype;
  dart.addTypeTests(provider$.MultiProvider);
  dart.addTypeCaches(provider$.MultiProvider);
  dart.setLibraryUri(provider$.MultiProvider, I[19]);
  multi_bloc_listener.MultiBlocListener = class MultiBlocListener extends provider$.MultiProvider {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let listeners = opts && 'listeners' in opts ? opts.listeners : null;
      let child = opts && 'child' in opts ? opts.child : null;
      return new multi_bloc_listener.MultiBlocListener.new({key: key, listeners: listeners, child: child});
    }
  };
  (multi_bloc_listener.MultiBlocListener.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let listeners = opts && 'listeners' in opts ? opts.listeners : null;
    let child = opts && 'child' in opts ? opts.child : null;
    multi_bloc_listener.MultiBlocListener.__proto__.new.call(this, {key: key, providers: listeners, child: child});
    ;
  }).prototype = multi_bloc_listener.MultiBlocListener.prototype;
  dart.addTypeTests(multi_bloc_listener.MultiBlocListener);
  dart.addTypeCaches(multi_bloc_listener.MultiBlocListener);
  dart.setLibraryUri(multi_bloc_listener.MultiBlocListener, I[20]);
  multi_bloc_provider.MultiBlocProvider = class MultiBlocProvider extends provider$.MultiProvider {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let providers = opts && 'providers' in opts ? opts.providers : null;
      let child = opts && 'child' in opts ? opts.child : null;
      return new multi_bloc_provider.MultiBlocProvider.new({key: key, providers: providers, child: child});
    }
  };
  (multi_bloc_provider.MultiBlocProvider.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let providers = opts && 'providers' in opts ? opts.providers : null;
    let child = opts && 'child' in opts ? opts.child : null;
    multi_bloc_provider.MultiBlocProvider.__proto__.new.call(this, {key: key, providers: providers, child: child});
    ;
  }).prototype = multi_bloc_provider.MultiBlocProvider.prototype;
  dart.addTypeTests(multi_bloc_provider.MultiBlocProvider);
  dart.addTypeCaches(multi_bloc_provider.MultiBlocProvider);
  dart.setLibraryUri(multi_bloc_provider.MultiBlocProvider, I[21]);
  multi_repository_provider.MultiRepositoryProvider = class MultiRepositoryProvider extends provider$.MultiProvider {
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let providers = opts && 'providers' in opts ? opts.providers : null;
      let child = opts && 'child' in opts ? opts.child : null;
      return new multi_repository_provider.MultiRepositoryProvider.new({key: key, providers: providers, child: child});
    }
  };
  (multi_repository_provider.MultiRepositoryProvider.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let providers = opts && 'providers' in opts ? opts.providers : null;
    let child = opts && 'child' in opts ? opts.child : null;
    multi_repository_provider.MultiRepositoryProvider.__proto__.new.call(this, {key: key, providers: providers, child: child});
    ;
  }).prototype = multi_repository_provider.MultiRepositoryProvider.prototype;
  dart.addTypeTests(multi_repository_provider.MultiRepositoryProvider);
  dart.addTypeCaches(multi_repository_provider.MultiRepositoryProvider);
  dart.setLibraryUri(multi_repository_provider.MultiRepositoryProvider, I[22]);
  repository_provider.RepositoryProviderSingleChildWidget = class RepositoryProviderSingleChildWidget extends nested.SingleChildWidget {};
  repository_provider.RepositoryProviderSingleChildWidget[dart.mixinOn] = SingleChildWidget => class RepositoryProviderSingleChildWidget extends SingleChildWidget {};
  dart.addTypeTests(repository_provider.RepositoryProviderSingleChildWidget);
  dart.addTypeCaches(repository_provider.RepositoryProviderSingleChildWidget);
  repository_provider.RepositoryProviderSingleChildWidget[dart.implements] = () => [nested.SingleChildWidget];
  dart.setLibraryUri(repository_provider.RepositoryProviderSingleChildWidget, I[23]);
  var builder$2 = dart.privateName(provider$, "InheritedProvider.builder");
  var _lazy = dart.privateName(provider$, "_lazy");
  var _delegate = dart.privateName(provider$, "_delegate");
  const _is_InheritedProvider_default = Symbol('_is_InheritedProvider_default');
  provider$.InheritedProvider$ = dart.generic(T => {
    var __t$_CreateInheritedProviderOfT = () => (__t$_CreateInheritedProviderOfT = dart.constFn(provider$._CreateInheritedProvider$(T)))();
    var __t$_ValueInheritedProviderOfT = () => (__t$_ValueInheritedProviderOfT = dart.constFn(provider$._ValueInheritedProvider$(T)))();
    var __t$_InheritedProviderElementOfT = () => (__t$_InheritedProviderElementOfT = dart.constFn(provider$._InheritedProviderElement$(T)))();
    var __t$TN = () => (__t$TN = dart.constFn(dart.nullable(T)))();
    var __t$_InheritedProviderScopeOfTN = () => (__t$_InheritedProviderScopeOfTN = dart.constFn(provider$._InheritedProviderScope$(__t$TN())))();
    class InheritedProvider extends nested.SingleChildStatelessWidget {
      get builder() {
        return this[builder$2];
      }
      set builder(value) {
        super.builder = value;
      }
      static ['_#new#tearOff'](T, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let create = opts && 'create' in opts ? opts.create : null;
        let update = opts && 'update' in opts ? opts.update : null;
        let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
        let debugCheckInvalidValueType = opts && 'debugCheckInvalidValueType' in opts ? opts.debugCheckInvalidValueType : null;
        let startListening = opts && 'startListening' in opts ? opts.startListening : null;
        let dispose = opts && 'dispose' in opts ? opts.dispose : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let lazy = opts && 'lazy' in opts ? opts.lazy : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (provider$.InheritedProvider$(T)).new({key: key, create: create, update: update, updateShouldNotify: updateShouldNotify, debugCheckInvalidValueType: debugCheckInvalidValueType, startListening: startListening, dispose: dispose, builder: builder, lazy: lazy, child: child});
      }
      static ['_#value#tearOff'](T, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let value = opts && 'value' in opts ? opts.value : null;
        let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
        let startListening = opts && 'startListening' in opts ? opts.startListening : null;
        let lazy = opts && 'lazy' in opts ? opts.lazy : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (provider$.InheritedProvider$(T)).value({key: key, value: value, updateShouldNotify: updateShouldNotify, startListening: startListening, lazy: lazy, builder: builder, child: child});
      }
      static ['_#_constructor#tearOff'](T, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let delegate = opts && 'delegate' in opts ? opts.delegate : null;
        let lazy = opts && 'lazy' in opts ? opts.lazy : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (provider$.InheritedProvider$(T))._constructor({key: key, delegate: delegate, lazy: lazy, builder: builder, child: child});
      }
      debugFillProperties(properties) {
        super.debugFillProperties(properties);
        this[_delegate].debugFillProperties(properties);
      }
      createElement() {
        return new (__t$_InheritedProviderElementOfT()).new(this);
      }
      buildWithChild(context, child) {
        if (!(this.builder != null || child != null)) dart.assertFailed(dart.str(this[$runtimeType]) + " used outside of MultiProvider must specify a child", I[25], 158, 7, "builder != null || child != null");
        return new (__t$_InheritedProviderScopeOfTN()).new({owner: this, debugType: true ? dart.str(this[$runtimeType]) : "", child: this.builder != null ? new basic.Builder.new({builder: dart.fn(context => dart.nullCheck(this.builder)(context, child), T$.BuildContextToWidget())}) : dart.nullCheck(child)});
      }
    }
    (InheritedProvider.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let debugCheckInvalidValueType = opts && 'debugCheckInvalidValueType' in opts ? opts.debugCheckInvalidValueType : null;
      let startListening = opts && 'startListening' in opts ? opts.startListening : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let child = opts && 'child' in opts ? opts.child : null;
      this[builder$2] = builder;
      this[_lazy] = lazy;
      this[_delegate] = new (__t$_CreateInheritedProviderOfT()).new({create: create, update: update, updateShouldNotify: updateShouldNotify, debugCheckInvalidValueType: debugCheckInvalidValueType, startListening: startListening, dispose: dispose});
      InheritedProvider.__proto__.new.call(this, {key: key, child: child});
      ;
    }).prototype = InheritedProvider.prototype;
    (InheritedProvider.value = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let startListening = opts && 'startListening' in opts ? opts.startListening : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      this[builder$2] = builder;
      this[_lazy] = lazy;
      this[_delegate] = new (__t$_ValueInheritedProviderOfT()).new({value: value, updateShouldNotify: updateShouldNotify, startListening: startListening});
      InheritedProvider.__proto__.new.call(this, {key: key, child: child});
      ;
    }).prototype = InheritedProvider.prototype;
    (InheritedProvider._constructor = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let delegate = opts && 'delegate' in opts ? opts.delegate : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      this[builder$2] = builder;
      this[_lazy] = lazy;
      this[_delegate] = delegate;
      InheritedProvider.__proto__.new.call(this, {key: key, child: child});
      ;
    }).prototype = InheritedProvider.prototype;
    dart.addTypeTests(InheritedProvider);
    InheritedProvider.prototype[_is_InheritedProvider_default] = true;
    dart.addTypeCaches(InheritedProvider);
    dart.setMethodSignature(InheritedProvider, () => ({
      __proto__: dart.getMethods(InheritedProvider.__proto__),
      createElement: dart.fnType(provider$._InheritedProviderElement$(T), []),
      buildWithChild: dart.fnType(framework.Widget, [framework.BuildContext, dart.nullable(framework.Widget)])
    }));
    dart.setLibraryUri(InheritedProvider, I[19]);
    dart.setFieldSignature(InheritedProvider, () => ({
      __proto__: dart.getFields(InheritedProvider.__proto__),
      [_delegate]: dart.finalFieldType(provider$._Delegate$(T)),
      [_lazy]: dart.finalFieldType(dart.nullable(core.bool)),
      builder: dart.finalFieldType(dart.nullable(dart.fnType(framework.Widget, [framework.BuildContext, dart.nullable(framework.Widget)])))
    }));
    return InheritedProvider;
  });
  provider$.InheritedProvider = provider$.InheritedProvider$();
  dart.addTypeTests(provider$.InheritedProvider, _is_InheritedProvider_default);
  const _is_Provider_default = Symbol('_is_Provider_default');
  provider$.Provider$ = dart.generic(T => {
    var __t$TTovoid = () => (__t$TTovoid = dart.constFn(dart.fnType(dart.void, [T])))();
    class Provider extends provider$.InheritedProvider$(T) {
      static ['_#new#tearOff'](T, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let create = opts && 'create' in opts ? opts.create : null;
        let dispose = opts && 'dispose' in opts ? opts.dispose : null;
        let lazy = opts && 'lazy' in opts ? opts.lazy : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (provider$.Provider$(T)).new({key: key, create: create, dispose: dispose, lazy: lazy, builder: builder, child: child});
      }
      static ['_#value#tearOff'](T, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let value = opts && 'value' in opts ? opts.value : null;
        let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (provider$.Provider$(T)).value({key: key, value: value, updateShouldNotify: updateShouldNotify, builder: builder, child: child});
      }
      static of(T, context, opts) {
        let t6;
        let listen = opts && 'listen' in opts ? opts.listen : true;
        if (!(dart.nullCheck(context.owner).debugBuilding || listen === false || provider$.debugIsInInheritedProviderUpdate)) dart.assertFailed("Tried to listen to a value exposed with provider, from outside of the widget tree.\n\nThis is likely caused by an event handler (like a button's onPressed) that called\nProvider.of without passing `listen: false`.\n\nTo fix, write:\nProvider.of<" + dart.str(dart.wrapType(T)) + ">(context, listen: false);\n\nIt is unsupported because may pointlessly rebuild the widget associated to the\nevent handler, when the widget tree doesn't care about the value.\n\nThe context used was: " + dart.str(context) + "\n", I[24], 274, 7, "context.owner!.debugBuilding ||\n          listen == false ||\n          debugIsInInheritedProviderUpdate");
        let inheritedElement = provider$.Provider._inheritedElementOf(T, context);
        if (listen) {
          context.dependOnInheritedWidgetOfExactType(provider$._InheritedProviderScope$(dart.nullable(T)));
        }
        let value = (t6 = inheritedElement, t6 == null ? null : t6.value);
        if (provider$._isSoundMode) {
          if (!T.is(value)) {
            dart.throw(new provider$.ProviderNullException.new(dart.wrapType(T), context.widget[$runtimeType]));
          }
          return value;
        }
        return T.as(value);
      }
      static _inheritedElementOf(T, context) {
        if (!(context !== null)) dart.assertFailed("Tried to call context.read/watch/select or similar on a `context` that is null.\n\nThis can happen if you used the context of a StatefulWidget and that\nStatefulWidget was disposed.\n", I[24], 319, 12, "context != null");
        if (!(provider$._debugIsSelecting === false)) dart.assertFailed("Cannot call context.read/watch/select inside the callback of a context.select", I[24], 326, 7, "_debugIsSelecting == false");
        if (!!dart.wrapType(T)._equals(dart.wrapType(dart.dynamic))) dart.assertFailed("Tried to call Provider.of<dynamic>. This is likely a mistake and is therefore\nunsupported.\n\nIf you want to expose a variable that can be anything, consider changing\n`dynamic` to `Object` instead.\n", I[24], 330, 7, "T != dynamic");
        let inheritedElement = dart.nullable(provider$._InheritedProviderScopeElement$(dart.nullable(T))).as(context.getElementForInheritedWidgetOfExactType(provider$._InheritedProviderScope$(dart.nullable(T))));
        if (inheritedElement == null && !T.is(null)) {
          dart.throw(new provider$.ProviderNotFoundException.new(dart.wrapType(T), context.widget[$runtimeType]));
        }
        return inheritedElement;
      }
    }
    (Provider.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      Provider.__proto__.new.call(this, {key: key, lazy: lazy, builder: builder, create: create, dispose: dispose, debugCheckInvalidValueType: false ? null : dart.fn(value => {
          let t6;
          t6 = provider$.Provider.debugCheckInvalidValueType;
          return t6 == null ? null : t6(T, value);
        }, __t$TTovoid()), child: child});
      ;
    }).prototype = Provider.prototype;
    (Provider.value = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      if (!dart.fn(() => {
        let t6;
        t6 = provider$.Provider.debugCheckInvalidValueType;
        t6 == null ? null : t6(T, value);
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[24], 243, 16, "() {\n          Provider.debugCheckInvalidValueType?.call<T>(value);\n          return true;\n        }()");
      Provider.__proto__.value.call(this, {key: key, builder: builder, value: value, updateShouldNotify: updateShouldNotify, child: child});
      ;
    }).prototype = Provider.prototype;
    dart.addTypeTests(Provider);
    Provider.prototype[_is_Provider_default] = true;
    dart.addTypeCaches(Provider);
    dart.setStaticMethodSignature(Provider, () => ['of', '_inheritedElementOf']);
    dart.setLibraryUri(Provider, I[19]);
    dart.setStaticFieldSignature(Provider, () => ['debugCheckInvalidValueType']);
    return Provider;
  });
  provider$.Provider = provider$.Provider$();
  dart.defineLazy(provider$.Provider, {
    /*provider$.Provider.debugCheckInvalidValueType*/get debugCheckInvalidValueType() {
      return dart.fn((T, value) => {
        if (!dart.fn(() => {
          if (change_notifier.Listenable.is(value) || async.Stream.is(value)) {
            dart.throw(assertions.FlutterError.new("Tried to use Provider with a subtype of Listenable/Stream (" + dart.str(dart.wrapType(T)) + ").\n\nThis is likely a mistake, as Provider will not automatically update dependents\nwhen " + dart.str(dart.wrapType(T)) + " is updated. Instead, consider changing Provider for more specific\nimplementation that handles the update mechanism, such as:\n\n- ListenableProvider\n- ChangeNotifierProvider\n- ValueListenableProvider\n- StreamProvider\n\nAlternatively, if you are making your own provider, consider using InheritedProvider.\n\nIf you think that this is not an error, you can disable this check by setting\nProvider.debugCheckInvalidValueType to `null` in your main file:\n\n```\nvoid main() {\n  Provider.debugCheckInvalidValueType = null;\n\n  runApp(MyApp());\n}\n```\n"));
          }
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[24], 385, 12, "() {\n      if (value is Listenable || value is Stream) {\n        throw FlutterError('''\nTried to use Provider with a subtype of Listenable/Stream ($T).\n\nThis is likely a mistake, as Provider will not automatically update dependents\nwhen $T is updated. Instead, consider changing Provider for more specific\nimplementation that handles the update mechanism, such as:\n\n- ListenableProvider\n- ChangeNotifierProvider\n- ValueListenableProvider\n- StreamProvider\n\nAlternatively, if you are making your own provider, consider using InheritedProvider.\n\nIf you think that this is not an error, you can disable this check by setting\nProvider.debugCheckInvalidValueType to `null` in your main file:\n\n```\nvoid main() {\n  Provider.debugCheckInvalidValueType = null;\n\n  runApp(MyApp());\n}\n```\n''');\n      }\n      return true;\n    }()");
      }, T$.TTovoid$2());
    },
    set debugCheckInvalidValueType(_) {}
  }, false);
  dart.addTypeTests(provider$.Provider, _is_Provider_default);
  const _is_RepositoryProvider_default = Symbol('_is_RepositoryProvider_default');
  repository_provider.RepositoryProvider$ = dart.generic(T => {
    var __t$BuildContextAndTTovoid = () => (__t$BuildContextAndTTovoid = dart.constFn(dart.fnType(dart.void, [framework.BuildContext, T])))();
    const Provider_RepositoryProviderSingleChildWidget$36 = class Provider_RepositoryProviderSingleChildWidget extends provider$.Provider$(T) {};
    (Provider_RepositoryProviderSingleChildWidget$36.new = function(opts) {
      Provider_RepositoryProviderSingleChildWidget$36.__proto__.new.call(this, opts);
    }).prototype = Provider_RepositoryProviderSingleChildWidget$36.prototype;
    (Provider_RepositoryProviderSingleChildWidget$36.value = function(opts) {
      Provider_RepositoryProviderSingleChildWidget$36.__proto__.value.call(this, opts);
    }).prototype = Provider_RepositoryProviderSingleChildWidget$36.prototype;
    dart.applyMixin(Provider_RepositoryProviderSingleChildWidget$36, repository_provider.RepositoryProviderSingleChildWidget);
    class RepositoryProvider extends Provider_RepositoryProviderSingleChildWidget$36 {
      static ['_#new#tearOff'](T, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let create = opts && 'create' in opts ? opts.create : null;
        let child = opts && 'child' in opts ? opts.child : null;
        let lazy = opts && 'lazy' in opts ? opts.lazy : null;
        return new (repository_provider.RepositoryProvider$(T)).new({key: key, create: create, child: child, lazy: lazy});
      }
      static ['_#value#tearOff'](T, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let value = opts && 'value' in opts ? opts.value : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (repository_provider.RepositoryProvider$(T)).value({key: key, value: value, child: child});
      }
      static of(T, context, opts) {
        let listen = opts && 'listen' in opts ? opts.listen : false;
        try {
          return provider$.Provider.of(T, context, {listen: listen});
        } catch (e$) {
          let e = dart.getThrown(e$);
          if (provider$.ProviderNotFoundException.is(e)) {
            if (!e.valueType._equals(dart.wrapType(T))) dart.rethrow(e$);
            dart.throw(assertions.FlutterError.new("        RepositoryProvider.of() called with a context that does not contain a repository of type " + dart.str(dart.wrapType(T)) + ".\n        No ancestor could be found starting from the context that was passed to RepositoryProvider.of<" + dart.str(dart.wrapType(T)) + ">().\n\n        This can happen if the context you used comes from a widget above the RepositoryProvider.\n\n        The context used was: " + dart.str(context) + "\n        "));
          } else
            throw e$;
        }
      }
    }
    (RepositoryProvider.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      RepositoryProvider.__proto__.new.call(this, {key: key, create: create, dispose: dart.fn((_, __) => {
        }, __t$BuildContextAndTTovoid()), child: child, lazy: lazy});
      ;
    }).prototype = RepositoryProvider.prototype;
    (RepositoryProvider.value = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let child = opts && 'child' in opts ? opts.child : null;
      RepositoryProvider.__proto__.value.call(this, {key: key, value: value, child: child});
      ;
    }).prototype = RepositoryProvider.prototype;
    dart.addTypeTests(RepositoryProvider);
    RepositoryProvider.prototype[_is_RepositoryProvider_default] = true;
    dart.addTypeCaches(RepositoryProvider);
    dart.setStaticMethodSignature(RepositoryProvider, () => ['of']);
    dart.setLibraryUri(RepositoryProvider, I[23]);
    return RepositoryProvider;
  });
  repository_provider.RepositoryProvider = repository_provider.RepositoryProvider$();
  dart.addTypeTests(repository_provider.RepositoryProvider, _is_RepositoryProvider_default);
  var httpClient$ = dart.privateName(post_bloc, "PostBloc.httpClient");
  var PostState_hasReachedMax = dart.privateName(post_state, "PostState.hasReachedMax");
  var PostState_posts = dart.privateName(post_state, "PostState.posts");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  var PostState_status = dart.privateName(post_state, "PostState.status");
  var _onPostFetched = dart.privateName(post_bloc, "_onPostFetched");
  var _fetchPosts = dart.privateName(post_bloc, "_fetchPosts");
  equatable$.Equatable = class Equatable extends core.Object {
    get stringify() {
      return null;
    }
    _equals(other) {
      if (other == null) return false;
      return this === other || equatable$.Equatable.is(other) && this[$runtimeType]._equals(other[$runtimeType]) && equatable_utils.equals(this.props, other.props);
    }
    get hashCode() {
      return (this[$runtimeType].hashCode ^ equatable_utils.mapPropsToHashCode(this.props)) >>> 0;
    }
    toString() {
      switch (this.stringify) {
        case true:
          {
            return equatable_utils.mapPropsToString(this[$runtimeType], this.props);
          }
        case false:
          {
            return dart.str(this[$runtimeType]);
          }
        default:
          {
            return equatable_config.EquatableConfig.stringify === true ? equatable_utils.mapPropsToString(this[$runtimeType], this.props) : dart.str(this[$runtimeType]);
          }
      }
    }
  };
  (equatable$.Equatable.new = function() {
    ;
  }).prototype = equatable$.Equatable.prototype;
  dart.addTypeTests(equatable$.Equatable);
  dart.addTypeCaches(equatable$.Equatable);
  dart.setGetterSignature(equatable$.Equatable, () => ({
    __proto__: dart.getGetters(equatable$.Equatable.__proto__),
    stringify: dart.nullable(core.bool)
  }));
  dart.setLibraryUri(equatable$.Equatable, I[26]);
  dart.defineExtensionMethods(equatable$.Equatable, ['_equals', 'toString']);
  dart.defineExtensionAccessors(equatable$.Equatable, ['hashCode']);
  post_event.PostEvent = class PostEvent extends equatable$.Equatable {
    get props() {
      return T$.JSArrayOfObject().of([]);
    }
  };
  (post_event.PostEvent.new = function() {
    post_event.PostEvent.__proto__.new.call(this);
    ;
  }).prototype = post_event.PostEvent.prototype;
  dart.addTypeTests(post_event.PostEvent);
  dart.addTypeCaches(post_event.PostEvent);
  dart.setGetterSignature(post_event.PostEvent, () => ({
    __proto__: dart.getGetters(post_event.PostEvent.__proto__),
    props: core.List$(core.Object)
  }));
  dart.setLibraryUri(post_event.PostEvent, I[27]);
  const status$ = PostState_status;
  const posts$ = PostState_posts;
  const hasReachedMax$ = PostState_hasReachedMax;
  post_state.PostState = class PostState extends equatable$.Equatable {
    get status() {
      return this[status$];
    }
    set status(value) {
      super.status = value;
    }
    get posts() {
      return this[posts$];
    }
    set posts(value) {
      super.posts = value;
    }
    get hasReachedMax() {
      return this[hasReachedMax$];
    }
    set hasReachedMax(value) {
      super.hasReachedMax = value;
    }
    static ['_#new#tearOff'](opts) {
      let status = opts && 'status' in opts ? opts.status : C[7] || CT.C7;
      let posts = opts && 'posts' in opts ? opts.posts : C[6] || CT.C6;
      let hasReachedMax = opts && 'hasReachedMax' in opts ? opts.hasReachedMax : false;
      return new post_state.PostState.new({status: status, posts: posts, hasReachedMax: hasReachedMax});
    }
    copyWith(opts) {
      let t7, t7$, t7$0;
      let status = opts && 'status' in opts ? opts.status : null;
      let posts = opts && 'posts' in opts ? opts.posts : null;
      let hasReachedMax = opts && 'hasReachedMax' in opts ? opts.hasReachedMax : null;
      return new post_state.PostState.new({status: (t7 = status, t7 == null ? this.status : t7), posts: (t7$ = posts, t7$ == null ? this.posts : t7$), hasReachedMax: (t7$0 = hasReachedMax, t7$0 == null ? this.hasReachedMax : t7$0)});
    }
    toString() {
      return "PostState { status: " + dart.str(this.status) + ", hasReachedMax: " + dart.str(this.hasReachedMax) + ", posts: " + dart.str(this.posts[$length]) + "}";
    }
    get props() {
      return T$.JSArrayOfObject().of([this.status, this.posts, this.hasReachedMax]);
    }
  };
  (post_state.PostState.new = function(opts) {
    let status = opts && 'status' in opts ? opts.status : C[7] || CT.C7;
    let posts = opts && 'posts' in opts ? opts.posts : C[6] || CT.C6;
    let hasReachedMax = opts && 'hasReachedMax' in opts ? opts.hasReachedMax : false;
    this[status$] = status;
    this[posts$] = posts;
    this[hasReachedMax$] = hasReachedMax;
    post_state.PostState.__proto__.new.call(this);
    ;
  }).prototype = post_state.PostState.prototype;
  dart.addTypeTests(post_state.PostState);
  dart.addTypeCaches(post_state.PostState);
  dart.setMethodSignature(post_state.PostState, () => ({
    __proto__: dart.getMethods(post_state.PostState.__proto__),
    copyWith: dart.fnType(post_state.PostState, [], {hasReachedMax: dart.nullable(core.bool), posts: dart.nullable(core.List$(post.Post)), status: dart.nullable(post_state.PostStatus)}, {})
  }));
  dart.setGetterSignature(post_state.PostState, () => ({
    __proto__: dart.getGetters(post_state.PostState.__proto__),
    props: core.List$(core.Object)
  }));
  dart.setLibraryUri(post_state.PostState, I[28]);
  dart.setFieldSignature(post_state.PostState, () => ({
    __proto__: dart.getFields(post_state.PostState.__proto__),
    status: dart.finalFieldType(post_state.PostStatus),
    posts: dart.finalFieldType(core.List$(post.Post)),
    hasReachedMax: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(post_state.PostState, ['toString']);
  post_bloc.PostBloc = class PostBloc extends bloc$.Bloc$(post_event.PostEvent, post_state.PostState) {
    get httpClient() {
      return this[httpClient$];
    }
    set httpClient(value) {
      super.httpClient = value;
    }
    static ['_#new#tearOff'](opts) {
      let httpClient = opts && 'httpClient' in opts ? opts.httpClient : null;
      return new post_bloc.PostBloc.new({httpClient: httpClient});
    }
    [_onPostFetched](event, emit) {
      return async.async(dart.void, (function* _onPostFetched() {
        let t6;
        if (this.state.hasReachedMax) return;
        try {
          if (this.state.status === post_state.PostStatus.initial) {
            let posts = (yield this[_fetchPosts]());
            return emit.call(this.state.copyWith({status: post_state.PostStatus.success, posts: posts, hasReachedMax: false}));
          }
          let posts = (yield this[_fetchPosts](this.state.posts[$length]));
          posts[$isEmpty] ? emit.call(this.state.copyWith({hasReachedMax: true})) : emit.call(this.state.copyWith({status: post_state.PostStatus.success, posts: (t6 = T$.ListOfPost().of(this.state.posts), (() => {
              t6[$addAll](posts);
              return t6;
            })()), hasReachedMax: false}));
        } catch (e) {
          let _ = dart.getThrown(e);
          if (core.Object.is(_)) {
            emit.call(this.state.copyWith({status: post_state.PostStatus.failure}));
          } else
            throw e;
        }
      }).bind(this));
    }
    [_fetchPosts](startIndex = 0) {
      return async.async(T$.ListOfPost(), (function* _fetchPosts() {
        let response = (yield this.httpClient.get(core._Uri.https("jsonplaceholder.typicode.com", "/posts", new (T$.IdentityMapOfString$String()).from(["_start", dart.str(startIndex), "_limit", dart.str(20)]))));
        if (response.statusCode === 200) {
          let body = core.List.as(convert.json.decode(response.body));
          return body[$map](post.Post, dart.fn(json => new post.Post.new({id: core.int.as(dart.dsend(json, '_get', ["id"])), title: core.String.as(dart.dsend(json, '_get', ["title"])), body: core.String.as(dart.dsend(json, '_get', ["body"]))}), T$.dynamicToPost()))[$toList]();
        }
        dart.throw(core.Exception.new("error fetching posts"));
      }).bind(this));
    }
  };
  (post_bloc.PostBloc.new = function(opts) {
    let httpClient = opts && 'httpClient' in opts ? opts.httpClient : null;
    this[httpClient$] = httpClient;
    post_bloc.PostBloc.__proto__.new.call(this, C[5] || CT.C5);
    this.on(post_event.PostFetched, dart.bind(this, _onPostFetched), {transformer: post_bloc.throttleDroppable(post_event.PostFetched, post_bloc.throttleDuration)});
  }).prototype = post_bloc.PostBloc.prototype;
  dart.addTypeTests(post_bloc.PostBloc);
  dart.addTypeCaches(post_bloc.PostBloc);
  dart.setMethodSignature(post_bloc.PostBloc, () => ({
    __proto__: dart.getMethods(post_bloc.PostBloc.__proto__),
    [_onPostFetched]: dart.fnType(async.Future$(dart.void), [post_event.PostFetched, bloc$.Emitter$(post_state.PostState)]),
    [_fetchPosts]: dart.fnType(async.Future$(core.List$(post.Post)), [], [core.int])
  }));
  dart.setLibraryUri(post_bloc.PostBloc, I[29]);
  dart.setFieldSignature(post_bloc.PostBloc, () => ({
    __proto__: dart.getFields(post_bloc.PostBloc.__proto__),
    httpClient: dart.finalFieldType(client$.Client)
  }));
  post_bloc.throttleDroppable = function throttleDroppable(E, duration) {
    return dart.fn((events, mapper) => droppable.droppable(E)(rate_limit['RateLimit|throttle'](E, events, duration), mapper), dart.fnType(async.Stream$(E), [async.Stream$(E), dart.fnType(async.Stream$(E), [E])]));
  };
  var Duration__duration = dart.privateName(core, "Duration._duration");
  dart.defineLazy(post_bloc, {
    /*post_bloc._postLimit*/get _postLimit() {
      return 20;
    },
    /*post_bloc.throttleDuration*/get throttleDuration() {
      return C[8] || CT.C8;
    }
  }, false);
  post_event.PostFetched = class PostFetched extends post_event.PostEvent {
    static ['_#new#tearOff']() {
      return new post_event.PostFetched.new();
    }
  };
  (post_event.PostFetched.new = function() {
    post_event.PostFetched.__proto__.new.call(this);
    ;
  }).prototype = post_event.PostFetched.prototype;
  dart.addTypeTests(post_event.PostFetched);
  dart.addTypeCaches(post_event.PostFetched);
  dart.setLibraryUri(post_event.PostFetched, I[27]);
  post_list.PostsList = class PostsList extends framework.StatefulWidget {
    createState() {
      return new post_list._PostsListState.new();
    }
    static ['_#new#tearOff']() {
      return new post_list.PostsList.new();
    }
  };
  (post_list.PostsList.new = function() {
    post_list.PostsList.__proto__.new.call(this);
    ;
  }).prototype = post_list.PostsList.prototype;
  dart.addTypeTests(post_list.PostsList);
  dart.addTypeCaches(post_list.PostsList);
  dart.setMethodSignature(post_list.PostsList, () => ({
    __proto__: dart.getMethods(post_list.PostsList.__proto__),
    createState: dart.fnType(post_list._PostsListState, [])
  }));
  dart.setLibraryUri(post_list.PostsList, I[30]);
  var _scrollController = dart.privateName(post_list, "_scrollController");
  var _onScroll = dart.privateName(post_list, "_onScroll");
  var SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  var Align_heightFactor = dart.privateName(basic, "Align.heightFactor");
  var Align_widthFactor = dart.privateName(basic, "Align.widthFactor");
  var Alignment_y = dart.privateName(alignment, "Alignment.y");
  var Alignment_x = dart.privateName(alignment, "Alignment.x");
  var Align_alignment = dart.privateName(basic, "Align.alignment");
  var ProgressIndicator_semanticsValue = dart.privateName(progress_indicator, "ProgressIndicator.semanticsValue");
  var ProgressIndicator_semanticsLabel = dart.privateName(progress_indicator, "ProgressIndicator.semanticsLabel");
  var ProgressIndicator_valueColor = dart.privateName(progress_indicator, "ProgressIndicator.valueColor");
  var ProgressIndicator_color = dart.privateName(progress_indicator, "ProgressIndicator.color");
  var ProgressIndicator_backgroundColor = dart.privateName(progress_indicator, "ProgressIndicator.backgroundColor");
  var ProgressIndicator_value = dart.privateName(progress_indicator, "ProgressIndicator.value");
  var CircularProgressIndicator_strokeWidth = dart.privateName(progress_indicator, "CircularProgressIndicator.strokeWidth");
  var CircularProgressIndicator__indicatorType = dart.privateName(progress_indicator, "CircularProgressIndicator._indicatorType");
  var _isBottom = dart.privateName(post_list, "_isBottom");
  post_list._PostsListState = class _PostsListState extends framework.State$(post_list.PostsList) {
    initState() {
      super.initState();
      this[_scrollController].addListener(dart.bind(this, _onScroll));
    }
    build(context) {
      return new (T$.BlocBuilderOfPostBloc$PostState()).new({builder: dart.fn((context, state) => {
          switch (state.status) {
            case C[12] || CT.C12:
              {
                return C[9] || CT.C9;
              }
            case C[15] || CT.C15:
              {
                if (state.posts[$isEmpty]) {
                  return C[13] || CT.C13;
                }
                return new scroll_view.ListView.builder({itemBuilder: dart.fn((context, index) => index >= state.posts[$length] ? new bottom_loader.BottomLoader.new() : new post_list_item.PostListItem.new({post: state.posts[$_get](index)}), T$.BuildContextAndintToStatelessWidget()), itemCount: state.hasReachedMax ? state.posts[$length] : state.posts[$length] + 1, controller: this[_scrollController]});
              }
            default:
              {
                return C[16] || CT.C16;
              }
          }
        }, T$.BuildContextAndPostStateToWidget())});
    }
    dispose() {
      let t7;
      t7 = this[_scrollController];
      (() => {
        t7.removeListener(dart.bind(this, _onScroll));
        t7.dispose();
        return t7;
      })();
      super.dispose();
    }
    [_onScroll]() {
      if (this[_isBottom]) provider$['ReadContext|read'](post_bloc.PostBloc, this.context).add(new post_event.PostFetched.new());
    }
    get [_isBottom]() {
      if (!this[_scrollController].hasClients) return false;
      let maxScroll = this[_scrollController].position.maxScrollExtent;
      let currentScroll = this[_scrollController].offset;
      return currentScroll >= maxScroll * 0.9;
    }
    static ['_#new#tearOff']() {
      return new post_list._PostsListState.new();
    }
  };
  (post_list._PostsListState.new = function() {
    this[_scrollController] = new scroll_controller.ScrollController.new();
    post_list._PostsListState.__proto__.new.call(this);
    ;
  }).prototype = post_list._PostsListState.prototype;
  dart.addTypeTests(post_list._PostsListState);
  dart.addTypeCaches(post_list._PostsListState);
  dart.setMethodSignature(post_list._PostsListState, () => ({
    __proto__: dart.getMethods(post_list._PostsListState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_onScroll]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(post_list._PostsListState, () => ({
    __proto__: dart.getGetters(post_list._PostsListState.__proto__),
    [_isBottom]: core.bool
  }));
  dart.setLibraryUri(post_list._PostsListState, I[30]);
  dart.setFieldSignature(post_list._PostsListState, () => ({
    __proto__: dart.getFields(post_list._PostsListState.__proto__),
    [_scrollController]: dart.finalFieldType(scroll_controller.ScrollController)
  }));
  http.head = function head(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    return http._withClient(response$.Response, dart.fn(client => client.head(url, {headers: headers}), T$.ClientToFutureOfResponse()));
  };
  http.get = function get(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    return http._withClient(response$.Response, dart.fn(client => client.get(url, {headers: headers}), T$.ClientToFutureOfResponse()));
  };
  http.post = function post$(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    let body = opts && 'body' in opts ? opts.body : null;
    let encoding = opts && 'encoding' in opts ? opts.encoding : null;
    return http._withClient(response$.Response, dart.fn(client => client.post(url, {headers: headers, body: body, encoding: encoding}), T$.ClientToFutureOfResponse()));
  };
  http.put = function put(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    let body = opts && 'body' in opts ? opts.body : null;
    let encoding = opts && 'encoding' in opts ? opts.encoding : null;
    return http._withClient(response$.Response, dart.fn(client => client.put(url, {headers: headers, body: body, encoding: encoding}), T$.ClientToFutureOfResponse()));
  };
  http.patch = function patch(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    let body = opts && 'body' in opts ? opts.body : null;
    let encoding = opts && 'encoding' in opts ? opts.encoding : null;
    return http._withClient(response$.Response, dart.fn(client => client.patch(url, {headers: headers, body: body, encoding: encoding}), T$.ClientToFutureOfResponse()));
  };
  http.delete = function $delete(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    let body = opts && 'body' in opts ? opts.body : null;
    let encoding = opts && 'encoding' in opts ? opts.encoding : null;
    return http._withClient(response$.Response, dart.fn(client => client.delete(url, {headers: headers, body: body, encoding: encoding}), T$.ClientToFutureOfResponse()));
  };
  http.read = function read(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    return http._withClient(core.String, dart.fn(client => client.read(url, {headers: headers}), T$.ClientToFutureOfString()));
  };
  http.readBytes = function readBytes(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    return http._withClient(typed_data.Uint8List, dart.fn(client => client.readBytes(url, {headers: headers}), T$.ClientToFutureOfUint8List()));
  };
  http._withClient = function _withClient(T, fn) {
    return async.async(T, function* _withClient() {
      let client = client$.Client.new();
      try {
        return yield fn(client);
      } finally {
        client.close();
      }
    });
  };
  const _is_DeferredInheritedProvider_default = Symbol('_is_DeferredInheritedProvider_default');
  provider$.DeferredInheritedProvider$ = dart.generic((T, R) => {
    var __t$_CreateDeferredInheritedProviderOfT$R = () => (__t$_CreateDeferredInheritedProviderOfT$R = dart.constFn(provider$._CreateDeferredInheritedProvider$(T, R)))();
    var __t$_ValueDeferredInheritedProviderOfT$R = () => (__t$_ValueDeferredInheritedProviderOfT$R = dart.constFn(provider$._ValueDeferredInheritedProvider$(T, R)))();
    class DeferredInheritedProvider extends provider$.InheritedProvider$(R) {
      static ['_#new#tearOff'](T, R, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let create = opts && 'create' in opts ? opts.create : null;
        let dispose = opts && 'dispose' in opts ? opts.dispose : null;
        let startListening = opts && 'startListening' in opts ? opts.startListening : null;
        let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
        let lazy = opts && 'lazy' in opts ? opts.lazy : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (provider$.DeferredInheritedProvider$(T, R)).new({key: key, create: create, dispose: dispose, startListening: startListening, updateShouldNotify: updateShouldNotify, lazy: lazy, builder: builder, child: child});
      }
      static ['_#value#tearOff'](T, R, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let value = opts && 'value' in opts ? opts.value : null;
        let startListening = opts && 'startListening' in opts ? opts.startListening : null;
        let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
        let lazy = opts && 'lazy' in opts ? opts.lazy : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (provider$.DeferredInheritedProvider$(T, R)).value({key: key, value: value, startListening: startListening, updateShouldNotify: updateShouldNotify, lazy: lazy, builder: builder, child: child});
      }
    }
    (DeferredInheritedProvider.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let startListening = opts && 'startListening' in opts ? opts.startListening : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      DeferredInheritedProvider.__proto__._constructor.call(this, {key: key, child: child, lazy: lazy, builder: builder, delegate: new (__t$_CreateDeferredInheritedProviderOfT$R()).new({create: create, dispose: dispose, updateShouldNotify: updateShouldNotify, startListening: startListening})});
      ;
    }).prototype = DeferredInheritedProvider.prototype;
    (DeferredInheritedProvider.value = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let startListening = opts && 'startListening' in opts ? opts.startListening : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      DeferredInheritedProvider.__proto__._constructor.call(this, {key: key, lazy: lazy, builder: builder, delegate: new (__t$_ValueDeferredInheritedProviderOfT$R()).new(value, updateShouldNotify, startListening), child: child});
      ;
    }).prototype = DeferredInheritedProvider.prototype;
    dart.addTypeTests(DeferredInheritedProvider);
    DeferredInheritedProvider.prototype[_is_DeferredInheritedProvider_default] = true;
    dart.addTypeCaches(DeferredInheritedProvider);
    dart.setLibraryUri(DeferredInheritedProvider, I[19]);
    return DeferredInheritedProvider;
  });
  provider$.DeferredInheritedProvider = provider$.DeferredInheritedProvider$();
  dart.addTypeTests(provider$.DeferredInheritedProvider, _is_DeferredInheritedProvider_default);
  const _is_StreamProvider_default = Symbol('_is_StreamProvider_default');
  async_provider.StreamProvider$ = dart.generic(T => {
    class StreamProvider extends provider$.DeferredInheritedProvider$(dart.nullable(async.Stream$(T)), T) {
      static ['_#new#tearOff'](T, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let create = opts && 'create' in opts ? opts.create : null;
        let initialData = opts && 'initialData' in opts ? opts.initialData : null;
        let catchError = opts && 'catchError' in opts ? opts.catchError : null;
        let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
        let lazy = opts && 'lazy' in opts ? opts.lazy : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (async_provider.StreamProvider$(T)).new({key: key, create: create, initialData: initialData, catchError: catchError, updateShouldNotify: updateShouldNotify, lazy: lazy, builder: builder, child: child});
      }
      static ['_#value#tearOff'](T, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let value = opts && 'value' in opts ? opts.value : null;
        let initialData = opts && 'initialData' in opts ? opts.initialData : null;
        let catchError = opts && 'catchError' in opts ? opts.catchError : null;
        let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
        let lazy = opts && 'lazy' in opts ? opts.lazy : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (async_provider.StreamProvider$(T)).value({key: key, value: value, initialData: initialData, catchError: catchError, updateShouldNotify: updateShouldNotify, lazy: lazy, builder: builder, child: child});
      }
    }
    (StreamProvider.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let initialData = opts && 'initialData' in opts ? opts.initialData : null;
      let catchError = opts && 'catchError' in opts ? opts.catchError : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      StreamProvider.__proto__.new.call(this, {key: key, lazy: lazy, builder: builder, create: create, updateShouldNotify: updateShouldNotify, startListening: async_provider._streamStartListening(T, {catchError: catchError, initialData: initialData}), child: child});
      ;
    }).prototype = StreamProvider.prototype;
    (StreamProvider.value = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let initialData = opts && 'initialData' in opts ? opts.initialData : null;
      let catchError = opts && 'catchError' in opts ? opts.catchError : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      StreamProvider.__proto__.value.call(this, {key: key, lazy: lazy, builder: builder, value: value, updateShouldNotify: updateShouldNotify, startListening: async_provider._streamStartListening(T, {catchError: catchError, initialData: initialData}), child: child});
      ;
    }).prototype = StreamProvider.prototype;
    dart.addTypeTests(StreamProvider);
    StreamProvider.prototype[_is_StreamProvider_default] = true;
    dart.addTypeCaches(StreamProvider);
    dart.setLibraryUri(StreamProvider, I[31]);
    return StreamProvider;
  });
  async_provider.StreamProvider = async_provider.StreamProvider$();
  dart.addTypeTests(async_provider.StreamProvider, _is_StreamProvider_default);
  const _is_FutureProvider_default = Symbol('_is_FutureProvider_default');
  async_provider.FutureProvider$ = dart.generic(T => {
    class FutureProvider extends provider$.DeferredInheritedProvider$(dart.nullable(async.Future$(T)), T) {
      static ['_#new#tearOff'](T, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let create = opts && 'create' in opts ? opts.create : null;
        let initialData = opts && 'initialData' in opts ? opts.initialData : null;
        let catchError = opts && 'catchError' in opts ? opts.catchError : null;
        let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
        let lazy = opts && 'lazy' in opts ? opts.lazy : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (async_provider.FutureProvider$(T)).new({key: key, create: create, initialData: initialData, catchError: catchError, updateShouldNotify: updateShouldNotify, lazy: lazy, builder: builder, child: child});
      }
      static ['_#value#tearOff'](T, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let value = opts && 'value' in opts ? opts.value : null;
        let initialData = opts && 'initialData' in opts ? opts.initialData : null;
        let catchError = opts && 'catchError' in opts ? opts.catchError : null;
        let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (async_provider.FutureProvider$(T)).value({key: key, value: value, initialData: initialData, catchError: catchError, updateShouldNotify: updateShouldNotify, builder: builder, child: child});
      }
    }
    (FutureProvider.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let initialData = opts && 'initialData' in opts ? opts.initialData : null;
      let catchError = opts && 'catchError' in opts ? opts.catchError : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      FutureProvider.__proto__.new.call(this, {key: key, lazy: lazy, builder: builder, create: create, updateShouldNotify: updateShouldNotify, startListening: async_provider._futureStartListening(T, {catchError: catchError, initialData: initialData}), child: child});
      ;
    }).prototype = FutureProvider.prototype;
    (FutureProvider.value = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let initialData = opts && 'initialData' in opts ? opts.initialData : null;
      let catchError = opts && 'catchError' in opts ? opts.catchError : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      FutureProvider.__proto__.value.call(this, {key: key, builder: builder, lazy: false, value: value, updateShouldNotify: updateShouldNotify, startListening: async_provider._futureStartListening(T, {catchError: catchError, initialData: initialData}), child: child});
      ;
    }).prototype = FutureProvider.prototype;
    dart.addTypeTests(FutureProvider);
    FutureProvider.prototype[_is_FutureProvider_default] = true;
    dart.addTypeCaches(FutureProvider);
    dart.setLibraryUri(FutureProvider, I[31]);
    return FutureProvider;
  });
  async_provider.FutureProvider = async_provider.FutureProvider$();
  dart.addTypeTests(async_provider.FutureProvider, _is_FutureProvider_default);
  async_provider._streamStartListening = function _streamStartListening(T, opts) {
    let initialData = opts && 'initialData' in opts ? opts.initialData : null;
    let catchError = opts && 'catchError' in opts ? opts.catchError : null;
    return dart.fn((e, setState, controller, __) => {
      if (!e.hasValue) {
        setState(initialData);
      }
      if (controller == null) {
        return dart.fn(() => {
        }, T$.VoidTovoid());
      }
      let sub = controller.listen(setState, {onError: dart.fn(error => {
          if (catchError != null) {
            setState(catchError(e, error));
          } else {
            assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({library: "provider", exception: assertions.FlutterError.new("An exception was throw by " + dart.str(dart.runtimeType(controller)) + " listened by\nStreamProvider<" + dart.str(dart.wrapType(T)) + ">, but no `catchError` was provided.\n\nException:\n" + dart.str(error) + "\n")}));
          }
        }, T$.ObjectNToNull())});
      return dart.bind(sub, 'cancel');
    }, dart.fnType(T$.VoidTovoid(), [provider$.InheritedContext$(dart.nullable(T)), dart.fnType(dart.void, [T]), dart.nullable(async.Stream$(T)), dart.nullable(T)]));
  };
  async_provider._futureStartListening = function _futureStartListening(T, opts) {
    let initialData = opts && 'initialData' in opts ? opts.initialData : null;
    let catchError = opts && 'catchError' in opts ? opts.catchError : null;
    return dart.fn((e, setState, controller, __) => {
      let t7;
      if (!e.hasValue) {
        setState(initialData);
      }
      let canceled = false;
      t7 = controller;
      t7 == null ? null : t7.then(core.Null, dart.fn(value => {
        if (canceled) {
          return;
        }
        setState(value);
      }, dart.fnType(core.Null, [T])), {onError: dart.fn(error => {
          if (canceled) {
            return;
          }
          if (catchError != null) {
            setState(catchError(e, error));
          } else {
            assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({library: "provider", exception: assertions.FlutterError.new("An exception was throw by " + dart.str(dart.runtimeType(controller)) + " listened by\nFutureProvider<" + dart.str(dart.wrapType(T)) + ">, but no `catchError` was provided.\n\nException:\n" + dart.str(error) + "\n")}));
          }
        }, T$.ObjectNToNull())});
      return dart.fn(() => canceled = true, T$.VoidTovoid());
    }, dart.fnType(T$.VoidTovoid(), [provider$.InheritedContext$(dart.nullable(T)), dart.fnType(dart.void, [T]), dart.nullable(async.Future$(T)), dart.nullable(T)]));
  };
  const _is_ListenableProvider_default = Symbol('_is_ListenableProvider_default');
  listenable_provider.ListenableProvider$ = dart.generic(T => {
    class ListenableProvider extends provider$.InheritedProvider$(T) {
      static ['_#new#tearOff'](T, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let create = opts && 'create' in opts ? opts.create : null;
        let dispose = opts && 'dispose' in opts ? opts.dispose : null;
        let lazy = opts && 'lazy' in opts ? opts.lazy : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (listenable_provider.ListenableProvider$(T)).new({key: key, create: create, dispose: dispose, lazy: lazy, builder: builder, child: child});
      }
      static ['_#value#tearOff'](T, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let value = opts && 'value' in opts ? opts.value : null;
        let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (listenable_provider.ListenableProvider$(T)).value({key: key, value: value, updateShouldNotify: updateShouldNotify, builder: builder, child: child});
      }
      static _startListening(e, value) {
        let t7;
        t7 = value;
        t7 == null ? null : t7.addListener(dart.bind(e, 'markNeedsNotifyDependents'));
        return dart.fn(() => {
          let t7;
          t7 = value;
          return t7 == null ? null : t7.removeListener(dart.bind(e, 'markNeedsNotifyDependents'));
        }, T$.VoidTovoid());
      }
    }
    (ListenableProvider.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      ListenableProvider.__proto__.new.call(this, {key: key, startListening: C[20] || CT.C20, create: create, dispose: dispose, lazy: lazy, builder: builder, child: child});
      ;
    }).prototype = ListenableProvider.prototype;
    (ListenableProvider.value = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      ListenableProvider.__proto__.value.call(this, {key: key, builder: builder, value: value, updateShouldNotify: updateShouldNotify, startListening: C[20] || CT.C20, child: child});
      ;
    }).prototype = ListenableProvider.prototype;
    dart.addTypeTests(ListenableProvider);
    ListenableProvider.prototype[_is_ListenableProvider_default] = true;
    dart.addTypeCaches(ListenableProvider);
    dart.setStaticMethodSignature(ListenableProvider, () => ['_startListening']);
    dart.setLibraryUri(ListenableProvider, I[32]);
    return ListenableProvider;
  });
  listenable_provider.ListenableProvider = listenable_provider.ListenableProvider$();
  dart.addTypeTests(listenable_provider.ListenableProvider, _is_ListenableProvider_default);
  const _is_ChangeNotifierProvider_default = Symbol('_is_ChangeNotifierProvider_default');
  change_notifier_provider.ChangeNotifierProvider$ = dart.generic(T => {
    class ChangeNotifierProvider extends listenable_provider.ListenableProvider$(T) {
      static ['_#new#tearOff'](T, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let create = opts && 'create' in opts ? opts.create : null;
        let lazy = opts && 'lazy' in opts ? opts.lazy : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (change_notifier_provider.ChangeNotifierProvider$(T)).new({key: key, create: create, lazy: lazy, builder: builder, child: child});
      }
      static ['_#value#tearOff'](T, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let value = opts && 'value' in opts ? opts.value : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (change_notifier_provider.ChangeNotifierProvider$(T)).value({key: key, value: value, builder: builder, child: child});
      }
      static _dispose(context, notifier) {
        let t7;
        t7 = notifier;
        t7 == null ? null : t7.dispose();
      }
    }
    (ChangeNotifierProvider.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      ChangeNotifierProvider.__proto__.new.call(this, {key: key, create: create, dispose: C[19] || CT.C19, lazy: lazy, builder: builder, child: child});
      ;
    }).prototype = ChangeNotifierProvider.prototype;
    (ChangeNotifierProvider.value = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      ChangeNotifierProvider.__proto__.value.call(this, {key: key, builder: builder, value: value, child: child});
      ;
    }).prototype = ChangeNotifierProvider.prototype;
    dart.addTypeTests(ChangeNotifierProvider);
    ChangeNotifierProvider.prototype[_is_ChangeNotifierProvider_default] = true;
    dart.addTypeCaches(ChangeNotifierProvider);
    dart.setStaticMethodSignature(ChangeNotifierProvider, () => ['_dispose']);
    dart.setLibraryUri(ChangeNotifierProvider, I[33]);
    return ChangeNotifierProvider;
  });
  change_notifier_provider.ChangeNotifierProvider = change_notifier_provider.ChangeNotifierProvider$();
  dart.addTypeTests(change_notifier_provider.ChangeNotifierProvider, _is_ChangeNotifierProvider_default);
  const _is_ListenableProxyProvider0_default = Symbol('_is_ListenableProxyProvider0_default');
  listenable_provider.ListenableProxyProvider0$ = dart.generic(R => {
    class ListenableProxyProvider0 extends provider$.InheritedProvider$(R) {
      static ['_#new#tearOff'](R, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let create = opts && 'create' in opts ? opts.create : null;
        let update = opts && 'update' in opts ? opts.update : null;
        let dispose = opts && 'dispose' in opts ? opts.dispose : null;
        let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
        let lazy = opts && 'lazy' in opts ? opts.lazy : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (listenable_provider.ListenableProxyProvider0$(R)).new({key: key, create: create, update: update, dispose: dispose, updateShouldNotify: updateShouldNotify, lazy: lazy, builder: builder, child: child});
      }
    }
    (ListenableProxyProvider0.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      ListenableProxyProvider0.__proto__.new.call(this, {key: key, create: create, update: update, lazy: lazy, builder: builder, dispose: dispose, updateShouldNotify: updateShouldNotify, startListening: C[20] || CT.C20, child: child});
      ;
    }).prototype = ListenableProxyProvider0.prototype;
    dart.addTypeTests(ListenableProxyProvider0);
    ListenableProxyProvider0.prototype[_is_ListenableProxyProvider0_default] = true;
    dart.addTypeCaches(ListenableProxyProvider0);
    dart.setLibraryUri(ListenableProxyProvider0, I[32]);
    return ListenableProxyProvider0;
  });
  listenable_provider.ListenableProxyProvider0 = listenable_provider.ListenableProxyProvider0$();
  dart.addTypeTests(listenable_provider.ListenableProxyProvider0, _is_ListenableProxyProvider0_default);
  const _is_ListenableProxyProvider_default = Symbol('_is_ListenableProxyProvider_default');
  listenable_provider.ListenableProxyProvider$ = dart.generic((T, R) => {
    var __t$RN = () => (__t$RN = dart.constFn(dart.nullable(R)))();
    var __t$BuildContextAndRNToR = () => (__t$BuildContextAndRNToR = dart.constFn(dart.fnType(R, [framework.BuildContext, __t$RN()])))();
    class ListenableProxyProvider extends listenable_provider.ListenableProxyProvider0$(R) {
      static ['_#new#tearOff'](T, R, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let create = opts && 'create' in opts ? opts.create : null;
        let update = opts && 'update' in opts ? opts.update : null;
        let dispose = opts && 'dispose' in opts ? opts.dispose : null;
        let lazy = opts && 'lazy' in opts ? opts.lazy : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (listenable_provider.ListenableProxyProvider$(T, R)).new({key: key, create: create, update: update, dispose: dispose, lazy: lazy, builder: builder, child: child});
      }
    }
    (ListenableProxyProvider.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      ListenableProxyProvider.__proto__.new.call(this, {key: key, create: create, lazy: lazy, builder: builder, update: dart.fn((context, previous) => update(context, provider$.Provider.of(T, context), previous), __t$BuildContextAndRNToR()), dispose: dispose, child: child});
      ;
    }).prototype = ListenableProxyProvider.prototype;
    dart.addTypeTests(ListenableProxyProvider);
    ListenableProxyProvider.prototype[_is_ListenableProxyProvider_default] = true;
    dart.addTypeCaches(ListenableProxyProvider);
    dart.setLibraryUri(ListenableProxyProvider, I[32]);
    return ListenableProxyProvider;
  });
  listenable_provider.ListenableProxyProvider = listenable_provider.ListenableProxyProvider$();
  dart.addTypeTests(listenable_provider.ListenableProxyProvider, _is_ListenableProxyProvider_default);
  const _is_ChangeNotifierProxyProvider_default = Symbol('_is_ChangeNotifierProxyProvider_default');
  change_notifier_provider.ChangeNotifierProxyProvider$ = dart.generic((T, R) => {
    class ChangeNotifierProxyProvider extends listenable_provider.ListenableProxyProvider$(T, R) {
      static ['_#new#tearOff'](T, R, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let create = opts && 'create' in opts ? opts.create : null;
        let update = opts && 'update' in opts ? opts.update : null;
        let lazy = opts && 'lazy' in opts ? opts.lazy : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (change_notifier_provider.ChangeNotifierProxyProvider$(T, R)).new({key: key, create: create, update: update, lazy: lazy, builder: builder, child: child});
      }
    }
    (ChangeNotifierProxyProvider.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      ChangeNotifierProxyProvider.__proto__.new.call(this, {key: key, create: create, update: update, dispose: C[19] || CT.C19, lazy: lazy, builder: builder, child: child});
      ;
    }).prototype = ChangeNotifierProxyProvider.prototype;
    dart.addTypeTests(ChangeNotifierProxyProvider);
    ChangeNotifierProxyProvider.prototype[_is_ChangeNotifierProxyProvider_default] = true;
    dart.addTypeCaches(ChangeNotifierProxyProvider);
    dart.setLibraryUri(ChangeNotifierProxyProvider, I[33]);
    return ChangeNotifierProxyProvider;
  });
  change_notifier_provider.ChangeNotifierProxyProvider = change_notifier_provider.ChangeNotifierProxyProvider$();
  dart.addTypeTests(change_notifier_provider.ChangeNotifierProxyProvider, _is_ChangeNotifierProxyProvider_default);
  const _is_ChangeNotifierProxyProvider0_default = Symbol('_is_ChangeNotifierProxyProvider0_default');
  change_notifier_provider.ChangeNotifierProxyProvider0$ = dart.generic(R => {
    class ChangeNotifierProxyProvider0 extends listenable_provider.ListenableProxyProvider0$(R) {
      static ['_#new#tearOff'](R, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let create = opts && 'create' in opts ? opts.create : null;
        let update = opts && 'update' in opts ? opts.update : null;
        let lazy = opts && 'lazy' in opts ? opts.lazy : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (change_notifier_provider.ChangeNotifierProxyProvider0$(R)).new({key: key, create: create, update: update, lazy: lazy, builder: builder, child: child});
      }
    }
    (ChangeNotifierProxyProvider0.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      ChangeNotifierProxyProvider0.__proto__.new.call(this, {key: key, create: create, update: update, dispose: C[19] || CT.C19, lazy: lazy, builder: builder, child: child});
      ;
    }).prototype = ChangeNotifierProxyProvider0.prototype;
    dart.addTypeTests(ChangeNotifierProxyProvider0);
    ChangeNotifierProxyProvider0.prototype[_is_ChangeNotifierProxyProvider0_default] = true;
    dart.addTypeCaches(ChangeNotifierProxyProvider0);
    dart.setLibraryUri(ChangeNotifierProxyProvider0, I[33]);
    return ChangeNotifierProxyProvider0;
  });
  change_notifier_provider.ChangeNotifierProxyProvider0 = change_notifier_provider.ChangeNotifierProxyProvider0$();
  dart.addTypeTests(change_notifier_provider.ChangeNotifierProxyProvider0, _is_ChangeNotifierProxyProvider0_default);
  const _is_ListenableProxyProvider2_default = Symbol('_is_ListenableProxyProvider2_default');
  listenable_provider.ListenableProxyProvider2$ = dart.generic((T, T2, R) => {
    var __t$RN = () => (__t$RN = dart.constFn(dart.nullable(R)))();
    var __t$BuildContextAndRNToR = () => (__t$BuildContextAndRNToR = dart.constFn(dart.fnType(R, [framework.BuildContext, __t$RN()])))();
    class ListenableProxyProvider2 extends listenable_provider.ListenableProxyProvider0$(R) {
      static ['_#new#tearOff'](T, T2, R, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let create = opts && 'create' in opts ? opts.create : null;
        let update = opts && 'update' in opts ? opts.update : null;
        let dispose = opts && 'dispose' in opts ? opts.dispose : null;
        let lazy = opts && 'lazy' in opts ? opts.lazy : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (listenable_provider.ListenableProxyProvider2$(T, T2, R)).new({key: key, create: create, update: update, dispose: dispose, lazy: lazy, builder: builder, child: child});
      }
    }
    (ListenableProxyProvider2.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      ListenableProxyProvider2.__proto__.new.call(this, {key: key, create: create, lazy: lazy, builder: builder, update: dart.fn((context, previous) => update(context, provider$.Provider.of(T, context), provider$.Provider.of(T2, context), previous), __t$BuildContextAndRNToR()), dispose: dispose, child: child});
      ;
    }).prototype = ListenableProxyProvider2.prototype;
    dart.addTypeTests(ListenableProxyProvider2);
    ListenableProxyProvider2.prototype[_is_ListenableProxyProvider2_default] = true;
    dart.addTypeCaches(ListenableProxyProvider2);
    dart.setLibraryUri(ListenableProxyProvider2, I[32]);
    return ListenableProxyProvider2;
  });
  listenable_provider.ListenableProxyProvider2 = listenable_provider.ListenableProxyProvider2$();
  dart.addTypeTests(listenable_provider.ListenableProxyProvider2, _is_ListenableProxyProvider2_default);
  const _is_ChangeNotifierProxyProvider2_default = Symbol('_is_ChangeNotifierProxyProvider2_default');
  change_notifier_provider.ChangeNotifierProxyProvider2$ = dart.generic((T, T2, R) => {
    class ChangeNotifierProxyProvider2 extends listenable_provider.ListenableProxyProvider2$(T, T2, R) {
      static ['_#new#tearOff'](T, T2, R, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let create = opts && 'create' in opts ? opts.create : null;
        let update = opts && 'update' in opts ? opts.update : null;
        let lazy = opts && 'lazy' in opts ? opts.lazy : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (change_notifier_provider.ChangeNotifierProxyProvider2$(T, T2, R)).new({key: key, create: create, update: update, lazy: lazy, builder: builder, child: child});
      }
    }
    (ChangeNotifierProxyProvider2.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      ChangeNotifierProxyProvider2.__proto__.new.call(this, {key: key, create: create, update: update, dispose: C[19] || CT.C19, lazy: lazy, builder: builder, child: child});
      ;
    }).prototype = ChangeNotifierProxyProvider2.prototype;
    dart.addTypeTests(ChangeNotifierProxyProvider2);
    ChangeNotifierProxyProvider2.prototype[_is_ChangeNotifierProxyProvider2_default] = true;
    dart.addTypeCaches(ChangeNotifierProxyProvider2);
    dart.setLibraryUri(ChangeNotifierProxyProvider2, I[33]);
    return ChangeNotifierProxyProvider2;
  });
  change_notifier_provider.ChangeNotifierProxyProvider2 = change_notifier_provider.ChangeNotifierProxyProvider2$();
  dart.addTypeTests(change_notifier_provider.ChangeNotifierProxyProvider2, _is_ChangeNotifierProxyProvider2_default);
  const _is_ListenableProxyProvider3_default = Symbol('_is_ListenableProxyProvider3_default');
  listenable_provider.ListenableProxyProvider3$ = dart.generic((T, T2, T3, R) => {
    var __t$RN = () => (__t$RN = dart.constFn(dart.nullable(R)))();
    var __t$BuildContextAndRNToR = () => (__t$BuildContextAndRNToR = dart.constFn(dart.fnType(R, [framework.BuildContext, __t$RN()])))();
    class ListenableProxyProvider3 extends listenable_provider.ListenableProxyProvider0$(R) {
      static ['_#new#tearOff'](T, T2, T3, R, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let create = opts && 'create' in opts ? opts.create : null;
        let update = opts && 'update' in opts ? opts.update : null;
        let dispose = opts && 'dispose' in opts ? opts.dispose : null;
        let lazy = opts && 'lazy' in opts ? opts.lazy : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (listenable_provider.ListenableProxyProvider3$(T, T2, T3, R)).new({key: key, create: create, update: update, dispose: dispose, lazy: lazy, builder: builder, child: child});
      }
    }
    (ListenableProxyProvider3.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      ListenableProxyProvider3.__proto__.new.call(this, {key: key, create: create, lazy: lazy, builder: builder, update: dart.fn((context, previous) => update(context, provider$.Provider.of(T, context), provider$.Provider.of(T2, context), provider$.Provider.of(T3, context), previous), __t$BuildContextAndRNToR()), dispose: dispose, child: child});
      ;
    }).prototype = ListenableProxyProvider3.prototype;
    dart.addTypeTests(ListenableProxyProvider3);
    ListenableProxyProvider3.prototype[_is_ListenableProxyProvider3_default] = true;
    dart.addTypeCaches(ListenableProxyProvider3);
    dart.setLibraryUri(ListenableProxyProvider3, I[32]);
    return ListenableProxyProvider3;
  });
  listenable_provider.ListenableProxyProvider3 = listenable_provider.ListenableProxyProvider3$();
  dart.addTypeTests(listenable_provider.ListenableProxyProvider3, _is_ListenableProxyProvider3_default);
  const _is_ChangeNotifierProxyProvider3_default = Symbol('_is_ChangeNotifierProxyProvider3_default');
  change_notifier_provider.ChangeNotifierProxyProvider3$ = dart.generic((T, T2, T3, R) => {
    class ChangeNotifierProxyProvider3 extends listenable_provider.ListenableProxyProvider3$(T, T2, T3, R) {
      static ['_#new#tearOff'](T, T2, T3, R, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let create = opts && 'create' in opts ? opts.create : null;
        let update = opts && 'update' in opts ? opts.update : null;
        let lazy = opts && 'lazy' in opts ? opts.lazy : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (change_notifier_provider.ChangeNotifierProxyProvider3$(T, T2, T3, R)).new({key: key, create: create, update: update, lazy: lazy, builder: builder, child: child});
      }
    }
    (ChangeNotifierProxyProvider3.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      ChangeNotifierProxyProvider3.__proto__.new.call(this, {key: key, create: create, update: update, dispose: C[19] || CT.C19, lazy: lazy, builder: builder, child: child});
      ;
    }).prototype = ChangeNotifierProxyProvider3.prototype;
    dart.addTypeTests(ChangeNotifierProxyProvider3);
    ChangeNotifierProxyProvider3.prototype[_is_ChangeNotifierProxyProvider3_default] = true;
    dart.addTypeCaches(ChangeNotifierProxyProvider3);
    dart.setLibraryUri(ChangeNotifierProxyProvider3, I[33]);
    return ChangeNotifierProxyProvider3;
  });
  change_notifier_provider.ChangeNotifierProxyProvider3 = change_notifier_provider.ChangeNotifierProxyProvider3$();
  dart.addTypeTests(change_notifier_provider.ChangeNotifierProxyProvider3, _is_ChangeNotifierProxyProvider3_default);
  const _is_ListenableProxyProvider4_default = Symbol('_is_ListenableProxyProvider4_default');
  listenable_provider.ListenableProxyProvider4$ = dart.generic((T, T2, T3, T4, R) => {
    var __t$RN = () => (__t$RN = dart.constFn(dart.nullable(R)))();
    var __t$BuildContextAndRNToR = () => (__t$BuildContextAndRNToR = dart.constFn(dart.fnType(R, [framework.BuildContext, __t$RN()])))();
    class ListenableProxyProvider4 extends listenable_provider.ListenableProxyProvider0$(R) {
      static ['_#new#tearOff'](T, T2, T3, T4, R, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let create = opts && 'create' in opts ? opts.create : null;
        let update = opts && 'update' in opts ? opts.update : null;
        let dispose = opts && 'dispose' in opts ? opts.dispose : null;
        let lazy = opts && 'lazy' in opts ? opts.lazy : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (listenable_provider.ListenableProxyProvider4$(T, T2, T3, T4, R)).new({key: key, create: create, update: update, dispose: dispose, lazy: lazy, builder: builder, child: child});
      }
    }
    (ListenableProxyProvider4.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      ListenableProxyProvider4.__proto__.new.call(this, {key: key, create: create, lazy: lazy, builder: builder, update: dart.fn((context, previous) => update(context, provider$.Provider.of(T, context), provider$.Provider.of(T2, context), provider$.Provider.of(T3, context), provider$.Provider.of(T4, context), previous), __t$BuildContextAndRNToR()), dispose: dispose, child: child});
      ;
    }).prototype = ListenableProxyProvider4.prototype;
    dart.addTypeTests(ListenableProxyProvider4);
    ListenableProxyProvider4.prototype[_is_ListenableProxyProvider4_default] = true;
    dart.addTypeCaches(ListenableProxyProvider4);
    dart.setLibraryUri(ListenableProxyProvider4, I[32]);
    return ListenableProxyProvider4;
  });
  listenable_provider.ListenableProxyProvider4 = listenable_provider.ListenableProxyProvider4$();
  dart.addTypeTests(listenable_provider.ListenableProxyProvider4, _is_ListenableProxyProvider4_default);
  const _is_ChangeNotifierProxyProvider4_default = Symbol('_is_ChangeNotifierProxyProvider4_default');
  change_notifier_provider.ChangeNotifierProxyProvider4$ = dart.generic((T, T2, T3, T4, R) => {
    class ChangeNotifierProxyProvider4 extends listenable_provider.ListenableProxyProvider4$(T, T2, T3, T4, R) {
      static ['_#new#tearOff'](T, T2, T3, T4, R, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let create = opts && 'create' in opts ? opts.create : null;
        let update = opts && 'update' in opts ? opts.update : null;
        let lazy = opts && 'lazy' in opts ? opts.lazy : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (change_notifier_provider.ChangeNotifierProxyProvider4$(T, T2, T3, T4, R)).new({key: key, create: create, update: update, lazy: lazy, builder: builder, child: child});
      }
    }
    (ChangeNotifierProxyProvider4.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      ChangeNotifierProxyProvider4.__proto__.new.call(this, {key: key, create: create, update: update, dispose: C[19] || CT.C19, lazy: lazy, builder: builder, child: child});
      ;
    }).prototype = ChangeNotifierProxyProvider4.prototype;
    dart.addTypeTests(ChangeNotifierProxyProvider4);
    ChangeNotifierProxyProvider4.prototype[_is_ChangeNotifierProxyProvider4_default] = true;
    dart.addTypeCaches(ChangeNotifierProxyProvider4);
    dart.setLibraryUri(ChangeNotifierProxyProvider4, I[33]);
    return ChangeNotifierProxyProvider4;
  });
  change_notifier_provider.ChangeNotifierProxyProvider4 = change_notifier_provider.ChangeNotifierProxyProvider4$();
  dart.addTypeTests(change_notifier_provider.ChangeNotifierProxyProvider4, _is_ChangeNotifierProxyProvider4_default);
  const _is_ListenableProxyProvider5_default = Symbol('_is_ListenableProxyProvider5_default');
  listenable_provider.ListenableProxyProvider5$ = dart.generic((T, T2, T3, T4, T5, R) => {
    var __t$RN = () => (__t$RN = dart.constFn(dart.nullable(R)))();
    var __t$BuildContextAndRNToR = () => (__t$BuildContextAndRNToR = dart.constFn(dart.fnType(R, [framework.BuildContext, __t$RN()])))();
    class ListenableProxyProvider5 extends listenable_provider.ListenableProxyProvider0$(R) {
      static ['_#new#tearOff'](T, T2, T3, T4, T5, R, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let create = opts && 'create' in opts ? opts.create : null;
        let update = opts && 'update' in opts ? opts.update : null;
        let dispose = opts && 'dispose' in opts ? opts.dispose : null;
        let lazy = opts && 'lazy' in opts ? opts.lazy : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (listenable_provider.ListenableProxyProvider5$(T, T2, T3, T4, T5, R)).new({key: key, create: create, update: update, dispose: dispose, lazy: lazy, builder: builder, child: child});
      }
    }
    (ListenableProxyProvider5.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      ListenableProxyProvider5.__proto__.new.call(this, {key: key, create: create, lazy: lazy, builder: builder, update: dart.fn((context, previous) => update(context, provider$.Provider.of(T, context), provider$.Provider.of(T2, context), provider$.Provider.of(T3, context), provider$.Provider.of(T4, context), provider$.Provider.of(T5, context), previous), __t$BuildContextAndRNToR()), dispose: dispose, child: child});
      ;
    }).prototype = ListenableProxyProvider5.prototype;
    dart.addTypeTests(ListenableProxyProvider5);
    ListenableProxyProvider5.prototype[_is_ListenableProxyProvider5_default] = true;
    dart.addTypeCaches(ListenableProxyProvider5);
    dart.setLibraryUri(ListenableProxyProvider5, I[32]);
    return ListenableProxyProvider5;
  });
  listenable_provider.ListenableProxyProvider5 = listenable_provider.ListenableProxyProvider5$();
  dart.addTypeTests(listenable_provider.ListenableProxyProvider5, _is_ListenableProxyProvider5_default);
  const _is_ChangeNotifierProxyProvider5_default = Symbol('_is_ChangeNotifierProxyProvider5_default');
  change_notifier_provider.ChangeNotifierProxyProvider5$ = dart.generic((T, T2, T3, T4, T5, R) => {
    class ChangeNotifierProxyProvider5 extends listenable_provider.ListenableProxyProvider5$(T, T2, T3, T4, T5, R) {
      static ['_#new#tearOff'](T, T2, T3, T4, T5, R, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let create = opts && 'create' in opts ? opts.create : null;
        let update = opts && 'update' in opts ? opts.update : null;
        let lazy = opts && 'lazy' in opts ? opts.lazy : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (change_notifier_provider.ChangeNotifierProxyProvider5$(T, T2, T3, T4, T5, R)).new({key: key, create: create, update: update, lazy: lazy, builder: builder, child: child});
      }
    }
    (ChangeNotifierProxyProvider5.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      ChangeNotifierProxyProvider5.__proto__.new.call(this, {key: key, create: create, update: update, dispose: C[19] || CT.C19, lazy: lazy, builder: builder, child: child});
      ;
    }).prototype = ChangeNotifierProxyProvider5.prototype;
    dart.addTypeTests(ChangeNotifierProxyProvider5);
    ChangeNotifierProxyProvider5.prototype[_is_ChangeNotifierProxyProvider5_default] = true;
    dart.addTypeCaches(ChangeNotifierProxyProvider5);
    dart.setLibraryUri(ChangeNotifierProxyProvider5, I[33]);
    return ChangeNotifierProxyProvider5;
  });
  change_notifier_provider.ChangeNotifierProxyProvider5 = change_notifier_provider.ChangeNotifierProxyProvider5$();
  dart.addTypeTests(change_notifier_provider.ChangeNotifierProxyProvider5, _is_ChangeNotifierProxyProvider5_default);
  const _is_ListenableProxyProvider6_default = Symbol('_is_ListenableProxyProvider6_default');
  listenable_provider.ListenableProxyProvider6$ = dart.generic((T, T2, T3, T4, T5, T6, R) => {
    var __t$RN = () => (__t$RN = dart.constFn(dart.nullable(R)))();
    var __t$BuildContextAndRNToR = () => (__t$BuildContextAndRNToR = dart.constFn(dart.fnType(R, [framework.BuildContext, __t$RN()])))();
    class ListenableProxyProvider6 extends listenable_provider.ListenableProxyProvider0$(R) {
      static ['_#new#tearOff'](T, T2, T3, T4, T5, T6, R, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let create = opts && 'create' in opts ? opts.create : null;
        let update = opts && 'update' in opts ? opts.update : null;
        let dispose = opts && 'dispose' in opts ? opts.dispose : null;
        let lazy = opts && 'lazy' in opts ? opts.lazy : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (listenable_provider.ListenableProxyProvider6$(T, T2, T3, T4, T5, T6, R)).new({key: key, create: create, update: update, dispose: dispose, lazy: lazy, builder: builder, child: child});
      }
    }
    (ListenableProxyProvider6.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      ListenableProxyProvider6.__proto__.new.call(this, {key: key, create: create, lazy: lazy, builder: builder, update: dart.fn((context, previous) => update(context, provider$.Provider.of(T, context), provider$.Provider.of(T2, context), provider$.Provider.of(T3, context), provider$.Provider.of(T4, context), provider$.Provider.of(T5, context), provider$.Provider.of(T6, context), previous), __t$BuildContextAndRNToR()), dispose: dispose, child: child});
      ;
    }).prototype = ListenableProxyProvider6.prototype;
    dart.addTypeTests(ListenableProxyProvider6);
    ListenableProxyProvider6.prototype[_is_ListenableProxyProvider6_default] = true;
    dart.addTypeCaches(ListenableProxyProvider6);
    dart.setLibraryUri(ListenableProxyProvider6, I[32]);
    return ListenableProxyProvider6;
  });
  listenable_provider.ListenableProxyProvider6 = listenable_provider.ListenableProxyProvider6$();
  dart.addTypeTests(listenable_provider.ListenableProxyProvider6, _is_ListenableProxyProvider6_default);
  const _is_ChangeNotifierProxyProvider6_default = Symbol('_is_ChangeNotifierProxyProvider6_default');
  change_notifier_provider.ChangeNotifierProxyProvider6$ = dart.generic((T, T2, T3, T4, T5, T6, R) => {
    class ChangeNotifierProxyProvider6 extends listenable_provider.ListenableProxyProvider6$(T, T2, T3, T4, T5, T6, R) {
      static ['_#new#tearOff'](T, T2, T3, T4, T5, T6, R, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let create = opts && 'create' in opts ? opts.create : null;
        let update = opts && 'update' in opts ? opts.update : null;
        let lazy = opts && 'lazy' in opts ? opts.lazy : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (change_notifier_provider.ChangeNotifierProxyProvider6$(T, T2, T3, T4, T5, T6, R)).new({key: key, create: create, update: update, lazy: lazy, builder: builder, child: child});
      }
    }
    (ChangeNotifierProxyProvider6.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      ChangeNotifierProxyProvider6.__proto__.new.call(this, {key: key, create: create, update: update, dispose: C[19] || CT.C19, lazy: lazy, builder: builder, child: child});
      ;
    }).prototype = ChangeNotifierProxyProvider6.prototype;
    dart.addTypeTests(ChangeNotifierProxyProvider6);
    ChangeNotifierProxyProvider6.prototype[_is_ChangeNotifierProxyProvider6_default] = true;
    dart.addTypeCaches(ChangeNotifierProxyProvider6);
    dart.setLibraryUri(ChangeNotifierProxyProvider6, I[33]);
    return ChangeNotifierProxyProvider6;
  });
  change_notifier_provider.ChangeNotifierProxyProvider6 = change_notifier_provider.ChangeNotifierProxyProvider6$();
  dart.addTypeTests(change_notifier_provider.ChangeNotifierProxyProvider6, _is_ChangeNotifierProxyProvider6_default);
  var builder$3 = dart.privateName(consumer, "Consumer.builder");
  const _is_Consumer_default = Symbol('_is_Consumer_default');
  consumer.Consumer$ = dart.generic(T => {
    class Consumer extends nested.SingleChildStatelessWidget {
      get builder() {
        return this[builder$3];
      }
      set builder(value) {
        super.builder = value;
      }
      static ['_#new#tearOff'](T, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (consumer.Consumer$(T)).new({key: key, builder: builder, child: child});
      }
      buildWithChild(context, child) {
        let t9, t8, t7;
        t7 = context;
        t8 = provider$.Provider.of(T, context);
        t9 = child;
        return this.builder(t7, t8, t9);
      }
    }
    (Consumer.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      this[builder$3] = builder;
      Consumer.__proto__.new.call(this, {key: key, child: child});
      ;
    }).prototype = Consumer.prototype;
    dart.addTypeTests(Consumer);
    Consumer.prototype[_is_Consumer_default] = true;
    dart.addTypeCaches(Consumer);
    dart.setMethodSignature(Consumer, () => ({
      __proto__: dart.getMethods(Consumer.__proto__),
      buildWithChild: dart.fnType(framework.Widget, [framework.BuildContext, dart.nullable(framework.Widget)])
    }));
    dart.setLibraryUri(Consumer, I[34]);
    dart.setFieldSignature(Consumer, () => ({
      __proto__: dart.getFields(Consumer.__proto__),
      builder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, T, dart.nullable(framework.Widget)]))
    }));
    return Consumer;
  });
  consumer.Consumer = consumer.Consumer$();
  dart.addTypeTests(consumer.Consumer, _is_Consumer_default);
  var builder$4 = dart.privateName(consumer, "Consumer2.builder");
  const _is_Consumer2_default = Symbol('_is_Consumer2_default');
  consumer.Consumer2$ = dart.generic((A, B) => {
    class Consumer2 extends nested.SingleChildStatelessWidget {
      get builder() {
        return this[builder$4];
      }
      set builder(value) {
        super.builder = value;
      }
      static ['_#new#tearOff'](A, B, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (consumer.Consumer2$(A, B)).new({key: key, builder: builder, child: child});
      }
      buildWithChild(context, child) {
        let t10, t9, t8, t7;
        t7 = context;
        t8 = provider$.Provider.of(A, context);
        t9 = provider$.Provider.of(B, context);
        t10 = child;
        return this.builder(t7, t8, t9, t10);
      }
    }
    (Consumer2.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      this[builder$4] = builder;
      Consumer2.__proto__.new.call(this, {key: key, child: child});
      ;
    }).prototype = Consumer2.prototype;
    dart.addTypeTests(Consumer2);
    Consumer2.prototype[_is_Consumer2_default] = true;
    dart.addTypeCaches(Consumer2);
    dart.setMethodSignature(Consumer2, () => ({
      __proto__: dart.getMethods(Consumer2.__proto__),
      buildWithChild: dart.fnType(framework.Widget, [framework.BuildContext, dart.nullable(framework.Widget)])
    }));
    dart.setLibraryUri(Consumer2, I[34]);
    dart.setFieldSignature(Consumer2, () => ({
      __proto__: dart.getFields(Consumer2.__proto__),
      builder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, A, B, dart.nullable(framework.Widget)]))
    }));
    return Consumer2;
  });
  consumer.Consumer2 = consumer.Consumer2$();
  dart.addTypeTests(consumer.Consumer2, _is_Consumer2_default);
  var builder$5 = dart.privateName(consumer, "Consumer3.builder");
  const _is_Consumer3_default = Symbol('_is_Consumer3_default');
  consumer.Consumer3$ = dart.generic((A, B, C) => {
    class Consumer3 extends nested.SingleChildStatelessWidget {
      get builder() {
        return this[builder$5];
      }
      set builder(value) {
        super.builder = value;
      }
      static ['_#new#tearOff'](A, B, C, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (consumer.Consumer3$(A, B, C)).new({key: key, builder: builder, child: child});
      }
      buildWithChild(context, child) {
        let t11, t10, t9, t8, t7;
        t7 = context;
        t8 = provider$.Provider.of(A, context);
        t9 = provider$.Provider.of(B, context);
        t10 = provider$.Provider.of(C, context);
        t11 = child;
        return this.builder(t7, t8, t9, t10, t11);
      }
    }
    (Consumer3.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      this[builder$5] = builder;
      Consumer3.__proto__.new.call(this, {key: key, child: child});
      ;
    }).prototype = Consumer3.prototype;
    dart.addTypeTests(Consumer3);
    Consumer3.prototype[_is_Consumer3_default] = true;
    dart.addTypeCaches(Consumer3);
    dart.setMethodSignature(Consumer3, () => ({
      __proto__: dart.getMethods(Consumer3.__proto__),
      buildWithChild: dart.fnType(framework.Widget, [framework.BuildContext, dart.nullable(framework.Widget)])
    }));
    dart.setLibraryUri(Consumer3, I[34]);
    dart.setFieldSignature(Consumer3, () => ({
      __proto__: dart.getFields(Consumer3.__proto__),
      builder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, A, B, C, dart.nullable(framework.Widget)]))
    }));
    return Consumer3;
  });
  consumer.Consumer3 = consumer.Consumer3$();
  dart.addTypeTests(consumer.Consumer3, _is_Consumer3_default);
  var builder$6 = dart.privateName(consumer, "Consumer4.builder");
  const _is_Consumer4_default = Symbol('_is_Consumer4_default');
  consumer.Consumer4$ = dart.generic((A, B, C, D) => {
    class Consumer4 extends nested.SingleChildStatelessWidget {
      get builder() {
        return this[builder$6];
      }
      set builder(value) {
        super.builder = value;
      }
      static ['_#new#tearOff'](A, B, C, D, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (consumer.Consumer4$(A, B, C, D)).new({key: key, builder: builder, child: child});
      }
      buildWithChild(context, child) {
        let t12, t11, t10, t9, t8, t7;
        t7 = context;
        t8 = provider$.Provider.of(A, context);
        t9 = provider$.Provider.of(B, context);
        t10 = provider$.Provider.of(C, context);
        t11 = provider$.Provider.of(D, context);
        t12 = child;
        return this.builder(t7, t8, t9, t10, t11, t12);
      }
    }
    (Consumer4.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      this[builder$6] = builder;
      Consumer4.__proto__.new.call(this, {key: key, child: child});
      ;
    }).prototype = Consumer4.prototype;
    dart.addTypeTests(Consumer4);
    Consumer4.prototype[_is_Consumer4_default] = true;
    dart.addTypeCaches(Consumer4);
    dart.setMethodSignature(Consumer4, () => ({
      __proto__: dart.getMethods(Consumer4.__proto__),
      buildWithChild: dart.fnType(framework.Widget, [framework.BuildContext, dart.nullable(framework.Widget)])
    }));
    dart.setLibraryUri(Consumer4, I[34]);
    dart.setFieldSignature(Consumer4, () => ({
      __proto__: dart.getFields(Consumer4.__proto__),
      builder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, A, B, C, D, dart.nullable(framework.Widget)]))
    }));
    return Consumer4;
  });
  consumer.Consumer4 = consumer.Consumer4$();
  dart.addTypeTests(consumer.Consumer4, _is_Consumer4_default);
  var builder$7 = dart.privateName(consumer, "Consumer5.builder");
  const _is_Consumer5_default = Symbol('_is_Consumer5_default');
  consumer.Consumer5$ = dart.generic((A, B, C, D, E) => {
    class Consumer5 extends nested.SingleChildStatelessWidget {
      get builder() {
        return this[builder$7];
      }
      set builder(value) {
        super.builder = value;
      }
      static ['_#new#tearOff'](A, B, C, D, E, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (consumer.Consumer5$(A, B, C, D, E)).new({key: key, builder: builder, child: child});
      }
      buildWithChild(context, child) {
        let t13, t12, t11, t10, t9, t8, t7;
        t7 = context;
        t8 = provider$.Provider.of(A, context);
        t9 = provider$.Provider.of(B, context);
        t10 = provider$.Provider.of(C, context);
        t11 = provider$.Provider.of(D, context);
        t12 = provider$.Provider.of(E, context);
        t13 = child;
        return this.builder(t7, t8, t9, t10, t11, t12, t13);
      }
    }
    (Consumer5.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      this[builder$7] = builder;
      Consumer5.__proto__.new.call(this, {key: key, child: child});
      ;
    }).prototype = Consumer5.prototype;
    dart.addTypeTests(Consumer5);
    Consumer5.prototype[_is_Consumer5_default] = true;
    dart.addTypeCaches(Consumer5);
    dart.setMethodSignature(Consumer5, () => ({
      __proto__: dart.getMethods(Consumer5.__proto__),
      buildWithChild: dart.fnType(framework.Widget, [framework.BuildContext, dart.nullable(framework.Widget)])
    }));
    dart.setLibraryUri(Consumer5, I[34]);
    dart.setFieldSignature(Consumer5, () => ({
      __proto__: dart.getFields(Consumer5.__proto__),
      builder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, A, B, C, D, E, dart.nullable(framework.Widget)]))
    }));
    return Consumer5;
  });
  consumer.Consumer5 = consumer.Consumer5$();
  dart.addTypeTests(consumer.Consumer5, _is_Consumer5_default);
  var builder$8 = dart.privateName(consumer, "Consumer6.builder");
  const _is_Consumer6_default = Symbol('_is_Consumer6_default');
  consumer.Consumer6$ = dart.generic((A, B, C, D, E, F) => {
    class Consumer6 extends nested.SingleChildStatelessWidget {
      get builder() {
        return this[builder$8];
      }
      set builder(value) {
        super.builder = value;
      }
      static ['_#new#tearOff'](A, B, C, D, E, F, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (consumer.Consumer6$(A, B, C, D, E, F)).new({key: key, builder: builder, child: child});
      }
      buildWithChild(context, child) {
        let t14, t13, t12, t11, t10, t9, t8, t7;
        t7 = context;
        t8 = provider$.Provider.of(A, context);
        t9 = provider$.Provider.of(B, context);
        t10 = provider$.Provider.of(C, context);
        t11 = provider$.Provider.of(D, context);
        t12 = provider$.Provider.of(E, context);
        t13 = provider$.Provider.of(F, context);
        t14 = child;
        return this.builder(t7, t8, t9, t10, t11, t12, t13, t14);
      }
    }
    (Consumer6.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      this[builder$8] = builder;
      Consumer6.__proto__.new.call(this, {key: key, child: child});
      ;
    }).prototype = Consumer6.prototype;
    dart.addTypeTests(Consumer6);
    Consumer6.prototype[_is_Consumer6_default] = true;
    dart.addTypeCaches(Consumer6);
    dart.setMethodSignature(Consumer6, () => ({
      __proto__: dart.getMethods(Consumer6.__proto__),
      buildWithChild: dart.fnType(framework.Widget, [framework.BuildContext, dart.nullable(framework.Widget)])
    }));
    dart.setLibraryUri(Consumer6, I[34]);
    dart.setFieldSignature(Consumer6, () => ({
      __proto__: dart.getFields(Consumer6.__proto__),
      builder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, A, B, C, D, E, F, dart.nullable(framework.Widget)]))
    }));
    return Consumer6;
  });
  consumer.Consumer6 = consumer.Consumer6$();
  dart.addTypeTests(consumer.Consumer6, _is_Consumer6_default);
  var valueType$ = dart.privateName(provider$, "ProviderNullException.valueType");
  var widgetType$ = dart.privateName(provider$, "ProviderNullException.widgetType");
  provider$.ProviderNullException = class ProviderNullException extends core.Object {
    get valueType() {
      return this[valueType$];
    }
    set valueType(value) {
      super.valueType = value;
    }
    get widgetType() {
      return this[widgetType$];
    }
    set widgetType(value) {
      super.widgetType = value;
    }
    static ['_#new#tearOff'](valueType, widgetType) {
      return new provider$.ProviderNullException.new(valueType, widgetType);
    }
    toString() {
      if (false) {
        return "A provider for " + dart.str(this.valueType) + " unexpectedly returned null.";
      }
      return "Error: The widget " + dart.str(this.widgetType) + " tried to read Provider<" + dart.str(this.valueType) + "> but the matching\nprovider returned null.\n\nTo fix the error, consider changing Provider<" + dart.str(this.valueType) + "> to Provider<" + dart.str(this.valueType) + "?>.\n";
    }
  };
  (provider$.ProviderNullException.new = function(valueType, widgetType) {
    this[valueType$] = valueType;
    this[widgetType$] = widgetType;
    ;
  }).prototype = provider$.ProviderNullException.prototype;
  dart.addTypeTests(provider$.ProviderNullException);
  dart.addTypeCaches(provider$.ProviderNullException);
  provider$.ProviderNullException[dart.implements] = () => [core.Exception];
  dart.setLibraryUri(provider$.ProviderNullException, I[19]);
  dart.setFieldSignature(provider$.ProviderNullException, () => ({
    __proto__: dart.getFields(provider$.ProviderNullException.__proto__),
    valueType: dart.finalFieldType(core.Type),
    widgetType: dart.finalFieldType(core.Type)
  }));
  dart.defineExtensionMethods(provider$.ProviderNullException, ['toString']);
  var valueType$0 = dart.privateName(provider$, "ProviderNotFoundException.valueType");
  var widgetType$0 = dart.privateName(provider$, "ProviderNotFoundException.widgetType");
  provider$.ProviderNotFoundException = class ProviderNotFoundException extends core.Object {
    get valueType() {
      return this[valueType$0];
    }
    set valueType(value) {
      super.valueType = value;
    }
    get widgetType() {
      return this[widgetType$0];
    }
    set widgetType(value) {
      super.widgetType = value;
    }
    static ['_#new#tearOff'](valueType, widgetType) {
      return new provider$.ProviderNotFoundException.new(valueType, widgetType);
    }
    toString() {
      if (false) {
        return "Provider<" + dart.str(this.valueType) + "> not found for " + dart.str(this.widgetType);
      }
      return "Error: Could not find the correct Provider<" + dart.str(this.valueType) + "> above this " + dart.str(this.widgetType) + " Widget\n\nThis happens because you used a `BuildContext` that does not include the provider\nof your choice. There are a few common scenarios:\n\n- You added a new provider in your `main.dart` and performed a hot-reload.\n  To fix, perform a hot-restart.\n\n- The provider you are trying to read is in a different route.\n\n  Providers are \"scoped\". So if you insert of provider inside a route, then\n  other routes will not be able to access that provider.\n\n- You used a `BuildContext` that is an ancestor of the provider you are trying to read.\n\n  Make sure that " + dart.str(this.widgetType) + " is under your MultiProvider/Provider<" + dart.str(this.valueType) + ">.\n  This usually happens when you are creating a provider and trying to read it immediately.\n\n  For example, instead of:\n\n  ```\n  Widget build(BuildContext context) {\n    return Provider<Example>(\n      create: (_) => Example(),\n      // Will throw a ProviderNotFoundError, because `context` is associated\n      // to the widget that is the parent of `Provider<Example>`\n      child: Text(context.watch<Example>().toString()),\n    );\n  }\n  ```\n\n  consider using `builder` like so:\n\n  ```\n  Widget build(BuildContext context) {\n    return Provider<Example>(\n      create: (_) => Example(),\n      // we use `builder` to obtain a new `BuildContext` that has access to the provider\n      builder: (context, child) {\n        // No longer throws\n        return Text(context.watch<Example>().toString());\n      }\n    );\n  }\n  ```\n\nIf none of these solutions work, consider asking for help on StackOverflow:\nhttps://stackoverflow.com/questions/tagged/flutter\n";
    }
  };
  (provider$.ProviderNotFoundException.new = function(valueType, widgetType) {
    this[valueType$0] = valueType;
    this[widgetType$0] = widgetType;
    ;
  }).prototype = provider$.ProviderNotFoundException.prototype;
  dart.addTypeTests(provider$.ProviderNotFoundException);
  dart.addTypeCaches(provider$.ProviderNotFoundException);
  provider$.ProviderNotFoundException[dart.implements] = () => [core.Exception];
  dart.setLibraryUri(provider$.ProviderNotFoundException, I[19]);
  dart.setFieldSignature(provider$.ProviderNotFoundException, () => ({
    __proto__: dart.getFields(provider$.ProviderNotFoundException.__proto__),
    valueType: dart.finalFieldType(core.Type),
    widgetType: dart.finalFieldType(core.Type)
  }));
  dart.defineExtensionMethods(provider$.ProviderNotFoundException, ['toString']);
  const _is__Delegate_default = Symbol('_is__Delegate_default');
  provider$._Delegate$ = dart.generic(T => {
    class _Delegate extends core.Object {
      debugFillProperties(properties) {
      }
    }
    (_Delegate.new = function() {
      ;
    }).prototype = _Delegate.prototype;
    dart.addTypeTests(_Delegate);
    _Delegate.prototype[_is__Delegate_default] = true;
    dart.addTypeCaches(_Delegate);
    dart.setMethodSignature(_Delegate, () => ({
      __proto__: dart.getMethods(_Delegate.__proto__),
      debugFillProperties: dart.fnType(dart.void, [diagnostics.DiagnosticPropertiesBuilder])
    }));
    dart.setLibraryUri(_Delegate, I[19]);
    return _Delegate;
  });
  provider$._Delegate = provider$._Delegate$();
  dart.addTypeTests(provider$._Delegate, _is__Delegate_default);
  const _is__DeferredDelegate_default = Symbol('_is__DeferredDelegate_default');
  provider$._DeferredDelegate$ = dart.generic((T, R) => {
    class _DeferredDelegate extends provider$._Delegate$(R) {}
    (_DeferredDelegate.new = function(updateShouldNotify, startListening) {
      this.updateShouldNotify = updateShouldNotify;
      this.startListening = startListening;
      ;
    }).prototype = _DeferredDelegate.prototype;
    dart.addTypeTests(_DeferredDelegate);
    _DeferredDelegate.prototype[_is__DeferredDelegate_default] = true;
    dart.addTypeCaches(_DeferredDelegate);
    dart.setLibraryUri(_DeferredDelegate, I[19]);
    dart.setFieldSignature(_DeferredDelegate, () => ({
      __proto__: dart.getFields(_DeferredDelegate.__proto__),
      updateShouldNotify: dart.finalFieldType(dart.nullable(dart.fnType(core.bool, [R, R]))),
      startListening: dart.finalFieldType(dart.fnType(dart.fnType(dart.void, []), [provider$.InheritedContext$(dart.nullable(R)), dart.fnType(dart.void, [R]), T, dart.nullable(R)]))
    }));
    return _DeferredDelegate;
  });
  provider$._DeferredDelegate = provider$._DeferredDelegate$();
  dart.addTypeTests(provider$._DeferredDelegate, _is__DeferredDelegate_default);
  var _removeListener = dart.privateName(provider$, "_removeListener");
  var _value$0 = dart.privateName(provider$, "_value");
  var _hasValue = dart.privateName(provider$, "_hasValue");
  var _isNotifyDependentsEnabled = dart.privateName(provider$, "_isNotifyDependentsEnabled");
  var element = dart.privateName(provider$, "_DelegateState.element");
  var _debugSetInheritedLock = dart.privateName(provider$, "_debugSetInheritedLock");
  const _is__DelegateState_default = Symbol('_is__DelegateState_default');
  provider$._DelegateState$ = dart.generic((T, D) => {
    var __t$TN = () => (__t$TN = dart.constFn(dart.nullable(T)))();
    var __t$_InheritedProviderScopeElementOfTN = () => (__t$_InheritedProviderScopeElementOfTN = dart.constFn(provider$._InheritedProviderScopeElement$(__t$TN())))();
    var __t$_InheritedProviderScopeElementNOfTN = () => (__t$_InheritedProviderScopeElementNOfTN = dart.constFn(dart.nullable(__t$_InheritedProviderScopeElementOfTN())))();
    class _DelegateState extends core.Object {
      get element() {
        return this[element];
      }
      set element(value) {
        this[element] = __t$_InheritedProviderScopeElementNOfTN().as(value);
      }
      get delegate() {
        return D.as(dart.nullCheck(this.element).widget.owner[_delegate]);
      }
      debugSetInheritedLock(value) {
        return dart.nullCheck(this.element)[_debugSetInheritedLock](value);
      }
      willUpdateDelegate(newDelegate) {
        D.as(newDelegate);
        return false;
      }
      dispose() {
      }
      debugFillProperties(properties) {
      }
      build(opts) {
        let isBuildFromExternalSources = opts && 'isBuildFromExternalSources' in opts ? opts.isBuildFromExternalSources : null;
      }
    }
    (_DelegateState.new = function() {
      this[element] = null;
      ;
    }).prototype = _DelegateState.prototype;
    dart.addTypeTests(_DelegateState);
    _DelegateState.prototype[_is__DelegateState_default] = true;
    dart.addTypeCaches(_DelegateState);
    dart.setMethodSignature(_DelegateState, () => ({
      __proto__: dart.getMethods(_DelegateState.__proto__),
      debugSetInheritedLock: dart.fnType(core.bool, [core.bool]),
      willUpdateDelegate: dart.fnType(core.bool, [dart.nullable(core.Object)]),
      dispose: dart.fnType(dart.void, []),
      debugFillProperties: dart.fnType(dart.void, [diagnostics.DiagnosticPropertiesBuilder]),
      build: dart.fnType(dart.void, [], {}, {isBuildFromExternalSources: core.bool})
    }));
    dart.setGetterSignature(_DelegateState, () => ({
      __proto__: dart.getGetters(_DelegateState.__proto__),
      delegate: D
    }));
    dart.setLibraryUri(_DelegateState, I[19]);
    dart.setFieldSignature(_DelegateState, () => ({
      __proto__: dart.getFields(_DelegateState.__proto__),
      element: dart.fieldType(dart.nullable(provider$._InheritedProviderScopeElement$(dart.nullable(T))))
    }));
    return _DelegateState;
  });
  provider$._DelegateState = provider$._DelegateState$();
  dart.addTypeTests(provider$._DelegateState, _is__DelegateState_default);
  const _is__DeferredDelegateState_default = Symbol('_is__DeferredDelegateState_default');
  provider$._DeferredDelegateState$ = dart.generic((T, R, W) => {
    var __t$InheritedContextOfRNAndFnAndT__ToFn = () => (__t$InheritedContextOfRNAndFnAndT__ToFn = dart.constFn(dart.fnType(T$.VoidTovoid(), [__t$InheritedContextOfRN(), __t$RTovoid(), T, __t$RN()])))();
    var __t$RN = () => (__t$RN = dart.constFn(dart.nullable(R)))();
    var __t$InheritedContextOfRN = () => (__t$InheritedContextOfRN = dart.constFn(provider$.InheritedContext$(__t$RN())))();
    var __t$RTovoid = () => (__t$RTovoid = dart.constFn(dart.fnType(dart.void, [R])))();
    var __t$RAndRTobool = () => (__t$RAndRTobool = dart.constFn(dart.fnType(core.bool, [R, R])))();
    var __t$RAndRToNbool = () => (__t$RAndRToNbool = dart.constFn(dart.nullable(__t$RAndRTobool())))();
    class _DeferredDelegateState extends provider$._DelegateState$(R, W) {
      get value() {
        let t11, t10, t9, t8, t7;
        dart.nullCheck(this.element)[_isNotifyDependentsEnabled] = false;
        this[_removeListener] == null ? this[_removeListener] = (t7 = this.delegate, t8 = dart.nullCheck(this.element), t9 = dart.bind(this, 'setState'), t10 = this.controller, t11 = this[_value$0], __t$InheritedContextOfRNAndFnAndT__ToFn().as(t7.startListening)(t8, t9, t10, t11)) : null;
        dart.nullCheck(this.element)[_isNotifyDependentsEnabled] = true;
        if (!dart.nullCheck(this.element).hasValue) dart.assertFailed("The callback \"startListening\" was called, but it left DeferredInhertitedProviderElement<" + dart.str(dart.wrapType(T)) + ", " + dart.str(dart.wrapType(R)) + ">\nin an uninitialized state.\n\nIt is necessary for \"startListening\" to call \"setState\" at least once the very\nfirst time \"value\" is requested.\n\nTo fix, consider:\n\nDeferredInheritedProvider(\n  ...,\n  startListening: (element, setState, controller, value) {\n    if (!element.hasValue) {\n      setState(myInitialValue); // TODO replace myInitialValue with your own\n    }\n    ...\n  }\n)\n    ", I[35], 109, 12, "element!.hasValue");
        if (!(this[_removeListener] != null)) dart.assertFailed(null, I[35], 128, 12, "_removeListener != null");
        return R.as(this[_value$0]);
      }
      dispose() {
        let t7;
        super.dispose();
        t7 = this[_removeListener];
        t7 == null ? null : t7();
      }
      get isLoaded() {
        return this[_removeListener] != null;
      }
      get hasValue() {
        return this[_hasValue];
      }
      setState(value) {
        R.as(value);
        if (this[_hasValue]) {
          let shouldNotify = __t$RAndRToNbool().as(this.delegate.updateShouldNotify) != null ? dart.nullCheck(__t$RAndRToNbool().as(this.delegate.updateShouldNotify))(R.as(this[_value$0]), value) : !dart.equals(this[_value$0], value);
          if (shouldNotify) {
            dart.nullCheck(this.element).markNeedsNotifyDependents();
          }
        }
        this[_hasValue] = true;
        this[_value$0] = value;
      }
    }
    (_DeferredDelegateState.new = function() {
      this[_removeListener] = null;
      this[_value$0] = null;
      this[_hasValue] = false;
      _DeferredDelegateState.__proto__.new.call(this);
      ;
    }).prototype = _DeferredDelegateState.prototype;
    dart.addTypeTests(_DeferredDelegateState);
    _DeferredDelegateState.prototype[_is__DeferredDelegateState_default] = true;
    dart.addTypeCaches(_DeferredDelegateState);
    dart.setMethodSignature(_DeferredDelegateState, () => ({
      __proto__: dart.getMethods(_DeferredDelegateState.__proto__),
      setState: dart.fnType(dart.void, [dart.nullable(core.Object)])
    }));
    dart.setGetterSignature(_DeferredDelegateState, () => ({
      __proto__: dart.getGetters(_DeferredDelegateState.__proto__),
      value: R,
      isLoaded: core.bool,
      hasValue: core.bool
    }));
    dart.setLibraryUri(_DeferredDelegateState, I[19]);
    dart.setFieldSignature(_DeferredDelegateState, () => ({
      __proto__: dart.getFields(_DeferredDelegateState.__proto__),
      [_removeListener]: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
      [_value$0]: dart.fieldType(dart.nullable(R)),
      [_hasValue]: dart.fieldType(core.bool)
    }));
    return _DeferredDelegateState;
  });
  provider$._DeferredDelegateState = provider$._DeferredDelegateState$();
  dart.addTypeTests(provider$._DeferredDelegateState, _is__DeferredDelegateState_default);
  const _is__CreateDeferredInheritedProvider_default = Symbol('_is__CreateDeferredInheritedProvider_default');
  provider$._CreateDeferredInheritedProvider$ = dart.generic((T, R) => {
    var __t$_CreateDeferredInheritedProviderElementOfT$R = () => (__t$_CreateDeferredInheritedProviderElementOfT$R = dart.constFn(provider$._CreateDeferredInheritedProviderElement$(T, R)))();
    class _CreateDeferredInheritedProvider extends provider$._DeferredDelegate$(T, R) {
      static ['_#new#tearOff'](T, R, opts) {
        let create = opts && 'create' in opts ? opts.create : null;
        let dispose = opts && 'dispose' in opts ? opts.dispose : null;
        let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
        let startListening = opts && 'startListening' in opts ? opts.startListening : null;
        return new (provider$._CreateDeferredInheritedProvider$(T, R)).new({create: create, dispose: dispose, updateShouldNotify: updateShouldNotify, startListening: startListening});
      }
      createState() {
        return new (__t$_CreateDeferredInheritedProviderElementOfT$R()).new();
      }
    }
    (_CreateDeferredInheritedProvider.new = function(opts) {
      let create = opts && 'create' in opts ? opts.create : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let startListening = opts && 'startListening' in opts ? opts.startListening : null;
      this.create = create;
      this.dispose = dispose;
      _CreateDeferredInheritedProvider.__proto__.new.call(this, updateShouldNotify, startListening);
      ;
    }).prototype = _CreateDeferredInheritedProvider.prototype;
    dart.addTypeTests(_CreateDeferredInheritedProvider);
    _CreateDeferredInheritedProvider.prototype[_is__CreateDeferredInheritedProvider_default] = true;
    dart.addTypeCaches(_CreateDeferredInheritedProvider);
    dart.setMethodSignature(_CreateDeferredInheritedProvider, () => ({
      __proto__: dart.getMethods(_CreateDeferredInheritedProvider.__proto__),
      createState: dart.fnType(provider$._CreateDeferredInheritedProviderElement$(T, R), [])
    }));
    dart.setLibraryUri(_CreateDeferredInheritedProvider, I[19]);
    dart.setFieldSignature(_CreateDeferredInheritedProvider, () => ({
      __proto__: dart.getFields(_CreateDeferredInheritedProvider.__proto__),
      create: dart.finalFieldType(dart.fnType(T, [framework.BuildContext])),
      dispose: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [framework.BuildContext, T])))
    }));
    return _CreateDeferredInheritedProvider;
  });
  provider$._CreateDeferredInheritedProvider = provider$._CreateDeferredInheritedProvider$();
  dart.addTypeTests(provider$._CreateDeferredInheritedProvider, _is__CreateDeferredInheritedProvider_default);
  var _didBuild = dart.privateName(provider$, "_didBuild");
  var _controller = dart.privateName(provider$, "_controller");
  const _is__CreateDeferredInheritedProviderElement_default = Symbol('_is__CreateDeferredInheritedProviderElement_default');
  provider$._CreateDeferredInheritedProviderElement$ = dart.generic((T, R) => {
    var __t$BuildContextAndTTovoid = () => (__t$BuildContextAndTTovoid = dart.constFn(dart.fnType(dart.void, [framework.BuildContext, T])))();
    var __t$BuildContextAndTToNvoid = () => (__t$BuildContextAndTToNvoid = dart.constFn(dart.nullable(__t$BuildContextAndTTovoid())))();
    var __t$DiagnosticsPropertyOfT = () => (__t$DiagnosticsPropertyOfT = dart.constFn(diagnostics.DiagnosticsProperty$(T)))();
    var __t$DiagnosticsPropertyOfR = () => (__t$DiagnosticsPropertyOfR = dart.constFn(diagnostics.DiagnosticsProperty$(R)))();
    class _CreateDeferredInheritedProviderElement extends provider$._DeferredDelegateState$(T, R, provider$._CreateDeferredInheritedProvider$(T, R)) {
      get controller() {
        let t8, t7;
        if (!this[_didBuild]) {
          if (!this.debugSetInheritedLock(true)) dart.assertFailed(null, I[35], 186, 14, "debugSetInheritedLock(true)");
          let _debugPreviousIsInInheritedProviderCreate = null;
          let _debugPreviousIsInInheritedProviderUpdate = null;
          if (!dart.fn(() => {
            _debugPreviousIsInInheritedProviderCreate = provider$.debugIsInInheritedProviderCreate;
            _debugPreviousIsInInheritedProviderUpdate = provider$.debugIsInInheritedProviderUpdate;
            return true;
          }, T$.VoidTobool())()) dart.assertFailed(null, I[35], 190, 14, "() {\n        _debugPreviousIsInInheritedProviderCreate =\n            debugIsInInheritedProviderCreate;\n        _debugPreviousIsInInheritedProviderUpdate =\n            debugIsInInheritedProviderUpdate;\n        return true;\n      }()");
          try {
            if (!dart.fn(() => {
              provider$.debugIsInInheritedProviderCreate = true;
              provider$.debugIsInInheritedProviderUpdate = false;
              return true;
            }, T$.VoidTobool())()) dart.assertFailed(null, I[35], 199, 16, "() {\n          debugIsInInheritedProviderCreate = true;\n          debugIsInInheritedProviderUpdate = false;\n          return true;\n        }()");
            this[_controller] = (t7 = this.delegate, t8 = dart.nullCheck(this.element), t7.create(t8));
          } finally {
            if (!dart.fn(() => {
              provider$.debugIsInInheritedProviderCreate = dart.nullCheck(_debugPreviousIsInInheritedProviderCreate);
              provider$.debugIsInInheritedProviderUpdate = dart.nullCheck(_debugPreviousIsInInheritedProviderUpdate);
              return true;
            }, T$.VoidTobool())()) dart.assertFailed(null, I[35], 206, 16, "() {\n          debugIsInInheritedProviderCreate =\n              _debugPreviousIsInInheritedProviderCreate!;\n          debugIsInInheritedProviderUpdate =\n              _debugPreviousIsInInheritedProviderUpdate!;\n          return true;\n        }()");
          }
          this[_didBuild] = true;
        }
        return T.as(this[_controller]);
      }
      dispose() {
        let t7;
        super.dispose();
        if (this[_didBuild]) {
          t7 = __t$BuildContextAndTToNvoid().as(this.delegate.dispose);
          t7 == null ? null : t7(dart.nullCheck(this.element), T.as(this[_controller]));
        }
      }
      debugFillProperties(properties) {
        let t7, t7$;
        super.debugFillProperties(properties);
        if (this.isLoaded) {
          t7 = properties;
          (() => {
            t7.add(new (__t$DiagnosticsPropertyOfT()).new("controller", this.controller));
            t7.add(new (__t$DiagnosticsPropertyOfR()).new("value", this.value));
            return t7;
          })();
        } else {
          t7$ = properties;
          (() => {
            t7$.add(new diagnostics.FlagProperty.new("controller", {value: true, showName: true, ifTrue: "<not yet loaded>"}));
            t7$.add(new diagnostics.FlagProperty.new("value", {value: true, showName: true, ifTrue: "<not yet loaded>"}));
            return t7$;
          })();
        }
      }
      static ['_#new#tearOff'](T, R) {
        return new (provider$._CreateDeferredInheritedProviderElement$(T, R)).new();
      }
    }
    (_CreateDeferredInheritedProviderElement.new = function() {
      this[_didBuild] = false;
      this[_controller] = null;
      _CreateDeferredInheritedProviderElement.__proto__.new.call(this);
      ;
    }).prototype = _CreateDeferredInheritedProviderElement.prototype;
    dart.addTypeTests(_CreateDeferredInheritedProviderElement);
    _CreateDeferredInheritedProviderElement.prototype[_is__CreateDeferredInheritedProviderElement_default] = true;
    dart.addTypeCaches(_CreateDeferredInheritedProviderElement);
    dart.setGetterSignature(_CreateDeferredInheritedProviderElement, () => ({
      __proto__: dart.getGetters(_CreateDeferredInheritedProviderElement.__proto__),
      controller: T
    }));
    dart.setLibraryUri(_CreateDeferredInheritedProviderElement, I[19]);
    dart.setFieldSignature(_CreateDeferredInheritedProviderElement, () => ({
      __proto__: dart.getFields(_CreateDeferredInheritedProviderElement.__proto__),
      [_didBuild]: dart.fieldType(core.bool),
      [_controller]: dart.fieldType(dart.nullable(T))
    }));
    return _CreateDeferredInheritedProviderElement;
  });
  provider$._CreateDeferredInheritedProviderElement = provider$._CreateDeferredInheritedProviderElement$();
  dart.addTypeTests(provider$._CreateDeferredInheritedProviderElement, _is__CreateDeferredInheritedProviderElement_default);
  const _is__ValueDeferredInheritedProvider_default = Symbol('_is__ValueDeferredInheritedProvider_default');
  provider$._ValueDeferredInheritedProvider$ = dart.generic((T, R) => {
    var __t$_ValueDeferredInheritedProviderStateOfT$R = () => (__t$_ValueDeferredInheritedProviderStateOfT$R = dart.constFn(provider$._ValueDeferredInheritedProviderState$(T, R)))();
    var __t$DiagnosticsPropertyOfT = () => (__t$DiagnosticsPropertyOfT = dart.constFn(diagnostics.DiagnosticsProperty$(T)))();
    class _ValueDeferredInheritedProvider extends provider$._DeferredDelegate$(T, R) {
      static ['_#new#tearOff'](T, R, value, updateShouldNotify, startListening) {
        return new (provider$._ValueDeferredInheritedProvider$(T, R)).new(value, updateShouldNotify, startListening);
      }
      createState() {
        return new (__t$_ValueDeferredInheritedProviderStateOfT$R()).new();
      }
      debugFillProperties(properties) {
        super.debugFillProperties(properties);
        properties.add(new (__t$DiagnosticsPropertyOfT()).new("controller", this.value));
      }
    }
    (_ValueDeferredInheritedProvider.new = function(value, updateShouldNotify, startListening) {
      this.value = value;
      _ValueDeferredInheritedProvider.__proto__.new.call(this, updateShouldNotify, startListening);
      ;
    }).prototype = _ValueDeferredInheritedProvider.prototype;
    dart.addTypeTests(_ValueDeferredInheritedProvider);
    _ValueDeferredInheritedProvider.prototype[_is__ValueDeferredInheritedProvider_default] = true;
    dart.addTypeCaches(_ValueDeferredInheritedProvider);
    dart.setMethodSignature(_ValueDeferredInheritedProvider, () => ({
      __proto__: dart.getMethods(_ValueDeferredInheritedProvider.__proto__),
      createState: dart.fnType(provider$._ValueDeferredInheritedProviderState$(T, R), [])
    }));
    dart.setLibraryUri(_ValueDeferredInheritedProvider, I[19]);
    dart.setFieldSignature(_ValueDeferredInheritedProvider, () => ({
      __proto__: dart.getFields(_ValueDeferredInheritedProvider.__proto__),
      value: dart.finalFieldType(T)
    }));
    return _ValueDeferredInheritedProvider;
  });
  provider$._ValueDeferredInheritedProvider = provider$._ValueDeferredInheritedProvider$();
  dart.addTypeTests(provider$._ValueDeferredInheritedProvider, _is__ValueDeferredInheritedProvider_default);
  const _is__ValueDeferredInheritedProviderState_default = Symbol('_is__ValueDeferredInheritedProviderState_default');
  provider$._ValueDeferredInheritedProviderState$ = dart.generic((T, R) => {
    var __t$_ValueDeferredInheritedProviderOfT$R = () => (__t$_ValueDeferredInheritedProviderOfT$R = dart.constFn(provider$._ValueDeferredInheritedProvider$(T, R)))();
    var __t$DiagnosticsPropertyOfR = () => (__t$DiagnosticsPropertyOfR = dart.constFn(diagnostics.DiagnosticsProperty$(R)))();
    class _ValueDeferredInheritedProviderState extends provider$._DeferredDelegateState$(T, R, provider$._ValueDeferredInheritedProvider$(T, R)) {
      willUpdateDelegate(oldDelegate) {
        __t$_ValueDeferredInheritedProviderOfT$R().as(oldDelegate);
        if (!dart.equals(this.delegate.value, oldDelegate.value)) {
          if (this[_removeListener] != null) {
            dart.nullCheck(this[_removeListener])();
            this[_removeListener] = null;
          }
          return true;
        }
        return false;
      }
      get controller() {
        return this.delegate.value;
      }
      debugFillProperties(properties) {
        super.debugFillProperties(properties);
        if (this[_removeListener] != null) {
          properties.add(new (__t$DiagnosticsPropertyOfR()).new("value", this.value));
        } else {
          properties.add(new diagnostics.FlagProperty.new("value", {value: true, showName: true, ifTrue: "<not yet loaded>"}));
        }
      }
      static ['_#new#tearOff'](T, R) {
        return new (provider$._ValueDeferredInheritedProviderState$(T, R)).new();
      }
    }
    (_ValueDeferredInheritedProviderState.new = function() {
      _ValueDeferredInheritedProviderState.__proto__.new.call(this);
      ;
    }).prototype = _ValueDeferredInheritedProviderState.prototype;
    dart.addTypeTests(_ValueDeferredInheritedProviderState);
    _ValueDeferredInheritedProviderState.prototype[_is__ValueDeferredInheritedProviderState_default] = true;
    dart.addTypeCaches(_ValueDeferredInheritedProviderState);
    dart.setGetterSignature(_ValueDeferredInheritedProviderState, () => ({
      __proto__: dart.getGetters(_ValueDeferredInheritedProviderState.__proto__),
      controller: T
    }));
    dart.setLibraryUri(_ValueDeferredInheritedProviderState, I[19]);
    return _ValueDeferredInheritedProviderState;
  });
  provider$._ValueDeferredInheritedProviderState = provider$._ValueDeferredInheritedProviderState$();
  dart.addTypeTests(provider$._ValueDeferredInheritedProviderState, _is__ValueDeferredInheritedProviderState_default);
  var eventKind$ = dart.privateName(provider$, "PostEventCall.eventKind");
  var event$0 = dart.privateName(provider$, "PostEventCall.event");
  provider$.PostEventCall = class PostEventCall extends core.Object {
    get eventKind() {
      return this[eventKind$];
    }
    set eventKind(value) {
      super.eventKind = value;
    }
    get event() {
      return this[event$0];
    }
    set event(value) {
      super.event = value;
    }
    static ['_#_#tearOff'](eventKind, event) {
      return new provider$.PostEventCall.__(eventKind, event);
    }
  };
  (provider$.PostEventCall.__ = function(eventKind, event) {
    this[eventKind$] = eventKind;
    this[event$0] = event;
    ;
  }).prototype = provider$.PostEventCall.prototype;
  dart.addTypeTests(provider$.PostEventCall);
  dart.addTypeCaches(provider$.PostEventCall);
  dart.setLibraryUri(provider$.PostEventCall, I[19]);
  dart.setFieldSignature(provider$.PostEventCall, () => ({
    __proto__: dart.getFields(provider$.PostEventCall.__proto__),
    eventKind: dart.finalFieldType(core.String),
    event: dart.finalFieldType(core.Map$(dart.nullable(core.Object), dart.nullable(core.Object)))
  }));
  var logs = dart.privateName(provider$, "PostEventSpy.logs");
  var _postEvent = dart.privateName(provider$, "_postEvent");
  provider$.PostEventSpy = class PostEventSpy extends core.Object {
    get logs() {
      return this[logs];
    }
    set logs(value) {
      super.logs = value;
    }
    static ['_#_#tearOff']() {
      return new provider$.PostEventSpy.__();
    }
    dispose() {
      if (!dart.equals(provider$._debugPostEventOverride, dart.bind(this, _postEvent))) dart.assertFailed("disposed a spy different from the current spy", I[36], 43, 7, "_debugPostEventOverride == _postEvent");
      provider$._debugPostEventOverride = null;
    }
    [_postEvent](eventKind, event) {
      this.logs[$add](new provider$.PostEventCall.__(eventKind, event));
    }
  };
  (provider$.PostEventSpy.__ = function() {
    this[logs] = T$.JSArrayOfPostEventCall().of([]);
    ;
  }).prototype = provider$.PostEventSpy.prototype;
  dart.addTypeTests(provider$.PostEventSpy);
  dart.addTypeCaches(provider$.PostEventSpy);
  dart.setMethodSignature(provider$.PostEventSpy, () => ({
    __proto__: dart.getMethods(provider$.PostEventSpy.__proto__),
    dispose: dart.fnType(dart.void, []),
    [_postEvent]: dart.fnType(dart.void, [core.String, core.Map$(dart.nullable(core.Object), dart.nullable(core.Object))])
  }));
  dart.setLibraryUri(provider$.PostEventSpy, I[19]);
  dart.setFieldSignature(provider$.PostEventSpy, () => ({
    __proto__: dart.getFields(provider$.PostEventSpy.__proto__),
    logs: dart.finalFieldType(core.List$(provider$.PostEventCall))
  }));
  var id$ = dart.privateName(provider$, "ProviderNode.id");
  var type$0 = dart.privateName(provider$, "ProviderNode.type");
  var childrenNodeIds$ = dart.privateName(provider$, "ProviderNode.childrenNodeIds");
  var _element = dart.privateName(provider$, "ProviderNode._element");
  var _element$ = dart.privateName(provider$, "_element");
  var _delegateState = dart.privateName(provider$, "_delegateState");
  provider$.ProviderNode = class ProviderNode extends core.Object {
    get id() {
      return this[id$];
    }
    set id(value) {
      super.id = value;
    }
    get type() {
      return this[type$0];
    }
    set type(value) {
      super.type = value;
    }
    get childrenNodeIds() {
      return this[childrenNodeIds$];
    }
    set childrenNodeIds(value) {
      super.childrenNodeIds = value;
    }
    get [_element$]() {
      return this[_element];
    }
    set [_element$](value) {
      super[_element$] = value;
    }
    static ['_#new#tearOff'](opts) {
      let id = opts && 'id' in opts ? opts.id : null;
      let childrenNodeIds = opts && 'childrenNodeIds' in opts ? opts.childrenNodeIds : null;
      let type = opts && 'type' in opts ? opts.type : null;
      let element = opts && 'element' in opts ? opts.element : null;
      return new provider$.ProviderNode.new({id: id, childrenNodeIds: childrenNodeIds, type: type, element: element});
    }
    get value() {
      return this[_element$][_delegateState].value;
    }
  };
  (provider$.ProviderNode.new = function(opts) {
    let id = opts && 'id' in opts ? opts.id : null;
    let childrenNodeIds = opts && 'childrenNodeIds' in opts ? opts.childrenNodeIds : null;
    let type = opts && 'type' in opts ? opts.type : null;
    let element = opts && 'element' in opts ? opts.element : null;
    this[id$] = id;
    this[childrenNodeIds$] = childrenNodeIds;
    this[type$0] = type;
    this[_element] = element;
    ;
  }).prototype = provider$.ProviderNode.prototype;
  dart.addTypeTests(provider$.ProviderNode);
  dart.addTypeCaches(provider$.ProviderNode);
  dart.setGetterSignature(provider$.ProviderNode, () => ({
    __proto__: dart.getGetters(provider$.ProviderNode.__proto__),
    value: dart.nullable(core.Object)
  }));
  dart.setLibraryUri(provider$.ProviderNode, I[19]);
  dart.setFieldSignature(provider$.ProviderNode, () => ({
    __proto__: dart.getFields(provider$.ProviderNode.__proto__),
    id: dart.finalFieldType(core.String),
    type: dart.finalFieldType(core.String),
    childrenNodeIds: dart.finalFieldType(core.List$(core.String)),
    [_element$]: dart.finalFieldType(provider$._InheritedProviderScopeElement)
  }));
  var _providerDetails = dart.privateName(provider$, "_providerDetails");
  provider$.ProviderBinding = class ProviderBinding extends core.Object {
    static ['_#_#tearOff']() {
      return new provider$.ProviderBinding.__();
    }
    get providerDetails() {
      return this[_providerDetails];
    }
    set providerDetails(value) {
      provider$.debugPostEvent("provider:provider_list_changed", new _js_helper.LinkedMap.new());
      this[_providerDetails] = value;
    }
    providerDidChange(providerId) {
      provider$.debugPostEvent("provider:provider_changed", new _js_helper.LinkedMap.from(["id", providerId]));
    }
  };
  (provider$.ProviderBinding.__ = function() {
    this[_providerDetails] = new (T$.IdentityMapOfString$ProviderNode()).new();
    ;
  }).prototype = provider$.ProviderBinding.prototype;
  dart.addTypeTests(provider$.ProviderBinding);
  dart.addTypeCaches(provider$.ProviderBinding);
  dart.setMethodSignature(provider$.ProviderBinding, () => ({
    __proto__: dart.getMethods(provider$.ProviderBinding.__proto__),
    providerDidChange: dart.fnType(dart.void, [core.String])
  }));
  dart.setGetterSignature(provider$.ProviderBinding, () => ({
    __proto__: dart.getGetters(provider$.ProviderBinding.__proto__),
    providerDetails: core.Map$(core.String, provider$.ProviderNode)
  }));
  dart.setSetterSignature(provider$.ProviderBinding, () => ({
    __proto__: dart.getSetters(provider$.ProviderBinding.__proto__),
    providerDetails: core.Map$(core.String, provider$.ProviderNode)
  }));
  dart.setLibraryUri(provider$.ProviderBinding, I[19]);
  dart.setFieldSignature(provider$.ProviderBinding, () => ({
    __proto__: dart.getFields(provider$.ProviderBinding.__proto__),
    [_providerDetails]: dart.fieldType(core.Map$(core.String, provider$.ProviderNode))
  }));
  dart.setStaticFieldSignature(provider$.ProviderBinding, () => ['debugInstance']);
  dart.defineLazy(provider$.ProviderBinding, {
    /*provider$.ProviderBinding.debugInstance*/get debugInstance() {
      return true ? new provider$.ProviderBinding.__() : dart.throw(new core.UnsupportedError.new("Cannot use ProviderBinding in release mode"));
    }
  }, false);
  var _parent = dart.privateName(nested, "_parent");
  var _parent$ = dart.privateName(nested, "SingleChildWidgetElementMixin._parent");
  nested.SingleChildWidgetElementMixin = class SingleChildWidgetElementMixin extends framework.Element {};
  nested.SingleChildWidgetElementMixin[dart.mixinOn] = Element => class SingleChildWidgetElementMixin extends Element {
    get [_parent]() {
      return this[_parent$];
    }
    set [_parent](value) {
      this[_parent$] = value;
    }
    mount(parent, newSlot) {
      if (T$._NestedHookElementN().is(parent)) {
        this[_parent] = parent;
      }
      super.mount(parent, newSlot);
    }
    activate() {
      super.activate();
      this.visitAncestorElements(dart.fn(parent => {
        if (nested._NestedHookElement.is(parent)) {
          this[_parent] = parent;
        }
        return false;
      }, T$.ElementTobool()));
    }
  };
  (nested.SingleChildWidgetElementMixin[dart.mixinNew] = function() {
    this[_parent$] = null;
  }).prototype = nested.SingleChildWidgetElementMixin.prototype;
  dart.addTypeTests(nested.SingleChildWidgetElementMixin);
  dart.addTypeCaches(nested.SingleChildWidgetElementMixin);
  nested.SingleChildWidgetElementMixin[dart.implements] = () => [framework.Element];
  dart.setMethodSignature(nested.SingleChildWidgetElementMixin, () => ({
    __proto__: dart.getMethods(nested.SingleChildWidgetElementMixin.__proto__),
    mount: dart.fnType(dart.void, [dart.nullable(framework.Element), dart.dynamic])
  }));
  dart.setLibraryUri(nested.SingleChildWidgetElementMixin, I[12]);
  dart.setFieldSignature(nested.SingleChildWidgetElementMixin, () => ({
    __proto__: dart.getFields(nested.SingleChildWidgetElementMixin.__proto__),
    [_parent]: dart.fieldType(dart.nullable(nested._NestedHookElement))
  }));
  const StatelessElement_SingleChildWidgetElementMixin$36 = class StatelessElement_SingleChildWidgetElementMixin extends framework.StatelessElement {};
  (StatelessElement_SingleChildWidgetElementMixin$36.new = function(widget) {
    nested.SingleChildWidgetElementMixin[dart.mixinNew].call(this);
    StatelessElement_SingleChildWidgetElementMixin$36.__proto__.new.call(this, widget);
  }).prototype = StatelessElement_SingleChildWidgetElementMixin$36.prototype;
  dart.applyMixin(StatelessElement_SingleChildWidgetElementMixin$36, nested.SingleChildWidgetElementMixin);
  nested.SingleChildStatelessElement = class SingleChildStatelessElement extends StatelessElement_SingleChildWidgetElementMixin$36 {
    static ['_#new#tearOff'](widget) {
      return new nested.SingleChildStatelessElement.new(widget);
    }
    build() {
      if (this[_parent] != null) {
        return this.widget.buildWithChild(this, dart.nullCheck(this[_parent]).injectedChild);
      }
      return super.build();
    }
    get widget() {
      return nested.SingleChildStatelessWidget.as(super.widget);
    }
  };
  (nested.SingleChildStatelessElement.new = function(widget) {
    nested.SingleChildStatelessElement.__proto__.new.call(this, widget);
    ;
  }).prototype = nested.SingleChildStatelessElement.prototype;
  dart.addTypeTests(nested.SingleChildStatelessElement);
  dart.addTypeCaches(nested.SingleChildStatelessElement);
  dart.setGetterSignature(nested.SingleChildStatelessElement, () => ({
    __proto__: dart.getGetters(nested.SingleChildStatelessElement.__proto__),
    widget: nested.SingleChildStatelessWidget
  }));
  dart.setLibraryUri(nested.SingleChildStatelessElement, I[12]);
  const _is__InheritedProviderElement_default = Symbol('_is__InheritedProviderElement_default');
  provider$._InheritedProviderElement$ = dart.generic(T => {
    class _InheritedProviderElement extends nested.SingleChildStatelessElement {
      static ['_#new#tearOff'](T, widget) {
        return new (provider$._InheritedProviderElement$(T)).new(widget);
      }
      debugFillProperties(properties) {
        super.debugFillProperties(properties);
        this.visitChildren(dart.fn(e => e.debugFillProperties(properties), T$.ElementTovoid()));
      }
    }
    (_InheritedProviderElement.new = function(widget) {
      _InheritedProviderElement.__proto__.new.call(this, widget);
      ;
    }).prototype = _InheritedProviderElement.prototype;
    dart.addTypeTests(_InheritedProviderElement);
    _InheritedProviderElement.prototype[_is__InheritedProviderElement_default] = true;
    dart.addTypeCaches(_InheritedProviderElement);
    dart.setLibraryUri(_InheritedProviderElement, I[19]);
    return _InheritedProviderElement;
  });
  provider$._InheritedProviderElement = provider$._InheritedProviderElement$();
  dart.addTypeTests(provider$._InheritedProviderElement, _is__InheritedProviderElement_default);
  const _is_InheritedContext_default = Symbol('_is_InheritedContext_default');
  provider$.InheritedContext$ = dart.generic(T => {
    class InheritedContext extends framework.BuildContext {}
    (InheritedContext.new = function() {
      ;
    }).prototype = InheritedContext.prototype;
    dart.addTypeTests(InheritedContext);
    InheritedContext.prototype[_is_InheritedContext_default] = true;
    dart.addTypeCaches(InheritedContext);
    dart.setLibraryUri(InheritedContext, I[19]);
    return InheritedContext;
  });
  provider$.InheritedContext = provider$.InheritedContext$();
  dart.addTypeTests(provider$.InheritedContext, _is_InheritedContext_default);
  var owner$ = dart.privateName(provider$, "_InheritedProviderScope.owner");
  var debugType$ = dart.privateName(provider$, "_InheritedProviderScope.debugType");
  const _is__InheritedProviderScope_default = Symbol('_is__InheritedProviderScope_default');
  provider$._InheritedProviderScope$ = dart.generic(T => {
    var __t$_InheritedProviderScopeElementOfT = () => (__t$_InheritedProviderScopeElementOfT = dart.constFn(provider$._InheritedProviderScopeElement$(T)))();
    class _InheritedProviderScope extends framework.InheritedWidget {
      get owner() {
        return this[owner$];
      }
      set owner(value) {
        super.owner = value;
      }
      get debugType() {
        return this[debugType$];
      }
      set debugType(value) {
        super.debugType = value;
      }
      static ['_#new#tearOff'](T, opts) {
        let owner = opts && 'owner' in opts ? opts.owner : null;
        let debugType = opts && 'debugType' in opts ? opts.debugType : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (provider$._InheritedProviderScope$(T)).new({owner: owner, debugType: debugType, child: child});
      }
      updateShouldNotify(oldWidget) {
        framework.InheritedWidget.as(oldWidget);
        return false;
      }
      createElement() {
        return new (__t$_InheritedProviderScopeElementOfT()).new(this);
      }
    }
    (_InheritedProviderScope.new = function(opts) {
      let owner = opts && 'owner' in opts ? opts.owner : null;
      let debugType = opts && 'debugType' in opts ? opts.debugType : null;
      let child = opts && 'child' in opts ? opts.child : null;
      this[owner$] = owner;
      this[debugType$] = debugType;
      if (!T.is(null)) dart.assertFailed(null, I[25], 341, 16, "null is T");
      _InheritedProviderScope.__proto__.new.call(this, {child: child});
      ;
    }).prototype = _InheritedProviderScope.prototype;
    dart.addTypeTests(_InheritedProviderScope);
    _InheritedProviderScope.prototype[_is__InheritedProviderScope_default] = true;
    dart.addTypeCaches(_InheritedProviderScope);
    dart.setMethodSignature(_InheritedProviderScope, () => ({
      __proto__: dart.getMethods(_InheritedProviderScope.__proto__),
      updateShouldNotify: dart.fnType(core.bool, [dart.nullable(core.Object)]),
      createElement: dart.fnType(provider$._InheritedProviderScopeElement$(T), [])
    }));
    dart.setLibraryUri(_InheritedProviderScope, I[19]);
    dart.setFieldSignature(_InheritedProviderScope, () => ({
      __proto__: dart.getFields(_InheritedProviderScope.__proto__),
      owner: dart.finalFieldType(provider$.InheritedProvider$(T)),
      debugType: dart.finalFieldType(core.String)
    }));
    return _InheritedProviderScope;
  });
  provider$._InheritedProviderScope = provider$._InheritedProviderScope$();
  dart.addTypeTests(provider$._InheritedProviderScope, _is__InheritedProviderScope_default);
  const _is__Dependency_default = Symbol('_is__Dependency_default');
  provider$._Dependency$ = dart.generic(T => {
    var __t$TTobool = () => (__t$TTobool = dart.constFn(dart.fnType(core.bool, [T])))();
    var __t$JSArrayOfTTobool = () => (__t$JSArrayOfTTobool = dart.constFn(_interceptors.JSArray$(__t$TTobool())))();
    class _Dependency extends core.Object {
      static ['_#new#tearOff'](T) {
        return new (provider$._Dependency$(T)).new();
      }
    }
    (_Dependency.new = function() {
      this.shouldClearSelectors = false;
      this.shouldClearMutationScheduled = false;
      this.selectors = __t$JSArrayOfTTobool().of([]);
      ;
    }).prototype = _Dependency.prototype;
    dart.addTypeTests(_Dependency);
    _Dependency.prototype[_is__Dependency_default] = true;
    dart.addTypeCaches(_Dependency);
    dart.setLibraryUri(_Dependency, I[19]);
    dart.setFieldSignature(_Dependency, () => ({
      __proto__: dart.getFields(_Dependency.__proto__),
      shouldClearSelectors: dart.fieldType(core.bool),
      shouldClearMutationScheduled: dart.fieldType(core.bool),
      selectors: dart.finalFieldType(core.List$(dart.fnType(core.bool, [T])))
    }));
    return _Dependency;
  });
  provider$._Dependency = provider$._Dependency$();
  dart.addTypeTests(provider$._Dependency, _is__Dependency_default);
  var _shouldNotifyDependents = dart.privateName(provider$, "_shouldNotifyDependents");
  var _debugInheritLocked = dart.privateName(provider$, "_debugInheritLocked");
  var _updatedShouldNotify = dart.privateName(provider$, "_updatedShouldNotify");
  var _isBuildFromExternalSources = dart.privateName(provider$, "_isBuildFromExternalSources");
  var ___InheritedProviderScopeElement__delegateState = dart.privateName(provider$, "_#_InheritedProviderScopeElement#_delegateState");
  var ___InheritedProviderScopeElement__debugId = dart.privateName(provider$, "_#_InheritedProviderScopeElement#_debugId");
  var _debugId = dart.privateName(provider$, "_debugId");
  const _is__InheritedProviderScopeElement_default = Symbol('_is__InheritedProviderScopeElement_default');
  provider$._InheritedProviderScopeElement$ = dart.generic(T => {
    var __t$_InheritedProviderScopeOfT = () => (__t$_InheritedProviderScopeOfT = dart.constFn(provider$._InheritedProviderScope$(T)))();
    var __t$_DependencyOfT = () => (__t$_DependencyOfT = dart.constFn(provider$._Dependency$(T)))();
    var __t$TTobool = () => (__t$TTobool = dart.constFn(dart.fnType(core.bool, [T])))();
    var __t$ListOfTTobool = () => (__t$ListOfTTobool = dart.constFn(core.List$(__t$TTobool())))();
    class _InheritedProviderScopeElement extends framework.InheritedElement {
      static ['_#new#tearOff'](T, widget) {
        return new (provider$._InheritedProviderScopeElement$(T)).new(widget);
      }
      get [_delegateState]() {
        let t8, t8$, t7;
        t7 = this[___InheritedProviderScopeElement__delegateState];
        return t7 == null ? (t8$ = (t8 = this.widget.owner[_delegate].createState(), (() => {
          t8.element = this;
          return t8;
        })()), this[___InheritedProviderScopeElement__delegateState] == null ? this[___InheritedProviderScopeElement__delegateState] = t8$ : dart.throw(new _internal.LateError.fieldADI("_delegateState"))) : t7;
      }
      get [_debugId]() {
        let t7;
        t7 = this[___InheritedProviderScopeElement__debugId];
        return t7 == null ? dart.throw(new _internal.LateError.fieldNI("_debugId")) : t7;
      }
      set [_debugId](library$32package$58provider$47src$47inherited_provider$46dart$58$58_debugId$35param) {
        this[___InheritedProviderScopeElement__debugId] = library$32package$58provider$47src$47inherited_provider$46dart$58$58_debugId$35param;
      }
      getElementForInheritedWidgetOfExactType(InheritedWidgetType) {
        let inheritedElement = null;
        this.visitAncestorElements(dart.fn(parent => {
          inheritedElement = parent.getElementForInheritedWidgetOfExactType(InheritedWidgetType);
          return false;
        }, T$.ElementTobool()));
        return inheritedElement;
      }
      mount(parent, newSlot) {
        let t7;
        if (true) {
          this[_debugId] = dart.str((t7 = provider$._InheritedProviderScopeElement._nextProviderId, provider$._InheritedProviderScopeElement._nextProviderId = t7 + 1, t7));
          provider$.ProviderBinding.debugInstance.providerDetails = (() => {
            let t7 = new (T$.IdentityMapOfString$ProviderNode()).new();
            for (let t8 of provider$.ProviderBinding.debugInstance.providerDetails[$entries])
              t7[$_set](t8.key, t8.value);
            t7[$_set](this[_debugId], new provider$.ProviderNode.new({id: this[_debugId], childrenNodeIds: C[21] || CT.C21, type: this.widget.debugType, element: this}));
            return t7;
          })();
        }
        super.mount(parent, newSlot);
      }
      get widget() {
        return __t$_InheritedProviderScopeOfT().as(super.widget);
      }
      reassemble() {
        super.reassemble();
        let value = this[_delegateState].hasValue ? this[_delegateState].value : null;
        if (reassemble_handler.ReassembleHandler.is(value)) {
          value.reassemble();
        }
      }
      updateDependencies(dependent, aspect) {
        let t9;
        let dependencies = this.getDependencies(dependent);
        if (dependencies != null && !__t$_DependencyOfT().is(dependencies)) {
          return;
        }
        if (__t$TTobool().is(aspect)) {
          let selectorDependency = __t$_DependencyOfT().as((t9 = dependencies, t9 == null ? new (__t$_DependencyOfT()).new() : t9));
          if (selectorDependency.shouldClearSelectors) {
            selectorDependency.shouldClearSelectors = false;
            __t$ListOfTTobool().as(selectorDependency.selectors)[$clear]();
          }
          if (selectorDependency.shouldClearMutationScheduled === false) {
            selectorDependency.shouldClearMutationScheduled = true;
            T$.FutureOfNull().microtask(dart.fn(() => {
              let t9;
              t9 = selectorDependency;
              (() => {
                t9.shouldClearMutationScheduled = false;
                t9.shouldClearSelectors = true;
                return t9;
              })();
            }, T$.VoidToNull()));
          }
          __t$ListOfTTobool().as(selectorDependency.selectors)[$add](aspect);
          this.setDependencies(dependent, selectorDependency);
        } else {
          this.setDependencies(dependent, C[22] || CT.C22);
        }
      }
      notifyDependent(oldWidget, dependent) {
        framework.InheritedWidget.as(oldWidget);
        let dependencies = this.getDependencies(dependent);
        if (true) {
          provider$.ProviderBinding.debugInstance.providerDidChange(this[_debugId]);
        }
        let shouldNotify = false;
        if (dependencies != null) {
          if (__t$_DependencyOfT().is(dependencies)) {
            if (dependent.dirty) {
              return;
            }
            for (let updateShouldNotify of __t$ListOfTTobool().as(dependencies.selectors)) {
              try {
                if (!dart.fn(() => {
                  provider$._debugIsSelecting = true;
                  return true;
                }, T$.VoidTobool())()) dart.assertFailed(null, I[25], 480, 20, "() {\n              _debugIsSelecting = true;\n              return true;\n            }()");
                shouldNotify = updateShouldNotify(this.value);
              } finally {
                if (!dart.fn(() => {
                  provider$._debugIsSelecting = false;
                  return true;
                }, T$.VoidTobool())()) dart.assertFailed(null, I[25], 486, 20, "() {\n              _debugIsSelecting = false;\n              return true;\n            }()");
              }
              if (shouldNotify) {
                break;
              }
            }
          } else {
            shouldNotify = true;
          }
        }
        if (shouldNotify) {
          dependent.didChangeDependencies();
        }
      }
      update(newWidget) {
        __t$_InheritedProviderScopeOfT().as(newWidget);
        if (!dart.fn(() => {
          if (!this.widget.owner[_delegate][$runtimeType]._equals(newWidget.owner[_delegate][$runtimeType])) {
            dart.throw(new core.StateError.new("Rebuilt " + dart.str(this.widget) + " using a different constructor.\n      \nThis is likely a mistake and is unsupported.\nIf you're in this situation, consider passing a `key` unique to each individual constructor.\n"));
          }
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[25], 507, 12, "() {\n      if (widget.owner._delegate.runtimeType !=\n          newWidget.owner._delegate.runtimeType) {\n        throw StateError('''\nRebuilt $widget using a different constructor.\n      \nThis is likely a mistake and is unsupported.\nIf you're in this situation, consider passing a `key` unique to each individual constructor.\n''');\n      }\n      return true;\n    }()");
        this[_isBuildFromExternalSources] = true;
        this[_updatedShouldNotify] = this[_delegateState].willUpdateDelegate(newWidget.owner[_delegate]);
        super.update(newWidget);
        this[_updatedShouldNotify] = false;
      }
      updated(oldWidget) {
        framework.InheritedWidget.as(oldWidget);
        super.updated(oldWidget);
        if (this[_updatedShouldNotify]) {
          this.notifyClients(oldWidget);
        }
      }
      didChangeDependencies() {
        this[_isBuildFromExternalSources] = true;
        super.didChangeDependencies();
      }
      build() {
        if (this.widget.owner[_lazy] === false) {
          this.value;
        }
        this[_delegateState].build({isBuildFromExternalSources: this[_isBuildFromExternalSources]});
        this[_isBuildFromExternalSources] = false;
        if (this[_shouldNotifyDependents]) {
          this[_shouldNotifyDependents] = false;
          this.notifyClients(this.widget);
        }
        return super.build();
      }
      unmount() {
        let t11;
        this[_delegateState].dispose();
        if (true) {
          provider$.ProviderBinding.debugInstance.providerDetails = (t11 = (() => {
            let t9 = new (T$.IdentityMapOfString$ProviderNode()).new();
            for (let t10 of provider$.ProviderBinding.debugInstance.providerDetails[$entries])
              t9[$_set](t10.key, t10.value);
            return t9;
          })(), (() => {
            t11[$remove](this[_debugId]);
            return t11;
          })());
        }
        super.unmount();
      }
      get hasValue() {
        return this[_delegateState].hasValue;
      }
      markNeedsNotifyDependents() {
        if (!this[_isNotifyDependentsEnabled]) {
          return;
        }
        this.markNeedsBuild();
        this[_shouldNotifyDependents] = true;
      }
      [_debugSetInheritedLock](value) {
        if (!dart.fn(() => {
          this[_debugInheritLocked] = value;
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[25], 582, 12, "() {\n      _debugInheritLocked = value;\n      return true;\n    }()");
        return true;
      }
      get value() {
        return this[_delegateState].value;
      }
      dependOnInheritedElement(ancestor, opts) {
        let aspect = opts && 'aspect' in opts ? opts.aspect : null;
        if (!dart.fn(() => {
          if (this[_debugInheritLocked]) {
            dart.throw(new assertions.FlutterError.fromParts(T$.JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("Tried to listen to an InheritedWidget " + "in a life-cycle that will never be called again."), new assertions.ErrorDescription.new("This error typically happens when calling Provider.of with `listen` to `true`,\nin a situation where listening to the provider doesn't make sense, such as:\n- initState of a StatefulWidget\n- the \"create\" callback of a provider\n\nThis is undesired because these life-cycles are called only once in the\nlifetime of a widget. As such, while `listen` is `true`, the widget has\nno mean to handle the update scenario.\n\nTo fix, consider:\n- passing `listen: false` to `Provider.of`\n- use a life-cycle that handles updates (like didChangeDependencies)\n- use a provider that handles updates (like ProxyProvider).\n")])));
          }
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[25], 597, 12, "() {\n      if (_debugInheritLocked) {\n        throw FlutterError.fromParts(\n          <DiagnosticsNode>[\n            ErrorSummary(\n              'Tried to listen to an InheritedWidget '\n              'in a life-cycle that will never be called again.',\n            ),\n            ErrorDescription('''\nThis error typically happens when calling Provider.of with `listen` to `true`,\nin a situation where listening to the provider doesn't make sense, such as:\n- initState of a StatefulWidget\n- the \"create\" callback of a provider\n\nThis is undesired because these life-cycles are called only once in the\nlifetime of a widget. As such, while `listen` is `true`, the widget has\nno mean to handle the update scenario.\n\nTo fix, consider:\n- passing `listen: false` to `Provider.of`\n- use a life-cycle that handles updates (like didChangeDependencies)\n- use a provider that handles updates (like ProxyProvider).\n'''),\n          ],\n        );\n      }\n      return true;\n    }()");
        return super.dependOnInheritedElement(ancestor, {aspect: aspect});
      }
      debugFillProperties(properties) {
        super.debugFillProperties(properties);
        this[_delegateState].debugFillProperties(properties);
      }
    }
    (_InheritedProviderScopeElement.new = function(widget) {
      this[_shouldNotifyDependents] = false;
      this[_debugInheritLocked] = false;
      this[_isNotifyDependentsEnabled] = true;
      this[_updatedShouldNotify] = false;
      this[_isBuildFromExternalSources] = false;
      this[___InheritedProviderScopeElement__delegateState] = null;
      this[___InheritedProviderScopeElement__debugId] = null;
      _InheritedProviderScopeElement.__proto__.new.call(this, widget);
      ;
    }).prototype = _InheritedProviderScopeElement.prototype;
    dart.addTypeTests(_InheritedProviderScopeElement);
    _InheritedProviderScopeElement.prototype[_is__InheritedProviderScopeElement_default] = true;
    dart.addTypeCaches(_InheritedProviderScopeElement);
    _InheritedProviderScopeElement[dart.implements] = () => [provider$.InheritedContext$(T)];
    dart.setMethodSignature(_InheritedProviderScopeElement, () => ({
      __proto__: dart.getMethods(_InheritedProviderScopeElement.__proto__),
      mount: dart.fnType(dart.void, [dart.nullable(framework.Element), dart.dynamic]),
      markNeedsNotifyDependents: dart.fnType(dart.void, []),
      [_debugSetInheritedLock]: dart.fnType(core.bool, [core.bool])
    }));
    dart.setGetterSignature(_InheritedProviderScopeElement, () => ({
      __proto__: dart.getGetters(_InheritedProviderScopeElement.__proto__),
      [_delegateState]: provider$._DelegateState$(T, provider$._Delegate$(T)),
      [_debugId]: core.String,
      widget: provider$._InheritedProviderScope$(T),
      hasValue: core.bool,
      value: T
    }));
    dart.setSetterSignature(_InheritedProviderScopeElement, () => ({
      __proto__: dart.getSetters(_InheritedProviderScopeElement.__proto__),
      [_debugId]: core.String
    }));
    dart.setLibraryUri(_InheritedProviderScopeElement, I[19]);
    dart.setFieldSignature(_InheritedProviderScopeElement, () => ({
      __proto__: dart.getFields(_InheritedProviderScopeElement.__proto__),
      [_shouldNotifyDependents]: dart.fieldType(core.bool),
      [_debugInheritLocked]: dart.fieldType(core.bool),
      [_isNotifyDependentsEnabled]: dart.fieldType(core.bool),
      [_updatedShouldNotify]: dart.fieldType(core.bool),
      [_isBuildFromExternalSources]: dart.fieldType(core.bool),
      [___InheritedProviderScopeElement__delegateState]: dart.fieldType(dart.nullable(provider$._DelegateState$(T, provider$._Delegate$(T)))),
      [___InheritedProviderScopeElement__debugId]: dart.fieldType(dart.nullable(core.String))
    }));
    dart.setStaticFieldSignature(_InheritedProviderScopeElement, () => ['_nextProviderId']);
    return _InheritedProviderScopeElement;
  });
  provider$._InheritedProviderScopeElement = provider$._InheritedProviderScopeElement$();
  dart.defineLazy(provider$._InheritedProviderScopeElement, {
    /*provider$._InheritedProviderScopeElement._nextProviderId*/get _nextProviderId() {
      return 0;
    },
    set _nextProviderId(_) {}
  }, false);
  dart.addTypeTests(provider$._InheritedProviderScopeElement, _is__InheritedProviderScopeElement_default);
  var _updateShouldNotify = dart.privateName(provider$, "_updateShouldNotify");
  const _is__CreateInheritedProvider_default = Symbol('_is__CreateInheritedProvider_default');
  provider$._CreateInheritedProvider$ = dart.generic(T => {
    var __t$_CreateInheritedProviderStateOfT = () => (__t$_CreateInheritedProviderStateOfT = dart.constFn(provider$._CreateInheritedProviderState$(T)))();
    class _CreateInheritedProvider extends provider$._Delegate$(T) {
      static ['_#new#tearOff'](T, opts) {
        let create = opts && 'create' in opts ? opts.create : null;
        let update = opts && 'update' in opts ? opts.update : null;
        let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
        let debugCheckInvalidValueType = opts && 'debugCheckInvalidValueType' in opts ? opts.debugCheckInvalidValueType : null;
        let startListening = opts && 'startListening' in opts ? opts.startListening : null;
        let dispose = opts && 'dispose' in opts ? opts.dispose : null;
        return new (provider$._CreateInheritedProvider$(T)).new({create: create, update: update, updateShouldNotify: updateShouldNotify, debugCheckInvalidValueType: debugCheckInvalidValueType, startListening: startListening, dispose: dispose});
      }
      createState() {
        return new (__t$_CreateInheritedProviderStateOfT()).new();
      }
    }
    (_CreateInheritedProvider.new = function(opts) {
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let debugCheckInvalidValueType = opts && 'debugCheckInvalidValueType' in opts ? opts.debugCheckInvalidValueType : null;
      let startListening = opts && 'startListening' in opts ? opts.startListening : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      this.create = create;
      this.update = update;
      this.debugCheckInvalidValueType = debugCheckInvalidValueType;
      this.startListening = startListening;
      this.dispose = dispose;
      if (!(create != null || update != null)) dart.assertFailed(null, I[25], 674, 16, "create != null || update != null");
      this[_updateShouldNotify] = updateShouldNotify;
      ;
    }).prototype = _CreateInheritedProvider.prototype;
    dart.addTypeTests(_CreateInheritedProvider);
    _CreateInheritedProvider.prototype[_is__CreateInheritedProvider_default] = true;
    dart.addTypeCaches(_CreateInheritedProvider);
    dart.setMethodSignature(_CreateInheritedProvider, () => ({
      __proto__: dart.getMethods(_CreateInheritedProvider.__proto__),
      createState: dart.fnType(provider$._CreateInheritedProviderState$(T), [])
    }));
    dart.setLibraryUri(_CreateInheritedProvider, I[19]);
    dart.setFieldSignature(_CreateInheritedProvider, () => ({
      __proto__: dart.getFields(_CreateInheritedProvider.__proto__),
      create: dart.finalFieldType(dart.nullable(dart.fnType(T, [framework.BuildContext]))),
      update: dart.finalFieldType(dart.nullable(dart.fnType(T, [framework.BuildContext, dart.nullable(T)]))),
      [_updateShouldNotify]: dart.finalFieldType(dart.nullable(dart.fnType(core.bool, [T, T]))),
      debugCheckInvalidValueType: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [T]))),
      startListening: dart.finalFieldType(dart.nullable(dart.fnType(dart.fnType(dart.void, []), [provider$.InheritedContext$(dart.nullable(T)), T]))),
      dispose: dart.finalFieldType(dart.nullable(dart.fnType(dart.void, [framework.BuildContext, T])))
    }));
    return _CreateInheritedProvider;
  });
  provider$._CreateInheritedProvider = provider$._CreateInheritedProvider$();
  dart.addTypeTests(provider$._CreateInheritedProvider, _is__CreateInheritedProvider_default);
  var _didInitValue = dart.privateName(provider$, "_didInitValue");
  var _previousWidget = dart.privateName(provider$, "_previousWidget");
  var _initError = dart.privateName(provider$, "_initError");
  const _is__CreateInheritedProviderState_default = Symbol('_is__CreateInheritedProviderState_default');
  provider$._CreateInheritedProviderState$ = dart.generic(T => {
    var __t$TTovoid = () => (__t$TTovoid = dart.constFn(dart.fnType(dart.void, [T])))();
    var __t$TToNvoid = () => (__t$TToNvoid = dart.constFn(dart.nullable(__t$TTovoid())))();
    var __t$TN = () => (__t$TN = dart.constFn(dart.nullable(T)))();
    var __t$BuildContextAndTNToT = () => (__t$BuildContextAndTNToT = dart.constFn(dart.fnType(T, [framework.BuildContext, __t$TN()])))();
    var __t$BuildContextAndTNToNT = () => (__t$BuildContextAndTNToNT = dart.constFn(dart.nullable(__t$BuildContextAndTNToT())))();
    var __t$InheritedContextOfTN = () => (__t$InheritedContextOfTN = dart.constFn(provider$.InheritedContext$(__t$TN())))();
    var __t$InheritedContextOfTNAndTToFn = () => (__t$InheritedContextOfTNAndTToFn = dart.constFn(dart.fnType(T$.VoidTovoid(), [__t$InheritedContextOfTN(), T])))();
    var __t$InheritedContextOfTNAndTToNFn = () => (__t$InheritedContextOfTNAndTToNFn = dart.constFn(dart.nullable(__t$InheritedContextOfTNAndTToFn())))();
    var __t$BuildContextAndTTovoid = () => (__t$BuildContextAndTTovoid = dart.constFn(dart.fnType(dart.void, [framework.BuildContext, T])))();
    var __t$BuildContextAndTToNvoid = () => (__t$BuildContextAndTToNvoid = dart.constFn(dart.nullable(__t$BuildContextAndTTovoid())))();
    var __t$DiagnosticsPropertyOfT = () => (__t$DiagnosticsPropertyOfT = dart.constFn(diagnostics.DiagnosticsProperty$(T)))();
    var __t$TAndTTobool = () => (__t$TAndTTobool = dart.constFn(dart.fnType(core.bool, [T, T])))();
    var __t$TAndTToNbool = () => (__t$TAndTToNbool = dart.constFn(dart.nullable(__t$TAndTTobool())))();
    class _CreateInheritedProviderState extends provider$._DelegateState$(T, provider$._CreateInheritedProvider$(T)) {
      get value() {
        let t11, t12;
        if (this[_didInitValue] && this[_initError] != null) {
          dart.throw(new core.StateError.new("Tried to read a provider that threw during the creation of its value.\n" + "The exception occurred during the creation of type " + dart.str(dart.wrapType(T)) + ".\n\n" + dart.str((t11 = this[_initError], t11 == null ? null : dart.toString(t11)))));
        }
        let _debugPreviousIsInInheritedProviderCreate = null;
        let _debugPreviousIsInInheritedProviderUpdate = null;
        if (!dart.fn(() => {
          _debugPreviousIsInInheritedProviderCreate = provider$.debugIsInInheritedProviderCreate;
          _debugPreviousIsInInheritedProviderUpdate = provider$.debugIsInInheritedProviderUpdate;
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[25], 718, 12, "() {\n      _debugPreviousIsInInheritedProviderCreate =\n          debugIsInInheritedProviderCreate;\n      _debugPreviousIsInInheritedProviderUpdate =\n          debugIsInInheritedProviderUpdate;\n      return true;\n    }()");
        if (!this[_didInitValue]) {
          this[_didInitValue] = true;
          if (this.delegate.create != null) {
            if (!this.debugSetInheritedLock(true)) dart.assertFailed(null, I[25], 729, 16, "debugSetInheritedLock(true)");
            try {
              if (!dart.fn(() => {
                provider$.debugIsInInheritedProviderCreate = true;
                provider$.debugIsInInheritedProviderUpdate = false;
                return true;
              }, T$.VoidTobool())()) dart.assertFailed(null, I[25], 731, 18, "() {\n            debugIsInInheritedProviderCreate = true;\n            debugIsInInheritedProviderUpdate = false;\n            return true;\n          }()");
              this[_value$0] = dart.nullCheck(this.delegate.create)(dart.nullCheck(this.element));
            } catch (e$) {
              let e = dart.getThrown(e$);
              let stackTrace = dart.stackTrace(e$);
              if (core.Object.is(e)) {
                this[_initError] = new assertions.FlutterErrorDetails.new({library: "provider", exception: e, stack: stackTrace});
                dart.rethrow(e$);
              } else
                throw e$;
            } finally {
              if (!dart.fn(() => {
                provider$.debugIsInInheritedProviderCreate = dart.nullCheck(_debugPreviousIsInInheritedProviderCreate);
                provider$.debugIsInInheritedProviderUpdate = dart.nullCheck(_debugPreviousIsInInheritedProviderUpdate);
                return true;
              }, T$.VoidTobool())()) dart.assertFailed(null, I[25], 745, 18, "() {\n            debugIsInInheritedProviderCreate =\n                _debugPreviousIsInInheritedProviderCreate!;\n            debugIsInInheritedProviderUpdate =\n                _debugPreviousIsInInheritedProviderUpdate!;\n            return true;\n          }()");
            }
            if (!this.debugSetInheritedLock(false)) dart.assertFailed(null, I[25], 753, 16, "debugSetInheritedLock(false)");
            if (!dart.fn(() => {
              let t12;
              t12 = __t$TToNvoid().as(this.delegate.debugCheckInvalidValueType);
              t12 == null ? null : t12(T.as(this[_value$0]));
              return true;
            }, T$.VoidTobool())()) dart.assertFailed(null, I[25], 755, 16, "() {\n          delegate.debugCheckInvalidValueType?.call(_value as T);\n          return true;\n        }()");
          }
          if (__t$BuildContextAndTNToNT().as(this.delegate.update) != null) {
            try {
              if (!dart.fn(() => {
                provider$.debugIsInInheritedProviderCreate = false;
                provider$.debugIsInInheritedProviderUpdate = true;
                return true;
              }, T$.VoidTobool())()) dart.assertFailed(null, I[25], 762, 18, "() {\n            debugIsInInheritedProviderCreate = false;\n            debugIsInInheritedProviderUpdate = true;\n            return true;\n          }()");
              this[_value$0] = dart.nullCheck(__t$BuildContextAndTNToNT().as(this.delegate.update))(dart.nullCheck(this.element), this[_value$0]);
            } finally {
              if (!dart.fn(() => {
                provider$.debugIsInInheritedProviderCreate = dart.nullCheck(_debugPreviousIsInInheritedProviderCreate);
                provider$.debugIsInInheritedProviderUpdate = dart.nullCheck(_debugPreviousIsInInheritedProviderUpdate);
                return true;
              }, T$.VoidTobool())()) dart.assertFailed(null, I[25], 769, 18, "() {\n            debugIsInInheritedProviderCreate =\n                _debugPreviousIsInInheritedProviderCreate!;\n            debugIsInInheritedProviderUpdate =\n                _debugPreviousIsInInheritedProviderUpdate!;\n            return true;\n          }()");
            }
            if (!dart.fn(() => {
              let t12;
              t12 = __t$TToNvoid().as(this.delegate.debugCheckInvalidValueType);
              t12 == null ? null : t12(T.as(this[_value$0]));
              return true;
            }, T$.VoidTobool())()) dart.assertFailed(null, I[25], 778, 16, "() {\n          delegate.debugCheckInvalidValueType?.call(_value as T);\n          return true;\n        }()");
          }
        }
        dart.nullCheck(this.element)[_isNotifyDependentsEnabled] = false;
        this[_removeListener] == null ? this[_removeListener] = (t12 = __t$InheritedContextOfTNAndTToNFn().as(this.delegate.startListening), t12 == null ? null : t12(dart.nullCheck(this.element), T.as(this[_value$0]))) : null;
        dart.nullCheck(this.element)[_isNotifyDependentsEnabled] = true;
        if (!(__t$InheritedContextOfTNAndTToNFn().as(this.delegate.startListening) == null || this[_removeListener] != null)) dart.assertFailed(null, I[25], 788, 12, "delegate.startListening == null || _removeListener != null");
        return T.as(this[_value$0]);
      }
      dispose() {
        let t12, t12$;
        super.dispose();
        t12 = this[_removeListener];
        t12 == null ? null : t12();
        if (this[_didInitValue]) {
          t12$ = __t$BuildContextAndTToNvoid().as(this.delegate.dispose);
          t12$ == null ? null : t12$(dart.nullCheck(this.element), T.as(this[_value$0]));
        }
      }
      debugFillProperties(properties) {
        let t12;
        super.debugFillProperties(properties);
        if (this[_didInitValue]) {
          t12 = properties;
          (() => {
            t12.add(new (__t$DiagnosticsPropertyOfT()).new("value", this.value));
            t12.add(new diagnostics.FlagProperty.new("", {value: this[_removeListener] != null, defaultValue: false, ifTrue: "listening to value"}));
            return t12;
          })();
        } else {
          properties.add(new diagnostics.FlagProperty.new("value", {value: true, showName: true, ifTrue: "<not yet loaded>"}));
        }
      }
      build(opts) {
        let t13, t12;
        let isBuildFromExternalSources = opts && 'isBuildFromExternalSources' in opts ? opts.isBuildFromExternalSources : null;
        let shouldNotify = false;
        if (isBuildFromExternalSources && this[_didInitValue] && __t$BuildContextAndTNToNT().as(this.delegate.update) != null) {
          let previousValue = this[_value$0];
          let _debugPreviousIsInInheritedProviderCreate = null;
          let _debugPreviousIsInInheritedProviderUpdate = null;
          if (!dart.fn(() => {
            _debugPreviousIsInInheritedProviderCreate = provider$.debugIsInInheritedProviderCreate;
            _debugPreviousIsInInheritedProviderUpdate = provider$.debugIsInInheritedProviderUpdate;
            return true;
          }, T$.VoidTobool())()) dart.assertFailed(null, I[25], 839, 14, "() {\n        _debugPreviousIsInInheritedProviderCreate =\n            debugIsInInheritedProviderCreate;\n        _debugPreviousIsInInheritedProviderUpdate =\n            debugIsInInheritedProviderUpdate;\n        return true;\n      }()");
          try {
            if (!dart.fn(() => {
              provider$.debugIsInInheritedProviderCreate = false;
              provider$.debugIsInInheritedProviderUpdate = true;
              return true;
            }, T$.VoidTobool())()) dart.assertFailed(null, I[25], 847, 16, "() {\n          debugIsInInheritedProviderCreate = false;\n          debugIsInInheritedProviderUpdate = true;\n          return true;\n        }()");
            this[_value$0] = dart.nullCheck(__t$BuildContextAndTNToNT().as(this.delegate.update))(dart.nullCheck(this.element), T.as(this[_value$0]));
          } finally {
            if (!dart.fn(() => {
              provider$.debugIsInInheritedProviderCreate = dart.nullCheck(_debugPreviousIsInInheritedProviderCreate);
              provider$.debugIsInInheritedProviderUpdate = dart.nullCheck(_debugPreviousIsInInheritedProviderUpdate);
              return true;
            }, T$.VoidTobool())()) dart.assertFailed(null, I[25], 854, 16, "() {\n          debugIsInInheritedProviderCreate =\n              _debugPreviousIsInInheritedProviderCreate!;\n          debugIsInInheritedProviderUpdate =\n              _debugPreviousIsInInheritedProviderUpdate!;\n          return true;\n        }()");
          }
          if (__t$TAndTToNbool().as(this.delegate[_updateShouldNotify]) != null) {
            shouldNotify = dart.nullCheck(__t$TAndTToNbool().as(this.delegate[_updateShouldNotify]))(T.as(previousValue), T.as(this[_value$0]));
          } else {
            shouldNotify = !dart.equals(this[_value$0], previousValue);
          }
          if (shouldNotify) {
            if (!dart.fn(() => {
              let t12;
              t12 = __t$TToNvoid().as(this.delegate.debugCheckInvalidValueType);
              t12 == null ? null : t12(T.as(this[_value$0]));
              return true;
            }, T$.VoidTobool())()) dart.assertFailed(null, I[25], 873, 16, "() {\n          delegate.debugCheckInvalidValueType?.call(_value as T);\n          return true;\n        }()");
            if (this[_removeListener] != null) {
              dart.nullCheck(this[_removeListener])();
              this[_removeListener] = null;
            }
            t12 = this[_previousWidget];
            t12 == null ? null : (t13 = __t$BuildContextAndTToNvoid().as(t12.dispose), t13 == null ? null : t13(dart.nullCheck(this.element), T.as(previousValue)));
          }
        }
        if (shouldNotify) {
          dart.nullCheck(this.element)[_shouldNotifyDependents] = true;
        }
        this[_previousWidget] = this.delegate;
        return super.build({isBuildFromExternalSources: isBuildFromExternalSources});
      }
      get hasValue() {
        return this[_didInitValue];
      }
      static ['_#new#tearOff'](T) {
        return new (provider$._CreateInheritedProviderState$(T)).new();
      }
    }
    (_CreateInheritedProviderState.new = function() {
      this[_removeListener] = null;
      this[_didInitValue] = false;
      this[_value$0] = null;
      this[_previousWidget] = null;
      this[_initError] = null;
      _CreateInheritedProviderState.__proto__.new.call(this);
      ;
    }).prototype = _CreateInheritedProviderState.prototype;
    dart.addTypeTests(_CreateInheritedProviderState);
    _CreateInheritedProviderState.prototype[_is__CreateInheritedProviderState_default] = true;
    dart.addTypeCaches(_CreateInheritedProviderState);
    dart.setGetterSignature(_CreateInheritedProviderState, () => ({
      __proto__: dart.getGetters(_CreateInheritedProviderState.__proto__),
      value: T,
      hasValue: core.bool
    }));
    dart.setLibraryUri(_CreateInheritedProviderState, I[19]);
    dart.setFieldSignature(_CreateInheritedProviderState, () => ({
      __proto__: dart.getFields(_CreateInheritedProviderState.__proto__),
      [_removeListener]: dart.fieldType(dart.nullable(dart.fnType(dart.void, []))),
      [_didInitValue]: dart.fieldType(core.bool),
      [_value$0]: dart.fieldType(dart.nullable(T)),
      [_previousWidget]: dart.fieldType(dart.nullable(provider$._CreateInheritedProvider$(T))),
      [_initError]: dart.fieldType(dart.nullable(assertions.FlutterErrorDetails))
    }));
    return _CreateInheritedProviderState;
  });
  provider$._CreateInheritedProviderState = provider$._CreateInheritedProviderState$();
  dart.addTypeTests(provider$._CreateInheritedProviderState, _is__CreateInheritedProviderState_default);
  const _is__ValueInheritedProvider_default = Symbol('_is__ValueInheritedProvider_default');
  provider$._ValueInheritedProvider$ = dart.generic(T => {
    var __t$DiagnosticsPropertyOfT = () => (__t$DiagnosticsPropertyOfT = dart.constFn(diagnostics.DiagnosticsProperty$(T)))();
    var __t$_ValueInheritedProviderStateOfT = () => (__t$_ValueInheritedProviderStateOfT = dart.constFn(provider$._ValueInheritedProviderState$(T)))();
    class _ValueInheritedProvider extends provider$._Delegate$(T) {
      static ['_#new#tearOff'](T, opts) {
        let value = opts && 'value' in opts ? opts.value : null;
        let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
        let startListening = opts && 'startListening' in opts ? opts.startListening : null;
        return new (provider$._ValueInheritedProvider$(T)).new({value: value, updateShouldNotify: updateShouldNotify, startListening: startListening});
      }
      debugFillProperties(properties) {
        super.debugFillProperties(properties);
        properties.add(new (__t$DiagnosticsPropertyOfT()).new("value", this.value));
      }
      createState() {
        return new (__t$_ValueInheritedProviderStateOfT()).new();
      }
    }
    (_ValueInheritedProvider.new = function(opts) {
      let value = opts && 'value' in opts ? opts.value : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let startListening = opts && 'startListening' in opts ? opts.startListening : null;
      this.value = value;
      this.startListening = startListening;
      this[_updateShouldNotify] = updateShouldNotify;
      ;
    }).prototype = _ValueInheritedProvider.prototype;
    dart.addTypeTests(_ValueInheritedProvider);
    _ValueInheritedProvider.prototype[_is__ValueInheritedProvider_default] = true;
    dart.addTypeCaches(_ValueInheritedProvider);
    dart.setMethodSignature(_ValueInheritedProvider, () => ({
      __proto__: dart.getMethods(_ValueInheritedProvider.__proto__),
      createState: dart.fnType(provider$._ValueInheritedProviderState$(T), [])
    }));
    dart.setLibraryUri(_ValueInheritedProvider, I[19]);
    dart.setFieldSignature(_ValueInheritedProvider, () => ({
      __proto__: dart.getFields(_ValueInheritedProvider.__proto__),
      value: dart.finalFieldType(T),
      [_updateShouldNotify]: dart.finalFieldType(dart.nullable(dart.fnType(core.bool, [T, T]))),
      startListening: dart.finalFieldType(dart.nullable(dart.fnType(dart.fnType(dart.void, []), [provider$.InheritedContext$(dart.nullable(T)), T])))
    }));
    return _ValueInheritedProvider;
  });
  provider$._ValueInheritedProvider = provider$._ValueInheritedProvider$();
  dart.addTypeTests(provider$._ValueInheritedProvider, _is__ValueInheritedProvider_default);
  const _is__ValueInheritedProviderState_default = Symbol('_is__ValueInheritedProviderState_default');
  provider$._ValueInheritedProviderState$ = dart.generic(T => {
    var __t$TN = () => (__t$TN = dart.constFn(dart.nullable(T)))();
    var __t$InheritedContextOfTN = () => (__t$InheritedContextOfTN = dart.constFn(provider$.InheritedContext$(__t$TN())))();
    var __t$InheritedContextOfTNAndTToFn = () => (__t$InheritedContextOfTNAndTToFn = dart.constFn(dart.fnType(T$.VoidTovoid(), [__t$InheritedContextOfTN(), T])))();
    var __t$InheritedContextOfTNAndTToNFn = () => (__t$InheritedContextOfTNAndTToNFn = dart.constFn(dart.nullable(__t$InheritedContextOfTNAndTToFn())))();
    var __t$_ValueInheritedProviderOfT = () => (__t$_ValueInheritedProviderOfT = dart.constFn(provider$._ValueInheritedProvider$(T)))();
    var __t$TAndTTobool = () => (__t$TAndTTobool = dart.constFn(dart.fnType(core.bool, [T, T])))();
    var __t$TAndTToNbool = () => (__t$TAndTToNbool = dart.constFn(dart.nullable(__t$TAndTTobool())))();
    class _ValueInheritedProviderState extends provider$._DelegateState$(T, provider$._ValueInheritedProvider$(T)) {
      get value() {
        let t12;
        dart.nullCheck(this.element)[_isNotifyDependentsEnabled] = false;
        this[_removeListener] == null ? this[_removeListener] = (t12 = __t$InheritedContextOfTNAndTToNFn().as(this.delegate.startListening), t12 == null ? null : t12(dart.nullCheck(this.element), this.delegate.value)) : null;
        dart.nullCheck(this.element)[_isNotifyDependentsEnabled] = true;
        if (!(__t$InheritedContextOfTNAndTToNFn().as(this.delegate.startListening) == null || this[_removeListener] != null)) dart.assertFailed(null, I[25], 928, 12, "delegate.startListening == null || _removeListener != null");
        return this.delegate.value;
      }
      willUpdateDelegate(newDelegate) {
        __t$_ValueInheritedProviderOfT().as(newDelegate);
        let shouldNotify = null;
        if (__t$TAndTToNbool().as(this.delegate[_updateShouldNotify]) != null) {
          shouldNotify = dart.nullCheck(__t$TAndTToNbool().as(this.delegate[_updateShouldNotify]))(this.delegate.value, newDelegate.value);
        } else {
          shouldNotify = !dart.equals(newDelegate.value, this.delegate.value);
        }
        if (shouldNotify && this[_removeListener] != null) {
          dart.nullCheck(this[_removeListener])();
          this[_removeListener] = null;
        }
        return shouldNotify;
      }
      dispose() {
        let t12;
        super.dispose();
        t12 = this[_removeListener];
        t12 == null ? null : t12();
      }
      debugFillProperties(properties) {
        super.debugFillProperties(properties);
        properties.add(new diagnostics.FlagProperty.new("", {value: this[_removeListener] != null, defaultValue: false, ifTrue: "listening to value"}));
      }
      get hasValue() {
        return true;
      }
      static ['_#new#tearOff'](T) {
        return new (provider$._ValueInheritedProviderState$(T)).new();
      }
    }
    (_ValueInheritedProviderState.new = function() {
      this[_removeListener] = null;
      _ValueInheritedProviderState.__proto__.new.call(this);
      ;
    }).prototype = _ValueInheritedProviderState.prototype;
    dart.addTypeTests(_ValueInheritedProviderState);
    _ValueInheritedProviderState.prototype[_is__ValueInheritedProviderState_default] = true;
    dart.addTypeCaches(_ValueInheritedProviderState);
    dart.setGetterSignature(_ValueInheritedProviderState, () => ({
      __proto__: dart.getGetters(_ValueInheritedProviderState.__proto__),
      value: T,
      hasValue: core.bool
    }));
    dart.setLibraryUri(_ValueInheritedProviderState, I[19]);
    dart.setFieldSignature(_ValueInheritedProviderState, () => ({
      __proto__: dart.getFields(_ValueInheritedProviderState.__proto__),
      [_removeListener]: dart.fieldType(dart.nullable(dart.fnType(dart.void, [])))
    }));
    return _ValueInheritedProviderState;
  });
  provider$._ValueInheritedProviderState = provider$._ValueInheritedProviderState$();
  dart.addTypeTests(provider$._ValueInheritedProviderState, _is__ValueInheritedProviderState_default);
  var DeepCollectionEquality__unordered = dart.privateName(equality, "DeepCollectionEquality._unordered");
  var DeepCollectionEquality__base = dart.privateName(equality, "DeepCollectionEquality._base");
  provider$.debugPostEvent = function debugPostEvent(eventKind, event = C[23] || CT.C23) {
    if (provider$._debugPostEventOverride != null) {
      dart.nullCheck(provider$._debugPostEventOverride)(eventKind, event);
    } else {
      developer.postEvent(eventKind, event);
    }
  };
  provider$.spyPostEvent = function spyPostEvent() {
    if (!(provider$._debugPostEventOverride == null)) dart.assertFailed("postEvent is already spied", I[36], 22, 10, "_debugPostEventOverride == null");
    let spy = new provider$.PostEventSpy.__();
    provider$._debugPostEventOverride = dart.bind(spy, _postEvent);
    return spy;
  };
  provider$['SelectContext|select'] = function SelectContext$124select(T, R, $this, selector) {
    let t13;
    if (!!sliver.SliverWithKeepAliveWidget.is($this.widget)) dart.assertFailed("    Tried to use context.select inside a SliverList/SliderGridView.\n\n    This is likely a mistake, as instead of rebuilding only the item that cares\n    about the selected value, this would rebuild the entire list/grid.\n\n    To fix, add a `Builder` or extract the content of `itemBuilder` in a separate widget:\n\n    ```dart\n    ListView.builder(\n      itemBuilder: (context, index) {\n        return Builder(builder: (context) {\n          final todo = context.select((TodoList list) => list[index]);\n          return Text(todo.name);\n        });\n      },\n    );\n    ```\n    ", I[25], 247, 12, "widget is! SliverWithKeepAliveWidget");
    if (!(layout_builder.LayoutBuilder.is($this.widget) || $this.debugDoingBuild)) dart.assertFailed("Tried to use `context.select` outside of the `build` method of a widget.\n\nAny usage other than inside the `build` method of a widget are not supported.\n", I[25], 266, 12, "widget is LayoutBuilder || debugDoingBuild");
    let inheritedElement = provider$.Provider._inheritedElementOf(T, $this);
    try {
      let value = (t13 = inheritedElement, t13 == null ? null : t13.value);
      if (!T.is(value)) {
        dart.throw(new provider$.ProviderNullException.new(dart.wrapType(T), $this.widget[$runtimeType]));
      }
      if (!dart.fn(() => {
        provider$._debugIsSelecting = true;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[25], 279, 14, "() {\n        _debugIsSelecting = true;\n        return true;\n      }()");
      let selected = selector(value);
      if (inheritedElement != null) {
        $this.dependOnInheritedElement(inheritedElement, {aspect: dart.fn(newValue => {
            if (!T.is(newValue)) {
              dart.throw(new provider$.ProviderNullException.new(dart.wrapType(T), $this.widget[$runtimeType]));
            }
            return !(C[24] || CT.C24).equals(selector(newValue), selected);
          }, dart.fnType(core.bool, [dart.nullable(T)]))});
      } else {
        $this.dependOnInheritedWidgetOfExactType(provider$._InheritedProviderScope$(dart.nullable(T)));
      }
      return selected;
    } finally {
      if (!dart.fn(() => {
        provider$._debugIsSelecting = false;
        return true;
      }, T$.VoidTobool())()) dart.assertFailed(null, I[25], 304, 14, "() {\n        _debugIsSelecting = false;\n        return true;\n      }()");
    }
  };
  provider$['SelectContext|get#select'] = function SelectContext$124get$35select($this) {
    return dart.fn((T, R, selector) => provider$['SelectContext|select'](T, R, $this, selector), T$.FnToR());
  };
  provider$['ReadContext|read'] = function ReadContext$124read(T, $this) {
    return provider$.Provider.of(T, $this, {listen: false});
  };
  provider$['ReadContext|get#read'] = function ReadContext$124get$35read($this) {
    return dart.fn(T => provider$['ReadContext|read'](T, $this), T$.VoidToT());
  };
  provider$['WatchContext|watch'] = function WatchContext$124watch(T, $this) {
    return provider$.Provider.of(T, $this);
  };
  provider$['WatchContext|get#watch'] = function WatchContext$124get$35watch($this) {
    return dart.fn(T => provider$['WatchContext|watch'](T, $this), T$.VoidToT());
  };
  dart.defineLazy(provider$, {
    /*provider$._isSoundMode*/get _isSoundMode() {
      return !T$.ListOfint().is(T$.JSArrayOfintN().of([]));
    },
    /*provider$._debugPostEventOverride*/get _debugPostEventOverride() {
      return null;
    },
    set _debugPostEventOverride(_) {},
    /*provider$._debugIsSelecting*/get _debugIsSelecting() {
      return false;
    },
    set _debugIsSelecting(_) {},
    /*provider$.debugIsInInheritedProviderUpdate*/get debugIsInInheritedProviderUpdate() {
      return false;
    },
    set debugIsInInheritedProviderUpdate(_) {},
    /*provider$.debugIsInInheritedProviderCreate*/get debugIsInInheritedProviderCreate() {
      return false;
    },
    set debugIsInInheritedProviderCreate(_) {}
  }, false);
  const _is_ProxyProvider0_default = Symbol('_is_ProxyProvider0_default');
  proxy_provider.ProxyProvider0$ = dart.generic(R => {
    var __t$RTovoid = () => (__t$RTovoid = dart.constFn(dart.fnType(dart.void, [R])))();
    class ProxyProvider0 extends provider$.InheritedProvider$(R) {
      static ['_#new#tearOff'](R, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let create = opts && 'create' in opts ? opts.create : null;
        let update = opts && 'update' in opts ? opts.update : null;
        let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
        let dispose = opts && 'dispose' in opts ? opts.dispose : null;
        let lazy = opts && 'lazy' in opts ? opts.lazy : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (proxy_provider.ProxyProvider0$(R)).new({key: key, create: create, update: update, updateShouldNotify: updateShouldNotify, dispose: dispose, lazy: lazy, builder: builder, child: child});
      }
    }
    (ProxyProvider0.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      ProxyProvider0.__proto__.new.call(this, {key: key, lazy: lazy, builder: builder, create: create, update: update, dispose: dispose, updateShouldNotify: updateShouldNotify, debugCheckInvalidValueType: false ? null : dart.fn(value => {
          let t18;
          t18 = provider$.Provider.debugCheckInvalidValueType;
          return t18 == null ? null : t18(R, value);
        }, __t$RTovoid()), child: child});
      ;
    }).prototype = ProxyProvider0.prototype;
    dart.addTypeTests(ProxyProvider0);
    ProxyProvider0.prototype[_is_ProxyProvider0_default] = true;
    dart.addTypeCaches(ProxyProvider0);
    dart.setLibraryUri(ProxyProvider0, I[37]);
    return ProxyProvider0;
  });
  proxy_provider.ProxyProvider0 = proxy_provider.ProxyProvider0$();
  dart.addTypeTests(proxy_provider.ProxyProvider0, _is_ProxyProvider0_default);
  const _is_ProxyProvider_default = Symbol('_is_ProxyProvider_default');
  proxy_provider.ProxyProvider$ = dart.generic((T, R) => {
    var __t$RN = () => (__t$RN = dart.constFn(dart.nullable(R)))();
    var __t$BuildContextAndRNToR = () => (__t$BuildContextAndRNToR = dart.constFn(dart.fnType(R, [framework.BuildContext, __t$RN()])))();
    class ProxyProvider extends proxy_provider.ProxyProvider0$(R) {
      static ['_#new#tearOff'](T, R, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let create = opts && 'create' in opts ? opts.create : null;
        let update = opts && 'update' in opts ? opts.update : null;
        let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
        let dispose = opts && 'dispose' in opts ? opts.dispose : null;
        let lazy = opts && 'lazy' in opts ? opts.lazy : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (proxy_provider.ProxyProvider$(T, R)).new({key: key, create: create, update: update, updateShouldNotify: updateShouldNotify, dispose: dispose, lazy: lazy, builder: builder, child: child});
      }
    }
    (ProxyProvider.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      ProxyProvider.__proto__.new.call(this, {key: key, lazy: lazy, builder: builder, create: create, update: dart.fn((context, value) => update(context, provider$.Provider.of(T, context), value), __t$BuildContextAndRNToR()), updateShouldNotify: updateShouldNotify, dispose: dispose, child: child});
      ;
    }).prototype = ProxyProvider.prototype;
    dart.addTypeTests(ProxyProvider);
    ProxyProvider.prototype[_is_ProxyProvider_default] = true;
    dart.addTypeCaches(ProxyProvider);
    dart.setLibraryUri(ProxyProvider, I[37]);
    return ProxyProvider;
  });
  proxy_provider.ProxyProvider = proxy_provider.ProxyProvider$();
  dart.addTypeTests(proxy_provider.ProxyProvider, _is_ProxyProvider_default);
  const _is_ProxyProvider2_default = Symbol('_is_ProxyProvider2_default');
  proxy_provider.ProxyProvider2$ = dart.generic((T, T2, R) => {
    var __t$RN = () => (__t$RN = dart.constFn(dart.nullable(R)))();
    var __t$BuildContextAndRNToR = () => (__t$BuildContextAndRNToR = dart.constFn(dart.fnType(R, [framework.BuildContext, __t$RN()])))();
    class ProxyProvider2 extends proxy_provider.ProxyProvider0$(R) {
      static ['_#new#tearOff'](T, T2, R, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let create = opts && 'create' in opts ? opts.create : null;
        let update = opts && 'update' in opts ? opts.update : null;
        let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
        let dispose = opts && 'dispose' in opts ? opts.dispose : null;
        let lazy = opts && 'lazy' in opts ? opts.lazy : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (proxy_provider.ProxyProvider2$(T, T2, R)).new({key: key, create: create, update: update, updateShouldNotify: updateShouldNotify, dispose: dispose, lazy: lazy, builder: builder, child: child});
      }
    }
    (ProxyProvider2.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      ProxyProvider2.__proto__.new.call(this, {key: key, lazy: lazy, builder: builder, create: create, update: dart.fn((context, value) => update(context, provider$.Provider.of(T, context), provider$.Provider.of(T2, context), value), __t$BuildContextAndRNToR()), updateShouldNotify: updateShouldNotify, dispose: dispose, child: child});
      ;
    }).prototype = ProxyProvider2.prototype;
    dart.addTypeTests(ProxyProvider2);
    ProxyProvider2.prototype[_is_ProxyProvider2_default] = true;
    dart.addTypeCaches(ProxyProvider2);
    dart.setLibraryUri(ProxyProvider2, I[37]);
    return ProxyProvider2;
  });
  proxy_provider.ProxyProvider2 = proxy_provider.ProxyProvider2$();
  dart.addTypeTests(proxy_provider.ProxyProvider2, _is_ProxyProvider2_default);
  const _is_ProxyProvider3_default = Symbol('_is_ProxyProvider3_default');
  proxy_provider.ProxyProvider3$ = dart.generic((T, T2, T3, R) => {
    var __t$RN = () => (__t$RN = dart.constFn(dart.nullable(R)))();
    var __t$BuildContextAndRNToR = () => (__t$BuildContextAndRNToR = dart.constFn(dart.fnType(R, [framework.BuildContext, __t$RN()])))();
    class ProxyProvider3 extends proxy_provider.ProxyProvider0$(R) {
      static ['_#new#tearOff'](T, T2, T3, R, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let create = opts && 'create' in opts ? opts.create : null;
        let update = opts && 'update' in opts ? opts.update : null;
        let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
        let dispose = opts && 'dispose' in opts ? opts.dispose : null;
        let lazy = opts && 'lazy' in opts ? opts.lazy : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (proxy_provider.ProxyProvider3$(T, T2, T3, R)).new({key: key, create: create, update: update, updateShouldNotify: updateShouldNotify, dispose: dispose, lazy: lazy, builder: builder, child: child});
      }
    }
    (ProxyProvider3.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      ProxyProvider3.__proto__.new.call(this, {key: key, lazy: lazy, builder: builder, create: create, update: dart.fn((context, value) => update(context, provider$.Provider.of(T, context), provider$.Provider.of(T2, context), provider$.Provider.of(T3, context), value), __t$BuildContextAndRNToR()), updateShouldNotify: updateShouldNotify, dispose: dispose, child: child});
      ;
    }).prototype = ProxyProvider3.prototype;
    dart.addTypeTests(ProxyProvider3);
    ProxyProvider3.prototype[_is_ProxyProvider3_default] = true;
    dart.addTypeCaches(ProxyProvider3);
    dart.setLibraryUri(ProxyProvider3, I[37]);
    return ProxyProvider3;
  });
  proxy_provider.ProxyProvider3 = proxy_provider.ProxyProvider3$();
  dart.addTypeTests(proxy_provider.ProxyProvider3, _is_ProxyProvider3_default);
  const _is_ProxyProvider4_default = Symbol('_is_ProxyProvider4_default');
  proxy_provider.ProxyProvider4$ = dart.generic((T, T2, T3, T4, R) => {
    var __t$RN = () => (__t$RN = dart.constFn(dart.nullable(R)))();
    var __t$BuildContextAndRNToR = () => (__t$BuildContextAndRNToR = dart.constFn(dart.fnType(R, [framework.BuildContext, __t$RN()])))();
    class ProxyProvider4 extends proxy_provider.ProxyProvider0$(R) {
      static ['_#new#tearOff'](T, T2, T3, T4, R, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let create = opts && 'create' in opts ? opts.create : null;
        let update = opts && 'update' in opts ? opts.update : null;
        let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
        let dispose = opts && 'dispose' in opts ? opts.dispose : null;
        let lazy = opts && 'lazy' in opts ? opts.lazy : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (proxy_provider.ProxyProvider4$(T, T2, T3, T4, R)).new({key: key, create: create, update: update, updateShouldNotify: updateShouldNotify, dispose: dispose, lazy: lazy, builder: builder, child: child});
      }
    }
    (ProxyProvider4.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      ProxyProvider4.__proto__.new.call(this, {key: key, lazy: lazy, builder: builder, create: create, update: dart.fn((context, value) => update(context, provider$.Provider.of(T, context), provider$.Provider.of(T2, context), provider$.Provider.of(T3, context), provider$.Provider.of(T4, context), value), __t$BuildContextAndRNToR()), updateShouldNotify: updateShouldNotify, dispose: dispose, child: child});
      ;
    }).prototype = ProxyProvider4.prototype;
    dart.addTypeTests(ProxyProvider4);
    ProxyProvider4.prototype[_is_ProxyProvider4_default] = true;
    dart.addTypeCaches(ProxyProvider4);
    dart.setLibraryUri(ProxyProvider4, I[37]);
    return ProxyProvider4;
  });
  proxy_provider.ProxyProvider4 = proxy_provider.ProxyProvider4$();
  dart.addTypeTests(proxy_provider.ProxyProvider4, _is_ProxyProvider4_default);
  const _is_ProxyProvider5_default = Symbol('_is_ProxyProvider5_default');
  proxy_provider.ProxyProvider5$ = dart.generic((T, T2, T3, T4, T5, R) => {
    var __t$RN = () => (__t$RN = dart.constFn(dart.nullable(R)))();
    var __t$BuildContextAndRNToR = () => (__t$BuildContextAndRNToR = dart.constFn(dart.fnType(R, [framework.BuildContext, __t$RN()])))();
    class ProxyProvider5 extends proxy_provider.ProxyProvider0$(R) {
      static ['_#new#tearOff'](T, T2, T3, T4, T5, R, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let create = opts && 'create' in opts ? opts.create : null;
        let update = opts && 'update' in opts ? opts.update : null;
        let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
        let dispose = opts && 'dispose' in opts ? opts.dispose : null;
        let lazy = opts && 'lazy' in opts ? opts.lazy : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (proxy_provider.ProxyProvider5$(T, T2, T3, T4, T5, R)).new({key: key, create: create, update: update, updateShouldNotify: updateShouldNotify, dispose: dispose, lazy: lazy, builder: builder, child: child});
      }
    }
    (ProxyProvider5.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      ProxyProvider5.__proto__.new.call(this, {key: key, lazy: lazy, builder: builder, create: create, update: dart.fn((context, value) => update(context, provider$.Provider.of(T, context), provider$.Provider.of(T2, context), provider$.Provider.of(T3, context), provider$.Provider.of(T4, context), provider$.Provider.of(T5, context), value), __t$BuildContextAndRNToR()), updateShouldNotify: updateShouldNotify, dispose: dispose, child: child});
      ;
    }).prototype = ProxyProvider5.prototype;
    dart.addTypeTests(ProxyProvider5);
    ProxyProvider5.prototype[_is_ProxyProvider5_default] = true;
    dart.addTypeCaches(ProxyProvider5);
    dart.setLibraryUri(ProxyProvider5, I[37]);
    return ProxyProvider5;
  });
  proxy_provider.ProxyProvider5 = proxy_provider.ProxyProvider5$();
  dart.addTypeTests(proxy_provider.ProxyProvider5, _is_ProxyProvider5_default);
  const _is_ProxyProvider6_default = Symbol('_is_ProxyProvider6_default');
  proxy_provider.ProxyProvider6$ = dart.generic((T, T2, T3, T4, T5, T6, R) => {
    var __t$RN = () => (__t$RN = dart.constFn(dart.nullable(R)))();
    var __t$BuildContextAndRNToR = () => (__t$BuildContextAndRNToR = dart.constFn(dart.fnType(R, [framework.BuildContext, __t$RN()])))();
    class ProxyProvider6 extends proxy_provider.ProxyProvider0$(R) {
      static ['_#new#tearOff'](T, T2, T3, T4, T5, T6, R, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let create = opts && 'create' in opts ? opts.create : null;
        let update = opts && 'update' in opts ? opts.update : null;
        let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
        let dispose = opts && 'dispose' in opts ? opts.dispose : null;
        let lazy = opts && 'lazy' in opts ? opts.lazy : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (proxy_provider.ProxyProvider6$(T, T2, T3, T4, T5, T6, R)).new({key: key, create: create, update: update, updateShouldNotify: updateShouldNotify, dispose: dispose, lazy: lazy, builder: builder, child: child});
      }
    }
    (ProxyProvider6.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let create = opts && 'create' in opts ? opts.create : null;
      let update = opts && 'update' in opts ? opts.update : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let lazy = opts && 'lazy' in opts ? opts.lazy : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      ProxyProvider6.__proto__.new.call(this, {key: key, lazy: lazy, builder: builder, create: create, update: dart.fn((context, value) => update(context, provider$.Provider.of(T, context), provider$.Provider.of(T2, context), provider$.Provider.of(T3, context), provider$.Provider.of(T4, context), provider$.Provider.of(T5, context), provider$.Provider.of(T6, context), value), __t$BuildContextAndRNToR()), updateShouldNotify: updateShouldNotify, dispose: dispose, child: child});
      ;
    }).prototype = ProxyProvider6.prototype;
    dart.addTypeTests(ProxyProvider6);
    ProxyProvider6.prototype[_is_ProxyProvider6_default] = true;
    dart.addTypeCaches(ProxyProvider6);
    dart.setLibraryUri(ProxyProvider6, I[37]);
    return ProxyProvider6;
  });
  proxy_provider.ProxyProvider6 = proxy_provider.ProxyProvider6$();
  dart.addTypeTests(proxy_provider.ProxyProvider6, _is_ProxyProvider6_default);
  reassemble_handler.ReassembleHandler = class ReassembleHandler extends core.Object {};
  (reassemble_handler.ReassembleHandler.new = function() {
    ;
  }).prototype = reassemble_handler.ReassembleHandler.prototype;
  dart.addTypeTests(reassemble_handler.ReassembleHandler);
  dart.addTypeCaches(reassemble_handler.ReassembleHandler);
  dart.setLibraryUri(reassemble_handler.ReassembleHandler, I[38]);
  var builder$9 = dart.privateName(selector$, "Selector0.builder");
  var selector$1 = dart.privateName(selector$, "Selector0.selector");
  var _shouldRebuild = dart.privateName(selector$, "_shouldRebuild");
  const _is_Selector0_default = Symbol('_is_Selector0_default');
  selector$.Selector0$ = dart.generic(T => {
    var __t$_Selector0StateOfT = () => (__t$_Selector0StateOfT = dart.constFn(selector$._Selector0State$(T)))();
    class Selector0 extends nested.SingleChildStatefulWidget {
      get builder() {
        return this[builder$9];
      }
      set builder(value) {
        super.builder = value;
      }
      get selector() {
        return this[selector$1];
      }
      set selector(value) {
        super.selector = value;
      }
      static ['_#new#tearOff'](T, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let selector = opts && 'selector' in opts ? opts.selector : null;
        let shouldRebuild = opts && 'shouldRebuild' in opts ? opts.shouldRebuild : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (selector$.Selector0$(T)).new({key: key, builder: builder, selector: selector, shouldRebuild: shouldRebuild, child: child});
      }
      createState() {
        return new (__t$_Selector0StateOfT()).new();
      }
    }
    (Selector0.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let selector = opts && 'selector' in opts ? opts.selector : null;
      let shouldRebuild = opts && 'shouldRebuild' in opts ? opts.shouldRebuild : null;
      let child = opts && 'child' in opts ? opts.child : null;
      this[builder$9] = builder;
      this[selector$1] = selector;
      this[_shouldRebuild] = shouldRebuild;
      Selector0.__proto__.new.call(this, {key: key, child: child});
      ;
    }).prototype = Selector0.prototype;
    dart.addTypeTests(Selector0);
    Selector0.prototype[_is_Selector0_default] = true;
    dart.addTypeCaches(Selector0);
    dart.setMethodSignature(Selector0, () => ({
      __proto__: dart.getMethods(Selector0.__proto__),
      createState: dart.fnType(selector$._Selector0State$(T), [])
    }));
    dart.setLibraryUri(Selector0, I[39]);
    dart.setFieldSignature(Selector0, () => ({
      __proto__: dart.getFields(Selector0.__proto__),
      builder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, T, dart.nullable(framework.Widget)])),
      selector: dart.finalFieldType(dart.fnType(T, [framework.BuildContext])),
      [_shouldRebuild]: dart.finalFieldType(dart.nullable(dart.fnType(core.bool, [T, T])))
    }));
    return Selector0;
  });
  selector$.Selector0 = selector$.Selector0$();
  dart.addTypeTests(selector$.Selector0, _is_Selector0_default);
  var value$ = dart.privateName(selector$, "_Selector0State.value");
  const _is__Selector0State_default = Symbol('_is__Selector0State_default');
  selector$._Selector0State$ = dart.generic(T => {
    var __t$TN = () => (__t$TN = dart.constFn(dart.nullable(T)))();
    var __t$TAndTTobool = () => (__t$TAndTTobool = dart.constFn(dart.fnType(core.bool, [T, T])))();
    var __t$TAndTToNbool = () => (__t$TAndTToNbool = dart.constFn(dart.nullable(__t$TAndTTobool())))();
    var __t$BuildContextAndTAndWidgetNToWidget = () => (__t$BuildContextAndTAndWidgetNToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, T, T$.WidgetN()])))();
    var __t$DiagnosticsPropertyOfT = () => (__t$DiagnosticsPropertyOfT = dart.constFn(diagnostics.DiagnosticsProperty$(T)))();
    class _Selector0State extends nested.SingleChildState$(selector$.Selector0$(T)) {
      get value() {
        return this[value$];
      }
      set value(value) {
        this[value$] = __t$TN().as(value);
      }
      buildWithChild(context, child) {
        let t19, t18, t21, t20, t19$, t18$;
        let selected = (t18 = this.widget, t19 = context, t18.selector(t19));
        let shouldInvalidateCache = !dart.equals(this.oldWidget, this.widget) || __t$TAndTToNbool().as(this.widget[_shouldRebuild]) != null && dart.nullCheck(__t$TAndTToNbool().as(this.widget[_shouldRebuild]))(T.as(this.value), selected) || __t$TAndTToNbool().as(this.widget[_shouldRebuild]) == null && !(C[24] || CT.C24).equals(this.value, selected);
        if (shouldInvalidateCache) {
          this.value = selected;
          this.oldWidget = this.widget;
          this.cache = (t18$ = this.widget, t19$ = context, t20 = selected, t21 = child, __t$BuildContextAndTAndWidgetNToWidget().as(t18$.builder)(t19$, t20, t21));
        }
        return dart.nullCheck(this.cache);
      }
      debugFillProperties(properties) {
        super.debugFillProperties(properties);
        properties.add(new (__t$DiagnosticsPropertyOfT()).new("value", this.value));
      }
      static ['_#new#tearOff'](T) {
        return new (selector$._Selector0State$(T)).new();
      }
    }
    (_Selector0State.new = function() {
      this[value$] = null;
      this.cache = null;
      this.oldWidget = null;
      _Selector0State.__proto__.new.call(this);
      ;
    }).prototype = _Selector0State.prototype;
    dart.addTypeTests(_Selector0State);
    _Selector0State.prototype[_is__Selector0State_default] = true;
    dart.addTypeCaches(_Selector0State);
    dart.setMethodSignature(_Selector0State, () => ({
      __proto__: dart.getMethods(_Selector0State.__proto__),
      buildWithChild: dart.fnType(framework.Widget, [framework.BuildContext, dart.nullable(framework.Widget)])
    }));
    dart.setLibraryUri(_Selector0State, I[39]);
    dart.setFieldSignature(_Selector0State, () => ({
      __proto__: dart.getFields(_Selector0State.__proto__),
      value: dart.fieldType(dart.nullable(T)),
      cache: dart.fieldType(dart.nullable(framework.Widget)),
      oldWidget: dart.fieldType(dart.nullable(framework.Widget))
    }));
    return _Selector0State;
  });
  selector$._Selector0State = selector$._Selector0State$();
  dart.addTypeTests(selector$._Selector0State, _is__Selector0State_default);
  const _is_Selector_default = Symbol('_is_Selector_default');
  selector$.Selector$ = dart.generic((A, S) => {
    var __t$BuildContextToS = () => (__t$BuildContextToS = dart.constFn(dart.fnType(S, [framework.BuildContext])))();
    class Selector extends selector$.Selector0$(S) {
      static ['_#new#tearOff'](A, S, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let selector = opts && 'selector' in opts ? opts.selector : null;
        let shouldRebuild = opts && 'shouldRebuild' in opts ? opts.shouldRebuild : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (selector$.Selector$(A, S)).new({key: key, builder: builder, selector: selector, shouldRebuild: shouldRebuild, child: child});
      }
    }
    (Selector.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let selector = opts && 'selector' in opts ? opts.selector : null;
      let shouldRebuild = opts && 'shouldRebuild' in opts ? opts.shouldRebuild : null;
      let child = opts && 'child' in opts ? opts.child : null;
      Selector.__proto__.new.call(this, {key: key, shouldRebuild: shouldRebuild, builder: builder, selector: dart.fn(context => selector(context, provider$.Provider.of(A, context)), __t$BuildContextToS()), child: child});
      ;
    }).prototype = Selector.prototype;
    dart.addTypeTests(Selector);
    Selector.prototype[_is_Selector_default] = true;
    dart.addTypeCaches(Selector);
    dart.setLibraryUri(Selector, I[39]);
    return Selector;
  });
  selector$.Selector = selector$.Selector$();
  dart.addTypeTests(selector$.Selector, _is_Selector_default);
  const _is_Selector2_default = Symbol('_is_Selector2_default');
  selector$.Selector2$ = dart.generic((A, B, S) => {
    var __t$BuildContextToS = () => (__t$BuildContextToS = dart.constFn(dart.fnType(S, [framework.BuildContext])))();
    class Selector2 extends selector$.Selector0$(S) {
      static ['_#new#tearOff'](A, B, S, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let selector = opts && 'selector' in opts ? opts.selector : null;
        let shouldRebuild = opts && 'shouldRebuild' in opts ? opts.shouldRebuild : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (selector$.Selector2$(A, B, S)).new({key: key, builder: builder, selector: selector, shouldRebuild: shouldRebuild, child: child});
      }
    }
    (Selector2.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let selector = opts && 'selector' in opts ? opts.selector : null;
      let shouldRebuild = opts && 'shouldRebuild' in opts ? opts.shouldRebuild : null;
      let child = opts && 'child' in opts ? opts.child : null;
      Selector2.__proto__.new.call(this, {key: key, shouldRebuild: shouldRebuild, builder: builder, selector: dart.fn(context => selector(context, provider$.Provider.of(A, context), provider$.Provider.of(B, context)), __t$BuildContextToS()), child: child});
      ;
    }).prototype = Selector2.prototype;
    dart.addTypeTests(Selector2);
    Selector2.prototype[_is_Selector2_default] = true;
    dart.addTypeCaches(Selector2);
    dart.setLibraryUri(Selector2, I[39]);
    return Selector2;
  });
  selector$.Selector2 = selector$.Selector2$();
  dart.addTypeTests(selector$.Selector2, _is_Selector2_default);
  const _is_Selector3_default = Symbol('_is_Selector3_default');
  selector$.Selector3$ = dart.generic((A, B, C, S) => {
    var __t$BuildContextToS = () => (__t$BuildContextToS = dart.constFn(dart.fnType(S, [framework.BuildContext])))();
    class Selector3 extends selector$.Selector0$(S) {
      static ['_#new#tearOff'](A, B, C, S, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let selector = opts && 'selector' in opts ? opts.selector : null;
        let shouldRebuild = opts && 'shouldRebuild' in opts ? opts.shouldRebuild : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (selector$.Selector3$(A, B, C, S)).new({key: key, builder: builder, selector: selector, shouldRebuild: shouldRebuild, child: child});
      }
    }
    (Selector3.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let selector = opts && 'selector' in opts ? opts.selector : null;
      let shouldRebuild = opts && 'shouldRebuild' in opts ? opts.shouldRebuild : null;
      let child = opts && 'child' in opts ? opts.child : null;
      Selector3.__proto__.new.call(this, {key: key, shouldRebuild: shouldRebuild, builder: builder, selector: dart.fn(context => selector(context, provider$.Provider.of(A, context), provider$.Provider.of(B, context), provider$.Provider.of(C, context)), __t$BuildContextToS()), child: child});
      ;
    }).prototype = Selector3.prototype;
    dart.addTypeTests(Selector3);
    Selector3.prototype[_is_Selector3_default] = true;
    dart.addTypeCaches(Selector3);
    dart.setLibraryUri(Selector3, I[39]);
    return Selector3;
  });
  selector$.Selector3 = selector$.Selector3$();
  dart.addTypeTests(selector$.Selector3, _is_Selector3_default);
  const _is_Selector4_default = Symbol('_is_Selector4_default');
  selector$.Selector4$ = dart.generic((A, B, C, D, S) => {
    var __t$BuildContextToS = () => (__t$BuildContextToS = dart.constFn(dart.fnType(S, [framework.BuildContext])))();
    class Selector4 extends selector$.Selector0$(S) {
      static ['_#new#tearOff'](A, B, C, D, S, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let selector = opts && 'selector' in opts ? opts.selector : null;
        let shouldRebuild = opts && 'shouldRebuild' in opts ? opts.shouldRebuild : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (selector$.Selector4$(A, B, C, D, S)).new({key: key, builder: builder, selector: selector, shouldRebuild: shouldRebuild, child: child});
      }
    }
    (Selector4.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let selector = opts && 'selector' in opts ? opts.selector : null;
      let shouldRebuild = opts && 'shouldRebuild' in opts ? opts.shouldRebuild : null;
      let child = opts && 'child' in opts ? opts.child : null;
      Selector4.__proto__.new.call(this, {key: key, shouldRebuild: shouldRebuild, builder: builder, selector: dart.fn(context => selector(context, provider$.Provider.of(A, context), provider$.Provider.of(B, context), provider$.Provider.of(C, context), provider$.Provider.of(D, context)), __t$BuildContextToS()), child: child});
      ;
    }).prototype = Selector4.prototype;
    dart.addTypeTests(Selector4);
    Selector4.prototype[_is_Selector4_default] = true;
    dart.addTypeCaches(Selector4);
    dart.setLibraryUri(Selector4, I[39]);
    return Selector4;
  });
  selector$.Selector4 = selector$.Selector4$();
  dart.addTypeTests(selector$.Selector4, _is_Selector4_default);
  const _is_Selector5_default = Symbol('_is_Selector5_default');
  selector$.Selector5$ = dart.generic((A, B, C, D, E, S) => {
    var __t$BuildContextToS = () => (__t$BuildContextToS = dart.constFn(dart.fnType(S, [framework.BuildContext])))();
    class Selector5 extends selector$.Selector0$(S) {
      static ['_#new#tearOff'](A, B, C, D, E, S, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let selector = opts && 'selector' in opts ? opts.selector : null;
        let shouldRebuild = opts && 'shouldRebuild' in opts ? opts.shouldRebuild : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (selector$.Selector5$(A, B, C, D, E, S)).new({key: key, builder: builder, selector: selector, shouldRebuild: shouldRebuild, child: child});
      }
    }
    (Selector5.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let selector = opts && 'selector' in opts ? opts.selector : null;
      let shouldRebuild = opts && 'shouldRebuild' in opts ? opts.shouldRebuild : null;
      let child = opts && 'child' in opts ? opts.child : null;
      Selector5.__proto__.new.call(this, {key: key, shouldRebuild: shouldRebuild, builder: builder, selector: dart.fn(context => selector(context, provider$.Provider.of(A, context), provider$.Provider.of(B, context), provider$.Provider.of(C, context), provider$.Provider.of(D, context), provider$.Provider.of(E, context)), __t$BuildContextToS()), child: child});
      ;
    }).prototype = Selector5.prototype;
    dart.addTypeTests(Selector5);
    Selector5.prototype[_is_Selector5_default] = true;
    dart.addTypeCaches(Selector5);
    dart.setLibraryUri(Selector5, I[39]);
    return Selector5;
  });
  selector$.Selector5 = selector$.Selector5$();
  dart.addTypeTests(selector$.Selector5, _is_Selector5_default);
  const _is_Selector6_default = Symbol('_is_Selector6_default');
  selector$.Selector6$ = dart.generic((A, B, C, D, E, F, S) => {
    var __t$BuildContextToS = () => (__t$BuildContextToS = dart.constFn(dart.fnType(S, [framework.BuildContext])))();
    class Selector6 extends selector$.Selector0$(S) {
      static ['_#new#tearOff'](A, B, C, D, E, F, S, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let builder = opts && 'builder' in opts ? opts.builder : null;
        let selector = opts && 'selector' in opts ? opts.selector : null;
        let shouldRebuild = opts && 'shouldRebuild' in opts ? opts.shouldRebuild : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (selector$.Selector6$(A, B, C, D, E, F, S)).new({key: key, builder: builder, selector: selector, shouldRebuild: shouldRebuild, child: child});
      }
    }
    (Selector6.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let selector = opts && 'selector' in opts ? opts.selector : null;
      let shouldRebuild = opts && 'shouldRebuild' in opts ? opts.shouldRebuild : null;
      let child = opts && 'child' in opts ? opts.child : null;
      Selector6.__proto__.new.call(this, {key: key, shouldRebuild: shouldRebuild, builder: builder, selector: dart.fn(context => selector(context, provider$.Provider.of(A, context), provider$.Provider.of(B, context), provider$.Provider.of(C, context), provider$.Provider.of(D, context), provider$.Provider.of(E, context), provider$.Provider.of(F, context)), __t$BuildContextToS()), child: child});
      ;
    }).prototype = Selector6.prototype;
    dart.addTypeTests(Selector6);
    Selector6.prototype[_is_Selector6_default] = true;
    dart.addTypeCaches(Selector6);
    dart.setLibraryUri(Selector6, I[39]);
    return Selector6;
  });
  selector$.Selector6 = selector$.Selector6$();
  dart.addTypeTests(selector$.Selector6, _is_Selector6_default);
  var _valueListenable = dart.privateName(value_listenable_provider, "_valueListenable");
  var _updateShouldNotify$ = dart.privateName(value_listenable_provider, "_updateShouldNotify");
  const _is_ValueListenableProvider_default = Symbol('_is_ValueListenableProvider_default');
  value_listenable_provider.ValueListenableProvider$ = dart.generic(T => {
    var __t$ValueListenableBuilderOfT = () => (__t$ValueListenableBuilderOfT = dart.constFn(value_listenable_builder.ValueListenableBuilder$(T)))();
    var __t$ProviderOfT = () => (__t$ProviderOfT = dart.constFn(provider$.Provider$(T)))();
    var __t$BuildContextAndTAndWidgetNToProviderOfT = () => (__t$BuildContextAndTAndWidgetNToProviderOfT = dart.constFn(dart.fnType(__t$ProviderOfT(), [framework.BuildContext, T, T$.WidgetN()])))();
    var __t$DiagnosticsPropertyOfT = () => (__t$DiagnosticsPropertyOfT = dart.constFn(diagnostics.DiagnosticsProperty$(T)))();
    class ValueListenableProvider extends nested.SingleChildStatelessWidget {
      static ['_#value#tearOff'](T, opts) {
        let key = opts && 'key' in opts ? opts.key : null;
        let value = opts && 'value' in opts ? opts.value : null;
        let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
        let child = opts && 'child' in opts ? opts.child : null;
        return new (value_listenable_provider.ValueListenableProvider$(T)).value({key: key, value: value, updateShouldNotify: updateShouldNotify, child: child});
      }
      buildWithChild(context, child) {
        return new (__t$ValueListenableBuilderOfT()).new({valueListenable: this[_valueListenable], builder: dart.fn((context, value, _) => new (__t$ProviderOfT()).value({value: value, updateShouldNotify: this[_updateShouldNotify$], child: child}), __t$BuildContextAndTAndWidgetNToProviderOfT())});
      }
      debugFillProperties(properties) {
        super.debugFillProperties(properties);
        properties.add(new (__t$DiagnosticsPropertyOfT()).new("value", this[_valueListenable].value));
      }
    }
    (ValueListenableProvider.value = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let child = opts && 'child' in opts ? opts.child : null;
      this[_valueListenable] = value;
      this[_updateShouldNotify$] = updateShouldNotify;
      ValueListenableProvider.__proto__.new.call(this, {key: key, child: child});
      ;
    }).prototype = ValueListenableProvider.prototype;
    dart.addTypeTests(ValueListenableProvider);
    ValueListenableProvider.prototype[_is_ValueListenableProvider_default] = true;
    dart.addTypeCaches(ValueListenableProvider);
    dart.setMethodSignature(ValueListenableProvider, () => ({
      __proto__: dart.getMethods(ValueListenableProvider.__proto__),
      buildWithChild: dart.fnType(framework.Widget, [framework.BuildContext, dart.nullable(framework.Widget)])
    }));
    dart.setLibraryUri(ValueListenableProvider, I[40]);
    dart.setFieldSignature(ValueListenableProvider, () => ({
      __proto__: dart.getFields(ValueListenableProvider.__proto__),
      [_valueListenable]: dart.finalFieldType(change_notifier.ValueListenable$(T)),
      [_updateShouldNotify$]: dart.finalFieldType(dart.nullable(dart.fnType(core.bool, [T, T])))
    }));
    return ValueListenableProvider;
  });
  value_listenable_provider.ValueListenableProvider = value_listenable_provider.ValueListenableProvider$();
  dart.addTypeTests(value_listenable_provider.ValueListenableProvider, _is_ValueListenableProvider_default);
  var _name = dart.privateName(core, "_name");
  post_state.PostStatus = class PostStatus extends core._Enum {
    toString() {
      return "PostStatus." + this[_name];
    }
  };
  (post_state.PostStatus.new = function(index, name) {
    post_state.PostStatus.__proto__.new.call(this, index, name);
    ;
  }).prototype = post_state.PostStatus.prototype;
  dart.addTypeTests(post_state.PostStatus);
  dart.addTypeCaches(post_state.PostStatus);
  dart.setLibraryUri(post_state.PostStatus, I[28]);
  dart.setStaticFieldSignature(post_state.PostStatus, () => ['values', 'initial', 'success', 'failure']);
  dart.defineExtensionMethods(post_state.PostStatus, ['toString']);
  dart.defineLazy(post_state.PostStatus, {
    /*post_state.PostStatus.values*/get values() {
      return C[26] || CT.C26;
    },
    /*post_state.PostStatus.initial*/get initial() {
      return C[7] || CT.C7;
    },
    /*post_state.PostStatus.success*/get success() {
      return C[15] || CT.C15;
    },
    /*post_state.PostStatus.failure*/get failure() {
      return C[12] || CT.C12;
    }
  }, false);
  var id$0 = dart.privateName(post, "Post.id");
  var title$ = dart.privateName(post, "Post.title");
  var body$ = dart.privateName(post, "Post.body");
  post.Post = class Post extends equatable$.Equatable {
    get id() {
      return this[id$0];
    }
    set id(value) {
      super.id = value;
    }
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    get body() {
      return this[body$];
    }
    set body(value) {
      super.body = value;
    }
    static ['_#new#tearOff'](opts) {
      let id = opts && 'id' in opts ? opts.id : null;
      let title = opts && 'title' in opts ? opts.title : null;
      let body = opts && 'body' in opts ? opts.body : null;
      return new post.Post.new({id: id, title: title, body: body});
    }
    get props() {
      return T$.JSArrayOfObject().of([this.id, this.title, this.body]);
    }
  };
  (post.Post.new = function(opts) {
    let id = opts && 'id' in opts ? opts.id : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let body = opts && 'body' in opts ? opts.body : null;
    this[id$0] = id;
    this[title$] = title;
    this[body$] = body;
    post.Post.__proto__.new.call(this);
    ;
  }).prototype = post.Post.prototype;
  dart.addTypeTests(post.Post);
  dart.addTypeCaches(post.Post);
  dart.setGetterSignature(post.Post, () => ({
    __proto__: dart.getGetters(post.Post.__proto__),
    props: core.List$(core.Object)
  }));
  dart.setLibraryUri(post.Post, I[41]);
  dart.setFieldSignature(post.Post, () => ({
    __proto__: dart.getFields(post.Post.__proto__),
    id: dart.finalFieldType(core.int),
    title: dart.finalFieldType(core.String),
    body: dart.finalFieldType(core.String)
  }));
  var SizedBox_height = dart.privateName(basic, "SizedBox.height");
  var SizedBox_width = dart.privateName(basic, "SizedBox.width");
  bottom_loader.BottomLoader = class BottomLoader extends framework.StatelessWidget {
    build(context) {
      return C[27] || CT.C27;
    }
    static ['_#new#tearOff']() {
      return new bottom_loader.BottomLoader.new();
    }
  };
  (bottom_loader.BottomLoader.new = function() {
    bottom_loader.BottomLoader.__proto__.new.call(this);
    ;
  }).prototype = bottom_loader.BottomLoader.prototype;
  dart.addTypeTests(bottom_loader.BottomLoader);
  dart.addTypeCaches(bottom_loader.BottomLoader);
  dart.setMethodSignature(bottom_loader.BottomLoader, () => ({
    __proto__: dart.getMethods(bottom_loader.BottomLoader.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(bottom_loader.BottomLoader, I[42]);
  var post$0 = dart.privateName(post_list_item, "PostListItem.post");
  post_list_item.PostListItem = class PostListItem extends framework.StatelessWidget {
    get post() {
      return this[post$0];
    }
    set post(value) {
      super.post = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let post = opts && 'post' in opts ? opts.post : null;
      return new post_list_item.PostListItem.new({key: key, post: post});
    }
    build(context) {
      let textTheme = theme.Theme.of(context).textTheme;
      return new material.Material.new({child: new list_tile.ListTile.new({leading: new text.Text.new(dart.str(this.post.id), {style: textTheme.caption}), title: new text.Text.new(this.post.title), isThreeLine: true, subtitle: new text.Text.new(this.post.body), dense: true})});
    }
  };
  (post_list_item.PostListItem.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let post = opts && 'post' in opts ? opts.post : null;
    this[post$0] = post;
    post_list_item.PostListItem.__proto__.new.call(this, {key: key});
    ;
  }).prototype = post_list_item.PostListItem.prototype;
  dart.addTypeTests(post_list_item.PostListItem);
  dart.addTypeCaches(post_list_item.PostListItem);
  dart.setMethodSignature(post_list_item.PostListItem, () => ({
    __proto__: dart.getMethods(post_list_item.PostListItem.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(post_list_item.PostListItem, I[43]);
  dart.setFieldSignature(post_list_item.PostListItem, () => ({
    __proto__: dart.getFields(post_list_item.PostListItem.__proto__),
    post: dart.finalFieldType(post.Post)
  }));
  client$.Client = class Client extends core.Object {
    static new() {
      return browser_client.createClient();
    }
    static ['_#new#tearOff']() {
      return client$.Client.new();
    }
  };
  (client$.Client[dart.mixinNew] = function() {
  }).prototype = client$.Client.prototype;
  dart.addTypeTests(client$.Client);
  dart.addTypeCaches(client$.Client);
  dart.setStaticMethodSignature(client$.Client, () => ['new']);
  dart.setLibraryUri(client$.Client, I[44]);
  var message$ = dart.privateName(exception, "ClientException.message");
  var uri$ = dart.privateName(exception, "ClientException.uri");
  exception.ClientException = class ClientException extends core.Object {
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    get uri() {
      return this[uri$];
    }
    set uri(value) {
      super.uri = value;
    }
    static ['_#new#tearOff'](message, uri = null) {
      return new exception.ClientException.new(message, uri);
    }
    toString() {
      return this.message;
    }
  };
  (exception.ClientException.new = function(message, uri = null) {
    this[message$] = message;
    this[uri$] = uri;
    ;
  }).prototype = exception.ClientException.prototype;
  dart.addTypeTests(exception.ClientException);
  dart.addTypeCaches(exception.ClientException);
  exception.ClientException[dart.implements] = () => [core.Exception];
  dart.setLibraryUri(exception.ClientException, I[45]);
  dart.setFieldSignature(exception.ClientException, () => ({
    __proto__: dart.getFields(exception.ClientException.__proto__),
    message: dart.finalFieldType(core.String),
    uri: dart.finalFieldType(dart.nullable(core.Uri))
  }));
  dart.defineExtensionMethods(exception.ClientException, ['toString']);
  var _defaultEncoding = dart.privateName(request$, "_defaultEncoding");
  var _bodyBytes = dart.privateName(request$, "_bodyBytes");
  var _contentType = dart.privateName(request$, "_contentType");
  var _checkFinalized = dart.privateName(request$, "_checkFinalized");
  var method$ = dart.privateName(base_request, "BaseRequest.method");
  var url$ = dart.privateName(base_request, "BaseRequest.url");
  var headers = dart.privateName(base_request, "BaseRequest.headers");
  var _contentLength = dart.privateName(base_request, "_contentLength");
  var _persistentConnection = dart.privateName(base_request, "_persistentConnection");
  var _followRedirects = dart.privateName(base_request, "_followRedirects");
  var _maxRedirects = dart.privateName(base_request, "_maxRedirects");
  var _finalized = dart.privateName(base_request, "_finalized");
  var _checkFinalized$ = dart.privateName(base_request, "_checkFinalized");
  var StreamView__stream = dart.privateName(async, "StreamView._stream");
  base_request.BaseRequest = class BaseRequest extends core.Object {
    get method() {
      return this[method$];
    }
    set method(value) {
      super.method = value;
    }
    get url() {
      return this[url$];
    }
    set url(value) {
      super.url = value;
    }
    get headers() {
      return this[headers];
    }
    set headers(value) {
      super.headers = value;
    }
    get contentLength() {
      return this[_contentLength];
    }
    set contentLength(value) {
      if (value != null && dart.notNull(value) < 0) {
        dart.throw(new core.ArgumentError.new("Invalid content length " + dart.str(value) + "."));
      }
      this[_checkFinalized$]();
      this[_contentLength] = value;
    }
    get persistentConnection() {
      return this[_persistentConnection];
    }
    set persistentConnection(value) {
      this[_checkFinalized$]();
      this[_persistentConnection] = value;
    }
    get followRedirects() {
      return this[_followRedirects];
    }
    set followRedirects(value) {
      this[_checkFinalized$]();
      this[_followRedirects] = value;
    }
    get maxRedirects() {
      return this[_maxRedirects];
    }
    set maxRedirects(value) {
      this[_checkFinalized$]();
      this[_maxRedirects] = value;
    }
    get finalized() {
      return this[_finalized];
    }
    static _validateMethod(method) {
      if (!base_request.BaseRequest._tokenRE.hasMatch(method)) {
        dart.throw(new core.ArgumentError.value(method, "method", "Not a valid method"));
      }
      return method;
    }
    finalize() {
      if (this.finalized) dart.throw(new core.StateError.new("Can't finalize a finalized Request."));
      this[_finalized] = true;
      return C[30] || CT.C30;
    }
    send() {
      return async.async(streamed_response.StreamedResponse, (function* send() {
        let client = client$.Client.new();
        try {
          let response = (yield client.send(this));
          let stream = utils.onDone(T$.ListOfint(), response.stream, dart.bind(client, 'close'));
          return new streamed_response.StreamedResponse.new(new byte_stream.ByteStream.new(stream), response.statusCode, {contentLength: response.contentLength, request: response.request, headers: response.headers, isRedirect: response.isRedirect, persistentConnection: response.persistentConnection, reasonPhrase: response.reasonPhrase});
        } catch (e) {
          let _ = dart.getThrown(e);
          if (core.Object.is(_)) {
            client.close();
            dart.rethrow(e);
          } else
            throw e;
        }
      }).bind(this));
    }
    [_checkFinalized$]() {
      if (!this.finalized) return;
      dart.throw(new core.StateError.new("Can't modify a finalized Request."));
    }
    toString() {
      return this.method + " " + dart.str(this.url);
    }
  };
  (base_request.BaseRequest.new = function(method, url) {
    this[_contentLength] = null;
    this[_persistentConnection] = true;
    this[_followRedirects] = true;
    this[_maxRedirects] = 5;
    this[_finalized] = false;
    this[url$] = url;
    this[method$] = base_request.BaseRequest._validateMethod(method);
    this[headers] = T$.LinkedHashMapOfString$String().new({equals: dart.fn((key1, key2) => key1[$toLowerCase]() === key2[$toLowerCase](), T$.StringAndStringTobool()), hashCode: dart.fn(key => key[$toLowerCase]()[$hashCode], T$.StringToint())});
    ;
  }).prototype = base_request.BaseRequest.prototype;
  dart.addTypeTests(base_request.BaseRequest);
  dart.addTypeCaches(base_request.BaseRequest);
  dart.setMethodSignature(base_request.BaseRequest, () => ({
    __proto__: dart.getMethods(base_request.BaseRequest.__proto__),
    finalize: dart.fnType(byte_stream.ByteStream, []),
    send: dart.fnType(async.Future$(streamed_response.StreamedResponse), []),
    [_checkFinalized$]: dart.fnType(dart.void, [])
  }));
  dart.setStaticMethodSignature(base_request.BaseRequest, () => ['_validateMethod']);
  dart.setGetterSignature(base_request.BaseRequest, () => ({
    __proto__: dart.getGetters(base_request.BaseRequest.__proto__),
    contentLength: dart.nullable(core.int),
    persistentConnection: core.bool,
    followRedirects: core.bool,
    maxRedirects: core.int,
    finalized: core.bool
  }));
  dart.setSetterSignature(base_request.BaseRequest, () => ({
    __proto__: dart.getSetters(base_request.BaseRequest.__proto__),
    contentLength: dart.nullable(core.int),
    persistentConnection: core.bool,
    followRedirects: core.bool,
    maxRedirects: core.int
  }));
  dart.setLibraryUri(base_request.BaseRequest, I[46]);
  dart.setFieldSignature(base_request.BaseRequest, () => ({
    __proto__: dart.getFields(base_request.BaseRequest.__proto__),
    method: dart.finalFieldType(core.String),
    url: dart.finalFieldType(core.Uri),
    [_contentLength]: dart.fieldType(dart.nullable(core.int)),
    [_persistentConnection]: dart.fieldType(core.bool),
    [_followRedirects]: dart.fieldType(core.bool),
    [_maxRedirects]: dart.fieldType(core.int),
    headers: dart.finalFieldType(core.Map$(core.String, core.String)),
    [_finalized]: dart.fieldType(core.bool)
  }));
  dart.setStaticFieldSignature(base_request.BaseRequest, () => ['_tokenRE']);
  dart.defineExtensionMethods(base_request.BaseRequest, ['toString']);
  dart.defineLazy(base_request.BaseRequest, {
    /*base_request.BaseRequest._tokenRE*/get _tokenRE() {
      return core.RegExp.new("^[\\w!#%&'*+\\-.^`|~]+$");
    }
  }, false);
  request$.Request = class Request extends base_request.BaseRequest {
    get contentLength() {
      return this.bodyBytes[$length];
    }
    set contentLength(value) {
      dart.throw(new core.UnsupportedError.new("Cannot set the contentLength property of " + "non-streaming Request objects."));
    }
    get encoding() {
      if (this[_contentType] == null || !dart.nullCheck(this[_contentType]).parameters[$containsKey]("charset")) {
        return this[_defaultEncoding];
      }
      return utils.requiredEncodingForCharset(dart.nullCheck(dart.nullCheck(this[_contentType]).parameters[$_get]("charset")));
    }
    set encoding(value) {
      this[_checkFinalized]();
      this[_defaultEncoding] = value;
      let contentType = this[_contentType];
      if (contentType == null) return;
      this[_contentType] = contentType.change({parameters: new (T$.IdentityMapOfString$String()).from(["charset", value.name])});
    }
    get bodyBytes() {
      return this[_bodyBytes];
    }
    set bodyBytes(value) {
      this[_checkFinalized]();
      this[_bodyBytes] = utils.toUint8List(value);
    }
    get body() {
      return this.encoding.decode(this.bodyBytes);
    }
    set body(value) {
      this.bodyBytes = this.encoding.encode(value);
      let contentType = this[_contentType];
      if (contentType == null) {
        this[_contentType] = new media_type.MediaType.new("text", "plain", new (T$.IdentityMapOfString$String()).from(["charset", this.encoding.name]));
      } else if (!contentType.parameters[$containsKey]("charset")) {
        this[_contentType] = contentType.change({parameters: new (T$.IdentityMapOfString$String()).from(["charset", this.encoding.name])});
      }
    }
    get bodyFields() {
      let contentType = this[_contentType];
      if (contentType == null || contentType.mimeType !== "application/x-www-form-urlencoded") {
        dart.throw(new core.StateError.new("Cannot access the body fields of a Request without " + "content-type \"application/x-www-form-urlencoded\"."));
      }
      return core.Uri.splitQueryString(this.body, {encoding: this.encoding});
    }
    set bodyFields(fields) {
      let contentType = this[_contentType];
      if (contentType == null) {
        this[_contentType] = new media_type.MediaType.new("application", "x-www-form-urlencoded");
      } else if (contentType.mimeType !== "application/x-www-form-urlencoded") {
        dart.throw(new core.StateError.new("Cannot set the body fields of a Request with " + "content-type \"" + contentType.mimeType + "\"."));
      }
      this.body = utils.mapToQuery(fields, {encoding: this.encoding});
    }
    static ['_#new#tearOff'](method, url) {
      return new request$.Request.new(method, url);
    }
    finalize() {
      super.finalize();
      return byte_stream.ByteStream.fromBytes(this.bodyBytes);
    }
    get [_contentType]() {
      let contentType = this.headers[$_get]("content-type");
      if (contentType == null) return null;
      return media_type.MediaType.parse(contentType);
    }
    set [_contentType](value) {
      if (value == null) {
        this.headers[$remove]("content-type");
      } else {
        this.headers[$_set]("content-type", dart.toString(value));
      }
    }
    [_checkFinalized]() {
      if (!this.finalized) return;
      dart.throw(new core.StateError.new("Can't modify a finalized Request."));
    }
  };
  (request$.Request.new = function(method, url) {
    this[_defaultEncoding] = convert.utf8;
    this[_bodyBytes] = _native_typed_data.NativeUint8List.new(0);
    request$.Request.__proto__.new.call(this, method, url);
    ;
  }).prototype = request$.Request.prototype;
  dart.addTypeTests(request$.Request);
  dart.addTypeCaches(request$.Request);
  dart.setMethodSignature(request$.Request, () => ({
    __proto__: dart.getMethods(request$.Request.__proto__),
    [_checkFinalized]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(request$.Request, () => ({
    __proto__: dart.getGetters(request$.Request.__proto__),
    contentLength: core.int,
    encoding: convert.Encoding,
    bodyBytes: typed_data.Uint8List,
    body: core.String,
    bodyFields: core.Map$(core.String, core.String),
    [_contentType]: dart.nullable(media_type.MediaType)
  }));
  dart.setSetterSignature(request$.Request, () => ({
    __proto__: dart.getSetters(request$.Request.__proto__),
    encoding: convert.Encoding,
    bodyBytes: core.List$(core.int),
    body: core.String,
    bodyFields: core.Map$(core.String, core.String),
    [_contentType]: dart.nullable(media_type.MediaType)
  }));
  dart.setLibraryUri(request$.Request, I[47]);
  dart.setFieldSignature(request$.Request, () => ({
    __proto__: dart.getFields(request$.Request.__proto__),
    [_defaultEncoding]: dart.fieldType(convert.Encoding),
    [_bodyBytes]: dart.fieldType(typed_data.Uint8List)
  }));
  var bodyBytes$ = dart.privateName(response$, "Response.bodyBytes");
  var request$0 = dart.privateName(base_response, "BaseResponse.request");
  var statusCode$ = dart.privateName(base_response, "BaseResponse.statusCode");
  var reasonPhrase$ = dart.privateName(base_response, "BaseResponse.reasonPhrase");
  var contentLength$ = dart.privateName(base_response, "BaseResponse.contentLength");
  var headers$ = dart.privateName(base_response, "BaseResponse.headers");
  var isRedirect$ = dart.privateName(base_response, "BaseResponse.isRedirect");
  var persistentConnection$ = dart.privateName(base_response, "BaseResponse.persistentConnection");
  base_response.BaseResponse = class BaseResponse extends core.Object {
    get request() {
      return this[request$0];
    }
    set request(value) {
      super.request = value;
    }
    get statusCode() {
      return this[statusCode$];
    }
    set statusCode(value) {
      super.statusCode = value;
    }
    get reasonPhrase() {
      return this[reasonPhrase$];
    }
    set reasonPhrase(value) {
      super.reasonPhrase = value;
    }
    get contentLength() {
      return this[contentLength$];
    }
    set contentLength(value) {
      super.contentLength = value;
    }
    get headers() {
      return this[headers$];
    }
    set headers(value) {
      super.headers = value;
    }
    get isRedirect() {
      return this[isRedirect$];
    }
    set isRedirect(value) {
      super.isRedirect = value;
    }
    get persistentConnection() {
      return this[persistentConnection$];
    }
    set persistentConnection(value) {
      super.persistentConnection = value;
    }
  };
  (base_response.BaseResponse.new = function(statusCode, opts) {
    let contentLength = opts && 'contentLength' in opts ? opts.contentLength : null;
    let request = opts && 'request' in opts ? opts.request : null;
    let headers = opts && 'headers' in opts ? opts.headers : C[32] || CT.C32;
    let isRedirect = opts && 'isRedirect' in opts ? opts.isRedirect : false;
    let persistentConnection = opts && 'persistentConnection' in opts ? opts.persistentConnection : true;
    let reasonPhrase = opts && 'reasonPhrase' in opts ? opts.reasonPhrase : null;
    this[statusCode$] = statusCode;
    this[contentLength$] = contentLength;
    this[request$0] = request;
    this[headers$] = headers;
    this[isRedirect$] = isRedirect;
    this[persistentConnection$] = persistentConnection;
    this[reasonPhrase$] = reasonPhrase;
    if (this.statusCode < 100) {
      dart.throw(new core.ArgumentError.new("Invalid status code " + dart.str(this.statusCode) + "."));
    } else if (this.contentLength != null && dart.nullCheck(this.contentLength) < 0) {
      dart.throw(new core.ArgumentError.new("Invalid content length " + dart.str(this.contentLength) + "."));
    }
  }).prototype = base_response.BaseResponse.prototype;
  dart.addTypeTests(base_response.BaseResponse);
  dart.addTypeCaches(base_response.BaseResponse);
  dart.setLibraryUri(base_response.BaseResponse, I[48]);
  dart.setFieldSignature(base_response.BaseResponse, () => ({
    __proto__: dart.getFields(base_response.BaseResponse.__proto__),
    request: dart.finalFieldType(dart.nullable(base_request.BaseRequest)),
    statusCode: dart.finalFieldType(core.int),
    reasonPhrase: dart.finalFieldType(dart.nullable(core.String)),
    contentLength: dart.finalFieldType(dart.nullable(core.int)),
    headers: dart.finalFieldType(core.Map$(core.String, core.String)),
    isRedirect: dart.finalFieldType(core.bool),
    persistentConnection: dart.finalFieldType(core.bool)
  }));
  response$.Response = class Response extends base_response.BaseResponse {
    get bodyBytes() {
      return this[bodyBytes$];
    }
    set bodyBytes(value) {
      super.bodyBytes = value;
    }
    get body() {
      return response$._encodingForHeaders(this.headers).decode(this.bodyBytes);
    }
    static ['_#new#tearOff'](body, statusCode, opts) {
      let request = opts && 'request' in opts ? opts.request : null;
      let headers = opts && 'headers' in opts ? opts.headers : C[32] || CT.C32;
      let isRedirect = opts && 'isRedirect' in opts ? opts.isRedirect : false;
      let persistentConnection = opts && 'persistentConnection' in opts ? opts.persistentConnection : true;
      let reasonPhrase = opts && 'reasonPhrase' in opts ? opts.reasonPhrase : null;
      return new response$.Response.new(body, statusCode, {request: request, headers: headers, isRedirect: isRedirect, persistentConnection: persistentConnection, reasonPhrase: reasonPhrase});
    }
    static ['_#bytes#tearOff'](bodyBytes, statusCode, opts) {
      let request = opts && 'request' in opts ? opts.request : null;
      let headers = opts && 'headers' in opts ? opts.headers : C[32] || CT.C32;
      let isRedirect = opts && 'isRedirect' in opts ? opts.isRedirect : false;
      let persistentConnection = opts && 'persistentConnection' in opts ? opts.persistentConnection : true;
      let reasonPhrase = opts && 'reasonPhrase' in opts ? opts.reasonPhrase : null;
      return new response$.Response.bytes(bodyBytes, statusCode, {request: request, headers: headers, isRedirect: isRedirect, persistentConnection: persistentConnection, reasonPhrase: reasonPhrase});
    }
    static fromStream(response) {
      return async.async(response$.Response, function* fromStream() {
        let body = (yield response.stream.toBytes());
        return new response$.Response.bytes(body, response.statusCode, {request: response.request, headers: response.headers, isRedirect: response.isRedirect, persistentConnection: response.persistentConnection, reasonPhrase: response.reasonPhrase});
      });
    }
  };
  (response$.Response.new = function(body, statusCode, opts) {
    let request = opts && 'request' in opts ? opts.request : null;
    let headers = opts && 'headers' in opts ? opts.headers : C[32] || CT.C32;
    let isRedirect = opts && 'isRedirect' in opts ? opts.isRedirect : false;
    let persistentConnection = opts && 'persistentConnection' in opts ? opts.persistentConnection : true;
    let reasonPhrase = opts && 'reasonPhrase' in opts ? opts.reasonPhrase : null;
    response$.Response.bytes.call(this, response$._encodingForHeaders(headers).encode(body), statusCode, {request: request, headers: headers, isRedirect: isRedirect, persistentConnection: persistentConnection, reasonPhrase: reasonPhrase});
  }).prototype = response$.Response.prototype;
  (response$.Response.bytes = function(bodyBytes, statusCode, opts) {
    let request = opts && 'request' in opts ? opts.request : null;
    let headers = opts && 'headers' in opts ? opts.headers : C[32] || CT.C32;
    let isRedirect = opts && 'isRedirect' in opts ? opts.isRedirect : false;
    let persistentConnection = opts && 'persistentConnection' in opts ? opts.persistentConnection : true;
    let reasonPhrase = opts && 'reasonPhrase' in opts ? opts.reasonPhrase : null;
    this[bodyBytes$] = utils.toUint8List(bodyBytes);
    response$.Response.__proto__.new.call(this, statusCode, {contentLength: bodyBytes[$length], request: request, headers: headers, isRedirect: isRedirect, persistentConnection: persistentConnection, reasonPhrase: reasonPhrase});
    ;
  }).prototype = response$.Response.prototype;
  dart.addTypeTests(response$.Response);
  dart.addTypeCaches(response$.Response);
  dart.setStaticMethodSignature(response$.Response, () => ['fromStream']);
  dart.setGetterSignature(response$.Response, () => ({
    __proto__: dart.getGetters(response$.Response.__proto__),
    body: core.String
  }));
  dart.setLibraryUri(response$.Response, I[49]);
  dart.setFieldSignature(response$.Response, () => ({
    __proto__: dart.getFields(response$.Response.__proto__),
    bodyBytes: dart.finalFieldType(typed_data.Uint8List)
  }));
  response$._encodingForHeaders = function _encodingForHeaders(headers) {
    return utils.encodingForCharset(response$._contentTypeForHeaders(headers).parameters[$_get]("charset"));
  };
  response$._contentTypeForHeaders = function _contentTypeForHeaders(headers) {
    let contentType = headers[$_get]("content-type");
    if (contentType != null) return media_type.MediaType.parse(contentType);
    return new media_type.MediaType.new("application", "octet-stream");
  };
  var _controller$ = dart.privateName(streamed_request, "_controller");
  streamed_request.StreamedRequest = class StreamedRequest extends base_request.BaseRequest {
    get sink() {
      return this[_controller$].sink;
    }
    static ['_#new#tearOff'](method, url) {
      return new streamed_request.StreamedRequest.new(method, url);
    }
    finalize() {
      super.finalize();
      return new byte_stream.ByteStream.new(this[_controller$].stream);
    }
  };
  (streamed_request.StreamedRequest.new = function(method, url) {
    this[_controller$] = T$.StreamControllerOfListOfint().new({sync: true});
    streamed_request.StreamedRequest.__proto__.new.call(this, method, url);
    ;
  }).prototype = streamed_request.StreamedRequest.prototype;
  dart.addTypeTests(streamed_request.StreamedRequest);
  dart.addTypeCaches(streamed_request.StreamedRequest);
  dart.setGetterSignature(streamed_request.StreamedRequest, () => ({
    __proto__: dart.getGetters(streamed_request.StreamedRequest.__proto__),
    sink: async.EventSink$(core.List$(core.int))
  }));
  dart.setLibraryUri(streamed_request.StreamedRequest, I[50]);
  dart.setFieldSignature(streamed_request.StreamedRequest, () => ({
    __proto__: dart.getFields(streamed_request.StreamedRequest.__proto__),
    [_controller$]: dart.finalFieldType(async.StreamController$(core.List$(core.int)))
  }));
  var _sendUnstreamed = dart.privateName(base_client, "_sendUnstreamed");
  var _checkResponseSuccess = dart.privateName(base_client, "_checkResponseSuccess");
  base_client.BaseClient = class BaseClient extends core.Object {
    head(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      return this[_sendUnstreamed]("HEAD", url, headers);
    }
    get(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      return this[_sendUnstreamed]("GET", url, headers);
    }
    post(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      let body = opts && 'body' in opts ? opts.body : null;
      let encoding = opts && 'encoding' in opts ? opts.encoding : null;
      return this[_sendUnstreamed]("POST", url, headers, body, encoding);
    }
    put(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      let body = opts && 'body' in opts ? opts.body : null;
      let encoding = opts && 'encoding' in opts ? opts.encoding : null;
      return this[_sendUnstreamed]("PUT", url, headers, body, encoding);
    }
    patch(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      let body = opts && 'body' in opts ? opts.body : null;
      let encoding = opts && 'encoding' in opts ? opts.encoding : null;
      return this[_sendUnstreamed]("PATCH", url, headers, body, encoding);
    }
    delete(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      let body = opts && 'body' in opts ? opts.body : null;
      let encoding = opts && 'encoding' in opts ? opts.encoding : null;
      return this[_sendUnstreamed]("DELETE", url, headers, body, encoding);
    }
    read(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      return async.async(core.String, (function* read() {
        let response = (yield this.get(url, {headers: headers}));
        this[_checkResponseSuccess](url, response);
        return response.body;
      }).bind(this));
    }
    readBytes(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      return async.async(typed_data.Uint8List, (function* readBytes() {
        let response = (yield this.get(url, {headers: headers}));
        this[_checkResponseSuccess](url, response);
        return response.bodyBytes;
      }).bind(this));
    }
    [_sendUnstreamed](method, url, headers, body = null, encoding = null) {
      return async.async(response$.Response, (function* _sendUnstreamed() {
        let request = new request$.Request.new(method, url);
        if (headers != null) request.headers[$addAll](headers);
        if (encoding != null) request.encoding = encoding;
        if (body != null) {
          if (typeof body == 'string') {
            request.body = body;
          } else if (core.List.is(body)) {
            request.bodyBytes = body[$cast](core.int);
          } else if (core.Map.is(body)) {
            request.bodyFields = body[$cast](core.String, core.String);
          } else {
            dart.throw(new core.ArgumentError.new("Invalid request body \"" + dart.str(body) + "\"."));
          }
        }
        return response$.Response.fromStream(yield this.send(request));
      }).bind(this));
    }
    [_checkResponseSuccess](url, response) {
      if (response.statusCode < 400) return;
      let message = "Request to " + dart.str(url) + " failed with status " + dart.str(response.statusCode);
      if (response.reasonPhrase != null) {
        message = message + ": " + dart.str(response.reasonPhrase);
      }
      dart.throw(new exception.ClientException.new(message + ".", url));
    }
    close() {
    }
  };
  (base_client.BaseClient.new = function() {
    ;
  }).prototype = base_client.BaseClient.prototype;
  dart.addTypeTests(base_client.BaseClient);
  dart.addTypeCaches(base_client.BaseClient);
  base_client.BaseClient[dart.implements] = () => [client$.Client];
  dart.setMethodSignature(base_client.BaseClient, () => ({
    __proto__: dart.getMethods(base_client.BaseClient.__proto__),
    head: dart.fnType(async.Future$(response$.Response), [core.Uri], {headers: dart.nullable(core.Map$(core.String, core.String))}, {}),
    get: dart.fnType(async.Future$(response$.Response), [core.Uri], {headers: dart.nullable(core.Map$(core.String, core.String))}, {}),
    post: dart.fnType(async.Future$(response$.Response), [core.Uri], {body: dart.nullable(core.Object), encoding: dart.nullable(convert.Encoding), headers: dart.nullable(core.Map$(core.String, core.String))}, {}),
    put: dart.fnType(async.Future$(response$.Response), [core.Uri], {body: dart.nullable(core.Object), encoding: dart.nullable(convert.Encoding), headers: dart.nullable(core.Map$(core.String, core.String))}, {}),
    patch: dart.fnType(async.Future$(response$.Response), [core.Uri], {body: dart.nullable(core.Object), encoding: dart.nullable(convert.Encoding), headers: dart.nullable(core.Map$(core.String, core.String))}, {}),
    delete: dart.fnType(async.Future$(response$.Response), [core.Uri], {body: dart.nullable(core.Object), encoding: dart.nullable(convert.Encoding), headers: dart.nullable(core.Map$(core.String, core.String))}, {}),
    read: dart.fnType(async.Future$(core.String), [core.Uri], {headers: dart.nullable(core.Map$(core.String, core.String))}, {}),
    readBytes: dart.fnType(async.Future$(typed_data.Uint8List), [core.Uri], {headers: dart.nullable(core.Map$(core.String, core.String))}, {}),
    [_sendUnstreamed]: dart.fnType(async.Future$(response$.Response), [core.String, core.Uri, dart.nullable(core.Map$(core.String, core.String))], [dart.dynamic, dart.nullable(convert.Encoding)]),
    [_checkResponseSuccess]: dart.fnType(dart.void, [core.Uri, response$.Response]),
    close: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(base_client.BaseClient, I[51]);
  var Utf8Codec__allowMalformed = dart.privateName(convert, "Utf8Codec._allowMalformed");
  byte_stream.ByteStream = class ByteStream extends async.StreamView$(core.List$(core.int)) {
    static ['_#new#tearOff'](stream) {
      return new byte_stream.ByteStream.new(stream);
    }
    static fromBytes(bytes) {
      return new byte_stream.ByteStream.new(T$.StreamOfListOfint().value(bytes));
    }
    static ['_#fromBytes#tearOff'](bytes) {
      return byte_stream.ByteStream.fromBytes(bytes);
    }
    toBytes() {
      let completer = T$.CompleterOfUint8List().new();
      let sink = new convert._ByteCallbackSink.new(dart.fn(bytes => completer.complete(_native_typed_data.NativeUint8List.fromList(bytes)), T$.ListOfintTovoid()));
      this.listen(T$.ListOfintTovoid().as(dart.bind(sink, 'add')), {onError: dart.bind(completer, 'completeError'), onDone: dart.bind(sink, 'close'), cancelOnError: true});
      return completer.future;
    }
    bytesToString(encoding = C[33] || CT.C33) {
      return encoding.decodeStream(this);
    }
    toStringStream(encoding = C[33] || CT.C33) {
      return encoding.decoder.bind(this);
    }
  };
  (byte_stream.ByteStream.new = function(stream) {
    byte_stream.ByteStream.__proto__.new.call(this, stream);
    ;
  }).prototype = byte_stream.ByteStream.prototype;
  dart.addTypeTests(byte_stream.ByteStream);
  dart.addTypeCaches(byte_stream.ByteStream);
  dart.setMethodSignature(byte_stream.ByteStream, () => ({
    __proto__: dart.getMethods(byte_stream.ByteStream.__proto__),
    toBytes: dart.fnType(async.Future$(typed_data.Uint8List), []),
    bytesToString: dart.fnType(async.Future$(core.String), [], [convert.Encoding]),
    toStringStream: dart.fnType(async.Stream$(core.String), [], [convert.Encoding])
  }));
  dart.setStaticMethodSignature(byte_stream.ByteStream, () => ['fromBytes']);
  dart.setLibraryUri(byte_stream.ByteStream, I[52]);
  var field$ = dart.privateName(multipart_file, "MultipartFile.field");
  var length$ = dart.privateName(multipart_file, "MultipartFile.length");
  var filename$ = dart.privateName(multipart_file, "MultipartFile.filename");
  var contentType$ = dart.privateName(multipart_file, "MultipartFile.contentType");
  var _isFinalized = dart.privateName(multipart_file, "_isFinalized");
  var _stream = dart.privateName(multipart_file, "_stream");
  multipart_file.MultipartFile = class MultipartFile extends core.Object {
    get field() {
      return this[field$];
    }
    set field(value) {
      super.field = value;
    }
    get length() {
      return this[length$];
    }
    set length(value) {
      super.length = value;
    }
    get filename() {
      return this[filename$];
    }
    set filename(value) {
      super.filename = value;
    }
    get contentType() {
      return this[contentType$];
    }
    set contentType(value) {
      super.contentType = value;
    }
    get isFinalized() {
      return this[_isFinalized];
    }
    static ['_#new#tearOff'](field, stream, length, opts) {
      let filename = opts && 'filename' in opts ? opts.filename : null;
      let contentType = opts && 'contentType' in opts ? opts.contentType : null;
      return new multipart_file.MultipartFile.new(field, stream, length, {filename: filename, contentType: contentType});
    }
    static fromBytes(field, value, opts) {
      let filename = opts && 'filename' in opts ? opts.filename : null;
      let contentType = opts && 'contentType' in opts ? opts.contentType : null;
      let stream = byte_stream.ByteStream.fromBytes(value);
      return new multipart_file.MultipartFile.new(field, stream, value[$length], {filename: filename, contentType: contentType});
    }
    static ['_#fromBytes#tearOff'](field, value, opts) {
      let filename = opts && 'filename' in opts ? opts.filename : null;
      let contentType = opts && 'contentType' in opts ? opts.contentType : null;
      return multipart_file.MultipartFile.fromBytes(field, value, {filename: filename, contentType: contentType});
    }
    static fromString(field, value, opts) {
      let filename = opts && 'filename' in opts ? opts.filename : null;
      let contentType = opts && 'contentType' in opts ? opts.contentType : null;
      contentType == null ? contentType = new media_type.MediaType.new("text", "plain") : null;
      let encoding = utils.encodingForCharset(contentType.parameters[$_get]("charset"), convert.utf8);
      contentType = contentType.change({parameters: new (T$.IdentityMapOfString$String()).from(["charset", encoding.name])});
      return multipart_file.MultipartFile.fromBytes(field, encoding.encode(value), {filename: filename, contentType: contentType});
    }
    static ['_#fromString#tearOff'](field, value, opts) {
      let filename = opts && 'filename' in opts ? opts.filename : null;
      let contentType = opts && 'contentType' in opts ? opts.contentType : null;
      return multipart_file.MultipartFile.fromString(field, value, {filename: filename, contentType: contentType});
    }
    static fromPath(field, filePath, opts) {
      let filename = opts && 'filename' in opts ? opts.filename : null;
      let contentType = opts && 'contentType' in opts ? opts.contentType : null;
      return multipart_file_stub.multipartFileFromPath(field, filePath, {filename: filename, contentType: contentType});
    }
    finalize() {
      if (this.isFinalized) {
        dart.throw(new core.StateError.new("Can't finalize a finalized MultipartFile."));
      }
      this[_isFinalized] = true;
      return this[_stream];
    }
  };
  (multipart_file.MultipartFile.new = function(field, stream, length, opts) {
    let t19;
    let filename = opts && 'filename' in opts ? opts.filename : null;
    let contentType = opts && 'contentType' in opts ? opts.contentType : null;
    this[_isFinalized] = false;
    this[field$] = field;
    this[length$] = length;
    this[filename$] = filename;
    this[_stream] = utils.toByteStream(stream);
    this[contentType$] = (t19 = contentType, t19 == null ? new media_type.MediaType.new("application", "octet-stream") : t19);
    ;
  }).prototype = multipart_file.MultipartFile.prototype;
  dart.addTypeTests(multipart_file.MultipartFile);
  dart.addTypeCaches(multipart_file.MultipartFile);
  dart.setMethodSignature(multipart_file.MultipartFile, () => ({
    __proto__: dart.getMethods(multipart_file.MultipartFile.__proto__),
    finalize: dart.fnType(byte_stream.ByteStream, [])
  }));
  dart.setStaticMethodSignature(multipart_file.MultipartFile, () => ['fromBytes', 'fromString', 'fromPath']);
  dart.setGetterSignature(multipart_file.MultipartFile, () => ({
    __proto__: dart.getGetters(multipart_file.MultipartFile.__proto__),
    isFinalized: core.bool
  }));
  dart.setLibraryUri(multipart_file.MultipartFile, I[53]);
  dart.setFieldSignature(multipart_file.MultipartFile, () => ({
    __proto__: dart.getFields(multipart_file.MultipartFile.__proto__),
    field: dart.finalFieldType(core.String),
    length: dart.finalFieldType(core.int),
    filename: dart.finalFieldType(dart.nullable(core.String)),
    contentType: dart.finalFieldType(media_type.MediaType),
    [_stream]: dart.finalFieldType(byte_stream.ByteStream),
    [_isFinalized]: dart.fieldType(core.bool)
  }));
  var fields = dart.privateName(multipart_request, "MultipartRequest.fields");
  var files = dart.privateName(multipart_request, "MultipartRequest.files");
  var _headerForField = dart.privateName(multipart_request, "_headerForField");
  var _headerForFile = dart.privateName(multipart_request, "_headerForFile");
  var _boundaryString = dart.privateName(multipart_request, "_boundaryString");
  var _finalize = dart.privateName(multipart_request, "_finalize");
  var _browserEncode = dart.privateName(multipart_request, "_browserEncode");
  multipart_request.MultipartRequest = class MultipartRequest extends base_request.BaseRequest {
    get fields() {
      return this[fields];
    }
    set fields(value) {
      super.fields = value;
    }
    get files() {
      return this[files];
    }
    set files(value) {
      super.files = value;
    }
    static ['_#new#tearOff'](method, url) {
      return new multipart_request.MultipartRequest.new(method, url);
    }
    get contentLength() {
      let length = 0;
      this.fields[$forEach](dart.fn((name, value) => {
        length = length + ("--".length + 70 + "\r\n".length + convert.utf8.encode(this[_headerForField](name, value))[$length] + convert.utf8.encode(value)[$length] + "\r\n".length);
      }, T$.StringAndStringTovoid()));
      for (let file of this.files) {
        length = length + ("--".length + 70 + "\r\n".length + convert.utf8.encode(this[_headerForFile](file))[$length] + file.length + "\r\n".length);
      }
      return length + "--".length + 70 + "--\r\n".length;
    }
    set contentLength(value) {
      dart.throw(new core.UnsupportedError.new("Cannot set the contentLength property of " + "multipart requests."));
    }
    finalize() {
      let boundary = this[_boundaryString]();
      this.headers[$_set]("content-type", "multipart/form-data; boundary=" + boundary);
      super.finalize();
      return new byte_stream.ByteStream.new(this[_finalize](boundary));
    }
    [_finalize](boundary) {
      return new (T$._AsyncStarImplOfListOfint()).new((function* _finalize(stream) {
        let line = C[34] || CT.C34;
        let separator = convert.utf8.encode("--" + boundary + "\r\n");
        let close = convert.utf8.encode("--" + boundary + "--\r\n");
        for (let field of this.fields[$entries]) {
          if (stream.add(separator)) return;
          yield;
          if (stream.add(convert.utf8.encode(this[_headerForField](field.key, field.value)))) return;
          yield;
          if (stream.add(convert.utf8.encode(field.value))) return;
          yield;
          if (stream.add(line)) return;
          yield;
        }
        for (let file of this.files) {
          if (stream.add(separator)) return;
          yield;
          if (stream.add(convert.utf8.encode(this[_headerForFile](file)))) return;
          yield;
          if (stream.addStream(file.finalize())) return;
          yield;
          if (stream.add(line)) return;
          yield;
        }
        if (stream.add(close)) return;
        yield;
      }).bind(this)).stream;
    }
    [_headerForField](name, value) {
      let header = "content-disposition: form-data; name=\"" + this[_browserEncode](name) + "\"";
      if (!utils.isPlainAscii(value)) {
        header = header + "\r\n" + "content-type: text/plain; charset=utf-8\r\n" + "content-transfer-encoding: binary";
      }
      return header + "\r\n\r\n";
    }
    [_headerForFile](file) {
      let header = "content-type: " + dart.str(file.contentType) + "\r\n" + "content-disposition: form-data; name=\"" + this[_browserEncode](file.field) + "\"";
      if (file.filename != null) {
        header = header + "; filename=\"" + this[_browserEncode](dart.nullCheck(file.filename)) + "\"";
      }
      return header + "\r\n\r\n";
    }
    [_browserEncode](value) {
      return value[$replaceAll](multipart_request._newlineRegExp, "%0D%0A")[$replaceAll]("\"", "%22");
    }
    [_boundaryString]() {
      let prefix = "dart-http-boundary-";
      let list = T$.ListOfint().generate(70 - prefix.length, dart.fn(index => boundary_characters.boundaryCharacters[$_get](multipart_request.MultipartRequest._random.nextInt(boundary_characters.boundaryCharacters[$length])), T$.intToint()), {growable: false});
      return prefix + core.String.fromCharCodes(list);
    }
  };
  (multipart_request.MultipartRequest.new = function(method, url) {
    this[fields] = new (T$.IdentityMapOfString$String()).new();
    this[files] = T$.JSArrayOfMultipartFile().of([]);
    multipart_request.MultipartRequest.__proto__.new.call(this, method, url);
    ;
  }).prototype = multipart_request.MultipartRequest.prototype;
  dart.addTypeTests(multipart_request.MultipartRequest);
  dart.addTypeCaches(multipart_request.MultipartRequest);
  dart.setMethodSignature(multipart_request.MultipartRequest, () => ({
    __proto__: dart.getMethods(multipart_request.MultipartRequest.__proto__),
    [_finalize]: dart.fnType(async.Stream$(core.List$(core.int)), [core.String]),
    [_headerForField]: dart.fnType(core.String, [core.String, core.String]),
    [_headerForFile]: dart.fnType(core.String, [multipart_file.MultipartFile]),
    [_browserEncode]: dart.fnType(core.String, [core.String]),
    [_boundaryString]: dart.fnType(core.String, [])
  }));
  dart.setGetterSignature(multipart_request.MultipartRequest, () => ({
    __proto__: dart.getGetters(multipart_request.MultipartRequest.__proto__),
    contentLength: core.int
  }));
  dart.setLibraryUri(multipart_request.MultipartRequest, I[54]);
  dart.setFieldSignature(multipart_request.MultipartRequest, () => ({
    __proto__: dart.getFields(multipart_request.MultipartRequest.__proto__),
    fields: dart.finalFieldType(core.Map$(core.String, core.String)),
    files: dart.finalFieldType(core.List$(multipart_file.MultipartFile))
  }));
  dart.setStaticFieldSignature(multipart_request.MultipartRequest, () => ['_boundaryLength', '_random']);
  dart.defineLazy(multipart_request.MultipartRequest, {
    /*multipart_request.MultipartRequest._boundaryLength*/get _boundaryLength() {
      return 70;
    },
    /*multipart_request.MultipartRequest._random*/get _random() {
      return math.Random.new();
    }
  }, false);
  dart.defineLazy(multipart_request, {
    /*multipart_request._newlineRegExp*/get _newlineRegExp() {
      return core.RegExp.new("\\r\\n|\\r|\\n");
    }
  }, false);
  var stream$ = dart.privateName(streamed_response, "StreamedResponse.stream");
  streamed_response.StreamedResponse = class StreamedResponse extends base_response.BaseResponse {
    get stream() {
      return this[stream$];
    }
    set stream(value) {
      super.stream = value;
    }
    static ['_#new#tearOff'](stream, statusCode, opts) {
      let contentLength = opts && 'contentLength' in opts ? opts.contentLength : null;
      let request = opts && 'request' in opts ? opts.request : null;
      let headers = opts && 'headers' in opts ? opts.headers : C[32] || CT.C32;
      let isRedirect = opts && 'isRedirect' in opts ? opts.isRedirect : false;
      let persistentConnection = opts && 'persistentConnection' in opts ? opts.persistentConnection : true;
      let reasonPhrase = opts && 'reasonPhrase' in opts ? opts.reasonPhrase : null;
      return new streamed_response.StreamedResponse.new(stream, statusCode, {contentLength: contentLength, request: request, headers: headers, isRedirect: isRedirect, persistentConnection: persistentConnection, reasonPhrase: reasonPhrase});
    }
  };
  (streamed_response.StreamedResponse.new = function(stream, statusCode, opts) {
    let contentLength = opts && 'contentLength' in opts ? opts.contentLength : null;
    let request = opts && 'request' in opts ? opts.request : null;
    let headers = opts && 'headers' in opts ? opts.headers : C[32] || CT.C32;
    let isRedirect = opts && 'isRedirect' in opts ? opts.isRedirect : false;
    let persistentConnection = opts && 'persistentConnection' in opts ? opts.persistentConnection : true;
    let reasonPhrase = opts && 'reasonPhrase' in opts ? opts.reasonPhrase : null;
    this[stream$] = utils.toByteStream(stream);
    streamed_response.StreamedResponse.__proto__.new.call(this, statusCode, {contentLength: contentLength, request: request, headers: headers, isRedirect: isRedirect, persistentConnection: persistentConnection, reasonPhrase: reasonPhrase});
    ;
  }).prototype = streamed_response.StreamedResponse.prototype;
  dart.addTypeTests(streamed_response.StreamedResponse);
  dart.addTypeCaches(streamed_response.StreamedResponse);
  dart.setLibraryUri(streamed_response.StreamedResponse, I[55]);
  dart.setFieldSignature(streamed_response.StreamedResponse, () => ({
    __proto__: dart.getFields(streamed_response.StreamedResponse.__proto__),
    stream: dart.finalFieldType(byte_stream.ByteStream)
  }));
  const StatelessElement_SingleChildWidgetElementMixin$36$ = class StatelessElement_SingleChildWidgetElementMixin extends framework.StatelessElement {};
  (StatelessElement_SingleChildWidgetElementMixin$36$.new = function(widget) {
    nested.SingleChildWidgetElementMixin[dart.mixinNew].call(this);
    StatelessElement_SingleChildWidgetElementMixin$36$.__proto__.new.call(this, widget);
  }).prototype = StatelessElement_SingleChildWidgetElementMixin$36$.prototype;
  dart.applyMixin(StatelessElement_SingleChildWidgetElementMixin$36$, nested.SingleChildWidgetElementMixin);
  nested._NestedElement = class _NestedElement extends StatelessElement_SingleChildWidgetElementMixin$36$ {
    static ['_#new#tearOff'](widget) {
      return new nested._NestedElement.new(widget);
    }
    get widget() {
      return nested.Nested.as(super.widget);
    }
    build() {
      let t19, t19$, t19$0;
      let nestedHook = null;
      let nextNode = (t19$ = (t19 = this[_parent], t19 == null ? null : t19.injectedChild), t19$ == null ? this.widget[_child$] : t19$);
      for (let child of this.widget[_children][$reversed]) {
        nextNode = nestedHook = new nested._NestedHook.new({owner: this, wrappedWidget: child, injectedChild: nextNode});
      }
      if (nestedHook != null) {
        for (let node of this.nodes) {
          t19$0 = node;
          (() => {
            t19$0.wrappedChild = dart.nullCheck(nestedHook).wrappedWidget;
            t19$0.injectedChild = nestedHook.injectedChild;
            return t19$0;
          })();
          let next = nestedHook.injectedChild;
          if (nested._NestedHook.is(next)) {
            nestedHook = next;
          } else {
            break;
          }
        }
      }
      return dart.nullCheck(nextNode);
    }
  };
  (nested._NestedElement.new = function(widget) {
    this.nodes = T$.LinkedHashSetOf_NestedHookElement().new();
    nested._NestedElement.__proto__.new.call(this, widget);
    ;
  }).prototype = nested._NestedElement.prototype;
  dart.addTypeTests(nested._NestedElement);
  dart.addTypeCaches(nested._NestedElement);
  dart.setGetterSignature(nested._NestedElement, () => ({
    __proto__: dart.getGetters(nested._NestedElement.__proto__),
    widget: nested.Nested
  }));
  dart.setLibraryUri(nested._NestedElement, I[12]);
  dart.setFieldSignature(nested._NestedElement, () => ({
    __proto__: dart.getFields(nested._NestedElement.__proto__),
    nodes: dart.finalFieldType(core.Set$(nested._NestedHookElement))
  }));
  nested._NestedHook = class _NestedHook extends framework.StatelessWidget {
    static ['_#new#tearOff'](opts) {
      let injectedChild = opts && 'injectedChild' in opts ? opts.injectedChild : null;
      let wrappedWidget = opts && 'wrappedWidget' in opts ? opts.wrappedWidget : null;
      let owner = opts && 'owner' in opts ? opts.owner : null;
      return new nested._NestedHook.new({injectedChild: injectedChild, wrappedWidget: wrappedWidget, owner: owner});
    }
    createElement() {
      return new nested._NestedHookElement.new(this);
    }
    build(context) {
      return dart.throw(new core.StateError.new("handled internally"));
    }
  };
  (nested._NestedHook.new = function(opts) {
    let injectedChild = opts && 'injectedChild' in opts ? opts.injectedChild : null;
    let wrappedWidget = opts && 'wrappedWidget' in opts ? opts.wrappedWidget : null;
    let owner = opts && 'owner' in opts ? opts.owner : null;
    this.injectedChild = injectedChild;
    this.wrappedWidget = wrappedWidget;
    this.owner = owner;
    nested._NestedHook.__proto__.new.call(this);
    ;
  }).prototype = nested._NestedHook.prototype;
  dart.addTypeTests(nested._NestedHook);
  dart.addTypeCaches(nested._NestedHook);
  dart.setMethodSignature(nested._NestedHook, () => ({
    __proto__: dart.getMethods(nested._NestedHook.__proto__),
    createElement: dart.fnType(nested._NestedHookElement, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(nested._NestedHook, I[12]);
  dart.setFieldSignature(nested._NestedHook, () => ({
    __proto__: dart.getFields(nested._NestedHook.__proto__),
    wrappedWidget: dart.finalFieldType(nested.SingleChildWidget),
    injectedChild: dart.finalFieldType(dart.nullable(framework.Widget)),
    owner: dart.finalFieldType(nested._NestedElement)
  }));
  var _injectedChild = dart.privateName(nested, "_injectedChild");
  var _wrappedChild = dart.privateName(nested, "_wrappedChild");
  nested._NestedHookElement = class _NestedHookElement extends framework.StatelessElement {
    static ['_#new#tearOff'](widget) {
      return new nested._NestedHookElement.new(widget);
    }
    get widget() {
      return nested._NestedHook.as(super.widget);
    }
    get injectedChild() {
      return this[_injectedChild];
    }
    set injectedChild(value) {
      let previous = this[_injectedChild];
      if (nested._NestedHook.is(value) && nested._NestedHook.is(previous) && framework.Widget.canUpdate(value.wrappedWidget, previous.wrappedWidget)) {
        return;
      }
      if (!dart.equals(previous, value)) {
        this[_injectedChild] = value;
        this.visitChildren(dart.fn(e => e.markNeedsBuild(), T$.ElementTovoid()));
      }
    }
    get wrappedChild() {
      return this[_wrappedChild];
    }
    set wrappedChild(value) {
      if (!dart.equals(this[_wrappedChild], value)) {
        this[_wrappedChild] = value;
        this.markNeedsBuild();
      }
    }
    mount(parent, newSlot) {
      this.widget.owner.nodes.add(this);
      this[_wrappedChild] = this.widget.wrappedWidget;
      this[_injectedChild] = this.widget.injectedChild;
      super.mount(parent, newSlot);
    }
    unmount() {
      this.widget.owner.nodes.remove(this);
      super.unmount();
    }
    build() {
      return dart.nullCheck(this.wrappedChild);
    }
  };
  (nested._NestedHookElement.new = function(widget) {
    this[_injectedChild] = null;
    this[_wrappedChild] = null;
    nested._NestedHookElement.__proto__.new.call(this, widget);
    ;
  }).prototype = nested._NestedHookElement.prototype;
  dart.addTypeTests(nested._NestedHookElement);
  dart.addTypeCaches(nested._NestedHookElement);
  dart.setMethodSignature(nested._NestedHookElement, () => ({
    __proto__: dart.getMethods(nested._NestedHookElement.__proto__),
    mount: dart.fnType(dart.void, [dart.nullable(framework.Element), dart.dynamic])
  }));
  dart.setGetterSignature(nested._NestedHookElement, () => ({
    __proto__: dart.getGetters(nested._NestedHookElement.__proto__),
    widget: nested._NestedHook,
    injectedChild: dart.nullable(framework.Widget),
    wrappedChild: dart.nullable(nested.SingleChildWidget)
  }));
  dart.setSetterSignature(nested._NestedHookElement, () => ({
    __proto__: dart.getSetters(nested._NestedHookElement.__proto__),
    injectedChild: dart.nullable(framework.Widget),
    wrappedChild: dart.nullable(nested.SingleChildWidget)
  }));
  dart.setLibraryUri(nested._NestedHookElement, I[12]);
  dart.setFieldSignature(nested._NestedHookElement, () => ({
    __proto__: dart.getFields(nested._NestedHookElement.__proto__),
    [_injectedChild]: dart.fieldType(dart.nullable(framework.Widget)),
    [_wrappedChild]: dart.fieldType(dart.nullable(nested.SingleChildWidget))
  }));
  const StatefulElement_SingleChildWidgetElementMixin$36 = class StatefulElement_SingleChildWidgetElementMixin extends framework.StatefulElement {};
  (StatefulElement_SingleChildWidgetElementMixin$36.new = function(widget) {
    nested.SingleChildWidgetElementMixin[dart.mixinNew].call(this);
    StatefulElement_SingleChildWidgetElementMixin$36.__proto__.new.call(this, widget);
  }).prototype = StatefulElement_SingleChildWidgetElementMixin$36.prototype;
  dart.applyMixin(StatefulElement_SingleChildWidgetElementMixin$36, nested.SingleChildWidgetElementMixin);
  nested.SingleChildStatefulElement = class SingleChildStatefulElement extends StatefulElement_SingleChildWidgetElementMixin$36 {
    static ['_#new#tearOff'](widget) {
      return new nested.SingleChildStatefulElement.new(widget);
    }
    get widget() {
      return nested.SingleChildStatefulWidget.as(super.widget);
    }
    get state() {
      return T$.SingleChildStateOfSingleChildStatefulWidget().as(super.state);
    }
    build() {
      if (this[_parent] != null) {
        return this.state.buildWithChild(this, dart.nullCheck(dart.nullCheck(this[_parent]).injectedChild));
      }
      return super.build();
    }
  };
  (nested.SingleChildStatefulElement.new = function(widget) {
    nested.SingleChildStatefulElement.__proto__.new.call(this, widget);
    ;
  }).prototype = nested.SingleChildStatefulElement.prototype;
  dart.addTypeTests(nested.SingleChildStatefulElement);
  dart.addTypeCaches(nested.SingleChildStatefulElement);
  dart.setGetterSignature(nested.SingleChildStatefulElement, () => ({
    __proto__: dart.getGetters(nested.SingleChildStatefulElement.__proto__),
    widget: nested.SingleChildStatefulWidget,
    state: nested.SingleChildState$(nested.SingleChildStatefulWidget)
  }));
  dart.setLibraryUri(nested.SingleChildStatefulElement, I[12]);
  var builder$10 = dart.privateName(nested, "SingleChildBuilder.builder");
  nested.SingleChildBuilder = class SingleChildBuilder extends nested.SingleChildStatelessWidget {
    get builder() {
      return this[builder$10];
    }
    set builder(value) {
      super.builder = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      return new nested.SingleChildBuilder.new({key: key, builder: builder, child: child});
    }
    buildWithChild(context, child) {
      let t20, t19;
      t19 = context;
      t20 = child;
      return this.builder(t19, t20);
    }
  };
  (nested.SingleChildBuilder.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let builder = opts && 'builder' in opts ? opts.builder : null;
    let child = opts && 'child' in opts ? opts.child : null;
    this[builder$10] = builder;
    nested.SingleChildBuilder.__proto__.new.call(this, {key: key, child: child});
    ;
  }).prototype = nested.SingleChildBuilder.prototype;
  dart.addTypeTests(nested.SingleChildBuilder);
  dart.addTypeCaches(nested.SingleChildBuilder);
  dart.setMethodSignature(nested.SingleChildBuilder, () => ({
    __proto__: dart.getMethods(nested.SingleChildBuilder.__proto__),
    buildWithChild: dart.fnType(framework.Widget, [framework.BuildContext, dart.nullable(framework.Widget)])
  }));
  dart.setLibraryUri(nested.SingleChildBuilder, I[12]);
  dart.setFieldSignature(nested.SingleChildBuilder, () => ({
    __proto__: dart.getFields(nested.SingleChildBuilder.__proto__),
    builder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, dart.nullable(framework.Widget)]))
  }));
  nested.SingleChildStatelessWidgetMixin = class SingleChildStatelessWidgetMixin extends core.Object {};
  nested.SingleChildStatelessWidgetMixin[dart.mixinOn] = Object => class SingleChildStatelessWidgetMixin extends Object {
    get [_child$]() {
      return this.child;
    }
    createElement() {
      return new nested.SingleChildStatelessElement.new(this);
    }
    build(context) {
      return this.buildWithChild(context, this.child);
    }
  };
  (nested.SingleChildStatelessWidgetMixin[dart.mixinNew] = function() {
  }).prototype = nested.SingleChildStatelessWidgetMixin.prototype;
  dart.addTypeTests(nested.SingleChildStatelessWidgetMixin);
  dart.addTypeCaches(nested.SingleChildStatelessWidgetMixin);
  nested.SingleChildStatelessWidgetMixin[dart.implements] = () => [framework.StatelessWidget, nested.SingleChildStatelessWidget, core.Object];
  dart.setMethodSignature(nested.SingleChildStatelessWidgetMixin, () => ({
    __proto__: dart.getMethods(nested.SingleChildStatelessWidgetMixin.__proto__),
    createElement: dart.fnType(nested.SingleChildStatelessElement, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(nested.SingleChildStatelessWidgetMixin, () => ({
    __proto__: dart.getGetters(nested.SingleChildStatelessWidgetMixin.__proto__),
    [_child$]: dart.nullable(framework.Widget)
  }));
  dart.setLibraryUri(nested.SingleChildStatelessWidgetMixin, I[12]);
  nested.SingleChildStatefulWidgetMixin = class SingleChildStatefulWidgetMixin extends framework.StatefulWidget {};
  nested.SingleChildStatefulWidgetMixin[dart.mixinOn] = StatefulWidget => class SingleChildStatefulWidgetMixin extends StatefulWidget {
    createElement() {
      return new nested._SingleChildStatefulMixinElement.new(this);
    }
  };
  dart.addTypeTests(nested.SingleChildStatefulWidgetMixin);
  dart.addTypeCaches(nested.SingleChildStatefulWidgetMixin);
  nested.SingleChildStatefulWidgetMixin[dart.implements] = () => [nested.SingleChildWidget, framework.StatefulWidget];
  dart.setMethodSignature(nested.SingleChildStatefulWidgetMixin, () => ({
    __proto__: dart.getMethods(nested.SingleChildStatefulWidgetMixin.__proto__),
    createElement: dart.fnType(nested._SingleChildStatefulMixinElement, [])
  }));
  dart.setLibraryUri(nested.SingleChildStatefulWidgetMixin, I[12]);
  const _is_SingleChildStateMixin_default = Symbol('_is_SingleChildStateMixin_default');
  nested.SingleChildStateMixin$ = dart.generic(T => {
    class SingleChildStateMixin extends framework.State$(T) {}
    SingleChildStateMixin[dart.mixinOn] = State => class SingleChildStateMixin extends State {
      build(context) {
        return this.buildWithChild(context, dart.nullCheck(nested.SingleChildStatefulWidgetMixin.as(this.widget).child));
      }
    };
    dart.addTypeTests(SingleChildStateMixin);
    SingleChildStateMixin.prototype[_is_SingleChildStateMixin_default] = true;
    dart.addTypeCaches(SingleChildStateMixin);
    SingleChildStateMixin[dart.implements] = () => [framework.State$(T)];
    dart.setMethodSignature(SingleChildStateMixin, () => ({
      __proto__: dart.getMethods(SingleChildStateMixin.__proto__),
      build: dart.fnType(framework.Widget, [framework.BuildContext])
    }));
    dart.setLibraryUri(SingleChildStateMixin, I[12]);
    return SingleChildStateMixin;
  });
  nested.SingleChildStateMixin = nested.SingleChildStateMixin$();
  dart.addTypeTests(nested.SingleChildStateMixin, _is_SingleChildStateMixin_default);
  const StatefulElement_SingleChildWidgetElementMixin$36$ = class StatefulElement_SingleChildWidgetElementMixin extends framework.StatefulElement {};
  (StatefulElement_SingleChildWidgetElementMixin$36$.new = function(widget) {
    nested.SingleChildWidgetElementMixin[dart.mixinNew].call(this);
    StatefulElement_SingleChildWidgetElementMixin$36$.__proto__.new.call(this, widget);
  }).prototype = StatefulElement_SingleChildWidgetElementMixin$36$.prototype;
  dart.applyMixin(StatefulElement_SingleChildWidgetElementMixin$36$, nested.SingleChildWidgetElementMixin);
  nested._SingleChildStatefulMixinElement = class _SingleChildStatefulMixinElement extends StatefulElement_SingleChildWidgetElementMixin$36$ {
    static ['_#new#tearOff'](widget) {
      return new nested._SingleChildStatefulMixinElement.new(widget);
    }
    get widget() {
      return nested.SingleChildStatefulWidgetMixin.as(super.widget);
    }
    get state() {
      return T$.SingleChildStateMixinOfStatefulWidget().as(super.state);
    }
    build() {
      if (this[_parent] != null) {
        return this.state.buildWithChild(this, dart.nullCheck(dart.nullCheck(this[_parent]).injectedChild));
      }
      return super.build();
    }
  };
  (nested._SingleChildStatefulMixinElement.new = function(widget) {
    nested._SingleChildStatefulMixinElement.__proto__.new.call(this, widget);
    ;
  }).prototype = nested._SingleChildStatefulMixinElement.prototype;
  dart.addTypeTests(nested._SingleChildStatefulMixinElement);
  dart.addTypeCaches(nested._SingleChildStatefulMixinElement);
  dart.setGetterSignature(nested._SingleChildStatefulMixinElement, () => ({
    __proto__: dart.getGetters(nested._SingleChildStatefulMixinElement.__proto__),
    widget: nested.SingleChildStatefulWidgetMixin,
    state: nested.SingleChildStateMixin$(framework.StatefulWidget)
  }));
  dart.setLibraryUri(nested._SingleChildStatefulMixinElement, I[12]);
  nested.SingleChildInheritedElementMixin = class SingleChildInheritedElementMixin extends core.Object {};
  nested.SingleChildInheritedElementMixin[dart.mixinOn] = _SingleChildInheritedElementMixin$36InheritedElement$36SingleChildWidgetElementMixin => class SingleChildInheritedElementMixin extends _SingleChildInheritedElementMixin$36InheritedElement$36SingleChildWidgetElementMixin {
    build() {
      if (this[_parent] != null) {
        return dart.nullCheck(dart.nullCheck(this[_parent]).injectedChild);
      }
      return super.build();
    }
  };
  dart.addTypeTests(nested.SingleChildInheritedElementMixin);
  dart.addTypeCaches(nested.SingleChildInheritedElementMixin);
  nested.SingleChildInheritedElementMixin[dart.implements] = () => [nested.SingleChildWidgetElementMixin, framework.InheritedElement];
  dart.setMethodSignature(nested.SingleChildInheritedElementMixin, () => ({
    __proto__: dart.getMethods(nested.SingleChildInheritedElementMixin.__proto__),
    build: dart.fnType(framework.Widget, [])
  }));
  dart.setLibraryUri(nested.SingleChildInheritedElementMixin, I[12]);
  concurrent.concurrent = function concurrent$(Event) {
    return dart.fn((events, mapper) => merge['Merge|concurrentAsyncExpand'](Event, Event, events, mapper), dart.fnType(async.Stream$(Event), [async.Stream$(Event), dart.fnType(async.Stream$(Event), [Event])]));
  };
  const _is__ExhaustMapStreamTransformer_default = Symbol('_is__ExhaustMapStreamTransformer_default');
  droppable._ExhaustMapStreamTransformer$ = dart.generic(T => {
    var __t$StreamOfT = () => (__t$StreamOfT = dart.constFn(async.Stream$(T)))();
    var __t$StreamSubscriptionOfT = () => (__t$StreamSubscriptionOfT = dart.constFn(async.StreamSubscription$(T)))();
    var __t$VoidToStreamSubscriptionOfT = () => (__t$VoidToStreamSubscriptionOfT = dart.constFn(dart.fnType(__t$StreamSubscriptionOfT(), [])))();
    var __t$StreamSubscriptionOfTTodynamic = () => (__t$StreamSubscriptionOfTTodynamic = dart.constFn(dart.fnType(dart.dynamic, [__t$StreamSubscriptionOfT()])))();
    var __t$StreamControllerOfT = () => (__t$StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    var __t$TTovoid = () => (__t$TTovoid = dart.constFn(dart.fnType(dart.void, [T])))();
    class _ExhaustMapStreamTransformer extends async.StreamTransformerBase$(T, T) {
      static ['_#new#tearOff'](T, mapper) {
        return new (droppable._ExhaustMapStreamTransformer$(T)).new(mapper);
      }
      bind(stream) {
        __t$StreamOfT().as(stream);
        let subscription = null;
        function subscription$35get() {
          let t20;
          t20 = subscription;
          return t20 == null ? dart.throw(new _internal.LateError.localNI("subscription")) : t20;
        }
        dart.fn(subscription$35get, __t$VoidToStreamSubscriptionOfT());
        function subscription$35set(subscription$35param) {
          return subscription = subscription$35param;
        }
        dart.fn(subscription$35set, __t$StreamSubscriptionOfTTodynamic());
        let mappedSubscription = null;
        let controller = __t$StreamControllerOfT().new({onCancel: dart.fn(() => async.async(dart.void, function*() {
            let t22;
            yield (t22 = mappedSubscription, t22 == null ? null : t22.cancel());
            return subscription$35get().cancel();
          }), T$.VoidToFutureOfvoid()), sync: true});
        subscription$35set(stream.listen(dart.fn(data => {
          let t22;
          if (mappedSubscription != null) return;
          let mappedStream = null;
          mappedStream = (t22 = data, this.mapper(t22));
          mappedSubscription = mappedStream.listen(__t$TTovoid().as(dart.bind(controller, 'add')), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => mappedSubscription = null, T$.VoidTovoid())});
        }, __t$TTovoid()), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
            let t22;
            t22 = mappedSubscription;
            return t22 == null ? controller.close() : t22;
          }, T$.VoidTovoid())}));
        return controller.stream;
      }
    }
    (_ExhaustMapStreamTransformer.new = function(mapper) {
      this.mapper = mapper;
      _ExhaustMapStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = _ExhaustMapStreamTransformer.prototype;
    dart.addTypeTests(_ExhaustMapStreamTransformer);
    _ExhaustMapStreamTransformer.prototype[_is__ExhaustMapStreamTransformer_default] = true;
    dart.addTypeCaches(_ExhaustMapStreamTransformer);
    dart.setMethodSignature(_ExhaustMapStreamTransformer, () => ({
      __proto__: dart.getMethods(_ExhaustMapStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [dart.nullable(core.Object)])
    }));
    dart.setLibraryUri(_ExhaustMapStreamTransformer, I[56]);
    dart.setFieldSignature(_ExhaustMapStreamTransformer, () => ({
      __proto__: dart.getFields(_ExhaustMapStreamTransformer.__proto__),
      mapper: dart.finalFieldType(dart.fnType(async.Stream$(T), [T]))
    }));
    return _ExhaustMapStreamTransformer;
  });
  droppable._ExhaustMapStreamTransformer = droppable._ExhaustMapStreamTransformer$();
  dart.addTypeTests(droppable._ExhaustMapStreamTransformer, _is__ExhaustMapStreamTransformer_default);
  droppable.droppable = function droppable$(Event) {
    return dart.fn((events, mapper) => events.transform(Event, new (droppable._ExhaustMapStreamTransformer$(Event)).new(mapper)), dart.fnType(async.Stream$(Event), [async.Stream$(Event), dart.fnType(async.Stream$(Event), [Event])]));
  };
  restartable.restartable = function restartable$(Event) {
    return dart.fn((events, mapper) => $switch['Switch|switchMap'](Event, Event, events, mapper), dart.fnType(async.Stream$(Event), [async.Stream$(Event), dart.fnType(async.Stream$(Event), [Event])]));
  };
  sequential.sequential = function sequential$(Event) {
    return dart.fn((events, mapper) => events.asyncExpand(Event, mapper), dart.fnType(async.Stream$(Event), [async.Stream$(Event), dart.fnType(async.Stream$(Event), [Event])]));
  };
  equatable_config.EquatableConfig = class EquatableConfig extends core.Object {
    static get stringify() {
      let t22;
      if (equatable_config.EquatableConfig._stringify == null) {
        if (!dart.fn(() => {
          equatable_config.EquatableConfig._stringify = true;
          return true;
        }, T$.VoidTobool())()) dart.assertFailed(null, I[57], 23, 14, "() {\n        _stringify = true;\n        return true;\n      }()");
      }
      t22 = equatable_config.EquatableConfig._stringify;
      return t22 == null ? equatable_config.EquatableConfig._stringify = false : t22;
    }
    static set stringify(value) {
      return equatable_config.EquatableConfig._stringify = value;
    }
    static ['_#new#tearOff']() {
      return new equatable_config.EquatableConfig.new();
    }
  };
  (equatable_config.EquatableConfig.new = function() {
    ;
  }).prototype = equatable_config.EquatableConfig.prototype;
  dart.addTypeTests(equatable_config.EquatableConfig);
  dart.addTypeCaches(equatable_config.EquatableConfig);
  dart.setStaticGetterSignature(equatable_config.EquatableConfig, () => ['stringify']);
  dart.setStaticSetterSignature(equatable_config.EquatableConfig, () => ['stringify']);
  dart.setLibraryUri(equatable_config.EquatableConfig, I[58]);
  dart.setStaticFieldSignature(equatable_config.EquatableConfig, () => ['_stringify']);
  dart.defineLazy(equatable_config.EquatableConfig, {
    /*equatable_config.EquatableConfig._stringify*/get _stringify() {
      return null;
    },
    set _stringify(_) {}
  }, false);
  equatable_mixin.EquatableMixin = class EquatableMixin extends core.Object {};
  equatable_mixin.EquatableMixin[dart.mixinOn] = Object => {
    class EquatableMixin extends Object {
      get stringify() {
        return null;
      }
      _equals(other) {
        if (other == null) return false;
        return this === other || equatable_mixin.EquatableMixin.is(other) && this[$runtimeType]._equals(other[$runtimeType]) && equatable_utils.equals(this.props, other.props);
      }
      get hashCode() {
        return (this[$runtimeType].hashCode ^ equatable_utils.mapPropsToHashCode(this.props)) >>> 0;
      }
      toString() {
        switch (this.stringify) {
          case true:
            {
              return equatable_utils.mapPropsToString(this[$runtimeType], this.props);
            }
          case false:
            {
              return dart.str(this[$runtimeType]);
            }
          default:
            {
              return equatable_config.EquatableConfig.stringify === true ? equatable_utils.mapPropsToString(this[$runtimeType], this.props) : dart.str(this[$runtimeType]);
            }
        }
      }
    }
    dart.defineExtensionMethods(EquatableMixin, ['_equals', 'toString']);
    dart.defineExtensionAccessors(EquatableMixin, ['hashCode']);
    return EquatableMixin;
  };
  (equatable_mixin.EquatableMixin[dart.mixinNew] = function() {
  }).prototype = equatable_mixin.EquatableMixin.prototype;
  dart.addTypeTests(equatable_mixin.EquatableMixin);
  dart.addTypeCaches(equatable_mixin.EquatableMixin);
  equatable_mixin.EquatableMixin[dart.implements] = () => [core.Object];
  dart.setGetterSignature(equatable_mixin.EquatableMixin, () => ({
    __proto__: dart.getGetters(equatable_mixin.EquatableMixin.__proto__),
    stringify: dart.nullable(core.bool)
  }));
  dart.setLibraryUri(equatable_mixin.EquatableMixin, I[59]);
  async_map['AsyncMap|asyncMapBuffer'] = function AsyncMap$124asyncMapBuffer(T, S, $this, convert) {
    let t23;
    let workFinished = (t23 = T$.StreamControllerOfvoid().new(), (() => {
      t23.add(null);
      return t23;
    })());
    return async_map['AsyncMap|_asyncMapThen'](core.List$(T), S, rate_limit['RateLimit|buffer'](T, $this, workFinished.stream), convert, T$.voidTovoid().as(dart.bind(workFinished, 'add')));
  };
  async_map['AsyncMap|get#asyncMapBuffer'] = function AsyncMap$124get$35asyncMapBuffer(T, $this) {
    return dart.fn((S, convert) => async_map['AsyncMap|asyncMapBuffer'](T, S, $this, convert), dart.gFnType(S => {
      var __t$StreamOfS = () => (__t$StreamOfS = dart.constFn(async.Stream$(S)))();
      var __t$FutureOfS = () => (__t$FutureOfS = dart.constFn(async.Future$(S)))();
      return [__t$StreamOfS(), [dart.fnType(__t$FutureOfS(), [core.List$(T)])]];
    }, S => {
      var __t$StreamOfS = () => (__t$StreamOfS = dart.constFn(async.Stream$(S)))();
      var __t$FutureOfS = () => (__t$FutureOfS = dart.constFn(async.Future$(S)))();
      return [T$.ObjectN()];
    }));
  };
  async_map['AsyncMap|asyncMapSample'] = function AsyncMap$124asyncMapSample(T, S, $this, convert) {
    let t25;
    let workFinished = (t25 = T$.StreamControllerOfvoid().new(), (() => {
      t25.add(null);
      return t25;
    })());
    return async_map['AsyncMap|_asyncMapThen'](T, S, aggregate_sample['AggregateSample|aggregateSample'](T, T, $this, workFinished.stream, dart.gbind(C[35] || CT.C35, T)), convert, T$.voidTovoid().as(dart.bind(workFinished, 'add')));
  };
  async_map['AsyncMap|get#asyncMapSample'] = function AsyncMap$124get$35asyncMapSample(T, $this) {
    return dart.fn((S, convert) => async_map['AsyncMap|asyncMapSample'](T, S, $this, convert), dart.gFnType(S => {
      var __t$StreamOfS = () => (__t$StreamOfS = dart.constFn(async.Stream$(S)))();
      var __t$FutureOfS = () => (__t$FutureOfS = dart.constFn(async.Future$(S)))();
      return [__t$StreamOfS(), [dart.fnType(__t$FutureOfS(), [T])]];
    }, S => {
      var __t$StreamOfS = () => (__t$StreamOfS = dart.constFn(async.Stream$(S)))();
      var __t$FutureOfS = () => (__t$FutureOfS = dart.constFn(async.Future$(S)))();
      return [T$.ObjectN()];
    }));
  };
  async_map['AsyncMap|concurrentAsyncMap'] = function AsyncMap$124concurrentAsyncMap(T, S, $this, convert) {
    let valuesWaiting = 0;
    let sourceDone = false;
    return from_handlers['TransformByHandlers|transformByHandlers'](T, S, $this, {onData: dart.fn((element, sink) => {
        valuesWaiting = valuesWaiting + 1;
        dart.fn(() => async.async(core.Null, function*() {
          try {
            sink.add(yield convert(element));
          } catch (e$) {
            let e = dart.getThrown(e$);
            let st = dart.stackTrace(e$);
            if (core.Object.is(e)) {
              sink.addError(e, st);
            } else
              throw e$;
          }
          valuesWaiting = valuesWaiting - 1;
          if (valuesWaiting <= 0 && sourceDone) sink.close();
        }), T$.VoidToFutureOfNull())();
      }, dart.fnType(dart.void, [T, async.EventSink$(S)])), onDone: dart.fn(sink => {
        sourceDone = true;
        if (valuesWaiting <= 0) sink.close();
      }, dart.fnType(dart.void, [async.EventSink$(S)]))});
  };
  async_map['AsyncMap|get#concurrentAsyncMap'] = function AsyncMap$124get$35concurrentAsyncMap(T, $this) {
    return dart.fn((S, convert) => async_map['AsyncMap|concurrentAsyncMap'](T, S, $this, convert), dart.gFnType(S => {
      var __t$StreamOfS = () => (__t$StreamOfS = dart.constFn(async.Stream$(S)))();
      var __t$FutureOrOfS = () => (__t$FutureOrOfS = dart.constFn(async.FutureOr$(S)))();
      return [__t$StreamOfS(), [dart.fnType(__t$FutureOrOfS(), [T])]];
    }, S => {
      var __t$StreamOfS = () => (__t$StreamOfS = dart.constFn(async.Stream$(S)))();
      var __t$FutureOrOfS = () => (__t$FutureOrOfS = dart.constFn(async.FutureOr$(S)))();
      return [T$.ObjectN()];
    }));
  };
  async_map['AsyncMap|_asyncMapThen'] = function AsyncMap$124_asyncMapThen(T, S, $this, convert, then) {
    let pendingEvent = null;
    return from_handlers['TransformByHandlers|transformByHandlers'](T, S, $this, {onData: dart.fn((event, sink) => {
        pendingEvent = convert(event).then(dart.void, dart.fnType(dart.void, [S]).as(dart.bind(sink, 'add'))).catchError(dart.bind(sink, 'addError')).then(dart.void, then);
      }, dart.fnType(dart.void, [T, async.EventSink$(S)])), onDone: dart.fn(sink => {
        if (pendingEvent != null) {
          dart.nullCheck(pendingEvent).then(dart.void, dart.fn(_ => sink.close(), T$.voidTovoid()));
        } else {
          sink.close();
        }
      }, dart.fnType(dart.void, [async.EventSink$(S)]))});
  };
  async_map['AsyncMap|get#_asyncMapThen'] = function AsyncMap$124get$35_asyncMapThen(T, $this) {
    return dart.fn((S, convert, then) => async_map['AsyncMap|_asyncMapThen'](T, S, $this, convert, then), dart.gFnType(S => {
      var __t$StreamOfS = () => (__t$StreamOfS = dart.constFn(async.Stream$(S)))();
      var __t$FutureOfS = () => (__t$FutureOfS = dart.constFn(async.Future$(S)))();
      return [__t$StreamOfS(), [dart.fnType(__t$FutureOfS(), [T]), T$.voidTovoid()]];
    }, S => {
      var __t$StreamOfS = () => (__t$StreamOfS = dart.constFn(async.Stream$(S)))();
      var __t$FutureOfS = () => (__t$FutureOfS = dart.constFn(async.Future$(S)))();
      return [T$.ObjectN()];
    }));
  };
  async_map._dropPrevious = function _dropPrevious(T, event, _) {
    return event;
  };
  combine_latest['CombineLatest|combineLatest'] = function CombineLatest$124combineLatest(T, T2, S, $this, other, combine) {
    let controller = $this.isBroadcast ? async.StreamController$(S).broadcast({sync: true}) : async.StreamController$(S).new({sync: true});
    other = $this.isBroadcast && !other.isBroadcast ? other.asBroadcastStream() : other;
    let sourceSubscription = null;
    let otherSubscription = null;
    let sourceDone = false;
    let otherDone = false;
    let latestSource = null;
    let latestSource$35isSet = false;
    function latestSource$35get() {
      return latestSource$35isSet ? latestSource : dart.throw(new _internal.LateError.localNI("latestSource"));
    }
    dart.fn(latestSource$35get, dart.fnType(T, []));
    function latestSource$35set(latestSource$35param) {
      latestSource$35isSet = true;
      return latestSource = latestSource$35param;
    }
    dart.fn(latestSource$35set, dart.fnType(dart.dynamic, [T]));
    let latestOther = null;
    let latestOther$35isSet = false;
    function latestOther$35get() {
      return latestOther$35isSet ? latestOther : dart.throw(new _internal.LateError.localNI("latestOther"));
    }
    dart.fn(latestOther$35get, dart.fnType(T2, []));
    function latestOther$35set(latestOther$35param) {
      latestOther$35isSet = true;
      return latestOther = latestOther$35param;
    }
    dart.fn(latestOther$35set, dart.fnType(dart.dynamic, [T2]));
    let sourceStarted = false;
    let otherStarted = false;
    function emitCombined() {
      if (!sourceStarted || !otherStarted) return;
      let result = null;
      try {
        result = combine(latestSource$35get(), latestOther$35get());
      } catch (e$) {
        let e = dart.getThrown(e$);
        let s = dart.stackTrace(e$);
        if (core.Object.is(e)) {
          controller.addError(e, s);
          return;
        } else
          throw e$;
      }
      if (async.Future$(S).is(result)) {
        dart.nullCheck(sourceSubscription).pause();
        dart.nullCheck(otherSubscription).pause();
        result.then(dart.void, dart.fnType(dart.void, [S]).as(dart.bind(controller, 'add')), {onError: dart.bind(controller, 'addError')}).whenComplete(dart.fn(() => {
          dart.nullCheck(sourceSubscription).resume();
          dart.nullCheck(otherSubscription).resume();
        }, T$.VoidToNull()));
      } else {
        controller.add(result);
      }
    }
    dart.fn(emitCombined, T$.VoidTovoid());
    controller.onListen = dart.fn(() => {
      let t41;
      if (!(sourceSubscription == null)) dart.assertFailed(null, I[60], 81, 14, "sourceSubscription == null");
      sourceSubscription = $this.listen(dart.fn(s => {
        sourceStarted = true;
        latestSource$35set(s);
        emitCombined();
      }, dart.fnType(dart.void, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
          sourceDone = true;
          if (otherDone) {
            controller.close();
          } else if (!sourceStarted) {
            dart.nullCheck(otherSubscription).cancel();
            controller.close();
          }
        }, T$.VoidTovoid())});
      otherSubscription = other.listen(dart.fn(o => {
        otherStarted = true;
        latestOther$35set(o);
        emitCombined();
      }, dart.fnType(dart.void, [T2])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
          otherDone = true;
          if (sourceDone) {
            controller.close();
          } else if (!otherStarted) {
            dart.nullCheck(sourceSubscription).cancel();
            controller.close();
          }
        }, T$.VoidTovoid())});
      if (!$this.isBroadcast) {
        t41 = controller;
        (() => {
          t41.onPause = dart.fn(() => {
            dart.nullCheck(sourceSubscription).pause();
            dart.nullCheck(otherSubscription).pause();
          }, T$.VoidTovoid());
          t41.onResume = dart.fn(() => {
            dart.nullCheck(sourceSubscription).resume();
            dart.nullCheck(otherSubscription).resume();
          }, T$.VoidTovoid());
          return t41;
        })();
      }
      controller.onCancel = dart.fn(() => {
        let t41;
        let cancels = (t41 = T$.JSArrayOfFutureOfvoid().of([dart.nullCheck(sourceSubscription).cancel(), dart.nullCheck(otherSubscription).cancel()]), (() => {
          t41[$removeWhere](dart.fn(f => f == null, T$.ObjectNTobool()));
          return t41;
        })());
        sourceSubscription = null;
        otherSubscription = null;
        return async.Future.wait(dart.void, cancels).then(dart.void, dart.fn(_ => null, T$.ListOfvoidToNull()));
      }, T$.VoidToFutureOfvoid());
    }, T$.VoidTovoid());
    return controller.stream;
  };
  combine_latest['CombineLatest|get#combineLatest'] = function CombineLatest$124get$35combineLatest(T, $this) {
    return dart.fn((T2, S, other, combine) => combine_latest['CombineLatest|combineLatest'](T, T2, S, $this, other, combine), dart.gFnType((T2, S) => {
      var __t$StreamOfT2 = () => (__t$StreamOfT2 = dart.constFn(async.Stream$(T2)))();
      var __t$StreamOfS = () => (__t$StreamOfS = dart.constFn(async.Stream$(S)))();
      var __t$FutureOrOfS = () => (__t$FutureOrOfS = dart.constFn(async.FutureOr$(S)))();
      return [__t$StreamOfS(), [__t$StreamOfT2(), dart.fnType(__t$FutureOrOfS(), [T, T2])]];
    }, (T2, S) => {
      var __t$StreamOfT2 = () => (__t$StreamOfT2 = dart.constFn(async.Stream$(T2)))();
      var __t$StreamOfS = () => (__t$StreamOfS = dart.constFn(async.Stream$(S)))();
      var __t$FutureOrOfS = () => (__t$FutureOrOfS = dart.constFn(async.FutureOr$(S)))();
      return [T$.ObjectN(), T$.ObjectN()];
    }));
  };
  combine_latest['CombineLatest|combineLatestAll'] = function CombineLatest$124combineLatestAll(T, $this, others) {
    let controller = $this.isBroadcast ? async.StreamController$(core.List$(T)).broadcast({sync: true}) : async.StreamController$(core.List$(T)).new({sync: true});
    let allStreams = (() => {
      let t43 = _interceptors.JSArray$(async.Stream$(T)).of([$this]);
      for (let other of others)
        t43.push(!$this.isBroadcast || other.isBroadcast ? other : other.asBroadcastStream());
      return t43;
    })();
    controller.onListen = dart.fn(() => {
      let t44;
      let subscriptions = _interceptors.JSArray$(async.StreamSubscription$(T)).of([]);
      let latestData = core.List$(dart.nullable(T)).filled(allStreams[$length], null);
      let hasEmitted = T$.LinkedHashSetOfint().new();
      function handleData(index, data) {
        latestData[$_set](index, data);
        hasEmitted.add(index);
        if (hasEmitted[$length] === allStreams[$length]) {
          controller.add(core.List$(T).from(latestData));
        }
      }
      dart.fn(handleData, dart.fnType(dart.void, [core.int, T]));
      let streamId = 0;
      for (let stream of allStreams) {
        let index = streamId;
        let subscription = stream.listen(dart.fn(data => handleData(index, data), dart.fnType(dart.void, [T])), {onError: dart.bind(controller, 'addError')});
        subscription.onDone(dart.fn(() => {
          if (!subscriptions[$contains](subscription)) dart.assertFailed(null, I[60], 208, 18, "subscriptions.contains(subscription)");
          subscriptions[$remove](subscription);
          if (subscriptions[$isEmpty] || !hasEmitted.contains(index)) {
            controller.close();
          }
        }, T$.VoidTovoid()));
        subscriptions[$add](subscription);
        streamId = streamId + 1;
      }
      if (!$this.isBroadcast) {
        t44 = controller;
        (() => {
          t44.onPause = dart.fn(() => {
            for (let subscription of subscriptions) {
              subscription.pause();
            }
          }, T$.VoidTovoid());
          t44.onResume = dart.fn(() => {
            for (let subscription of subscriptions) {
              subscription.resume();
            }
          }, T$.VoidTovoid());
          return t44;
        })();
      }
      controller.onCancel = dart.fn(() => {
        let t45;
        if (subscriptions[$isEmpty]) return null;
        let cancels = (t45 = (() => {
          let t44 = T$.JSArrayOfFutureOfvoid().of([]);
          for (let s of subscriptions)
            t44.push(s.cancel());
          return t44;
        })(), (() => {
          t45[$removeWhere](dart.fn(f => f == null, T$.ObjectNTobool()));
          return t45;
        })());
        if (cancels[$isEmpty]) return null;
        return async.Future.wait(dart.void, cancels).then(dart.void, dart.fn(_ => null, T$.ListOfvoidToNull()));
      }, T$.VoidToFutureNOfvoid());
    }, T$.VoidTovoid());
    return controller.stream;
  };
  combine_latest['CombineLatest|get#combineLatestAll'] = function CombineLatest$124get$35combineLatestAll(T, $this) {
    return dart.fn(others => combine_latest['CombineLatest|combineLatestAll'](T, $this, others), dart.fnType(async.Stream$(core.List$(T)), [core.Iterable$(async.Stream$(T))]));
  };
  concatenate['Concatenate|followedBy'] = function Concatenate$124followedBy(T, $this, next) {
    let controller = $this.isBroadcast ? async.StreamController$(T).broadcast({sync: true}) : async.StreamController$(T).new({sync: true});
    next = $this.isBroadcast && !next.isBroadcast ? next.asBroadcastStream() : next;
    let subscription = null;
    let currentStream = $this;
    let thisDone = false;
    let secondDone = false;
    let currentDoneHandler = null;
    function currentDoneHandler$35get() {
      let t48;
      t48 = currentDoneHandler;
      return t48 == null ? dart.throw(new _internal.LateError.localNI("currentDoneHandler")) : t48;
    }
    dart.fn(currentDoneHandler$35get, T$.VoidToFn());
    function currentDoneHandler$35set(currentDoneHandler$35param) {
      return currentDoneHandler = currentDoneHandler$35param;
    }
    dart.fn(currentDoneHandler$35set, T$.FnTodynamic());
    function listen() {
      subscription = currentStream.listen(dart.fnType(dart.void, [T]).as(dart.bind(controller, 'add')), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => currentDoneHandler$35get()(), T$.VoidTovoid())});
    }
    dart.fn(listen, T$.VoidTovoid());
    function onSecondDone() {
      secondDone = true;
      controller.close();
    }
    dart.fn(onSecondDone, T$.VoidTovoid());
    function onThisDone() {
      thisDone = true;
      currentStream = next;
      currentDoneHandler$35set(onSecondDone);
      listen();
    }
    dart.fn(onThisDone, T$.VoidTovoid());
    currentDoneHandler$35set(onThisDone);
    controller.onListen = dart.fn(() => {
      let t50;
      if (!(subscription == null)) dart.assertFailed(null, I[61], 58, 14, "subscription == null");
      listen();
      if (!$this.isBroadcast) {
        t50 = controller;
        (() => {
          t50.onPause = dart.fn(() => {
            if (!thisDone || !next.isBroadcast) return dart.nullCheck(subscription).pause();
            dart.nullCheck(subscription).cancel();
            subscription = null;
          }, T$.VoidTovoid());
          t50.onResume = dart.fn(() => {
            if (!thisDone || !next.isBroadcast) return dart.nullCheck(subscription).resume();
            listen();
          }, T$.VoidTovoid());
          return t50;
        })();
      }
      controller.onCancel = dart.fn(() => {
        if (secondDone) return null;
        let toCancel = dart.nullCheck(subscription);
        subscription = null;
        return toCancel.cancel();
      }, T$.VoidToFutureNOfvoid());
    }, T$.VoidTovoid());
    return controller.stream;
  };
  concatenate['Concatenate|get#followedBy'] = function Concatenate$124get$35followedBy(T, $this) {
    return dart.fn(next => concatenate['Concatenate|followedBy'](T, $this, next), dart.fnType(async.Stream$(T), [async.Stream$(T)]));
  };
  concatenate['Concatenate|startWith'] = function Concatenate$124startWith(T, $this, initial) {
    return concatenate['Concatenate|startWithStream'](T, $this, async.Future$(T).value(initial).asStream());
  };
  concatenate['Concatenate|get#startWith'] = function Concatenate$124get$35startWith(T, $this) {
    return dart.fn(initial => concatenate['Concatenate|startWith'](T, $this, initial), dart.fnType(async.Stream$(T), [T]));
  };
  concatenate['Concatenate|startWithMany'] = function Concatenate$124startWithMany(T, $this, initial) {
    return concatenate['Concatenate|startWithStream'](T, $this, async.Stream$(T).fromIterable(initial));
  };
  concatenate['Concatenate|get#startWithMany'] = function Concatenate$124get$35startWithMany(T, $this) {
    return dart.fn(initial => concatenate['Concatenate|startWithMany'](T, $this, initial), dart.fnType(async.Stream$(T), [core.Iterable$(T)]));
  };
  concatenate['Concatenate|startWithStream'] = function Concatenate$124startWithStream(T, $this, initial) {
    if ($this.isBroadcast && !initial.isBroadcast) {
      initial = initial.asBroadcastStream();
    }
    return concatenate['Concatenate|followedBy'](T, initial, $this);
  };
  concatenate['Concatenate|get#startWithStream'] = function Concatenate$124get$35startWithStream(T, $this) {
    return dart.fn(initial => concatenate['Concatenate|startWithStream'](T, $this, initial), dart.fnType(async.Stream$(T), [async.Stream$(T)]));
  };
  merge['Merge|merge'] = function Merge$124merge(T, $this, other) {
    return merge['Merge|mergeAll'](T, $this, _interceptors.JSArray$(async.Stream$(T)).of([other]));
  };
  merge['Merge|get#merge'] = function Merge$124get$35merge(T, $this) {
    return dart.fn(other => merge['Merge|merge'](T, $this, other), dart.fnType(async.Stream$(T), [async.Stream$(T)]));
  };
  merge['Merge|mergeAll'] = function Merge$124mergeAll(T, $this, others) {
    let controller = $this.isBroadcast ? async.StreamController$(T).broadcast({sync: true}) : async.StreamController$(T).new({sync: true});
    let allStreams = (() => {
      let t60 = _interceptors.JSArray$(async.Stream$(T)).of([$this]);
      for (let other of others)
        t60.push(!$this.isBroadcast || other.isBroadcast ? other : other.asBroadcastStream());
      return t60;
    })();
    controller.onListen = dart.fn(() => {
      let t61;
      let subscriptions = _interceptors.JSArray$(async.StreamSubscription$(T)).of([]);
      for (let stream of allStreams) {
        let subscription = stream.listen(dart.fnType(dart.void, [T]).as(dart.bind(controller, 'add')), {onError: dart.bind(controller, 'addError')});
        subscription.onDone(dart.fn(() => {
          subscriptions[$remove](subscription);
          if (subscriptions[$isEmpty]) controller.close();
        }, T$.VoidTovoid()));
        subscriptions[$add](subscription);
      }
      if (!$this.isBroadcast) {
        t61 = controller;
        (() => {
          t61.onPause = dart.fn(() => {
            for (let subscription of subscriptions) {
              subscription.pause();
            }
          }, T$.VoidTovoid());
          t61.onResume = dart.fn(() => {
            for (let subscription of subscriptions) {
              subscription.resume();
            }
          }, T$.VoidTovoid());
          return t61;
        })();
      }
      controller.onCancel = dart.fn(() => {
        let t62;
        if (subscriptions[$isEmpty]) return null;
        let cancels = (t62 = (() => {
          let t61 = T$.JSArrayOfFutureOfvoid().of([]);
          for (let s of subscriptions)
            t61.push(s.cancel());
          return t61;
        })(), (() => {
          t62[$removeWhere](dart.fn(f => f == null, T$.ObjectNTobool()));
          return t62;
        })());
        if (cancels[$isEmpty]) return null;
        return async.Future.wait(dart.void, cancels).then(dart.void, dart.fn(_ => null, T$.ListOfvoidToNull()));
      }, T$.VoidToFutureNOfvoid());
    }, T$.VoidTovoid());
    return controller.stream;
  };
  merge['Merge|get#mergeAll'] = function Merge$124get$35mergeAll(T, $this) {
    return dart.fn(others => merge['Merge|mergeAll'](T, $this, others), dart.fnType(async.Stream$(T), [core.Iterable$(async.Stream$(T))]));
  };
  merge['Merge|concurrentAsyncExpand'] = function Merge$124concurrentAsyncExpand(T, S, $this, convert) {
    return merge['_MergeExpanded|mergeExpanded'](S, $this.map(async.Stream$(S), convert));
  };
  merge['Merge|get#concurrentAsyncExpand'] = function Merge$124get$35concurrentAsyncExpand(T, $this) {
    return dart.fn((S, convert) => merge['Merge|concurrentAsyncExpand'](T, S, $this, convert), dart.gFnType(S => {
      var __t$StreamOfS = () => (__t$StreamOfS = dart.constFn(async.Stream$(S)))();
      return [__t$StreamOfS(), [dart.fnType(__t$StreamOfS(), [T])]];
    }, S => {
      var __t$StreamOfS = () => (__t$StreamOfS = dart.constFn(async.Stream$(S)))();
      return [T$.ObjectN()];
    }));
  };
  merge['_MergeExpanded|mergeExpanded'] = function _MergeExpanded$124mergeExpanded(T, $this) {
    let controller = $this.isBroadcast ? async.StreamController$(T).broadcast({sync: true}) : async.StreamController$(T).new({sync: true});
    controller.onListen = dart.fn(() => {
      let t66;
      let subscriptions = T$.JSArrayOfStreamSubscription().of([]);
      let outerSubscription = $this.listen(dart.fn(inner => {
        if ($this.isBroadcast && !inner.isBroadcast) {
          inner = inner.asBroadcastStream();
        }
        let subscription = inner.listen(dart.fnType(dart.void, [T]).as(dart.bind(controller, 'add')), {onError: dart.bind(controller, 'addError')});
        subscription.onDone(dart.fn(() => {
          subscriptions[$remove](subscription);
          if (subscriptions[$isEmpty]) controller.close();
        }, T$.VoidTovoid()));
        subscriptions[$add](subscription);
      }, dart.fnType(dart.void, [async.Stream$(T)])), {onError: dart.bind(controller, 'addError')});
      outerSubscription.onDone(dart.fn(() => {
        subscriptions[$remove](outerSubscription);
        if (subscriptions[$isEmpty]) controller.close();
      }, T$.VoidTovoid()));
      subscriptions[$add](outerSubscription);
      if (!$this.isBroadcast) {
        t66 = controller;
        (() => {
          t66.onPause = dart.fn(() => {
            for (let subscription of subscriptions) {
              subscription.pause();
            }
          }, T$.VoidTovoid());
          t66.onResume = dart.fn(() => {
            for (let subscription of subscriptions) {
              subscription.resume();
            }
          }, T$.VoidTovoid());
          return t66;
        })();
      }
      controller.onCancel = dart.fn(() => {
        let t67;
        if (subscriptions[$isEmpty]) return null;
        let cancels = (t67 = (() => {
          let t66 = T$.JSArrayOfFutureOfvoid().of([]);
          for (let s of subscriptions)
            t66.push(s.cancel());
          return t66;
        })(), (() => {
          t67[$removeWhere](dart.fn(f => f == null, T$.ObjectNTobool()));
          return t67;
        })());
        return async.Future.wait(dart.void, cancels).then(dart.void, dart.fn(_ => null, T$.ListOfvoidToNull()));
      }, T$.VoidToFutureNOfvoid());
    }, T$.VoidTovoid());
    return controller.stream;
  };
  merge['_MergeExpanded|get#mergeExpanded'] = function _MergeExpanded$124get$35mergeExpanded(T, $this) {
    return dart.fn(() => merge['_MergeExpanded|mergeExpanded'](T, $this), dart.fnType(async.Stream$(T), []));
  };
  rate_limit['RateLimit|debounce'] = function RateLimit$124debounce(T, $this, duration, opts) {
    let leading = opts && 'leading' in opts ? opts.leading : false;
    let trailing = opts && 'trailing' in opts ? opts.trailing : true;
    return rate_limit['RateLimit|_debounceAggregate'](T, T, $this, duration, dart.gbind(C[36] || CT.C36, T), {leading: leading, trailing: trailing});
  };
  rate_limit['RateLimit|get#debounce'] = function RateLimit$124get$35debounce(T, $this) {
    return dart.fn((duration, opts) => {
      let leading = opts && 'leading' in opts ? opts.leading : false;
      let trailing = opts && 'trailing' in opts ? opts.trailing : true;
      return rate_limit['RateLimit|debounce'](T, $this, duration, {leading: leading, trailing: trailing});
    }, dart.fnType(async.Stream$(T), [core.Duration], {leading: core.bool, trailing: core.bool}, {}));
  };
  rate_limit['RateLimit|debounceBuffer'] = function RateLimit$124debounceBuffer(T, $this, duration) {
    return rate_limit['RateLimit|_debounceAggregate'](T, core.List$(T), $this, duration, dart.gbind(C[37] || CT.C37, T), {leading: false, trailing: true});
  };
  rate_limit['RateLimit|get#debounceBuffer'] = function RateLimit$124get$35debounceBuffer(T, $this) {
    return dart.fn(duration => rate_limit['RateLimit|debounceBuffer'](T, $this, duration), dart.fnType(async.Stream$(core.List$(T)), [core.Duration]));
  };
  rate_limit['RateLimit|throttle'] = function RateLimit$124throttle(T, $this, duration, opts) {
    let trailing = opts && 'trailing' in opts ? opts.trailing : false;
    return trailing ? rate_limit['RateLimit|_throttleTrailing'](T, $this, duration) : rate_limit['RateLimit|_throttle'](T, $this, duration);
  };
  rate_limit['RateLimit|get#throttle'] = function RateLimit$124get$35throttle(T, $this) {
    return dart.fn((duration, opts) => {
      let trailing = opts && 'trailing' in opts ? opts.trailing : false;
      return rate_limit['RateLimit|throttle'](T, $this, duration, {trailing: trailing});
    }, dart.fnType(async.Stream$(T), [core.Duration], {trailing: core.bool}, {}));
  };
  rate_limit['RateLimit|_throttle'] = function RateLimit$124_throttle(T, $this, duration) {
    let timer = null;
    return from_handlers['TransformByHandlers|transformByHandlers'](T, T, $this, {onData: dart.fn((data, sink) => {
        if (timer == null) {
          sink.add(data);
          timer = async.Timer.new(duration, dart.fn(() => {
            timer = null;
          }, T$.VoidTovoid()));
        }
      }, dart.fnType(dart.void, [T, async.EventSink$(T)]))});
  };
  rate_limit['RateLimit|get#_throttle'] = function RateLimit$124get$35_throttle(T, $this) {
    return dart.fn(duration => rate_limit['RateLimit|_throttle'](T, $this, duration), dart.fnType(async.Stream$(T), [core.Duration]));
  };
  rate_limit['RateLimit|_throttleTrailing'] = function RateLimit$124_throttleTrailing(T, $this, duration) {
    let timer = null;
    let pending = null;
    let hasPending = false;
    let isDone = false;
    return from_handlers['TransformByHandlers|transformByHandlers'](T, T, $this, {onData: dart.fn((data, sink) => {
        function onTimer() {
          if (hasPending) {
            sink.add(T.as(pending));
            if (isDone) {
              sink.close();
            } else {
              timer = async.Timer.new(duration, onTimer);
              hasPending = false;
              pending = null;
            }
          } else {
            timer = null;
          }
        }
        dart.fn(onTimer, T$.VoidTovoid());
        if (timer == null) {
          sink.add(data);
          timer = async.Timer.new(duration, onTimer);
        } else {
          hasPending = true;
          pending = data;
        }
      }, dart.fnType(dart.void, [T, async.EventSink$(T)])), onDone: dart.fn(sink => {
        let t77;
        isDone = true;
        if (hasPending) return;
        sink.close();
        t77 = timer;
        t77 == null ? null : t77.cancel();
        timer = null;
      }, dart.fnType(dart.void, [async.EventSink$(T)]))});
  };
  rate_limit['RateLimit|get#_throttleTrailing'] = function RateLimit$124get$35_throttleTrailing(T, $this) {
    return dart.fn(duration => rate_limit['RateLimit|_throttleTrailing'](T, $this, duration), dart.fnType(async.Stream$(T), [core.Duration]));
  };
  rate_limit['RateLimit|audit'] = function RateLimit$124audit(T, $this, duration) {
    let timer = null;
    let shouldClose = false;
    let recentData = null;
    return from_handlers['TransformByHandlers|transformByHandlers'](T, T, $this, {onData: dart.fn((data, sink) => {
        recentData = data;
        timer == null ? timer = async.Timer.new(duration, dart.fn(() => {
          sink.add(recentData);
          timer = null;
          if (shouldClose) {
            sink.close();
          }
        }, T$.VoidTovoid())) : null;
      }, dart.fnType(dart.void, [T, async.EventSink$(T)])), onDone: dart.fn(sink => {
        if (timer != null) {
          shouldClose = true;
        } else {
          sink.close();
        }
      }, dart.fnType(dart.void, [async.EventSink$(T)]))});
  };
  rate_limit['RateLimit|get#audit'] = function RateLimit$124get$35audit(T, $this) {
    return dart.fn(duration => rate_limit['RateLimit|audit'](T, $this, duration), dart.fnType(async.Stream$(T), [core.Duration]));
  };
  rate_limit['RateLimit|buffer'] = function RateLimit$124buffer(T, $this, trigger) {
    return aggregate_sample['AggregateSample|aggregateSample'](T, core.List$(T), $this, trigger, dart.gbind(C[37] || CT.C37, T));
  };
  rate_limit['RateLimit|get#buffer'] = function RateLimit$124get$35buffer(T, $this) {
    return dart.fn(trigger => rate_limit['RateLimit|buffer'](T, $this, trigger), dart.fnType(async.Stream$(core.List$(T)), [T$.StreamOfvoid()]));
  };
  rate_limit['RateLimit|_debounceAggregate'] = function RateLimit$124_debounceAggregate(T, S, $this, duration, collect, opts) {
    let leading = opts && 'leading' in opts ? opts.leading : null;
    let trailing = opts && 'trailing' in opts ? opts.trailing : null;
    let timer = null;
    let soFar = null;
    let hasPending = false;
    let shouldClose = false;
    let emittedLatestAsLeading = false;
    return from_handlers['TransformByHandlers|transformByHandlers'](T, S, $this, {onData: dart.fn((value, sink) => {
        let t83;
        function emit() {
          sink.add(S.as(soFar));
          soFar = null;
          hasPending = false;
        }
        dart.fn(emit, T$.VoidTovoid());
        t83 = timer;
        t83 == null ? null : t83.cancel();
        soFar = collect(value, soFar);
        hasPending = true;
        if (timer == null && leading) {
          emittedLatestAsLeading = true;
          emit();
        } else {
          emittedLatestAsLeading = false;
        }
        timer = async.Timer.new(duration, dart.fn(() => {
          if (trailing && !emittedLatestAsLeading) emit();
          if (shouldClose) sink.close();
          timer = null;
        }, T$.VoidTovoid()));
      }, dart.fnType(dart.void, [T, async.EventSink$(S)])), onDone: dart.fn(sink => {
        let t83;
        if (hasPending && trailing) {
          shouldClose = true;
        } else {
          t83 = timer;
          t83 == null ? null : t83.cancel();
          sink.close();
        }
      }, dart.fnType(dart.void, [async.EventSink$(S)]))});
  };
  rate_limit['RateLimit|get#_debounceAggregate'] = function RateLimit$124get$35_debounceAggregate(T, $this) {
    return dart.fn((S, duration, collect, opts) => {
      let leading = opts && 'leading' in opts ? opts.leading : null;
      let trailing = opts && 'trailing' in opts ? opts.trailing : null;
      return rate_limit['RateLimit|_debounceAggregate'](T, S, $this, duration, collect, {leading: leading, trailing: trailing});
    }, dart.gFnType(S => {
      var __t$StreamOfS = () => (__t$StreamOfS = dart.constFn(async.Stream$(S)))();
      var __t$SN = () => (__t$SN = dart.constFn(dart.nullable(S)))();
      return [__t$StreamOfS(), [core.Duration, dart.fnType(S, [T, __t$SN()])], {leading: core.bool, trailing: core.bool}, {}];
    }, S => {
      var __t$StreamOfS = () => (__t$StreamOfS = dart.constFn(async.Stream$(S)))();
      var __t$SN = () => (__t$SN = dart.constFn(dart.nullable(S)))();
      return [T$.ObjectN()];
    }));
  };
  rate_limit._dropPrevious = function _dropPrevious$(T, element, _) {
    return element;
  };
  rate_limit._collect = function _collect(T, event, soFar) {
    let t84, t84$;
    t84$ = (t84 = soFar, t84 == null ? _interceptors.JSArray$(T).of([]) : t84);
    return (() => {
      t84$[$add](event);
      return t84$;
    })();
  };
  scan['Scan|scan'] = function Scan$124scan(T, S, $this, initialValue, combine) {
    let accumulated = initialValue;
    return $this.asyncMap(S, dart.fn(value => {
      let result = combine(accumulated, value);
      if (async.Future$(S).is(result)) {
        return result.then(S, dart.fn(r => accumulated = r, dart.fnType(S, [S])));
      } else {
        return accumulated = result;
      }
    }, dart.fnType(async.FutureOr$(S), [T])));
  };
  scan['Scan|get#scan'] = function Scan$124get$35scan(T, $this) {
    return dart.fn((S, initialValue, combine) => scan['Scan|scan'](T, S, $this, initialValue, combine), dart.gFnType(S => {
      var __t$StreamOfS = () => (__t$StreamOfS = dart.constFn(async.Stream$(S)))();
      var __t$FutureOrOfS = () => (__t$FutureOrOfS = dart.constFn(async.FutureOr$(S)))();
      return [__t$StreamOfS(), [S, dart.fnType(__t$FutureOrOfS(), [S, T])]];
    }, S => {
      var __t$StreamOfS = () => (__t$StreamOfS = dart.constFn(async.Stream$(S)))();
      var __t$FutureOrOfS = () => (__t$FutureOrOfS = dart.constFn(async.FutureOr$(S)))();
      return [T$.ObjectN()];
    }));
  };
  $switch['Switch|switchMap'] = function Switch$124switchMap(T, S, $this, convert) {
    return $switch['SwitchLatest|switchLatest'](S, $this.map(async.Stream$(S), convert));
  };
  $switch['Switch|get#switchMap'] = function Switch$124get$35switchMap(T, $this) {
    return dart.fn((S, convert) => $switch['Switch|switchMap'](T, S, $this, convert), dart.gFnType(S => {
      var __t$StreamOfS = () => (__t$StreamOfS = dart.constFn(async.Stream$(S)))();
      return [__t$StreamOfS(), [dart.fnType(__t$StreamOfS(), [T])]];
    }, S => {
      var __t$StreamOfS = () => (__t$StreamOfS = dart.constFn(async.Stream$(S)))();
      return [T$.ObjectN()];
    }));
  };
  $switch['SwitchLatest|switchLatest'] = function SwitchLatest$124switchLatest(T, $this) {
    let controller = $this.isBroadcast ? async.StreamController$(T).broadcast({sync: true}) : async.StreamController$(T).new({sync: true});
    controller.onListen = dart.fn(() => {
      let t89;
      let innerSubscription = null;
      let outerStreamDone = false;
      let outerSubscription = $this.listen(dart.fn(innerStream => {
        let t89;
        t89 = innerSubscription;
        t89 == null ? null : t89.cancel();
        innerSubscription = innerStream.listen(dart.fnType(dart.void, [T]).as(dart.bind(controller, 'add')), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
            innerSubscription = null;
            if (outerStreamDone) controller.close();
          }, T$.VoidTovoid())});
      }, dart.fnType(dart.void, [async.Stream$(T)])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
          outerStreamDone = true;
          if (innerSubscription == null) controller.close();
        }, T$.VoidTovoid())});
      if (!$this.isBroadcast) {
        t89 = controller;
        (() => {
          t89.onPause = dart.fn(() => {
            let t90;
            t90 = innerSubscription;
            t90 == null ? null : t90.pause();
            outerSubscription.pause();
          }, T$.VoidTovoid());
          t89.onResume = dart.fn(() => {
            let t90;
            t90 = innerSubscription;
            t90 == null ? null : t90.resume();
            outerSubscription.resume();
          }, T$.VoidTovoid());
          return t89;
        })();
      }
      controller.onCancel = dart.fn(() => {
        let t90;
        let cancels = (t90 = (() => {
          let t89 = T$.JSArrayOfFutureOfvoid().of([]);
          if (!outerStreamDone) t89.push(outerSubscription.cancel());
          if (innerSubscription != null) t89.push(dart.nullCheck(innerSubscription).cancel());
          return t89;
        })(), (() => {
          t90[$removeWhere](dart.fn(f => f == null, T$.ObjectNTobool()));
          return t90;
        })());
        if (cancels[$isEmpty]) return null;
        return async.Future.wait(dart.void, cancels).then(dart.void, dart.fn(_ => null, T$.ListOfvoidToNull()));
      }, T$.VoidToFutureNOfvoid());
    }, T$.VoidTovoid());
    return controller.stream;
  };
  $switch['SwitchLatest|get#switchLatest'] = function SwitchLatest$124get$35switchLatest(T, $this) {
    return dart.fn(() => $switch['SwitchLatest|switchLatest'](T, $this), dart.fnType(async.Stream$(T), []));
  };
  take_until['TakeUntil|takeUntil'] = function TakeUntil$124takeUntil(T, $this, trigger) {
    let controller = $this.isBroadcast ? async.StreamController$(T).broadcast({sync: true}) : async.StreamController$(T).new({sync: true});
    let subscription = null;
    let isDone = false;
    trigger.then(core.Null, dart.fn(_ => {
      let t92;
      if (isDone) return;
      isDone = true;
      t92 = subscription;
      t92 == null ? null : t92.cancel();
      controller.close();
    }, T$.voidToNull()));
    controller.onListen = dart.fn(() => {
      let t92;
      if (isDone) return;
      subscription = $this.listen(dart.fnType(dart.void, [T]).as(dart.bind(controller, 'add')), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
          if (isDone) return;
          isDone = true;
          controller.close();
        }, T$.VoidTovoid())});
      if (!$this.isBroadcast) {
        t92 = controller;
        (() => {
          t92.onPause = dart.bind(dart.nullCheck(subscription), 'pause');
          t92.onResume = dart.bind(dart.nullCheck(subscription), 'resume');
          return t92;
        })();
      }
      controller.onCancel = dart.fn(() => {
        if (isDone) return null;
        let toCancel = dart.nullCheck(subscription);
        subscription = null;
        return toCancel.cancel();
      }, T$.VoidToFutureNOfvoid());
    }, T$.VoidTovoid());
    return controller.stream;
  };
  take_until['TakeUntil|get#takeUntil'] = function TakeUntil$124get$35takeUntil(T, $this) {
    return dart.fn(trigger => take_until['TakeUntil|takeUntil'](T, $this, trigger), dart.fnType(async.Stream$(T), [T$.FutureOfvoid()]));
  };
  tap['Tap|tap'] = function Tap$124tap(T, $this, onValue, opts) {
    let onError = opts && 'onError' in opts ? opts.onError : null;
    let onDone = opts && 'onDone' in opts ? opts.onDone : null;
    return from_handlers['TransformByHandlers|transformByHandlers'](T, T, $this, {onData: dart.fn((value, sink) => {
        let t94;
        try {
          t94 = onValue;
          t94 == null ? null : t94(value);
        } catch (e) {
          let _ = dart.getThrown(e);
          if (core.Object.is(_)) {
          } else
            throw e;
        }
        sink.add(value);
      }, dart.fnType(dart.void, [T, async.EventSink$(T)])), onError: dart.fn((error, stackTrace, sink) => {
        let t95;
        try {
          t95 = onError;
          t95 == null ? null : t95(error, stackTrace);
        } catch (e) {
          let _ = dart.getThrown(e);
          if (core.Object.is(_)) {
          } else
            throw e;
        }
        sink.addError(error, stackTrace);
      }, dart.fnType(dart.void, [core.Object, core.StackTrace, async.EventSink$(T)])), onDone: dart.fn(sink => {
        let t96;
        try {
          t96 = onDone;
          t96 == null ? null : t96();
        } catch (e) {
          let _ = dart.getThrown(e);
          if (core.Object.is(_)) {
          } else
            throw e;
        }
        sink.close();
      }, dart.fnType(dart.void, [async.EventSink$(T)]))});
  };
  tap['Tap|get#tap'] = function Tap$124get$35tap(T, $this) {
    return dart.fn((onValue, opts) => {
      let onError = opts && 'onError' in opts ? opts.onError : null;
      let onDone = opts && 'onDone' in opts ? opts.onDone : null;
      return tap['Tap|tap'](T, $this, onValue, {onError: onError, onDone: onDone});
    }, dart.fnType(async.Stream$(T), [dart.nullable(dart.fnType(dart.void, [T]))], {onDone: T$.VoidToNvoid(), onError: T$.ObjectAndStackTraceToNvoid()}, {}));
  };
  where['Where|whereType'] = function Where$124whereType(T, S, $this) {
    return from_handlers['TransformByHandlers|transformByHandlers'](T, S, $this, {onData: dart.fn((event, sink) => {
        if (S.is(event)) sink.add(event);
      }, dart.fnType(dart.void, [T, async.EventSink$(S)]))});
  };
  where['Where|get#whereType'] = function Where$124get$35whereType(T, $this) {
    return dart.fn(S => where['Where|whereType'](T, S, $this), T$.VoidToStreamOfS());
  };
  where['Where|asyncWhere'] = function Where$124asyncWhere(T, $this, test) {
    let valuesWaiting = 0;
    let sourceDone = false;
    return from_handlers['TransformByHandlers|transformByHandlers'](T, T, $this, {onData: dart.fn((element, sink) => {
        valuesWaiting = valuesWaiting + 1;
        dart.fn(() => async.async(core.Null, function*() {
          try {
            if (yield test(element)) sink.add(element);
          } catch (e$) {
            let e = dart.getThrown(e$);
            let st = dart.stackTrace(e$);
            if (core.Object.is(e)) {
              sink.addError(e, st);
            } else
              throw e$;
          }
          valuesWaiting = valuesWaiting - 1;
          if (valuesWaiting <= 0 && sourceDone) sink.close();
        }), T$.VoidToFutureOfNull())();
      }, dart.fnType(dart.void, [T, async.EventSink$(T)])), onDone: dart.fn(sink => {
        sourceDone = true;
        if (valuesWaiting <= 0) sink.close();
      }, dart.fnType(dart.void, [async.EventSink$(T)]))});
  };
  where['Where|get#asyncWhere'] = function Where$124get$35asyncWhere(T, $this) {
    return dart.fn(test => where['Where|asyncWhere'](T, $this, test), dart.fnType(async.Stream$(T), [dart.fnType(T$.FutureOrOfbool(), [T])]));
  };
  var withCredentials = dart.privateName(browser_client, "BrowserClient.withCredentials");
  var _xhrs = dart.privateName(browser_client, "_xhrs");
  browser_client.BrowserClient = class BrowserClient extends base_client.BaseClient {
    get withCredentials() {
      return this[withCredentials];
    }
    set withCredentials(value) {
      this[withCredentials] = value;
    }
    send(request) {
      return async.async(streamed_response.StreamedResponse, (function* send() {
        let t103;
        let bytes = (yield request.finalize().toBytes());
        let xhr = html.HttpRequest.new();
        this[_xhrs].add(xhr);
        t103 = xhr;
        (() => {
          t103.open(request.method, dart.str(request.url), {async: true});
          t103[$responseType] = "arraybuffer";
          t103.withCredentials = this.withCredentials;
          return t103;
        })();
        request.headers[$forEach](dart.bind(xhr, 'setRequestHeader'));
        let completer = T$.CompleterOfStreamedResponse().new();
        async.unawaited(xhr[$onLoad].first.then(dart.void, dart.fn(_ => {
          let body = typed_data.ByteBuffer.as(xhr[$response])[$asUint8List]();
          completer.complete(new streamed_response.StreamedResponse.new(byte_stream.ByteStream.fromBytes(body), dart.nullCheck(xhr.status), {contentLength: body[$length], request: request, headers: xhr[$responseHeaders], reasonPhrase: xhr.statusText}));
        }, T$.ProgressEventToNull())));
        async.unawaited(xhr[$onError].first.then(dart.void, dart.fn(_ => {
          completer.completeError(new exception.ClientException.new("XMLHttpRequest error.", request.url), core.StackTrace.current);
        }, T$.ProgressEventToNull())));
        xhr.send(bytes);
        try {
          return yield completer.future;
        } finally {
          this[_xhrs].remove(xhr);
        }
      }).bind(this));
    }
    close() {
      for (let xhr of this[_xhrs]) {
        xhr.abort();
      }
    }
    static ['_#new#tearOff']() {
      return new browser_client.BrowserClient.new();
    }
  };
  (browser_client.BrowserClient.new = function() {
    this[_xhrs] = T$.LinkedHashSetOfHttpRequest().new();
    this[withCredentials] = false;
    ;
  }).prototype = browser_client.BrowserClient.prototype;
  dart.addTypeTests(browser_client.BrowserClient);
  dart.addTypeCaches(browser_client.BrowserClient);
  dart.setMethodSignature(browser_client.BrowserClient, () => ({
    __proto__: dart.getMethods(browser_client.BrowserClient.__proto__),
    send: dart.fnType(async.Future$(streamed_response.StreamedResponse), [base_request.BaseRequest])
  }));
  dart.setLibraryUri(browser_client.BrowserClient, I[62]);
  dart.setFieldSignature(browser_client.BrowserClient, () => ({
    __proto__: dart.getFields(browser_client.BrowserClient.__proto__),
    [_xhrs]: dart.finalFieldType(core.Set$(html.HttpRequest)),
    withCredentials: dart.fieldType(core.bool)
  }));
  browser_client.createClient = function createClient() {
    return new browser_client.BrowserClient.new();
  };
  var Latin1Codec__allowInvalid = dart.privateName(convert, "Latin1Codec._allowInvalid");
  utils.mapToQuery = function mapToQuery(map, opts) {
    let encoding = opts && 'encoding' in opts ? opts.encoding : null;
    let pairs = T$.JSArrayOfListOfString().of([]);
    map[$forEach](dart.fn((key, value) => {
      let t103, t103$;
      return pairs[$add](T$.JSArrayOfString().of([core.Uri.encodeQueryComponent(key, {encoding: (t103 = encoding, t103 == null ? convert.utf8 : t103)}), core.Uri.encodeQueryComponent(value, {encoding: (t103$ = encoding, t103$ == null ? convert.utf8 : t103$)})]));
    }, T$.StringAndStringTovoid()));
    return pairs[$map](core.String, dart.fn(pair => pair[$_get](0) + "=" + pair[$_get](1), T$.ListOfStringToString()))[$join]("&");
  };
  utils.encodingForCharset = function encodingForCharset(charset, fallback = C[38] || CT.C38) {
    let t103;
    if (charset == null) return fallback;
    t103 = convert.Encoding.getByName(charset);
    return t103 == null ? fallback : t103;
  };
  utils.requiredEncodingForCharset = function requiredEncodingForCharset(charset) {
    let t103;
    t103 = convert.Encoding.getByName(charset);
    return t103 == null ? dart.throw(new core.FormatException.new("Unsupported encoding \"" + charset + "\".")) : t103;
  };
  utils.isPlainAscii = function isPlainAscii(string) {
    return utils._asciiOnly.hasMatch(string);
  };
  utils.toUint8List = function toUint8List(input) {
    if (typed_data.Uint8List.is(input)) return input;
    if (typed_data.TypedData.is(input)) {
      return typed_data.Uint8List.view(typed_data.TypedData.as(input)[$buffer]);
    }
    return _native_typed_data.NativeUint8List.fromList(input);
  };
  utils.toByteStream = function toByteStream(stream) {
    if (byte_stream.ByteStream.is(stream)) return stream;
    return new byte_stream.ByteStream.new(stream);
  };
  utils.onDone = function onDone(T, stream, onDone) {
    return stream.transform(T, new (async._StreamHandlerTransformer$(T, T)).new({handleDone: dart.fn(sink => {
        sink.close();
        onDone();
      }, dart.fnType(dart.void, [async.EventSink$(T)]))}));
  };
  dart.defineLazy(utils, {
    /*utils._asciiOnly*/get _asciiOnly() {
      return core.RegExp.new("^[\\x00-\\x7F]+$");
    }
  }, false);
  multipart_file_stub.multipartFileFromPath = function multipartFileFromPath(field, filePath, opts) {
    let filename = opts && 'filename' in opts ? opts.filename : null;
    let contentType = opts && 'contentType' in opts ? opts.contentType : null;
    return dart.throw(new core.UnsupportedError.new("MultipartFile is only supported where dart:io is available."));
  };
  dart.defineLazy(boundary_characters, {
    /*boundary_characters.boundaryCharacters*/get boundaryCharacters() {
      return C[39] || CT.C39;
    }
  }, false);
  equatable_utils.mapPropsToHashCode = function mapPropsToHashCode(props) {
    return equatable_utils._finish(props == null ? 0 : props[$fold](core.int, 0, C[40] || CT.C40));
  };
  equatable_utils.equals = function equals(list1, list2) {
    let t103, t103$;
    if (list1 == list2) return true;
    if (list1 == null || list2 == null) return false;
    let length = list1[$length];
    if (length !== list2[$length]) return false;
    for (let i = 0; i < length; i = i + 1) {
      let unit1 = list1[$_get](i);
      let unit2 = list2[$_get](i);
      if (equatable_utils._isEquatable(unit1) && equatable_utils._isEquatable(unit2)) {
        if (!dart.equals(unit1, unit2)) return false;
      } else if (core.Iterable.is(unit1) || core.Map.is(unit1)) {
        if (!equatable_utils._equality.equals(unit1, unit2)) return false;
      } else if (!dart.equals((t103 = unit1, t103 == null ? null : dart.runtimeType(t103)), (t103$ = unit2, t103$ == null ? null : dart.runtimeType(t103$)))) {
        return false;
      } else if (!dart.equals(unit1, unit2)) {
        return false;
      }
    }
    return true;
  };
  equatable_utils._isEquatable = function _isEquatable(object) {
    return equatable$.Equatable.is(object) || equatable_mixin.EquatableMixin.is(object);
  };
  equatable_utils._combine = function _combine(hash, object) {
    if (core.Map.is(object)) {
      iterable_extensions['IterableExtension|sorted'](dart.dynamic, object[$keys], dart.fn((a, b) => dart.hashCode(a) - dart.hashCode(b), T$.dynamicAnddynamicToint()))[$forEach](dart.fn(key => {
        hash = (hash ^ equatable_utils._combine(hash, [key, object[$_get](key)])) >>> 0;
      }, T$.dynamicTovoid()));
      return hash;
    }
    if (core.Iterable.is(object)) {
      for (let value of object) {
        hash = (hash ^ equatable_utils._combine(hash, value)) >>> 0;
      }
      return (hash ^ object[$length]) >>> 0;
    }
    hash = 536870911 & hash + dart.hashCode(object);
    hash = 536870911 & hash + ((524287 & hash) << 10);
    return (hash ^ hash[$rightShift](6)) >>> 0;
  };
  equatable_utils._finish = function _finish(hash) {
    hash = 536870911 & hash + ((67108863 & hash) << 3);
    hash = (hash ^ hash[$rightShift](11)) >>> 0;
    return 536870911 & hash + ((16383 & hash) << 15);
  };
  equatable_utils.mapPropsToString = function mapPropsToString(runtimeType, props) {
    return dart.str(runtimeType) + "(" + props[$map](core.String, dart.fn(prop => dart.toString(prop), T$.ObjectNToString()))[$join](", ") + ")";
  };
  dart.defineLazy(equatable_utils, {
    /*equatable_utils._equality*/get _equality() {
      return C[24] || CT.C24;
    }
  }, false);
  aggregate_sample['AggregateSample|aggregateSample'] = function AggregateSample$124aggregateSample(T, S, $this, trigger, aggregate) {
    let controller = $this.isBroadcast ? async.StreamController$(S).broadcast({sync: true}) : async.StreamController$(S).new({sync: true});
    let currentResults = null;
    let hasCurrentResults = false;
    let waitingForTrigger = true;
    let isTriggerDone = false;
    let isValueDone = false;
    let valueSub = null;
    let triggerSub = null;
    function emit() {
      controller.add(S.as(currentResults));
      currentResults = null;
      hasCurrentResults = false;
      waitingForTrigger = true;
    }
    dart.fn(emit, T$.VoidTovoid());
    function onValue(value) {
      currentResults = aggregate(value, currentResults);
      hasCurrentResults = true;
      if (!waitingForTrigger) emit();
      if (isTriggerDone) {
        dart.nullCheck(valueSub).cancel();
        controller.close();
      }
    }
    dart.fn(onValue, dart.fnType(dart.void, [T]));
    function onValuesDone() {
      let t104;
      isValueDone = true;
      if (!hasCurrentResults) {
        t104 = triggerSub;
        t104 == null ? null : t104.cancel();
        controller.close();
      }
    }
    dart.fn(onValuesDone, T$.VoidTovoid());
    function onTrigger(_) {
      waitingForTrigger = false;
      if (hasCurrentResults) emit();
      if (isValueDone) {
        dart.nullCheck(triggerSub).cancel();
        controller.close();
      }
    }
    dart.fn(onTrigger, T$.dynamicTovoid());
    function onTriggerDone() {
      let t104;
      isTriggerDone = true;
      if (waitingForTrigger) {
        t104 = valueSub;
        t104 == null ? null : t104.cancel();
        controller.close();
      }
    }
    dart.fn(onTriggerDone, T$.VoidTovoid());
    controller.onListen = dart.fn(() => {
      let t104;
      if (!(valueSub == null)) dart.assertFailed(null, I[63], 78, 14, "valueSub == null");
      valueSub = $this.listen(onValue, {onError: dart.bind(controller, 'addError'), onDone: onValuesDone});
      let priorTriggerSub = triggerSub;
      if (priorTriggerSub != null) {
        if (priorTriggerSub.isPaused) priorTriggerSub.resume();
      } else {
        triggerSub = trigger.listen(onTrigger, {onError: dart.bind(controller, 'addError'), onDone: onTriggerDone});
      }
      if (!$this.isBroadcast) {
        t104 = controller;
        (() => {
          t104.onPause = dart.fn(() => {
            let t105, t105$;
            t105 = valueSub;
            t105 == null ? null : t105.pause();
            t105$ = triggerSub;
            t105$ == null ? null : t105$.pause();
          }, T$.VoidTovoid());
          t104.onResume = dart.fn(() => {
            let t105, t105$;
            t105 = valueSub;
            t105 == null ? null : t105.resume();
            t105$ = triggerSub;
            t105$ == null ? null : t105$.resume();
          }, T$.VoidTovoid());
          return t104;
        })();
      }
      controller.onCancel = dart.fn(() => {
        let cancels = (() => {
          let t104 = T$.JSArrayOfFutureOfvoid().of([]);
          if (!isValueDone) t104.push(dart.nullCheck(valueSub).cancel());
          return t104;
        })();
        valueSub = null;
        if (trigger.isBroadcast || !$this.isBroadcast) {
          if (!isTriggerDone) cancels[$add](dart.nullCheck(triggerSub).cancel());
          triggerSub = null;
        } else {
          dart.nullCheck(triggerSub).pause();
        }
        cancels[$removeWhere](dart.fn(f => f == null, T$.ObjectNTobool()));
        if (cancels[$isEmpty]) return null;
        return async.Future.wait(dart.void, cancels).then(dart.void, dart.fn(_ => null, T$.ListOfvoidToNull()));
      }, T$.VoidToFutureNOfvoid());
    }, T$.VoidTovoid());
    return controller.stream;
  };
  aggregate_sample['AggregateSample|get#aggregateSample'] = function AggregateSample$124get$35aggregateSample(T, $this) {
    return dart.fn((S, trigger, aggregate) => aggregate_sample['AggregateSample|aggregateSample'](T, S, $this, trigger, aggregate), dart.gFnType(S => {
      var __t$StreamOfS = () => (__t$StreamOfS = dart.constFn(async.Stream$(S)))();
      var __t$SN = () => (__t$SN = dart.constFn(dart.nullable(S)))();
      return [__t$StreamOfS(), [T$.StreamOfvoid(), dart.fnType(S, [T, __t$SN()])]];
    }, S => {
      var __t$StreamOfS = () => (__t$StreamOfS = dart.constFn(async.Stream$(S)))();
      var __t$SN = () => (__t$SN = dart.constFn(dart.nullable(S)))();
      return [T$.ObjectN()];
    }));
  };
  from_handlers['TransformByHandlers|transformByHandlers'] = function TransformByHandlers$124transformByHandlers(S, T, $this, opts) {
    let t107, t107$, t107$0;
    let onData = opts && 'onData' in opts ? opts.onData : null;
    let onError = opts && 'onError' in opts ? opts.onError : null;
    let onDone = opts && 'onDone' in opts ? opts.onDone : null;
    let handleData = (t107 = onData, t107 == null ? dart.gbind(C[41] || CT.C41, S, T) : t107);
    let handleError = (t107$ = onError, t107$ == null ? dart.gbind(C[42] || CT.C42, T) : t107$);
    let handleDone = (t107$0 = onDone, t107$0 == null ? dart.gbind(C[43] || CT.C43, T) : t107$0);
    let controller = $this.isBroadcast ? async.StreamController$(T).broadcast({sync: true}) : async.StreamController$(T).new({sync: true});
    let subscription = null;
    controller.onListen = dart.fn(() => {
      let t107;
      if (!(subscription == null)) dart.assertFailed(null, I[64], 27, 14, "subscription == null");
      let valuesDone = false;
      subscription = $this.listen(dart.fn(value => handleData(value, controller), dart.fnType(dart.void, [S])), {onError: dart.fn((error, stackTrace) => {
          handleError(error, stackTrace, controller);
        }, T$.ObjectAndStackTraceToNull()), onDone: dart.fn(() => {
          valuesDone = true;
          handleDone(controller);
        }, T$.VoidTovoid())});
      if (!$this.isBroadcast) {
        t107 = controller;
        (() => {
          t107.onPause = dart.bind(dart.nullCheck(subscription), 'pause');
          t107.onResume = dart.bind(dart.nullCheck(subscription), 'resume');
          return t107;
        })();
      }
      controller.onCancel = dart.fn(() => {
        let toCancel = subscription;
        subscription = null;
        if (!valuesDone) return dart.nullCheck(toCancel).cancel();
        return null;
      }, T$.VoidToFutureNOfvoid());
    }, T$.VoidTovoid());
    return controller.stream;
  };
  from_handlers['TransformByHandlers|get#transformByHandlers'] = function TransformByHandlers$124get$35transformByHandlers(S, $this) {
    return dart.fn((T, opts) => {
      let onData = opts && 'onData' in opts ? opts.onData : null;
      let onError = opts && 'onError' in opts ? opts.onError : null;
      let onDone = opts && 'onDone' in opts ? opts.onDone : null;
      return from_handlers['TransformByHandlers|transformByHandlers'](S, T, $this, {onData: onData, onError: onError, onDone: onDone});
    }, dart.gFnType(T => {
      var __t$StreamOfT = () => (__t$StreamOfT = dart.constFn(async.Stream$(T)))();
      var __t$EventSinkOfT = () => (__t$EventSinkOfT = dart.constFn(async.EventSink$(T)))();
      var __t$EventSinkOfTTovoid = () => (__t$EventSinkOfTTovoid = dart.constFn(dart.fnType(dart.void, [__t$EventSinkOfT()])))();
      var __t$EventSinkOfTToNvoid = () => (__t$EventSinkOfTToNvoid = dart.constFn(dart.nullable(__t$EventSinkOfTTovoid())))();
      var __t$ObjectAndStackTraceAndEventSinkOfTTovoid = () => (__t$ObjectAndStackTraceAndEventSinkOfTTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace, __t$EventSinkOfT()])))();
      var __t$ObjectAndStackTraceAndEventSinkOfTToNvoid = () => (__t$ObjectAndStackTraceAndEventSinkOfTToNvoid = dart.constFn(dart.nullable(__t$ObjectAndStackTraceAndEventSinkOfTTovoid())))();
      return [__t$StreamOfT(), [], {onData: dart.nullable(dart.fnType(dart.void, [S, __t$EventSinkOfT()])), onDone: __t$EventSinkOfTToNvoid(), onError: __t$ObjectAndStackTraceAndEventSinkOfTToNvoid()}, {}];
    }, T => {
      var __t$StreamOfT = () => (__t$StreamOfT = dart.constFn(async.Stream$(T)))();
      var __t$EventSinkOfT = () => (__t$EventSinkOfT = dart.constFn(async.EventSink$(T)))();
      var __t$EventSinkOfTTovoid = () => (__t$EventSinkOfTTovoid = dart.constFn(dart.fnType(dart.void, [__t$EventSinkOfT()])))();
      var __t$EventSinkOfTToNvoid = () => (__t$EventSinkOfTToNvoid = dart.constFn(dart.nullable(__t$EventSinkOfTTovoid())))();
      var __t$ObjectAndStackTraceAndEventSinkOfTTovoid = () => (__t$ObjectAndStackTraceAndEventSinkOfTTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace, __t$EventSinkOfT()])))();
      var __t$ObjectAndStackTraceAndEventSinkOfTToNvoid = () => (__t$ObjectAndStackTraceAndEventSinkOfTToNvoid = dart.constFn(dart.nullable(__t$ObjectAndStackTraceAndEventSinkOfTTovoid())))();
      return [T$.ObjectN()];
    }));
  };
  from_handlers['TransformByHandlers|_defaultHandleData'] = function TransformByHandlers$124_defaultHandleData(S, T, value, sink) {
    sink.add(T.as(value));
  };
  from_handlers['TransformByHandlers|_defaultHandleError'] = function TransformByHandlers$124_defaultHandleError(T, error, stackTrace, sink) {
    sink.addError(error, stackTrace);
  };
  from_handlers['TransformByHandlers|_defaultHandleDone'] = function TransformByHandlers$124_defaultHandleDone(T, sink) {
    sink.close();
  };
  var scheme$ = dart.privateName(authentication_challenge, "AuthenticationChallenge.scheme");
  var parameters$ = dart.privateName(authentication_challenge, "AuthenticationChallenge.parameters");
  authentication_challenge.AuthenticationChallenge = class AuthenticationChallenge extends core.Object {
    get scheme() {
      return this[scheme$];
    }
    set scheme(value) {
      super.scheme = value;
    }
    get parameters() {
      return this[parameters$];
    }
    set parameters(value) {
      super.parameters = value;
    }
    static parseHeader(header) {
      return utils$.wrapFormatException(T$.ListOfAuthenticationChallenge(), "authentication header", header, dart.fn(() => {
        let scanner = new string_scanner.StringScanner.new(header);
        scanner.scan(scan$.whitespace);
        let challenges = scan$.parseList(authentication_challenge.AuthenticationChallenge, scanner, dart.fn(() => {
          let scheme = authentication_challenge.AuthenticationChallenge._scanScheme(scanner, {whitespaceName: "\" \" or \"=\""});
          let params = new (T$.IdentityMapOfString$String()).new();
          while (scanner.scan(",")) {
            scanner.scan(scan$.whitespace);
          }
          authentication_challenge.AuthenticationChallenge._scanAuthParam(scanner, params);
          let beforeComma = scanner.position;
          while (scanner.scan(",")) {
            scanner.scan(scan$.whitespace);
            if (scanner.matches(",") || scanner.isDone) continue;
            scanner.expect(scan$.token, {name: "a token"});
            let name = dart.nullCheck(dart.nullCheck(scanner.lastMatch)._get(0));
            scanner.scan(scan$.whitespace);
            if (!scanner.scan("=")) {
              scanner.position = beforeComma;
              break;
            }
            scanner.scan(scan$.whitespace);
            if (scanner.scan(scan$.token)) {
              params[$_set](name, dart.nullCheck(dart.nullCheck(scanner.lastMatch)._get(0)));
            } else {
              params[$_set](name, scan$.expectQuotedString(scanner, {name: "a token or a quoted string"}));
            }
            scanner.scan(scan$.whitespace);
            beforeComma = scanner.position;
          }
          return new authentication_challenge.AuthenticationChallenge.new(scheme, params);
        }, T$.VoidToAuthenticationChallenge()));
        scanner.expectDone();
        return challenges;
      }, T$.VoidToListOfAuthenticationChallenge()));
    }
    static parse(challenge) {
      return utils$.wrapFormatException(authentication_challenge.AuthenticationChallenge, "authentication challenge", challenge, dart.fn(() => {
        let scanner = new string_scanner.StringScanner.new(challenge);
        scanner.scan(scan$.whitespace);
        let scheme = authentication_challenge.AuthenticationChallenge._scanScheme(scanner);
        let params = new (T$.IdentityMapOfString$String()).new();
        scan$.parseList(dart.void, scanner, dart.fn(() => authentication_challenge.AuthenticationChallenge._scanAuthParam(scanner, params), T$.VoidTovoid()));
        scanner.expectDone();
        return new authentication_challenge.AuthenticationChallenge.new(scheme, params);
      }, T$.VoidToAuthenticationChallenge()));
    }
    static ['_#parse#tearOff'](challenge) {
      return authentication_challenge.AuthenticationChallenge.parse(challenge);
    }
    static _scanScheme(scanner, opts) {
      let whitespaceName = opts && 'whitespaceName' in opts ? opts.whitespaceName : null;
      scanner.expect(scan$.token, {name: "a token"});
      let scheme = dart.nullCheck(dart.nullCheck(scanner.lastMatch)._get(0))[$toLowerCase]();
      scanner.scan(scan$.whitespace);
      if (scanner.lastMatch == null || !dart.nullCheck(dart.nullCheck(scanner.lastMatch)._get(0))[$contains](" ")) {
        scanner.expect(" ", {name: whitespaceName});
      }
      return scheme;
    }
    static _scanAuthParam(scanner, params) {
      scanner.expect(scan$.token, {name: "a token"});
      let name = dart.nullCheck(scanner.lastMatch)._get(0);
      scanner.scan(scan$.whitespace);
      scanner.expect("=");
      scanner.scan(scan$.whitespace);
      if (scanner.scan(scan$.token)) {
        params[$_set](name, dart.nullCheck(scanner.lastMatch)._get(0));
      } else {
        params[$_set](name, scan$.expectQuotedString(scanner, {name: "a token or a quoted string"}));
      }
      scanner.scan(scan$.whitespace);
    }
    static ['_#new#tearOff'](scheme, parameters) {
      return new authentication_challenge.AuthenticationChallenge.new(scheme, parameters);
    }
  };
  (authentication_challenge.AuthenticationChallenge.new = function(scheme, parameters) {
    this[scheme$] = scheme;
    this[parameters$] = new (T$.UnmodifiableMapViewOfString$String()).new(new (T$.CaseInsensitiveMapOfString()).from(parameters));
    ;
  }).prototype = authentication_challenge.AuthenticationChallenge.prototype;
  dart.addTypeTests(authentication_challenge.AuthenticationChallenge);
  dart.addTypeCaches(authentication_challenge.AuthenticationChallenge);
  dart.setStaticMethodSignature(authentication_challenge.AuthenticationChallenge, () => ['parseHeader', 'parse', '_scanScheme', '_scanAuthParam']);
  dart.setLibraryUri(authentication_challenge.AuthenticationChallenge, I[65]);
  dart.setFieldSignature(authentication_challenge.AuthenticationChallenge, () => ({
    __proto__: dart.getFields(authentication_challenge.AuthenticationChallenge.__proto__),
    scheme: dart.finalFieldType(core.String),
    parameters: dart.finalFieldType(core.Map$(core.String, core.String))
  }));
  const _is_CaseInsensitiveMap_default = Symbol('_is_CaseInsensitiveMap_default');
  case_insensitive_map.CaseInsensitiveMap$ = dart.generic(V => {
    class CaseInsensitiveMap extends canonicalized_map.CanonicalizedMap$(core.String, core.String, V) {
      static ['_#new#tearOff'](V) {
        return new (case_insensitive_map.CaseInsensitiveMap$(V)).new();
      }
      static ['_#from#tearOff'](V, other) {
        return new (case_insensitive_map.CaseInsensitiveMap$(V)).from(other);
      }
    }
    (CaseInsensitiveMap.new = function() {
      CaseInsensitiveMap.__proto__.new.call(this, dart.fn(key => key[$toLowerCase](), T$.StringToString()));
      ;
    }).prototype = CaseInsensitiveMap.prototype;
    (CaseInsensitiveMap.from = function(other) {
      CaseInsensitiveMap.__proto__.from.call(this, other, dart.fn(key => key[$toLowerCase](), T$.StringToString()));
      ;
    }).prototype = CaseInsensitiveMap.prototype;
    dart.addTypeTests(CaseInsensitiveMap);
    CaseInsensitiveMap.prototype[_is_CaseInsensitiveMap_default] = true;
    dart.addTypeCaches(CaseInsensitiveMap);
    dart.setLibraryUri(CaseInsensitiveMap, I[66]);
    return CaseInsensitiveMap;
  });
  case_insensitive_map.CaseInsensitiveMap = case_insensitive_map.CaseInsensitiveMap$();
  dart.addTypeTests(case_insensitive_map.CaseInsensitiveMap, _is_CaseInsensitiveMap_default);
  chunked_coding.ChunkedCodingCodec = class ChunkedCodingCodec extends convert.Codec$(core.List$(core.int), core.List$(core.int)) {
    get encoder() {
      return encoder.chunkedCodingEncoder;
    }
    get decoder() {
      return decoder.chunkedCodingDecoder;
    }
    static ['_#_#tearOff']() {
      return new chunked_coding.ChunkedCodingCodec.__();
    }
  };
  (chunked_coding.ChunkedCodingCodec.__ = function() {
    chunked_coding.ChunkedCodingCodec.__proto__.new.call(this);
    ;
  }).prototype = chunked_coding.ChunkedCodingCodec.prototype;
  dart.addTypeTests(chunked_coding.ChunkedCodingCodec);
  dart.addTypeCaches(chunked_coding.ChunkedCodingCodec);
  dart.setGetterSignature(chunked_coding.ChunkedCodingCodec, () => ({
    __proto__: dart.getGetters(chunked_coding.ChunkedCodingCodec.__proto__),
    encoder: encoder.ChunkedCodingEncoder,
    decoder: decoder.ChunkedCodingDecoder
  }));
  dart.setLibraryUri(chunked_coding.ChunkedCodingCodec, I[67]);
  dart.defineLazy(chunked_coding, {
    /*chunked_coding.chunkedCoding*/get chunkedCoding() {
      return C[44] || CT.C44;
    }
  }, false);
  http_date.formatHttpDate = function formatHttpDate(date) {
    let t108;
    date = date.toUtc();
    let buffer = (t108 = new core.StringBuffer.new(), (() => {
      t108.write(http_date._weekdays[$_get](date.weekday - 1));
      t108.write(", ");
      t108.write(date.day <= 9 ? "0" : "");
      t108.write(date.day[$toString]());
      t108.write(" ");
      t108.write(http_date._months[$_get](date.month - 1));
      t108.write(" ");
      t108.write(date.year[$toString]());
      t108.write(date.hour <= 9 ? " 0" : " ");
      t108.write(date.hour[$toString]());
      t108.write(date.minute <= 9 ? ":0" : ":");
      t108.write(date.minute[$toString]());
      t108.write(date.second <= 9 ? ":0" : ":");
      t108.write(date.second[$toString]());
      t108.write(" GMT");
      return t108;
    })());
    return buffer.toString();
  };
  http_date.parseHttpDate = function parseHttpDate(date) {
    return utils$.wrapFormatException(core.DateTime, "HTTP date", date, dart.fn(() => {
      let scanner = new string_scanner.StringScanner.new(date);
      if (scanner.scan(http_date._longWeekdayRegExp)) {
        scanner.expect(", ");
        let day = http_date._parseInt(scanner, 2);
        scanner.expect("-");
        let month = http_date._parseMonth(scanner);
        scanner.expect("-");
        let year = 1900 + http_date._parseInt(scanner, 2);
        scanner.expect(" ");
        let time = http_date._parseTime(scanner);
        scanner.expect(" GMT");
        scanner.expectDone();
        return http_date._makeDateTime(year, month, day, time);
      }
      scanner.expect(http_date._shortWeekdayRegExp);
      if (scanner.scan(", ")) {
        let day = http_date._parseInt(scanner, 2);
        scanner.expect(" ");
        let month = http_date._parseMonth(scanner);
        scanner.expect(" ");
        let year = http_date._parseInt(scanner, 4);
        scanner.expect(" ");
        let time = http_date._parseTime(scanner);
        scanner.expect(" GMT");
        scanner.expectDone();
        return http_date._makeDateTime(year, month, day, time);
      }
      scanner.expect(" ");
      let month = http_date._parseMonth(scanner);
      scanner.expect(" ");
      let day = scanner.scan(" ") ? http_date._parseInt(scanner, 1) : http_date._parseInt(scanner, 2);
      scanner.expect(" ");
      let time = http_date._parseTime(scanner);
      scanner.expect(" ");
      let year = http_date._parseInt(scanner, 4);
      scanner.expectDone();
      return http_date._makeDateTime(year, month, day, time);
    }, T$.VoidToDateTime()));
  };
  http_date._parseMonth = function _parseMonth(scanner) {
    scanner.expect(http_date._monthRegExp);
    return http_date._months[$indexOf](dart.nullCheck(dart.nullCheck(scanner.lastMatch)._get(0))) + 1;
  };
  http_date._parseInt = function _parseInt(scanner, digits) {
    scanner.expect(http_date._digitRegExp);
    if (dart.nullCheck(dart.nullCheck(scanner.lastMatch)._get(0)).length !== digits) {
      scanner.error("expected a " + dart.str(digits) + "-digit number.");
    }
    return core.int.parse(dart.nullCheck(dart.nullCheck(scanner.lastMatch)._get(0)));
  };
  http_date._parseTime = function _parseTime(scanner) {
    let hours = http_date._parseInt(scanner, 2);
    if (hours >= 24) scanner.error("hours may not be greater than 24.");
    scanner.expect(":");
    let minutes = http_date._parseInt(scanner, 2);
    if (minutes >= 60) scanner.error("minutes may not be greater than 60.");
    scanner.expect(":");
    let seconds = http_date._parseInt(scanner, 2);
    if (seconds >= 60) scanner.error("seconds may not be greater than 60.");
    return new core.DateTime.new(1, 1, 1, hours, minutes, seconds);
  };
  http_date._makeDateTime = function _makeDateTime(year, month, day, time) {
    let dateTime = new core.DateTime.utc(year, month, day, time.hour, time.minute, time.second);
    if (dateTime.month !== month) {
      dart.throw(new core.FormatException.new("invalid day '" + dart.str(day) + "' for month '" + dart.str(month) + "'."));
    }
    return dateTime;
  };
  dart.defineLazy(http_date, {
    /*http_date._weekdays*/get _weekdays() {
      return C[45] || CT.C45;
    },
    /*http_date._months*/get _months() {
      return C[46] || CT.C46;
    },
    /*http_date._shortWeekdayRegExp*/get _shortWeekdayRegExp() {
      return core.RegExp.new("Mon|Tue|Wed|Thu|Fri|Sat|Sun");
    },
    /*http_date._longWeekdayRegExp*/get _longWeekdayRegExp() {
      return core.RegExp.new("Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday");
    },
    /*http_date._monthRegExp*/get _monthRegExp() {
      return core.RegExp.new("Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec");
    },
    /*http_date._digitRegExp*/get _digitRegExp() {
      return core.RegExp.new("\\d+");
    }
  }, false);
  var type$1 = dart.privateName(media_type, "MediaType.type");
  var subtype$ = dart.privateName(media_type, "MediaType.subtype");
  var parameters$0 = dart.privateName(media_type, "MediaType.parameters");
  media_type.MediaType = class MediaType extends core.Object {
    get type() {
      return this[type$1];
    }
    set type(value) {
      super.type = value;
    }
    get subtype() {
      return this[subtype$];
    }
    set subtype(value) {
      super.subtype = value;
    }
    get parameters() {
      return this[parameters$0];
    }
    set parameters(value) {
      super.parameters = value;
    }
    get mimeType() {
      return this.type + "/" + this.subtype;
    }
    static parse(mediaType) {
      return utils$.wrapFormatException(media_type.MediaType, "media type", mediaType, dart.fn(() => {
        let scanner = new string_scanner.StringScanner.new(mediaType);
        scanner.scan(scan$.whitespace);
        scanner.expect(scan$.token);
        let type = dart.nullCheck(dart.nullCheck(scanner.lastMatch)._get(0));
        scanner.expect("/");
        scanner.expect(scan$.token);
        let subtype = dart.nullCheck(dart.nullCheck(scanner.lastMatch)._get(0));
        scanner.scan(scan$.whitespace);
        let parameters = new (T$.IdentityMapOfString$String()).new();
        while (scanner.scan(";")) {
          scanner.scan(scan$.whitespace);
          scanner.expect(scan$.token);
          let attribute = dart.nullCheck(dart.nullCheck(scanner.lastMatch)._get(0));
          scanner.expect("=");
          let value = null;
          if (scanner.scan(scan$.token)) {
            value = dart.nullCheck(dart.nullCheck(scanner.lastMatch)._get(0));
          } else {
            value = scan$.expectQuotedString(scanner);
          }
          scanner.scan(scan$.whitespace);
          parameters[$_set](attribute, value);
        }
        scanner.expectDone();
        return new media_type.MediaType.new(type, subtype, parameters);
      }, T$.VoidToMediaType()));
    }
    static ['_#parse#tearOff'](mediaType) {
      return media_type.MediaType.parse(mediaType);
    }
    static ['_#new#tearOff'](type, subtype, parameters = null) {
      return new media_type.MediaType.new(type, subtype, parameters);
    }
    change(opts) {
      let type = opts && 'type' in opts ? opts.type : null;
      let subtype = opts && 'subtype' in opts ? opts.subtype : null;
      let mimeType = opts && 'mimeType' in opts ? opts.mimeType : null;
      let parameters = opts && 'parameters' in opts ? opts.parameters : null;
      let clearParameters = opts && 'clearParameters' in opts ? opts.clearParameters : false;
      if (mimeType != null) {
        if (type != null) {
          dart.throw(new core.ArgumentError.new("You may not pass both [type] and [mimeType]."));
        } else if (subtype != null) {
          dart.throw(new core.ArgumentError.new("You may not pass both [subtype] and " + "[mimeType]."));
        }
        let segments = mimeType[$split]("/");
        if (segments[$length] !== 2) {
          dart.throw(new core.FormatException.new("Invalid mime type \"" + dart.str(mimeType) + "\"."));
        }
        type = segments[$_get](0);
        subtype = segments[$_get](1);
      }
      type == null ? type = this.type : null;
      subtype == null ? subtype = this.subtype : null;
      parameters == null ? parameters = new (T$.IdentityMapOfString$String()).new() : null;
      if (!clearParameters) {
        let newParameters = parameters;
        parameters = T$.LinkedHashMapOfString$String().from(this.parameters);
        parameters[$addAll](newParameters);
      }
      return new media_type.MediaType.new(type, subtype, parameters);
    }
    toString() {
      let t108;
      let buffer = (t108 = new core.StringBuffer.new(), (() => {
        t108.write(this.type);
        t108.write("/");
        t108.write(this.subtype);
        return t108;
      })());
      this.parameters[$forEach](dart.fn((attribute, value) => {
        let t108;
        buffer.write("; " + attribute + "=");
        if (scan$.nonToken.hasMatch(value)) {
          t108 = buffer;
          (() => {
            t108.write("\"");
            t108.write(value[$replaceAllMapped](media_type._escapedChar, dart.fn(match => "\\" + dart.str(match._get(0)), T$.MatchToString())));
            t108.write("\"");
            return t108;
          })();
        } else {
          buffer.write(value);
        }
      }, T$.StringAndStringTovoid()));
      return buffer.toString();
    }
  };
  (media_type.MediaType.new = function(type, subtype, parameters = null) {
    this[type$1] = type[$toLowerCase]();
    this[subtype$] = subtype[$toLowerCase]();
    this[parameters$0] = new (T$.UnmodifiableMapViewOfString$String()).new(parameters == null ? new (T$.IdentityMapOfString$String()).new() : new (T$.CaseInsensitiveMapOfString()).from(parameters));
    ;
  }).prototype = media_type.MediaType.prototype;
  dart.addTypeTests(media_type.MediaType);
  dart.addTypeCaches(media_type.MediaType);
  dart.setMethodSignature(media_type.MediaType, () => ({
    __proto__: dart.getMethods(media_type.MediaType.__proto__),
    change: dart.fnType(media_type.MediaType, [], {clearParameters: core.bool, mimeType: dart.nullable(core.String), parameters: dart.nullable(core.Map$(core.String, core.String)), subtype: dart.nullable(core.String), type: dart.nullable(core.String)}, {})
  }));
  dart.setStaticMethodSignature(media_type.MediaType, () => ['parse']);
  dart.setGetterSignature(media_type.MediaType, () => ({
    __proto__: dart.getGetters(media_type.MediaType.__proto__),
    mimeType: core.String
  }));
  dart.setLibraryUri(media_type.MediaType, I[68]);
  dart.setFieldSignature(media_type.MediaType, () => ({
    __proto__: dart.getFields(media_type.MediaType.__proto__),
    type: dart.finalFieldType(core.String),
    subtype: dart.finalFieldType(core.String),
    parameters: dart.finalFieldType(core.Map$(core.String, core.String))
  }));
  dart.defineExtensionMethods(media_type.MediaType, ['toString']);
  dart.defineLazy(media_type, {
    /*media_type._escapedChar*/get _escapedChar() {
      return core.RegExp.new("[\"\\x00-\\x1F\\x7F]");
    }
  }, false);
  scan$.parseList = function parseList(T, scanner, parseElement) {
    let result = _interceptors.JSArray$(T).of([]);
    while (scanner.scan(",")) {
      scanner.scan(scan$.whitespace);
    }
    result[$add](parseElement());
    scanner.scan(scan$.whitespace);
    while (scanner.scan(",")) {
      scanner.scan(scan$.whitespace);
      if (scanner.matches(",") || scanner.isDone) continue;
      result[$add](parseElement());
      scanner.scan(scan$.whitespace);
    }
    return result;
  };
  scan$.expectQuotedString = function expectQuotedString(scanner, opts) {
    let name = opts && 'name' in opts ? opts.name : "quoted string";
    scanner.expect(scan$._quotedString, {name: name});
    let string = dart.nullCheck(dart.nullCheck(scanner.lastMatch)._get(0));
    return string[$substring](1, string.length - 1)[$replaceAllMapped](scan$._quotedPair, dart.fn(match => dart.nullCheck(match._get(1)), T$.MatchToString()));
  };
  dart.defineLazy(scan$, {
    /*scan$.token*/get token() {
      return core.RegExp.new("[^()<>@,;:\"\\\\/[\\]?={} \\t\\x00-\\x1F\\x7F]+");
    },
    /*scan$._lws*/get _lws() {
      return core.RegExp.new("(?:\\r\\n)?[ \\t]+");
    },
    /*scan$._quotedString*/get _quotedString() {
      return core.RegExp.new("\"(?:[^\"\\x00-\\x1F\\x7F]|\\\\.)*\"");
    },
    /*scan$._quotedPair*/get _quotedPair() {
      return core.RegExp.new("\\\\(.)");
    },
    /*scan$.nonToken*/get nonToken() {
      return core.RegExp.new("[()<>@,;:\"\\\\/\\[\\]?={} \\t\\x00-\\x1F\\x7F]");
    },
    /*scan$.whitespace*/get whitespace() {
      return core.RegExp.new("(?:" + scan$._lws.pattern + ")*");
    }
  }, false);
  utils$.wrapFormatException = function wrapFormatException(T, name, value, body) {
    try {
      return body();
    } catch (e) {
      let ex = dart.getThrown(e);
      if (span_exception.SourceSpanFormatException.is(ex)) {
        let error = ex;
        dart.throw(new span_exception.SourceSpanFormatException.new("Invalid " + name + ": " + error.message, error.span, error.source));
      } else if (core.FormatException.is(ex)) {
        let error = ex;
        dart.throw(new core.FormatException.new("Invalid " + name + " \"" + value + "\": " + error.message, error.source, error.offset));
      } else
        throw e;
    }
  };
  var _decode = dart.privateName(decoder, "_decode");
  var _state$1 = dart.privateName(decoder, "_state");
  decoder.ChunkedCodingDecoder = class ChunkedCodingDecoder extends convert.Converter$(core.List$(core.int), core.List$(core.int)) {
    static ['_#_#tearOff']() {
      return new decoder.ChunkedCodingDecoder.__();
    }
    convert(input) {
      T$.ListOfint().as(input);
      let sink = new decoder._Sink.new(T$.StreamControllerOfListOfint().new());
      let output = sink[_decode](input, 0, input[$length]);
      if (sink[_state$1][$_equals](decoder._State.end)) return output;
      dart.throw(new core.FormatException.new("Input ended unexpectedly.", input, input[$length]));
    }
    startChunkedConversion(sink) {
      T$.SinkOfListOfint().as(sink);
      return new decoder._Sink.new(sink);
    }
  };
  (decoder.ChunkedCodingDecoder.__ = function() {
    decoder.ChunkedCodingDecoder.__proto__.new.call(this);
    ;
  }).prototype = decoder.ChunkedCodingDecoder.prototype;
  dart.addTypeTests(decoder.ChunkedCodingDecoder);
  dart.addTypeCaches(decoder.ChunkedCodingDecoder);
  dart.setMethodSignature(decoder.ChunkedCodingDecoder, () => ({
    __proto__: dart.getMethods(decoder.ChunkedCodingDecoder.__proto__),
    convert: dart.fnType(core.List$(core.int), [dart.nullable(core.Object)]),
    startChunkedConversion: dart.fnType(convert.ByteConversionSink, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(decoder.ChunkedCodingDecoder, I[69]);
  var ___Sink__size = dart.privateName(decoder, "_#_Sink#_size");
  var _sink$ = dart.privateName(decoder, "_sink");
  var _size = dart.privateName(decoder, "_size");
  var _close$ = dart.privateName(decoder, "_close");
  var _digitForByte = dart.privateName(decoder, "_digitForByte");
  var _State__name = dart.privateName(decoder, "_State._name");
  decoder._Sink = class _Sink extends convert.ByteConversionSinkBase {
    get [_size]() {
      let t110;
      t110 = this[___Sink__size];
      return t110 == null ? dart.throw(new _internal.LateError.fieldNI("_size")) : t110;
    }
    set [_size](library$32package$58http_parser$47src$47chunked_coding$47decoder$46dart$58$58_size$35param) {
      this[___Sink__size] = library$32package$58http_parser$47src$47chunked_coding$47decoder$46dart$58$58_size$35param;
    }
    static ['_#new#tearOff'](_sink) {
      return new decoder._Sink.new(_sink);
    }
    add(chunk) {
      T$.ListOfint().as(chunk);
      return this.addSlice(chunk, 0, chunk[$length], false);
    }
    addSlice(chunk, start, end, isLast) {
      core.RangeError.checkValidRange(start, end, chunk[$length]);
      let output = this[_decode](chunk, start, end);
      if (output[$isNotEmpty]) this[_sink$].add(output);
      if (isLast) this[_close$](chunk, end);
    }
    close() {
      return this[_close$]();
    }
    [_close$](chunk = null, index = null) {
      if (!this[_state$1][$_equals](decoder._State.end)) {
        dart.throw(new core.FormatException.new("Input ended unexpectedly.", chunk, index));
      }
      this[_sink$].close();
    }
    [_decode](bytes, start, end) {
      function assertCurrentChar(char, name) {
        if (bytes[$_get](start) !== char) {
          dart.throw(new core.FormatException.new("Expected " + name + ".", bytes, start));
        }
      }
      dart.fn(assertCurrentChar, T$.intAndStringTovoid());
      let buffer = new typed_buffer.Uint8Buffer.new();
      while (start !== end) {
        switch (this[_state$1]) {
          case C[47] || CT.C47:
            {
              this[_size] = this[_digitForByte](bytes, start);
              this[_state$1] = decoder._State.size;
              start = start + 1;
              break;
            }
          case C[48] || CT.C48:
            {
              if (bytes[$_get](start) === 13) {
                this[_state$1] = decoder._State.sizeBeforeLF;
              } else {
                this[_size] = (this[_size] << 4 >>> 0) + this[_digitForByte](bytes, start);
              }
              start = start + 1;
              break;
            }
          case C[49] || CT.C49:
            {
              assertCurrentChar(10, "LF");
              this[_state$1] = this[_size] === 0 ? decoder._State.endBeforeCR : decoder._State.body;
              start = start + 1;
              break;
            }
          case C[50] || CT.C50:
            {
              let chunkEnd = math.min(core.int, end, start + this[_size]);
              buffer.addAll(bytes, start, chunkEnd);
              this[_size] = this[_size] - (chunkEnd - start);
              start = chunkEnd;
              if (this[_size] === 0) this[_state$1] = decoder._State.bodyBeforeCR;
              break;
            }
          case C[51] || CT.C51:
            {
              assertCurrentChar(13, "CR");
              this[_state$1] = decoder._State.bodyBeforeLF;
              start = start + 1;
              break;
            }
          case C[52] || CT.C52:
            {
              assertCurrentChar(10, "LF");
              this[_state$1] = decoder._State.boundary;
              start = start + 1;
              break;
            }
          case C[53] || CT.C53:
            {
              assertCurrentChar(13, "CR");
              this[_state$1] = decoder._State.endBeforeLF;
              start = start + 1;
              break;
            }
          case C[54] || CT.C54:
            {
              assertCurrentChar(10, "LF");
              this[_state$1] = decoder._State.end;
              start = start + 1;
              break;
            }
          case C[55] || CT.C55:
            {
              dart.throw(new core.FormatException.new("Expected no more data.", bytes, start));
            }
        }
      }
      return buffer.buffer[$asUint8List](0, buffer.length);
    }
    [_digitForByte](bytes, index) {
      let byte = bytes[$_get](index);
      let digit = (48 ^ byte) >>> 0;
      if (digit <= 9) {
        if (digit >= 0) return digit;
      } else {
        let letter = (32 | byte) >>> 0;
        if (97 <= letter && letter <= 102) return letter - 97 + 10;
      }
      dart.throw(new core.FormatException.new("Invalid hexadecimal byte 0x" + byte[$toRadixString](16)[$toUpperCase]() + ".", bytes, index));
    }
  };
  (decoder._Sink.new = function(_sink) {
    this[_state$1] = decoder._State.boundary;
    this[___Sink__size] = null;
    this[_sink$] = _sink;
    decoder._Sink.__proto__.new.call(this);
    ;
  }).prototype = decoder._Sink.prototype;
  dart.addTypeTests(decoder._Sink);
  dart.addTypeCaches(decoder._Sink);
  dart.setMethodSignature(decoder._Sink, () => ({
    __proto__: dart.getMethods(decoder._Sink.__proto__),
    add: dart.fnType(dart.void, [dart.nullable(core.Object)]),
    close: dart.fnType(dart.void, []),
    [_close$]: dart.fnType(dart.void, [], [dart.nullable(core.List$(core.int)), dart.nullable(core.int)]),
    [_decode]: dart.fnType(typed_data.Uint8List, [core.List$(core.int), core.int, core.int]),
    [_digitForByte]: dart.fnType(core.int, [core.List$(core.int), core.int])
  }));
  dart.setGetterSignature(decoder._Sink, () => ({
    __proto__: dart.getGetters(decoder._Sink.__proto__),
    [_size]: core.int
  }));
  dart.setSetterSignature(decoder._Sink, () => ({
    __proto__: dart.getSetters(decoder._Sink.__proto__),
    [_size]: core.int
  }));
  dart.setLibraryUri(decoder._Sink, I[69]);
  dart.setFieldSignature(decoder._Sink, () => ({
    __proto__: dart.getFields(decoder._Sink.__proto__),
    [_sink$]: dart.finalFieldType(core.Sink$(core.List$(core.int))),
    [_state$1]: dart.fieldType(decoder._State),
    [___Sink__size]: dart.fieldType(dart.nullable(core.int))
  }));
  var _name$ = dart.privateName(decoder, "_name");
  const _name$0 = _State__name;
  decoder._State = class _State extends core.Object {
    get [_name$]() {
      return this[_name$0];
    }
    set [_name$](value) {
      super[_name$] = value;
    }
    static ['_#_#tearOff'](_name) {
      return new decoder._State.__(_name);
    }
    toString() {
      return this[_name$];
    }
  };
  (decoder._State.__ = function(_name) {
    this[_name$0] = _name;
    ;
  }).prototype = decoder._State.prototype;
  dart.addTypeTests(decoder._State);
  dart.addTypeCaches(decoder._State);
  dart.setLibraryUri(decoder._State, I[69]);
  dart.setFieldSignature(decoder._State, () => ({
    __proto__: dart.getFields(decoder._State.__proto__),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.setStaticFieldSignature(decoder._State, () => ['boundary', 'size', 'sizeBeforeLF', 'body', 'bodyBeforeCR', 'bodyBeforeLF', 'endBeforeCR', 'endBeforeLF', 'end']);
  dart.defineExtensionMethods(decoder._State, ['toString']);
  dart.defineLazy(decoder._State, {
    /*decoder._State.boundary*/get boundary() {
      return C[47] || CT.C47;
    },
    /*decoder._State.size*/get size() {
      return C[48] || CT.C48;
    },
    /*decoder._State.sizeBeforeLF*/get sizeBeforeLF() {
      return C[49] || CT.C49;
    },
    /*decoder._State.body*/get body() {
      return C[50] || CT.C50;
    },
    /*decoder._State.bodyBeforeCR*/get bodyBeforeCR() {
      return C[51] || CT.C51;
    },
    /*decoder._State.bodyBeforeLF*/get bodyBeforeLF() {
      return C[52] || CT.C52;
    },
    /*decoder._State.endBeforeCR*/get endBeforeCR() {
      return C[53] || CT.C53;
    },
    /*decoder._State.endBeforeLF*/get endBeforeLF() {
      return C[54] || CT.C54;
    },
    /*decoder._State.end*/get end() {
      return C[55] || CT.C55;
    }
  }, false);
  dart.defineLazy(decoder, {
    /*decoder.chunkedCodingDecoder*/get chunkedCodingDecoder() {
      return C[56] || CT.C56;
    }
  }, false);
  encoder.ChunkedCodingEncoder = class ChunkedCodingEncoder extends convert.Converter$(core.List$(core.int), core.List$(core.int)) {
    static ['_#_#tearOff']() {
      return new encoder.ChunkedCodingEncoder.__();
    }
    convert(input) {
      T$.ListOfint().as(input);
      return encoder._convert(input, 0, input[$length], {isLast: true});
    }
    startChunkedConversion(sink) {
      T$.SinkOfListOfint().as(sink);
      return new encoder._Sink.new(sink);
    }
  };
  (encoder.ChunkedCodingEncoder.__ = function() {
    encoder.ChunkedCodingEncoder.__proto__.new.call(this);
    ;
  }).prototype = encoder.ChunkedCodingEncoder.prototype;
  dart.addTypeTests(encoder.ChunkedCodingEncoder);
  dart.addTypeCaches(encoder.ChunkedCodingEncoder);
  dart.setMethodSignature(encoder.ChunkedCodingEncoder, () => ({
    __proto__: dart.getMethods(encoder.ChunkedCodingEncoder.__proto__),
    convert: dart.fnType(core.List$(core.int), [dart.nullable(core.Object)]),
    startChunkedConversion: dart.fnType(convert.ByteConversionSink, [dart.nullable(core.Object)])
  }));
  dart.setLibraryUri(encoder.ChunkedCodingEncoder, I[70]);
  var _sink$0 = dart.privateName(encoder, "_sink");
  encoder._Sink = class _Sink extends convert.ByteConversionSinkBase {
    static ['_#new#tearOff'](_sink) {
      return new encoder._Sink.new(_sink);
    }
    add(chunk) {
      T$.ListOfint().as(chunk);
      this[_sink$0].add(encoder._convert(chunk, 0, chunk[$length]));
    }
    addSlice(chunk, start, end, isLast) {
      core.RangeError.checkValidRange(start, end, chunk[$length]);
      this[_sink$0].add(encoder._convert(chunk, start, end, {isLast: isLast}));
      if (isLast) this[_sink$0].close();
    }
    close() {
      this[_sink$0].add(encoder._doneChunk);
      this[_sink$0].close();
    }
  };
  (encoder._Sink.new = function(_sink) {
    this[_sink$0] = _sink;
    encoder._Sink.__proto__.new.call(this);
    ;
  }).prototype = encoder._Sink.prototype;
  dart.addTypeTests(encoder._Sink);
  dart.addTypeCaches(encoder._Sink);
  dart.setMethodSignature(encoder._Sink, () => ({
    __proto__: dart.getMethods(encoder._Sink.__proto__),
    add: dart.fnType(dart.void, [dart.nullable(core.Object)]),
    close: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(encoder._Sink, I[70]);
  dart.setFieldSignature(encoder._Sink, () => ({
    __proto__: dart.getFields(encoder._Sink.__proto__),
    [_sink$0]: dart.finalFieldType(core.Sink$(core.List$(core.int)))
  }));
  encoder._convert = function _convert(bytes, start, end, opts) {
    let t110, t110$, t110$0, t110$1;
    let isLast = opts && 'isLast' in opts ? opts.isLast : false;
    if (end === start) return isLast ? encoder._doneChunk : C[57] || CT.C57;
    let size = end - start;
    let sizeInHex = size[$toRadixString](16);
    let footerSize = isLast ? encoder._doneChunk[$length] : 0;
    let list = _native_typed_data.NativeUint8List.new(sizeInHex.length + 4 + size + footerSize);
    list[$setRange](0, sizeInHex.length, sizeInHex[$codeUnits]);
    let cursor = sizeInHex.length;
    list[$_set]((t110 = cursor, cursor = t110 + 1, t110), 13);
    list[$_set]((t110$ = cursor, cursor = t110$ + 1, t110$), 10);
    list[$setRange](cursor, cursor + end - start, bytes, start);
    cursor = cursor + (end - start);
    list[$_set]((t110$0 = cursor, cursor = t110$0 + 1, t110$0), 13);
    list[$_set]((t110$1 = cursor, cursor = t110$1 + 1, t110$1), 10);
    if (isLast) {
      list[$setRange](list[$length] - footerSize, list[$length], encoder._doneChunk);
    }
    return list;
  };
  dart.defineLazy(encoder, {
    /*encoder.chunkedCodingEncoder*/get chunkedCodingEncoder() {
      return C[58] || CT.C58;
    },
    /*encoder._doneChunk*/get _doneChunk() {
      return _native_typed_data.NativeUint8List.fromList(T$.JSArrayOfint().of([48, 13, 10, 13, 10]));
    }
  }, false);
  dart.defineLazy(charcodes, {
    /*charcodes.$lf*/get $lf() {
      return 10;
    },
    /*charcodes.$cr*/get $cr() {
      return 13;
    },
    /*charcodes.$0*/get $0() {
      return 48;
    },
    /*charcodes.$9*/get $9() {
      return 57;
    },
    /*charcodes.$a*/get $a() {
      return 97;
    },
    /*charcodes.$f*/get $f() {
      return 102;
    }
  }, false);
  var _table = dart.privateName(typed_queue, "_TypedQueue._table");
  var _head = dart.privateName(typed_queue, "_TypedQueue._head");
  var _tail = dart.privateName(typed_queue, "_TypedQueue._tail");
  var _table$ = dart.privateName(typed_queue, "_table");
  var _head$ = dart.privateName(typed_queue, "_head");
  var _tail$ = dart.privateName(typed_queue, "_tail");
  var _createBuffer = dart.privateName(typed_queue, "_createBuffer");
  var _createList = dart.privateName(typed_queue, "_createList");
  var _writeToList = dart.privateName(typed_queue, "_writeToList");
  var _growAtCapacity = dart.privateName(typed_queue, "_growAtCapacity");
  var _growTo = dart.privateName(typed_queue, "_growTo");
  var _defaultValue = dart.privateName(typed_queue, "_defaultValue");
  const _is__TypedQueue_default = Symbol('_is__TypedQueue_default');
  typed_queue._TypedQueue$ = dart.generic((E, L) => {
    var __t$IterableOfE = () => (__t$IterableOfE = dart.constFn(core.Iterable$(E)))();
    var __t$ListOfE = () => (__t$ListOfE = dart.constFn(core.List$(E)))();
    var __t$EN = () => (__t$EN = dart.constFn(dart.nullable(E)))();
    const Object_ListMixin$36 = class Object_ListMixin extends core.Object {};
    (Object_ListMixin$36.new = function() {
    }).prototype = Object_ListMixin$36.prototype;
    dart.applyMixin(Object_ListMixin$36, collection.ListMixin$(E));
    class _TypedQueue extends Object_ListMixin$36 {
      get [_table$]() {
        return this[_table];
      }
      set [_table$](value) {
        this[_table] = value;
      }
      get [_head$]() {
        return this[_head];
      }
      set [_head$](value) {
        this[_head] = value;
      }
      get [_tail$]() {
        return this[_tail];
      }
      set [_tail$](value) {
        this[_tail] = value;
      }
      get length() {
        return (this[_tail$] - this[_head$] & this[_table$][$length] - 1) >>> 0;
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : true;
        let list = growable ? this[_createBuffer](this.length) : this[_createList](this.length);
        this[_writeToList](list);
        return list;
      }
      cast(T) {
        if (queue_list.QueueList$(T).is(this)) return queue_list.QueueList$(T).as(this);
        dart.throw(new core.UnsupportedError.new(dart.str(this) + " cannot be cast to the desired type."));
      }
      retype(T) {
        return this.cast(T);
      }
      addLast(value) {
        E.as(value);
        this[_table$][$_set](this[_tail$], value);
        this[_tail$] = (this[_tail$] + 1 & this[_table$][$length] - 1) >>> 0;
        if (this[_head$] === this[_tail$]) this[_growAtCapacity]();
      }
      addFirst(value) {
        E.as(value);
        this[_head$] = (this[_head$] - 1 & this[_table$][$length] - 1) >>> 0;
        this[_table$][$_set](this[_head$], value);
        if (this[_head$] === this[_tail$]) this[_growAtCapacity]();
      }
      removeFirst() {
        if (this[_head$] === this[_tail$]) dart.throw(new core.StateError.new("No element"));
        let result = this[_table$][$_get](this[_head$]);
        this[_head$] = (this[_head$] + 1 & this[_table$][$length] - 1) >>> 0;
        return result;
      }
      removeLast() {
        if (this[_head$] === this[_tail$]) dart.throw(new core.StateError.new("No element"));
        this[_tail$] = (this[_tail$] - 1 & this[_table$][$length] - 1) >>> 0;
        return this[_table$][$_get](this[_tail$]);
      }
      add(value) {
        E.as(value);
        return this.addLast(value);
      }
      set length(value) {
        core.RangeError.checkNotNegative(value, "length");
        let delta = value - this.length;
        if (delta >= 0) {
          let needsToGrow = this[_table$][$length] <= value;
          if (needsToGrow) this[_growTo](value);
          this[_tail$] = (this[_tail$] + delta & this[_table$][$length] - 1) >>> 0;
          if (!needsToGrow) this.fillRange(value - delta, value, this[_defaultValue]);
        } else {
          this.removeRange(value, this.length);
        }
      }
      _get(index) {
        core.RangeError.checkValidIndex(index, this, null, this.length);
        return this[_table$][$_get]((this[_head$] + index & this[_table$][$length] - 1) >>> 0);
      }
      _set(index, value$) {
        let value = value$;
        E.as(value);
        core.RangeError.checkValidIndex(index, this);
        this[_table$][$_set]((this[_head$] + index & this[_table$][$length] - 1) >>> 0, value);
        return value$;
      }
      removeRange(start, end) {
        let length = this.length;
        core.RangeError.checkValidRange(start, end, length);
        if (start === 0) {
          this[_head$] = (this[_head$] + end & this[_table$][$length] - 1) >>> 0;
          return;
        }
        let elementsAfter = length - end;
        if (elementsAfter === 0) {
          this[_tail$] = (this[_head$] + start & this[_table$][$length] - 1) >>> 0;
          return;
        }
        let removedElements = end - start;
        if (start < elementsAfter) {
          this.setRange(removedElements, end, this);
          this[_head$] = (this[_head$] + removedElements & this[_table$][$length] - 1) >>> 0;
        } else {
          this.setRange(start, length - removedElements, this, end);
          this[_tail$] = (this[_tail$] - removedElements & this[_table$][$length] - 1) >>> 0;
        }
      }
      setRange(start, end, iterable, skipCount = 0) {
        __t$IterableOfE().as(iterable);
        core.RangeError.checkValidRange(start, end, this.length);
        if (start === end) return;
        let targetStart = (this[_head$] + start & this[_table$][$length] - 1) >>> 0;
        let targetEnd = (this[_head$] + end & this[_table$][$length] - 1) >>> 0;
        let targetIsContiguous = targetStart < targetEnd;
        if (iterable === this) {
          let sourceStart = (this[_head$] + skipCount & this[_table$][$length] - 1) >>> 0;
          let sourceEnd = (sourceStart + (end - start) & this[_table$][$length] - 1) >>> 0;
          if (sourceStart === targetStart) return;
          let sourceIsContiguous = sourceStart < sourceEnd;
          if (targetIsContiguous && sourceIsContiguous) {
            this[_table$][$setRange](targetStart, targetEnd, this[_table$], sourceStart);
          } else if (!targetIsContiguous && !sourceIsContiguous) {
            if (sourceStart > targetStart) {
              let startGap = sourceStart - targetStart;
              let firstEnd = this[_table$][$length] - startGap;
              this[_table$][$setRange](targetStart, firstEnd, this[_table$], sourceStart);
              this[_table$][$setRange](firstEnd, this[_table$][$length], this[_table$]);
              this[_table$][$setRange](0, targetEnd, this[_table$], startGap);
            } else if (sourceEnd < targetEnd) {
              let firstStart = targetEnd - sourceEnd;
              this[_table$][$setRange](firstStart, targetEnd, this[_table$]);
              this[_table$][$setRange](0, firstStart, this[_table$], this[_table$][$length] - firstStart);
              this[_table$][$setRange](targetStart, this[_table$][$length], this[_table$], sourceStart);
            }
          } else if (sourceStart < targetEnd) {
            if (sourceIsContiguous) {
              this[_table$][$setRange](targetStart, this[_table$][$length], this[_table$], sourceStart);
              this[_table$][$setRange](0, targetEnd, this[_table$], sourceStart + (this[_table$][$length] - targetStart));
            } else {
              let firstEnd = this[_table$][$length] - sourceStart;
              this[_table$][$setRange](targetStart, firstEnd, this[_table$], sourceStart);
              this[_table$][$setRange](firstEnd, targetEnd, this[_table$]);
            }
          } else {
            if (sourceIsContiguous) {
              this[_table$][$setRange](0, targetEnd, this[_table$], sourceStart + (this[_table$][$length] - targetStart));
              this[_table$][$setRange](targetStart, this[_table$][$length], this[_table$], sourceStart);
            } else {
              let firstStart = targetEnd - sourceEnd;
              this[_table$][$setRange](firstStart, targetEnd, this[_table$]);
              this[_table$][$setRange](targetStart, firstStart, this[_table$], sourceStart);
            }
          }
        } else if (targetIsContiguous) {
          this[_table$][$setRange](targetStart, targetEnd, iterable, skipCount);
        } else if (__t$ListOfE().is(iterable)) {
          this[_table$][$setRange](targetStart, this[_table$][$length], iterable, skipCount);
          this[_table$][$setRange](0, targetEnd, iterable, skipCount + (this[_table$][$length] - targetStart));
        } else {
          super.setRange(start, end, iterable, skipCount);
        }
      }
      fillRange(start, end, value = null) {
        __t$EN().as(value);
        let startInTable = (this[_head$] + start & this[_table$][$length] - 1) >>> 0;
        let endInTable = (this[_head$] + end & this[_table$][$length] - 1) >>> 0;
        if (startInTable <= endInTable) {
          this[_table$][$fillRange](startInTable, endInTable, value);
        } else {
          this[_table$][$fillRange](startInTable, this[_table$][$length], value);
          this[_table$][$fillRange](0, endInTable, value);
        }
      }
      sublist(start, end = null) {
        let length = this.length;
        let nonNullEnd = core.RangeError.checkValidRange(start, end, length);
        let list = this[_createList](nonNullEnd - start);
        this[_writeToList](list, start, nonNullEnd);
        return list;
      }
      [_writeToList](target, start = null, end = null) {
        start == null ? start = 0 : null;
        end == null ? end = this.length : null;
        if (!(target[$length] >= dart.notNull(end) - dart.notNull(start))) dart.assertFailed(null, I[71], 278, 12, "target.length >= end - start");
        if (!(dart.notNull(start) <= dart.notNull(end))) dart.assertFailed(null, I[71], 279, 12, "start <= end");
        let elementsToWrite = dart.notNull(end) - dart.notNull(start);
        let startInTable = (this[_head$] + dart.notNull(start) & this[_table$][$length] - 1) >>> 0;
        let endInTable = (this[_head$] + dart.notNull(end) & this[_table$][$length] - 1) >>> 0;
        if (startInTable <= endInTable) {
          target[$setRange](0, elementsToWrite, this[_table$], startInTable);
        } else {
          let firstPartSize = this[_table$][$length] - startInTable;
          target[$setRange](0, firstPartSize, this[_table$], startInTable);
          target[$setRange](firstPartSize, firstPartSize + endInTable, this[_table$], 0);
        }
        return elementsToWrite;
      }
      [_growAtCapacity]() {
        if (!(this[_head$] === this[_tail$])) dart.assertFailed(null, I[71], 297, 12, "_head == _tail");
        let newTable = this[_createList](this[_table$][$length] * 2);
        let partitionPoint = this[_table$][$length] - this[_head$];
        newTable[$setRange](0, partitionPoint, this[_table$], this[_head$]);
        if (partitionPoint !== this[_table$][$length]) {
          newTable[$setRange](partitionPoint, this[_table$][$length], this[_table$]);
        }
        this[_head$] = 0;
        this[_tail$] = this[_table$][$length];
        this[_table$] = newTable;
      }
      [_growTo](newElementCount) {
        if (!(newElementCount >= this.length)) dart.assertFailed(null, I[71], 316, 12, "newElementCount >= length");
        newElementCount = newElementCount + newElementCount[$rightShift](1);
        let newTable = this[_createList](typed_queue._nextPowerOf2(newElementCount));
        this[_tail$] = this[_writeToList](newTable);
        this[_table$] = newTable;
        this[_head$] = 0;
      }
    }
    (_TypedQueue.new = function(table) {
      this[_table] = L.as(table);
      this[_head] = 0;
      this[_tail] = 0;
      ;
    }).prototype = _TypedQueue.prototype;
    dart.addTypeTests(_TypedQueue);
    _TypedQueue.prototype[_is__TypedQueue_default] = true;
    dart.addTypeCaches(_TypedQueue);
    dart.setMethodSignature(_TypedQueue, () => ({
      __proto__: dart.getMethods(_TypedQueue.__proto__),
      cast: dart.gFnType(T => [queue_list.QueueList$(T), []], T => [dart.nullable(core.Object)]),
      [$cast]: dart.gFnType(T => [queue_list.QueueList$(T), []], T => [dart.nullable(core.Object)]),
      retype: dart.gFnType(T => [queue_list.QueueList$(T), []], T => [dart.nullable(core.Object)]),
      addLast: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      addFirst: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      removeFirst: dart.fnType(E, []),
      _get: dart.fnType(E, [core.int]),
      [$_get]: dart.fnType(E, [core.int]),
      _set: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)]),
      [$_set]: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)]),
      sublist: dart.fnType(L, [core.int], [dart.nullable(core.int)]),
      [$sublist]: dart.fnType(L, [core.int], [dart.nullable(core.int)]),
      [_writeToList]: dart.fnType(core.int, [core.List$(E)], [dart.nullable(core.int), dart.nullable(core.int)]),
      [_growAtCapacity]: dart.fnType(dart.void, []),
      [_growTo]: dart.fnType(dart.void, [core.int])
    }));
    dart.setGetterSignature(_TypedQueue, () => ({
      __proto__: dart.getGetters(_TypedQueue.__proto__),
      length: core.int,
      [$length]: core.int
    }));
    dart.setSetterSignature(_TypedQueue, () => ({
      __proto__: dart.getSetters(_TypedQueue.__proto__),
      length: core.int,
      [$length]: core.int
    }));
    dart.setLibraryUri(_TypedQueue, I[72]);
    dart.setFieldSignature(_TypedQueue, () => ({
      __proto__: dart.getFields(_TypedQueue.__proto__),
      [_table$]: dart.fieldType(L),
      [_head$]: dart.fieldType(core.int),
      [_tail$]: dart.fieldType(core.int)
    }));
    dart.defineExtensionMethods(_TypedQueue, [
      'toList',
      'cast',
      'removeLast',
      'add',
      '_get',
      '_set',
      'removeRange',
      'setRange',
      'fillRange',
      'sublist'
    ]);
    dart.defineExtensionAccessors(_TypedQueue, ['length']);
    return _TypedQueue;
  });
  typed_queue._TypedQueue = typed_queue._TypedQueue$();
  dart.addTypeTests(typed_queue._TypedQueue, _is__TypedQueue_default);
  const _is__IntQueue_default = Symbol('_is__IntQueue_default');
  typed_queue._IntQueue$ = dart.generic(L => {
    class _IntQueue extends typed_queue._TypedQueue$(core.int, L) {
      get [_defaultValue]() {
        return 0;
      }
    }
    (_IntQueue.new = function(queue) {
      _IntQueue.__proto__.new.call(this, queue);
      ;
    }).prototype = _IntQueue.prototype;
    dart.addTypeTests(_IntQueue);
    _IntQueue.prototype[_is__IntQueue_default] = true;
    dart.addTypeCaches(_IntQueue);
    dart.setGetterSignature(_IntQueue, () => ({
      __proto__: dart.getGetters(_IntQueue.__proto__),
      [_defaultValue]: core.int
    }));
    dart.setLibraryUri(_IntQueue, I[72]);
    return _IntQueue;
  });
  typed_queue._IntQueue = typed_queue._IntQueue$();
  dart.addTypeTests(typed_queue._IntQueue, _is__IntQueue_default);
  const _is__FloatQueue_default = Symbol('_is__FloatQueue_default');
  typed_queue._FloatQueue$ = dart.generic(L => {
    class _FloatQueue extends typed_queue._TypedQueue$(core.double, L) {
      get [_defaultValue]() {
        return 0;
      }
    }
    (_FloatQueue.new = function(queue) {
      _FloatQueue.__proto__.new.call(this, queue);
      ;
    }).prototype = _FloatQueue.prototype;
    dart.addTypeTests(_FloatQueue);
    _FloatQueue.prototype[_is__FloatQueue_default] = true;
    dart.addTypeCaches(_FloatQueue);
    dart.setGetterSignature(_FloatQueue, () => ({
      __proto__: dart.getGetters(_FloatQueue.__proto__),
      [_defaultValue]: core.double
    }));
    dart.setLibraryUri(_FloatQueue, I[72]);
    return _FloatQueue;
  });
  typed_queue._FloatQueue = typed_queue._FloatQueue$();
  dart.addTypeTests(typed_queue._FloatQueue, _is__FloatQueue_default);
  var _add = dart.privateName(typed_queue, "_add");
  var _add$ = dart.privateName(queue_list, "_add");
  var _head$0 = dart.privateName(queue_list, "_head");
  var _writeToList$ = dart.privateName(queue_list, "_writeToList");
  var _grow = dart.privateName(typed_queue, "_grow");
  var _grow$ = dart.privateName(queue_list, "_grow");
  var _preGrow = dart.privateName(typed_queue, "_preGrow");
  var _preGrow$ = dart.privateName(queue_list, "_preGrow");
  var _table$0 = dart.privateName(queue_list, "_table");
  var _tail$0 = dart.privateName(queue_list, "_tail");
  var _head_ = dart.privateName(typed_queue, "_head=");
  var _table_ = dart.privateName(typed_queue, "_table=");
  var _tail_ = dart.privateName(typed_queue, "_tail=");
  typed_queue.Uint8Queue = class Uint8Queue extends typed_queue._IntQueue$(typed_data.Uint8List) {
    static ['_#new#tearOff'](initialCapacity = null) {
      return new typed_queue.Uint8Queue.new(initialCapacity);
    }
    static fromList(elements) {
      let t110;
      t110 = new typed_queue.Uint8Queue.new(elements[$length]);
      return (() => {
        t110.addAll(elements);
        return t110;
      })();
    }
    static ['_#fromList#tearOff'](elements) {
      return typed_queue.Uint8Queue.fromList(elements);
    }
    [_createList](size) {
      return _native_typed_data.NativeUint8List.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Uint8Buffer.new(size);
    }
    [_add$](element) {
      return this[$noSuchMethod](new core._Invocation.method(C[59] || CT.C59, null, [element]));
    }
    get [_head$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[60] || CT.C60)));
    }
    [_writeToList$](target) {
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[61] || CT.C61, null, [target])));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[62] || CT.C62, null, []));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C[63] || CT.C63, null, [newElementCount]));
    }
    get [_table$0]() {
      return T$.ListOfintN().as(this[$noSuchMethod](new core._Invocation.getter(C[64] || CT.C64)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[65] || CT.C65)));
    }
    set [_head$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[66] || CT.C66, value));
    }
    set [_table$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[67] || CT.C67, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[68] || CT.C68, value));
    }
  };
  (typed_queue.Uint8Queue.new = function(initialCapacity = null) {
    typed_queue.Uint8Queue.__proto__.new.call(this, _native_typed_data.NativeUint8List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Uint8Queue.prototype;
  dart.addTypeTests(typed_queue.Uint8Queue);
  dart.addTypeCaches(typed_queue.Uint8Queue);
  typed_queue.Uint8Queue[dart.implements] = () => [queue_list.QueueList$(core.int)];
  dart.setMethodSignature(typed_queue.Uint8Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Uint8Queue.__proto__),
    [_createList]: dart.fnType(typed_data.Uint8List, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Uint8Buffer, [core.int]),
    [_add$]: dart.fnType(dart.void, [core.int]),
    [_writeToList$]: dart.fnType(core.int, [core.List$(dart.nullable(core.int))]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setStaticMethodSignature(typed_queue.Uint8Queue, () => ['fromList']);
  dart.setGetterSignature(typed_queue.Uint8Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Uint8Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Uint8Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Uint8Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Uint8Queue, I[72]);
  typed_queue.Int8Queue = class Int8Queue extends typed_queue._IntQueue$(typed_data.Int8List) {
    static ['_#new#tearOff'](initialCapacity = null) {
      return new typed_queue.Int8Queue.new(initialCapacity);
    }
    static fromList(elements) {
      let t110;
      t110 = new typed_queue.Int8Queue.new(elements[$length]);
      return (() => {
        t110.addAll(elements);
        return t110;
      })();
    }
    static ['_#fromList#tearOff'](elements) {
      return typed_queue.Int8Queue.fromList(elements);
    }
    [_createList](size) {
      return _native_typed_data.NativeInt8List.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Int8Buffer.new(size);
    }
    [_add$](element) {
      return this[$noSuchMethod](new core._Invocation.method(C[59] || CT.C59, null, [element]));
    }
    get [_head$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[60] || CT.C60)));
    }
    [_writeToList$](target) {
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[61] || CT.C61, null, [target])));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[62] || CT.C62, null, []));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C[63] || CT.C63, null, [newElementCount]));
    }
    get [_table$0]() {
      return T$.ListOfintN().as(this[$noSuchMethod](new core._Invocation.getter(C[64] || CT.C64)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[65] || CT.C65)));
    }
    set [_head$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[66] || CT.C66, value));
    }
    set [_table$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[67] || CT.C67, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[68] || CT.C68, value));
    }
  };
  (typed_queue.Int8Queue.new = function(initialCapacity = null) {
    typed_queue.Int8Queue.__proto__.new.call(this, _native_typed_data.NativeInt8List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Int8Queue.prototype;
  dart.addTypeTests(typed_queue.Int8Queue);
  dart.addTypeCaches(typed_queue.Int8Queue);
  typed_queue.Int8Queue[dart.implements] = () => [queue_list.QueueList$(core.int)];
  dart.setMethodSignature(typed_queue.Int8Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Int8Queue.__proto__),
    [_createList]: dart.fnType(typed_data.Int8List, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Int8Buffer, [core.int]),
    [_add$]: dart.fnType(dart.void, [core.int]),
    [_writeToList$]: dart.fnType(core.int, [core.List$(dart.nullable(core.int))]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setStaticMethodSignature(typed_queue.Int8Queue, () => ['fromList']);
  dart.setGetterSignature(typed_queue.Int8Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Int8Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Int8Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Int8Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Int8Queue, I[72]);
  typed_queue.Uint8ClampedQueue = class Uint8ClampedQueue extends typed_queue._IntQueue$(typed_data.Uint8ClampedList) {
    static ['_#new#tearOff'](initialCapacity = null) {
      return new typed_queue.Uint8ClampedQueue.new(initialCapacity);
    }
    static fromList(elements) {
      let t110;
      t110 = new typed_queue.Uint8ClampedQueue.new(elements[$length]);
      return (() => {
        t110.addAll(elements);
        return t110;
      })();
    }
    static ['_#fromList#tearOff'](elements) {
      return typed_queue.Uint8ClampedQueue.fromList(elements);
    }
    [_createList](size) {
      return _native_typed_data.NativeUint8ClampedList.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Uint8ClampedBuffer.new(size);
    }
    [_add$](element) {
      return this[$noSuchMethod](new core._Invocation.method(C[59] || CT.C59, null, [element]));
    }
    get [_head$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[60] || CT.C60)));
    }
    [_writeToList$](target) {
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[61] || CT.C61, null, [target])));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[62] || CT.C62, null, []));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C[63] || CT.C63, null, [newElementCount]));
    }
    get [_table$0]() {
      return T$.ListOfintN().as(this[$noSuchMethod](new core._Invocation.getter(C[64] || CT.C64)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[65] || CT.C65)));
    }
    set [_head$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[66] || CT.C66, value));
    }
    set [_table$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[67] || CT.C67, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[68] || CT.C68, value));
    }
  };
  (typed_queue.Uint8ClampedQueue.new = function(initialCapacity = null) {
    typed_queue.Uint8ClampedQueue.__proto__.new.call(this, _native_typed_data.NativeUint8ClampedList.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Uint8ClampedQueue.prototype;
  dart.addTypeTests(typed_queue.Uint8ClampedQueue);
  dart.addTypeCaches(typed_queue.Uint8ClampedQueue);
  typed_queue.Uint8ClampedQueue[dart.implements] = () => [queue_list.QueueList$(core.int)];
  dart.setMethodSignature(typed_queue.Uint8ClampedQueue, () => ({
    __proto__: dart.getMethods(typed_queue.Uint8ClampedQueue.__proto__),
    [_createList]: dart.fnType(typed_data.Uint8ClampedList, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Uint8ClampedBuffer, [core.int]),
    [_add$]: dart.fnType(dart.void, [core.int]),
    [_writeToList$]: dart.fnType(core.int, [core.List$(dart.nullable(core.int))]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setStaticMethodSignature(typed_queue.Uint8ClampedQueue, () => ['fromList']);
  dart.setGetterSignature(typed_queue.Uint8ClampedQueue, () => ({
    __proto__: dart.getGetters(typed_queue.Uint8ClampedQueue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Uint8ClampedQueue, () => ({
    __proto__: dart.getSetters(typed_queue.Uint8ClampedQueue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Uint8ClampedQueue, I[72]);
  typed_queue.Uint16Queue = class Uint16Queue extends typed_queue._IntQueue$(typed_data.Uint16List) {
    static ['_#new#tearOff'](initialCapacity = null) {
      return new typed_queue.Uint16Queue.new(initialCapacity);
    }
    static fromList(elements) {
      let t110;
      t110 = new typed_queue.Uint16Queue.new(elements[$length]);
      return (() => {
        t110.addAll(elements);
        return t110;
      })();
    }
    static ['_#fromList#tearOff'](elements) {
      return typed_queue.Uint16Queue.fromList(elements);
    }
    [_createList](size) {
      return _native_typed_data.NativeUint16List.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Uint16Buffer.new(size);
    }
    [_add$](element) {
      return this[$noSuchMethod](new core._Invocation.method(C[59] || CT.C59, null, [element]));
    }
    get [_head$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[60] || CT.C60)));
    }
    [_writeToList$](target) {
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[61] || CT.C61, null, [target])));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[62] || CT.C62, null, []));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C[63] || CT.C63, null, [newElementCount]));
    }
    get [_table$0]() {
      return T$.ListOfintN().as(this[$noSuchMethod](new core._Invocation.getter(C[64] || CT.C64)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[65] || CT.C65)));
    }
    set [_head$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[66] || CT.C66, value));
    }
    set [_table$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[67] || CT.C67, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[68] || CT.C68, value));
    }
  };
  (typed_queue.Uint16Queue.new = function(initialCapacity = null) {
    typed_queue.Uint16Queue.__proto__.new.call(this, _native_typed_data.NativeUint16List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Uint16Queue.prototype;
  dart.addTypeTests(typed_queue.Uint16Queue);
  dart.addTypeCaches(typed_queue.Uint16Queue);
  typed_queue.Uint16Queue[dart.implements] = () => [queue_list.QueueList$(core.int)];
  dart.setMethodSignature(typed_queue.Uint16Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Uint16Queue.__proto__),
    [_createList]: dart.fnType(typed_data.Uint16List, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Uint16Buffer, [core.int]),
    [_add$]: dart.fnType(dart.void, [core.int]),
    [_writeToList$]: dart.fnType(core.int, [core.List$(dart.nullable(core.int))]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setStaticMethodSignature(typed_queue.Uint16Queue, () => ['fromList']);
  dart.setGetterSignature(typed_queue.Uint16Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Uint16Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Uint16Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Uint16Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Uint16Queue, I[72]);
  typed_queue.Int16Queue = class Int16Queue extends typed_queue._IntQueue$(typed_data.Int16List) {
    static ['_#new#tearOff'](initialCapacity = null) {
      return new typed_queue.Int16Queue.new(initialCapacity);
    }
    static fromList(elements) {
      let t110;
      t110 = new typed_queue.Int16Queue.new(elements[$length]);
      return (() => {
        t110.addAll(elements);
        return t110;
      })();
    }
    static ['_#fromList#tearOff'](elements) {
      return typed_queue.Int16Queue.fromList(elements);
    }
    [_createList](size) {
      return _native_typed_data.NativeInt16List.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Int16Buffer.new(size);
    }
    [_add$](element) {
      return this[$noSuchMethod](new core._Invocation.method(C[59] || CT.C59, null, [element]));
    }
    get [_head$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[60] || CT.C60)));
    }
    [_writeToList$](target) {
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[61] || CT.C61, null, [target])));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[62] || CT.C62, null, []));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C[63] || CT.C63, null, [newElementCount]));
    }
    get [_table$0]() {
      return T$.ListOfintN().as(this[$noSuchMethod](new core._Invocation.getter(C[64] || CT.C64)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[65] || CT.C65)));
    }
    set [_head$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[66] || CT.C66, value));
    }
    set [_table$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[67] || CT.C67, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[68] || CT.C68, value));
    }
  };
  (typed_queue.Int16Queue.new = function(initialCapacity = null) {
    typed_queue.Int16Queue.__proto__.new.call(this, _native_typed_data.NativeInt16List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Int16Queue.prototype;
  dart.addTypeTests(typed_queue.Int16Queue);
  dart.addTypeCaches(typed_queue.Int16Queue);
  typed_queue.Int16Queue[dart.implements] = () => [queue_list.QueueList$(core.int)];
  dart.setMethodSignature(typed_queue.Int16Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Int16Queue.__proto__),
    [_createList]: dart.fnType(typed_data.Int16List, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Int16Buffer, [core.int]),
    [_add$]: dart.fnType(dart.void, [core.int]),
    [_writeToList$]: dart.fnType(core.int, [core.List$(dart.nullable(core.int))]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setStaticMethodSignature(typed_queue.Int16Queue, () => ['fromList']);
  dart.setGetterSignature(typed_queue.Int16Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Int16Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Int16Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Int16Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Int16Queue, I[72]);
  typed_queue.Uint32Queue = class Uint32Queue extends typed_queue._IntQueue$(typed_data.Uint32List) {
    static ['_#new#tearOff'](initialCapacity = null) {
      return new typed_queue.Uint32Queue.new(initialCapacity);
    }
    static fromList(elements) {
      let t110;
      t110 = new typed_queue.Uint32Queue.new(elements[$length]);
      return (() => {
        t110.addAll(elements);
        return t110;
      })();
    }
    static ['_#fromList#tearOff'](elements) {
      return typed_queue.Uint32Queue.fromList(elements);
    }
    [_createList](size) {
      return _native_typed_data.NativeUint32List.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Uint32Buffer.new(size);
    }
    [_add$](element) {
      return this[$noSuchMethod](new core._Invocation.method(C[59] || CT.C59, null, [element]));
    }
    get [_head$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[60] || CT.C60)));
    }
    [_writeToList$](target) {
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[61] || CT.C61, null, [target])));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[62] || CT.C62, null, []));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C[63] || CT.C63, null, [newElementCount]));
    }
    get [_table$0]() {
      return T$.ListOfintN().as(this[$noSuchMethod](new core._Invocation.getter(C[64] || CT.C64)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[65] || CT.C65)));
    }
    set [_head$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[66] || CT.C66, value));
    }
    set [_table$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[67] || CT.C67, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[68] || CT.C68, value));
    }
  };
  (typed_queue.Uint32Queue.new = function(initialCapacity = null) {
    typed_queue.Uint32Queue.__proto__.new.call(this, _native_typed_data.NativeUint32List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Uint32Queue.prototype;
  dart.addTypeTests(typed_queue.Uint32Queue);
  dart.addTypeCaches(typed_queue.Uint32Queue);
  typed_queue.Uint32Queue[dart.implements] = () => [queue_list.QueueList$(core.int)];
  dart.setMethodSignature(typed_queue.Uint32Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Uint32Queue.__proto__),
    [_createList]: dart.fnType(typed_data.Uint32List, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Uint32Buffer, [core.int]),
    [_add$]: dart.fnType(dart.void, [core.int]),
    [_writeToList$]: dart.fnType(core.int, [core.List$(dart.nullable(core.int))]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setStaticMethodSignature(typed_queue.Uint32Queue, () => ['fromList']);
  dart.setGetterSignature(typed_queue.Uint32Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Uint32Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Uint32Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Uint32Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Uint32Queue, I[72]);
  typed_queue.Int32Queue = class Int32Queue extends typed_queue._IntQueue$(typed_data.Int32List) {
    static ['_#new#tearOff'](initialCapacity = null) {
      return new typed_queue.Int32Queue.new(initialCapacity);
    }
    static fromList(elements) {
      let t110;
      t110 = new typed_queue.Int32Queue.new(elements[$length]);
      return (() => {
        t110.addAll(elements);
        return t110;
      })();
    }
    static ['_#fromList#tearOff'](elements) {
      return typed_queue.Int32Queue.fromList(elements);
    }
    [_createList](size) {
      return _native_typed_data.NativeInt32List.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Int32Buffer.new(size);
    }
    [_add$](element) {
      return this[$noSuchMethod](new core._Invocation.method(C[59] || CT.C59, null, [element]));
    }
    get [_head$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[60] || CT.C60)));
    }
    [_writeToList$](target) {
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[61] || CT.C61, null, [target])));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[62] || CT.C62, null, []));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C[63] || CT.C63, null, [newElementCount]));
    }
    get [_table$0]() {
      return T$.ListOfintN().as(this[$noSuchMethod](new core._Invocation.getter(C[64] || CT.C64)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[65] || CT.C65)));
    }
    set [_head$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[66] || CT.C66, value));
    }
    set [_table$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[67] || CT.C67, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[68] || CT.C68, value));
    }
  };
  (typed_queue.Int32Queue.new = function(initialCapacity = null) {
    typed_queue.Int32Queue.__proto__.new.call(this, _native_typed_data.NativeInt32List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Int32Queue.prototype;
  dart.addTypeTests(typed_queue.Int32Queue);
  dart.addTypeCaches(typed_queue.Int32Queue);
  typed_queue.Int32Queue[dart.implements] = () => [queue_list.QueueList$(core.int)];
  dart.setMethodSignature(typed_queue.Int32Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Int32Queue.__proto__),
    [_createList]: dart.fnType(typed_data.Int32List, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Int32Buffer, [core.int]),
    [_add$]: dart.fnType(dart.void, [core.int]),
    [_writeToList$]: dart.fnType(core.int, [core.List$(dart.nullable(core.int))]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setStaticMethodSignature(typed_queue.Int32Queue, () => ['fromList']);
  dart.setGetterSignature(typed_queue.Int32Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Int32Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Int32Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Int32Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Int32Queue, I[72]);
  typed_queue.Uint64Queue = class Uint64Queue extends typed_queue._IntQueue$(typed_data.Uint64List) {
    static ['_#new#tearOff'](initialCapacity = null) {
      return new typed_queue.Uint64Queue.new(initialCapacity);
    }
    static fromList(elements) {
      let t110;
      t110 = new typed_queue.Uint64Queue.new(elements[$length]);
      return (() => {
        t110.addAll(elements);
        return t110;
      })();
    }
    static ['_#fromList#tearOff'](elements) {
      return typed_queue.Uint64Queue.fromList(elements);
    }
    [_createList](size) {
      return typed_data.Uint64List.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Uint64Buffer.new(size);
    }
    [_add$](element) {
      return this[$noSuchMethod](new core._Invocation.method(C[59] || CT.C59, null, [element]));
    }
    get [_head$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[60] || CT.C60)));
    }
    [_writeToList$](target) {
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[61] || CT.C61, null, [target])));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[62] || CT.C62, null, []));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C[63] || CT.C63, null, [newElementCount]));
    }
    get [_table$0]() {
      return T$.ListOfintN().as(this[$noSuchMethod](new core._Invocation.getter(C[64] || CT.C64)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[65] || CT.C65)));
    }
    set [_head$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[66] || CT.C66, value));
    }
    set [_table$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[67] || CT.C67, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[68] || CT.C68, value));
    }
  };
  (typed_queue.Uint64Queue.new = function(initialCapacity = null) {
    typed_queue.Uint64Queue.__proto__.new.call(this, typed_data.Uint64List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Uint64Queue.prototype;
  dart.addTypeTests(typed_queue.Uint64Queue);
  dart.addTypeCaches(typed_queue.Uint64Queue);
  typed_queue.Uint64Queue[dart.implements] = () => [queue_list.QueueList$(core.int)];
  dart.setMethodSignature(typed_queue.Uint64Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Uint64Queue.__proto__),
    [_createList]: dart.fnType(typed_data.Uint64List, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Uint64Buffer, [core.int]),
    [_add$]: dart.fnType(dart.void, [core.int]),
    [_writeToList$]: dart.fnType(core.int, [core.List$(dart.nullable(core.int))]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setStaticMethodSignature(typed_queue.Uint64Queue, () => ['fromList']);
  dart.setGetterSignature(typed_queue.Uint64Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Uint64Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Uint64Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Uint64Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Uint64Queue, I[72]);
  typed_queue.Int64Queue = class Int64Queue extends typed_queue._IntQueue$(typed_data.Int64List) {
    static ['_#new#tearOff'](initialCapacity = null) {
      return new typed_queue.Int64Queue.new(initialCapacity);
    }
    static fromList(elements) {
      let t110;
      t110 = new typed_queue.Int64Queue.new(elements[$length]);
      return (() => {
        t110.addAll(elements);
        return t110;
      })();
    }
    static ['_#fromList#tearOff'](elements) {
      return typed_queue.Int64Queue.fromList(elements);
    }
    [_createList](size) {
      return typed_data.Int64List.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Int64Buffer.new(size);
    }
    [_add$](element) {
      return this[$noSuchMethod](new core._Invocation.method(C[59] || CT.C59, null, [element]));
    }
    get [_head$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[60] || CT.C60)));
    }
    [_writeToList$](target) {
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[61] || CT.C61, null, [target])));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[62] || CT.C62, null, []));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C[63] || CT.C63, null, [newElementCount]));
    }
    get [_table$0]() {
      return T$.ListOfintN().as(this[$noSuchMethod](new core._Invocation.getter(C[64] || CT.C64)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[65] || CT.C65)));
    }
    set [_head$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[66] || CT.C66, value));
    }
    set [_table$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[67] || CT.C67, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[68] || CT.C68, value));
    }
  };
  (typed_queue.Int64Queue.new = function(initialCapacity = null) {
    typed_queue.Int64Queue.__proto__.new.call(this, typed_data.Int64List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Int64Queue.prototype;
  dart.addTypeTests(typed_queue.Int64Queue);
  dart.addTypeCaches(typed_queue.Int64Queue);
  typed_queue.Int64Queue[dart.implements] = () => [queue_list.QueueList$(core.int)];
  dart.setMethodSignature(typed_queue.Int64Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Int64Queue.__proto__),
    [_createList]: dart.fnType(typed_data.Int64List, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Int64Buffer, [core.int]),
    [_add$]: dart.fnType(dart.void, [core.int]),
    [_writeToList$]: dart.fnType(core.int, [core.List$(dart.nullable(core.int))]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setStaticMethodSignature(typed_queue.Int64Queue, () => ['fromList']);
  dart.setGetterSignature(typed_queue.Int64Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Int64Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Int64Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Int64Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Int64Queue, I[72]);
  typed_queue.Float32Queue = class Float32Queue extends typed_queue._FloatQueue$(typed_data.Float32List) {
    static ['_#new#tearOff'](initialCapacity = null) {
      return new typed_queue.Float32Queue.new(initialCapacity);
    }
    static fromList(elements) {
      let t110;
      t110 = new typed_queue.Float32Queue.new(elements[$length]);
      return (() => {
        t110.addAll(elements);
        return t110;
      })();
    }
    static ['_#fromList#tearOff'](elements) {
      return typed_queue.Float32Queue.fromList(elements);
    }
    [_createList](size) {
      return _native_typed_data.NativeFloat32List.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Float32Buffer.new(size);
    }
    [_add$](element) {
      return this[$noSuchMethod](new core._Invocation.method(C[59] || CT.C59, null, [element]));
    }
    get [_head$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[60] || CT.C60)));
    }
    [_writeToList$](target) {
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[61] || CT.C61, null, [target])));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[62] || CT.C62, null, []));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C[63] || CT.C63, null, [newElementCount]));
    }
    get [_table$0]() {
      return T$.ListOfdoubleN().as(this[$noSuchMethod](new core._Invocation.getter(C[64] || CT.C64)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[65] || CT.C65)));
    }
    set [_head$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[66] || CT.C66, value));
    }
    set [_table$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[67] || CT.C67, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[68] || CT.C68, value));
    }
  };
  (typed_queue.Float32Queue.new = function(initialCapacity = null) {
    typed_queue.Float32Queue.__proto__.new.call(this, _native_typed_data.NativeFloat32List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Float32Queue.prototype;
  dart.addTypeTests(typed_queue.Float32Queue);
  dart.addTypeCaches(typed_queue.Float32Queue);
  typed_queue.Float32Queue[dart.implements] = () => [queue_list.QueueList$(core.double)];
  dart.setMethodSignature(typed_queue.Float32Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Float32Queue.__proto__),
    [_createList]: dart.fnType(typed_data.Float32List, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Float32Buffer, [core.int]),
    [_add$]: dart.fnType(dart.void, [core.double]),
    [_writeToList$]: dart.fnType(core.int, [core.List$(dart.nullable(core.double))]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setStaticMethodSignature(typed_queue.Float32Queue, () => ['fromList']);
  dart.setGetterSignature(typed_queue.Float32Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Float32Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.double)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Float32Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Float32Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.double)),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Float32Queue, I[72]);
  typed_queue.Float64Queue = class Float64Queue extends typed_queue._FloatQueue$(typed_data.Float64List) {
    static ['_#new#tearOff'](initialCapacity = null) {
      return new typed_queue.Float64Queue.new(initialCapacity);
    }
    static fromList(elements) {
      let t110;
      t110 = new typed_queue.Float64Queue.new(elements[$length]);
      return (() => {
        t110.addAll(elements);
        return t110;
      })();
    }
    static ['_#fromList#tearOff'](elements) {
      return typed_queue.Float64Queue.fromList(elements);
    }
    [_createList](size) {
      return _native_typed_data.NativeFloat64List.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Float64Buffer.new(size);
    }
    [_add$](element) {
      return this[$noSuchMethod](new core._Invocation.method(C[59] || CT.C59, null, [element]));
    }
    get [_head$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[60] || CT.C60)));
    }
    [_writeToList$](target) {
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[61] || CT.C61, null, [target])));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[62] || CT.C62, null, []));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C[63] || CT.C63, null, [newElementCount]));
    }
    get [_table$0]() {
      return T$.ListOfdoubleN().as(this[$noSuchMethod](new core._Invocation.getter(C[64] || CT.C64)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[65] || CT.C65)));
    }
    set [_head$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[66] || CT.C66, value));
    }
    set [_table$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[67] || CT.C67, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[68] || CT.C68, value));
    }
  };
  (typed_queue.Float64Queue.new = function(initialCapacity = null) {
    typed_queue.Float64Queue.__proto__.new.call(this, _native_typed_data.NativeFloat64List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Float64Queue.prototype;
  dart.addTypeTests(typed_queue.Float64Queue);
  dart.addTypeCaches(typed_queue.Float64Queue);
  typed_queue.Float64Queue[dart.implements] = () => [queue_list.QueueList$(core.double)];
  dart.setMethodSignature(typed_queue.Float64Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Float64Queue.__proto__),
    [_createList]: dart.fnType(typed_data.Float64List, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Float64Buffer, [core.int]),
    [_add$]: dart.fnType(dart.void, [core.double]),
    [_writeToList$]: dart.fnType(core.int, [core.List$(dart.nullable(core.double))]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setStaticMethodSignature(typed_queue.Float64Queue, () => ['fromList']);
  dart.setGetterSignature(typed_queue.Float64Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Float64Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.double)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Float64Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Float64Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.double)),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Float64Queue, I[72]);
  typed_queue.Int32x4Queue = class Int32x4Queue extends typed_queue._TypedQueue$(typed_data.Int32x4, typed_data.Int32x4List) {
    static ['_#new#tearOff'](initialCapacity = null) {
      return new typed_queue.Int32x4Queue.new(initialCapacity);
    }
    static fromList(elements) {
      let t110;
      t110 = new typed_queue.Int32x4Queue.new(elements[$length]);
      return (() => {
        t110.addAll(elements);
        return t110;
      })();
    }
    static ['_#fromList#tearOff'](elements) {
      return typed_queue.Int32x4Queue.fromList(elements);
    }
    [_createList](size) {
      return new _native_typed_data.NativeInt32x4List.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Int32x4Buffer.new(size);
    }
    get [_defaultValue]() {
      return typed_queue.Int32x4Queue._zero;
    }
    [_add$](element) {
      return this[$noSuchMethod](new core._Invocation.method(C[59] || CT.C59, null, [element]));
    }
    get [_head$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[60] || CT.C60)));
    }
    [_writeToList$](target) {
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[61] || CT.C61, null, [target])));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[62] || CT.C62, null, []));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C[63] || CT.C63, null, [newElementCount]));
    }
    get [_table$0]() {
      return T$.ListOfInt32x4N().as(this[$noSuchMethod](new core._Invocation.getter(C[64] || CT.C64)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[65] || CT.C65)));
    }
    set [_head$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[66] || CT.C66, value));
    }
    set [_table$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[67] || CT.C67, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[68] || CT.C68, value));
    }
  };
  (typed_queue.Int32x4Queue.new = function(initialCapacity = null) {
    typed_queue.Int32x4Queue.__proto__.new.call(this, new _native_typed_data.NativeInt32x4List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Int32x4Queue.prototype;
  dart.addTypeTests(typed_queue.Int32x4Queue);
  dart.addTypeCaches(typed_queue.Int32x4Queue);
  typed_queue.Int32x4Queue[dart.implements] = () => [queue_list.QueueList$(typed_data.Int32x4)];
  dart.setMethodSignature(typed_queue.Int32x4Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Int32x4Queue.__proto__),
    [_createList]: dart.fnType(typed_data.Int32x4List, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Int32x4Buffer, [core.int]),
    [_add$]: dart.fnType(dart.void, [typed_data.Int32x4]),
    [_writeToList$]: dart.fnType(core.int, [core.List$(dart.nullable(typed_data.Int32x4))]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setStaticMethodSignature(typed_queue.Int32x4Queue, () => ['fromList']);
  dart.setGetterSignature(typed_queue.Int32x4Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Int32x4Queue.__proto__),
    [_defaultValue]: typed_data.Int32x4,
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(typed_data.Int32x4)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Int32x4Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Int32x4Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(typed_data.Int32x4)),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Int32x4Queue, I[72]);
  dart.setStaticFieldSignature(typed_queue.Int32x4Queue, () => ['_zero']);
  dart.defineLazy(typed_queue.Int32x4Queue, {
    /*typed_queue.Int32x4Queue._zero*/get _zero() {
      return new _native_typed_data.NativeInt32x4.new(0, 0, 0, 0);
    }
  }, false);
  typed_queue.Float32x4Queue = class Float32x4Queue extends typed_queue._TypedQueue$(typed_data.Float32x4, typed_data.Float32x4List) {
    static ['_#new#tearOff'](initialCapacity = null) {
      return new typed_queue.Float32x4Queue.new(initialCapacity);
    }
    static fromList(elements) {
      let t110;
      t110 = new typed_queue.Float32x4Queue.new(elements[$length]);
      return (() => {
        t110.addAll(elements);
        return t110;
      })();
    }
    static ['_#fromList#tearOff'](elements) {
      return typed_queue.Float32x4Queue.fromList(elements);
    }
    [_createList](size) {
      return new _native_typed_data.NativeFloat32x4List.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Float32x4Buffer.new(size);
    }
    get [_defaultValue]() {
      return new _native_typed_data.NativeFloat32x4.zero();
    }
    [_add$](element) {
      return this[$noSuchMethod](new core._Invocation.method(C[59] || CT.C59, null, [element]));
    }
    get [_head$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[60] || CT.C60)));
    }
    [_writeToList$](target) {
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[61] || CT.C61, null, [target])));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[62] || CT.C62, null, []));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C[63] || CT.C63, null, [newElementCount]));
    }
    get [_table$0]() {
      return T$.ListOfFloat32x4N().as(this[$noSuchMethod](new core._Invocation.getter(C[64] || CT.C64)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[65] || CT.C65)));
    }
    set [_head$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[66] || CT.C66, value));
    }
    set [_table$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[67] || CT.C67, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[68] || CT.C68, value));
    }
  };
  (typed_queue.Float32x4Queue.new = function(initialCapacity = null) {
    typed_queue.Float32x4Queue.__proto__.new.call(this, new _native_typed_data.NativeFloat32x4List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Float32x4Queue.prototype;
  dart.addTypeTests(typed_queue.Float32x4Queue);
  dart.addTypeCaches(typed_queue.Float32x4Queue);
  typed_queue.Float32x4Queue[dart.implements] = () => [queue_list.QueueList$(typed_data.Float32x4)];
  dart.setMethodSignature(typed_queue.Float32x4Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Float32x4Queue.__proto__),
    [_createList]: dart.fnType(typed_data.Float32x4List, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Float32x4Buffer, [core.int]),
    [_add$]: dart.fnType(dart.void, [typed_data.Float32x4]),
    [_writeToList$]: dart.fnType(core.int, [core.List$(dart.nullable(typed_data.Float32x4))]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setStaticMethodSignature(typed_queue.Float32x4Queue, () => ['fromList']);
  dart.setGetterSignature(typed_queue.Float32x4Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Float32x4Queue.__proto__),
    [_defaultValue]: typed_data.Float32x4,
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(typed_data.Float32x4)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Float32x4Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Float32x4Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(typed_data.Float32x4)),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Float32x4Queue, I[72]);
  typed_queue._chooseRealInitialCapacity = function _chooseRealInitialCapacity(initialCapacity) {
    if (initialCapacity == null || dart.notNull(initialCapacity) < 16) {
      return 16;
    } else if (!typed_queue._isPowerOf2(initialCapacity)) {
      return typed_queue._nextPowerOf2(initialCapacity);
    } else {
      return initialCapacity;
    }
  };
  typed_queue._isPowerOf2 = function _isPowerOf2(number) {
    return (number & number - 1) === 0;
  };
  typed_queue._nextPowerOf2 = function _nextPowerOf2(number) {
    if (!(number > 0)) dart.assertFailed(null, I[71], 690, 10, "number > 0");
    number = (number << 1 >>> 0) - 1;
    for (;;) {
      let nextNumber = (number & number - 1) >>> 0;
      if (nextNumber === 0) return number;
      number = nextNumber;
    }
  };
  dart.defineLazy(typed_queue, {
    /*typed_queue._defaultInitialCapacity*/get _defaultInitialCapacity() {
      return 16;
    }
  }, false);
  var _buffer = dart.privateName(typed_buffer, "_buffer");
  var _length = dart.privateName(typed_buffer, "_length");
  var _typedBuffer = dart.privateName(typed_buffer, "_typedBuffer");
  var _defaultValue$ = dart.privateName(typed_buffer, "_defaultValue");
  var _createBuffer$ = dart.privateName(typed_buffer, "_createBuffer");
  var _createBiggerBuffer = dart.privateName(typed_buffer, "_createBiggerBuffer");
  var _grow$0 = dart.privateName(typed_buffer, "_grow");
  var _add$0 = dart.privateName(typed_buffer, "_add");
  var _addAll = dart.privateName(typed_buffer, "_addAll");
  var _insertKnownLength = dart.privateName(typed_buffer, "_insertKnownLength");
  var _ensureCapacity = dart.privateName(typed_buffer, "_ensureCapacity");
  var _setRange = dart.privateName(typed_buffer, "_setRange");
  const _is_TypedDataBuffer_default = Symbol('_is_TypedDataBuffer_default');
  typed_buffer.TypedDataBuffer$ = dart.generic(E => {
    var __t$IterableOfE = () => (__t$IterableOfE = dart.constFn(core.Iterable$(E)))();
    var __t$TypedDataBufferOfE = () => (__t$TypedDataBufferOfE = dart.constFn(typed_buffer.TypedDataBuffer$(E)))();
    class TypedDataBuffer extends collection.ListBase$(E) {
      get [_typedBuffer]() {
        return typed_data.TypedData.as(this[_buffer]);
      }
      get length() {
        return this[_length];
      }
      _get(index) {
        if (index >= this.length) dart.throw(new core.IndexError.new(index, this));
        return this[_buffer][$_get](index);
      }
      _set(index, value$) {
        let value = value$;
        E.as(value);
        if (index >= this.length) dart.throw(new core.IndexError.new(index, this));
        this[_buffer][$_set](index, value);
        return value$;
      }
      set length(newLength) {
        if (newLength < this[_length]) {
          let defaultValue = this[_defaultValue$];
          for (let i = newLength; i < this[_length]; i = i + 1) {
            this[_buffer][$_set](i, defaultValue);
          }
        } else if (newLength > this[_buffer][$length]) {
          let newBuffer = null;
          if (this[_buffer][$isEmpty]) {
            newBuffer = this[_createBuffer$](newLength);
          } else {
            newBuffer = this[_createBiggerBuffer](newLength);
          }
          newBuffer[$setRange](0, this[_length], this[_buffer]);
          this[_buffer] = newBuffer;
        }
        this[_length] = newLength;
      }
      [_add$0](value) {
        let t110;
        if (this[_length] === this[_buffer][$length]) this[_grow$0](this[_length]);
        this[_buffer][$_set]((t110 = this[_length], this[_length] = t110 + 1, t110), value);
      }
      add(element) {
        E.as(element);
        this[_add$0](element);
      }
      addAll(values, start = 0, end = null) {
        __t$IterableOfE().as(values);
        core.RangeError.checkNotNegative(start, "start");
        if (end != null && start > dart.notNull(end)) {
          dart.throw(new core.RangeError.range(end, start, null, "end"));
        }
        this[_addAll](values, start, end);
      }
      insertAll(index, values, start = 0, end = null) {
        let t110;
        __t$IterableOfE().as(values);
        core.RangeError.checkValidIndex(index, this, "index", this[_length] + 1);
        core.RangeError.checkNotNegative(start, "start");
        if (end != null) {
          if (start > dart.notNull(end)) {
            dart.throw(new core.RangeError.range(end, start, null, "end"));
          }
          if (start === end) return;
        }
        if (index === this[_length]) {
          this[_addAll](values, start, end);
          return;
        }
        if (end == null && core.List.is(values)) {
          end = values[$length];
        }
        if (end != null) {
          this[_insertKnownLength](index, values, start, end);
          return;
        }
        let writeIndex = this[_length];
        let skipCount = start;
        for (let value of values) {
          if (skipCount > 0) {
            skipCount = skipCount - 1;
            continue;
          }
          if (writeIndex === this[_buffer][$length]) {
            this[_grow$0](writeIndex);
          }
          this[_buffer][$_set]((t110 = writeIndex, writeIndex = t110 + 1, t110), value);
        }
        if (skipCount > 0) {
          dart.throw(new core.StateError.new("Too few elements"));
        }
        if (end != null && writeIndex < dart.notNull(end)) {
          dart.throw(new core.RangeError.range(end, start, writeIndex, "end"));
        }
        typed_buffer.TypedDataBuffer._reverse(this[_buffer], index, this[_length]);
        typed_buffer.TypedDataBuffer._reverse(this[_buffer], this[_length], writeIndex);
        typed_buffer.TypedDataBuffer._reverse(this[_buffer], index, writeIndex);
        this[_length] = writeIndex;
        return;
      }
      static _reverse(buffer, start, end) {
        end = end - 1;
        while (start < end) {
          let first = buffer[$_get](start);
          let last = buffer[$_get](end);
          buffer[$_set](end, first);
          buffer[$_set](start, last);
          start = start + 1;
          end = end - 1;
        }
      }
      [_addAll](values, start = 0, end = null) {
        if (core.List.is(values)) end == null ? end = values[$length] : null;
        if (end != null) {
          this[_insertKnownLength](this[_length], values, start, end);
          return;
        }
        let i = 0;
        for (let value of values) {
          if (i >= start) this.add(value);
          i = i + 1;
        }
        if (i < start) dart.throw(new core.StateError.new("Too few elements"));
      }
      [_insertKnownLength](index, values, start, end) {
        if (core.List.is(values)) {
          if (start > values[$length] || end > values[$length]) {
            dart.throw(new core.StateError.new("Too few elements"));
          }
        }
        let valuesLength = end - start;
        let newLength = this[_length] + valuesLength;
        this[_ensureCapacity](newLength);
        this[_buffer][$setRange](index + valuesLength, this[_length] + valuesLength, this[_buffer], index);
        this[_buffer][$setRange](index, index + valuesLength, values, start);
        this[_length] = newLength;
      }
      insert(index, element) {
        E.as(element);
        if (index < 0 || index > this[_length]) {
          dart.throw(new core.RangeError.range(index, 0, this[_length]));
        }
        if (this[_length] < this[_buffer][$length]) {
          this[_buffer][$setRange](index + 1, this[_length] + 1, this[_buffer], index);
          this[_buffer][$_set](index, element);
          this[_length] = this[_length] + 1;
          return;
        }
        let newBuffer = this[_createBiggerBuffer](null);
        newBuffer[$setRange](0, index, this[_buffer]);
        newBuffer[$setRange](index + 1, this[_length] + 1, this[_buffer], index);
        newBuffer[$_set](index, element);
        this[_length] = this[_length] + 1;
        this[_buffer] = newBuffer;
      }
      [_ensureCapacity](requiredCapacity) {
        if (requiredCapacity <= this[_buffer][$length]) return;
        let newBuffer = this[_createBiggerBuffer](requiredCapacity);
        newBuffer[$setRange](0, this[_length], this[_buffer]);
        this[_buffer] = newBuffer;
      }
      [_createBiggerBuffer](requiredCapacity) {
        let newLength = this[_buffer][$length] * 2;
        if (requiredCapacity != null && dart.notNull(newLength) < dart.notNull(requiredCapacity)) {
          newLength = requiredCapacity;
        } else if (dart.notNull(newLength) < 8) {
          newLength = 8;
        }
        return this[_createBuffer$](newLength);
      }
      [_grow$0](length) {
        let t110;
        this[_buffer] = (t110 = this[_createBiggerBuffer](null), (() => {
          t110[$setRange](0, length, this[_buffer]);
          return t110;
        })());
      }
      setRange(start, end, iterable, skipCount = 0) {
        __t$IterableOfE().as(iterable);
        if (end > this[_length]) dart.throw(new core.RangeError.range(end, 0, this[_length]));
        this[_setRange](start, end, iterable, skipCount);
      }
      [_setRange](start, end, source, skipCount) {
        if (__t$TypedDataBufferOfE().is(source)) {
          this[_buffer][$setRange](start, end, source[_buffer], skipCount);
        } else {
          this[_buffer][$setRange](start, end, source, skipCount);
        }
      }
      get elementSizeInBytes() {
        return this[_typedBuffer][$elementSizeInBytes];
      }
      get lengthInBytes() {
        return this[_length] * this[_typedBuffer][$elementSizeInBytes];
      }
      get offsetInBytes() {
        return this[_typedBuffer][$offsetInBytes];
      }
      get buffer() {
        return this[_typedBuffer][$buffer];
      }
    }
    (TypedDataBuffer.new = function(buffer) {
      this[_buffer] = buffer;
      this[_length] = buffer[$length];
      ;
    }).prototype = TypedDataBuffer.prototype;
    dart.addTypeTests(TypedDataBuffer);
    TypedDataBuffer.prototype[_is_TypedDataBuffer_default] = true;
    dart.addTypeCaches(TypedDataBuffer);
    dart.setMethodSignature(TypedDataBuffer, () => ({
      __proto__: dart.getMethods(TypedDataBuffer.__proto__),
      _get: dart.fnType(E, [core.int]),
      [$_get]: dart.fnType(E, [core.int]),
      _set: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)]),
      [$_set]: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)]),
      [_add$0]: dart.fnType(dart.void, [E]),
      addAll: dart.fnType(dart.void, [dart.nullable(core.Object)], [core.int, dart.nullable(core.int)]),
      [$addAll]: dart.fnType(dart.void, [dart.nullable(core.Object)], [core.int, dart.nullable(core.int)]),
      insertAll: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)], [core.int, dart.nullable(core.int)]),
      [$insertAll]: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)], [core.int, dart.nullable(core.int)]),
      [_addAll]: dart.fnType(dart.void, [core.Iterable$(E)], [core.int, dart.nullable(core.int)]),
      [_insertKnownLength]: dart.fnType(dart.void, [core.int, core.Iterable$(E), core.int, core.int]),
      [_ensureCapacity]: dart.fnType(dart.void, [core.int]),
      [_createBiggerBuffer]: dart.fnType(core.List$(E), [dart.nullable(core.int)]),
      [_grow$0]: dart.fnType(dart.void, [core.int]),
      [_setRange]: dart.fnType(dart.void, [core.int, core.int, core.Iterable$(E), core.int])
    }));
    dart.setStaticMethodSignature(TypedDataBuffer, () => ['_reverse']);
    dart.setGetterSignature(TypedDataBuffer, () => ({
      __proto__: dart.getGetters(TypedDataBuffer.__proto__),
      [_typedBuffer]: typed_data.TypedData,
      length: core.int,
      [$length]: core.int,
      elementSizeInBytes: core.int,
      lengthInBytes: core.int,
      offsetInBytes: core.int,
      buffer: typed_data.ByteBuffer
    }));
    dart.setSetterSignature(TypedDataBuffer, () => ({
      __proto__: dart.getSetters(TypedDataBuffer.__proto__),
      length: core.int,
      [$length]: core.int
    }));
    dart.setLibraryUri(TypedDataBuffer, I[73]);
    dart.setFieldSignature(TypedDataBuffer, () => ({
      __proto__: dart.getFields(TypedDataBuffer.__proto__),
      [_buffer]: dart.fieldType(core.List$(E)),
      [_length]: dart.fieldType(core.int)
    }));
    dart.setStaticFieldSignature(TypedDataBuffer, () => ['_initialLength']);
    dart.defineExtensionMethods(TypedDataBuffer, [
      '_get',
      '_set',
      'add',
      'addAll',
      'insertAll',
      'insert',
      'setRange'
    ]);
    dart.defineExtensionAccessors(TypedDataBuffer, ['length']);
    return TypedDataBuffer;
  });
  typed_buffer.TypedDataBuffer = typed_buffer.TypedDataBuffer$();
  dart.defineLazy(typed_buffer.TypedDataBuffer, {
    /*typed_buffer.TypedDataBuffer._initialLength*/get _initialLength() {
      return 8;
    }
  }, false);
  dart.addTypeTests(typed_buffer.TypedDataBuffer, _is_TypedDataBuffer_default);
  typed_buffer._IntBuffer = class _IntBuffer extends typed_buffer.TypedDataBuffer$(core.int) {
    get [_defaultValue$]() {
      return 0;
    }
  };
  (typed_buffer._IntBuffer.new = function(buffer) {
    typed_buffer._IntBuffer.__proto__.new.call(this, buffer);
    ;
  }).prototype = typed_buffer._IntBuffer.prototype;
  dart.addTypeTests(typed_buffer._IntBuffer);
  dart.addTypeCaches(typed_buffer._IntBuffer);
  dart.setGetterSignature(typed_buffer._IntBuffer, () => ({
    __proto__: dart.getGetters(typed_buffer._IntBuffer.__proto__),
    [_defaultValue$]: core.int
  }));
  dart.setLibraryUri(typed_buffer._IntBuffer, I[73]);
  typed_buffer._FloatBuffer = class _FloatBuffer extends typed_buffer.TypedDataBuffer$(core.double) {
    get [_defaultValue$]() {
      return 0;
    }
  };
  (typed_buffer._FloatBuffer.new = function(buffer) {
    typed_buffer._FloatBuffer.__proto__.new.call(this, buffer);
    ;
  }).prototype = typed_buffer._FloatBuffer.prototype;
  dart.addTypeTests(typed_buffer._FloatBuffer);
  dart.addTypeCaches(typed_buffer._FloatBuffer);
  dart.setGetterSignature(typed_buffer._FloatBuffer, () => ({
    __proto__: dart.getGetters(typed_buffer._FloatBuffer.__proto__),
    [_defaultValue$]: core.double
  }));
  dart.setLibraryUri(typed_buffer._FloatBuffer, I[73]);
  typed_buffer.Uint8Buffer = class Uint8Buffer extends typed_buffer._IntBuffer {
    static ['_#new#tearOff'](initialLength = 0) {
      return new typed_buffer.Uint8Buffer.new(initialLength);
    }
    [_createBuffer$](size) {
      return _native_typed_data.NativeUint8List.new(size);
    }
  };
  (typed_buffer.Uint8Buffer.new = function(initialLength = 0) {
    typed_buffer.Uint8Buffer.__proto__.new.call(this, _native_typed_data.NativeUint8List.new(initialLength));
    ;
  }).prototype = typed_buffer.Uint8Buffer.prototype;
  dart.addTypeTests(typed_buffer.Uint8Buffer);
  dart.addTypeCaches(typed_buffer.Uint8Buffer);
  dart.setMethodSignature(typed_buffer.Uint8Buffer, () => ({
    __proto__: dart.getMethods(typed_buffer.Uint8Buffer.__proto__),
    [_createBuffer$]: dart.fnType(typed_data.Uint8List, [core.int])
  }));
  dart.setLibraryUri(typed_buffer.Uint8Buffer, I[73]);
  typed_buffer.Int8Buffer = class Int8Buffer extends typed_buffer._IntBuffer {
    static ['_#new#tearOff'](initialLength = 0) {
      return new typed_buffer.Int8Buffer.new(initialLength);
    }
    [_createBuffer$](size) {
      return _native_typed_data.NativeInt8List.new(size);
    }
  };
  (typed_buffer.Int8Buffer.new = function(initialLength = 0) {
    typed_buffer.Int8Buffer.__proto__.new.call(this, _native_typed_data.NativeInt8List.new(initialLength));
    ;
  }).prototype = typed_buffer.Int8Buffer.prototype;
  dart.addTypeTests(typed_buffer.Int8Buffer);
  dart.addTypeCaches(typed_buffer.Int8Buffer);
  dart.setMethodSignature(typed_buffer.Int8Buffer, () => ({
    __proto__: dart.getMethods(typed_buffer.Int8Buffer.__proto__),
    [_createBuffer$]: dart.fnType(typed_data.Int8List, [core.int])
  }));
  dart.setLibraryUri(typed_buffer.Int8Buffer, I[73]);
  typed_buffer.Uint8ClampedBuffer = class Uint8ClampedBuffer extends typed_buffer._IntBuffer {
    static ['_#new#tearOff'](initialLength = 0) {
      return new typed_buffer.Uint8ClampedBuffer.new(initialLength);
    }
    [_createBuffer$](size) {
      return _native_typed_data.NativeUint8ClampedList.new(size);
    }
  };
  (typed_buffer.Uint8ClampedBuffer.new = function(initialLength = 0) {
    typed_buffer.Uint8ClampedBuffer.__proto__.new.call(this, _native_typed_data.NativeUint8ClampedList.new(initialLength));
    ;
  }).prototype = typed_buffer.Uint8ClampedBuffer.prototype;
  dart.addTypeTests(typed_buffer.Uint8ClampedBuffer);
  dart.addTypeCaches(typed_buffer.Uint8ClampedBuffer);
  dart.setMethodSignature(typed_buffer.Uint8ClampedBuffer, () => ({
    __proto__: dart.getMethods(typed_buffer.Uint8ClampedBuffer.__proto__),
    [_createBuffer$]: dart.fnType(typed_data.Uint8ClampedList, [core.int])
  }));
  dart.setLibraryUri(typed_buffer.Uint8ClampedBuffer, I[73]);
  typed_buffer.Uint16Buffer = class Uint16Buffer extends typed_buffer._IntBuffer {
    static ['_#new#tearOff'](initialLength = 0) {
      return new typed_buffer.Uint16Buffer.new(initialLength);
    }
    [_createBuffer$](size) {
      return _native_typed_data.NativeUint16List.new(size);
    }
  };
  (typed_buffer.Uint16Buffer.new = function(initialLength = 0) {
    typed_buffer.Uint16Buffer.__proto__.new.call(this, _native_typed_data.NativeUint16List.new(initialLength));
    ;
  }).prototype = typed_buffer.Uint16Buffer.prototype;
  dart.addTypeTests(typed_buffer.Uint16Buffer);
  dart.addTypeCaches(typed_buffer.Uint16Buffer);
  dart.setMethodSignature(typed_buffer.Uint16Buffer, () => ({
    __proto__: dart.getMethods(typed_buffer.Uint16Buffer.__proto__),
    [_createBuffer$]: dart.fnType(typed_data.Uint16List, [core.int])
  }));
  dart.setLibraryUri(typed_buffer.Uint16Buffer, I[73]);
  typed_buffer.Int16Buffer = class Int16Buffer extends typed_buffer._IntBuffer {
    static ['_#new#tearOff'](initialLength = 0) {
      return new typed_buffer.Int16Buffer.new(initialLength);
    }
    [_createBuffer$](size) {
      return _native_typed_data.NativeInt16List.new(size);
    }
  };
  (typed_buffer.Int16Buffer.new = function(initialLength = 0) {
    typed_buffer.Int16Buffer.__proto__.new.call(this, _native_typed_data.NativeInt16List.new(initialLength));
    ;
  }).prototype = typed_buffer.Int16Buffer.prototype;
  dart.addTypeTests(typed_buffer.Int16Buffer);
  dart.addTypeCaches(typed_buffer.Int16Buffer);
  dart.setMethodSignature(typed_buffer.Int16Buffer, () => ({
    __proto__: dart.getMethods(typed_buffer.Int16Buffer.__proto__),
    [_createBuffer$]: dart.fnType(typed_data.Int16List, [core.int])
  }));
  dart.setLibraryUri(typed_buffer.Int16Buffer, I[73]);
  typed_buffer.Uint32Buffer = class Uint32Buffer extends typed_buffer._IntBuffer {
    static ['_#new#tearOff'](initialLength = 0) {
      return new typed_buffer.Uint32Buffer.new(initialLength);
    }
    [_createBuffer$](size) {
      return _native_typed_data.NativeUint32List.new(size);
    }
  };
  (typed_buffer.Uint32Buffer.new = function(initialLength = 0) {
    typed_buffer.Uint32Buffer.__proto__.new.call(this, _native_typed_data.NativeUint32List.new(initialLength));
    ;
  }).prototype = typed_buffer.Uint32Buffer.prototype;
  dart.addTypeTests(typed_buffer.Uint32Buffer);
  dart.addTypeCaches(typed_buffer.Uint32Buffer);
  dart.setMethodSignature(typed_buffer.Uint32Buffer, () => ({
    __proto__: dart.getMethods(typed_buffer.Uint32Buffer.__proto__),
    [_createBuffer$]: dart.fnType(typed_data.Uint32List, [core.int])
  }));
  dart.setLibraryUri(typed_buffer.Uint32Buffer, I[73]);
  typed_buffer.Int32Buffer = class Int32Buffer extends typed_buffer._IntBuffer {
    static ['_#new#tearOff'](initialLength = 0) {
      return new typed_buffer.Int32Buffer.new(initialLength);
    }
    [_createBuffer$](size) {
      return _native_typed_data.NativeInt32List.new(size);
    }
  };
  (typed_buffer.Int32Buffer.new = function(initialLength = 0) {
    typed_buffer.Int32Buffer.__proto__.new.call(this, _native_typed_data.NativeInt32List.new(initialLength));
    ;
  }).prototype = typed_buffer.Int32Buffer.prototype;
  dart.addTypeTests(typed_buffer.Int32Buffer);
  dart.addTypeCaches(typed_buffer.Int32Buffer);
  dart.setMethodSignature(typed_buffer.Int32Buffer, () => ({
    __proto__: dart.getMethods(typed_buffer.Int32Buffer.__proto__),
    [_createBuffer$]: dart.fnType(typed_data.Int32List, [core.int])
  }));
  dart.setLibraryUri(typed_buffer.Int32Buffer, I[73]);
  typed_buffer.Uint64Buffer = class Uint64Buffer extends typed_buffer._IntBuffer {
    static ['_#new#tearOff'](initialLength = 0) {
      return new typed_buffer.Uint64Buffer.new(initialLength);
    }
    [_createBuffer$](size) {
      return typed_data.Uint64List.new(size);
    }
  };
  (typed_buffer.Uint64Buffer.new = function(initialLength = 0) {
    typed_buffer.Uint64Buffer.__proto__.new.call(this, typed_data.Uint64List.new(initialLength));
    ;
  }).prototype = typed_buffer.Uint64Buffer.prototype;
  dart.addTypeTests(typed_buffer.Uint64Buffer);
  dart.addTypeCaches(typed_buffer.Uint64Buffer);
  dart.setMethodSignature(typed_buffer.Uint64Buffer, () => ({
    __proto__: dart.getMethods(typed_buffer.Uint64Buffer.__proto__),
    [_createBuffer$]: dart.fnType(typed_data.Uint64List, [core.int])
  }));
  dart.setLibraryUri(typed_buffer.Uint64Buffer, I[73]);
  typed_buffer.Int64Buffer = class Int64Buffer extends typed_buffer._IntBuffer {
    static ['_#new#tearOff'](initialLength = 0) {
      return new typed_buffer.Int64Buffer.new(initialLength);
    }
    [_createBuffer$](size) {
      return typed_data.Int64List.new(size);
    }
  };
  (typed_buffer.Int64Buffer.new = function(initialLength = 0) {
    typed_buffer.Int64Buffer.__proto__.new.call(this, typed_data.Int64List.new(initialLength));
    ;
  }).prototype = typed_buffer.Int64Buffer.prototype;
  dart.addTypeTests(typed_buffer.Int64Buffer);
  dart.addTypeCaches(typed_buffer.Int64Buffer);
  dart.setMethodSignature(typed_buffer.Int64Buffer, () => ({
    __proto__: dart.getMethods(typed_buffer.Int64Buffer.__proto__),
    [_createBuffer$]: dart.fnType(typed_data.Int64List, [core.int])
  }));
  dart.setLibraryUri(typed_buffer.Int64Buffer, I[73]);
  typed_buffer.Float32Buffer = class Float32Buffer extends typed_buffer._FloatBuffer {
    static ['_#new#tearOff'](initialLength = 0) {
      return new typed_buffer.Float32Buffer.new(initialLength);
    }
    [_createBuffer$](size) {
      return _native_typed_data.NativeFloat32List.new(size);
    }
  };
  (typed_buffer.Float32Buffer.new = function(initialLength = 0) {
    typed_buffer.Float32Buffer.__proto__.new.call(this, _native_typed_data.NativeFloat32List.new(initialLength));
    ;
  }).prototype = typed_buffer.Float32Buffer.prototype;
  dart.addTypeTests(typed_buffer.Float32Buffer);
  dart.addTypeCaches(typed_buffer.Float32Buffer);
  dart.setMethodSignature(typed_buffer.Float32Buffer, () => ({
    __proto__: dart.getMethods(typed_buffer.Float32Buffer.__proto__),
    [_createBuffer$]: dart.fnType(typed_data.Float32List, [core.int])
  }));
  dart.setLibraryUri(typed_buffer.Float32Buffer, I[73]);
  typed_buffer.Float64Buffer = class Float64Buffer extends typed_buffer._FloatBuffer {
    static ['_#new#tearOff'](initialLength = 0) {
      return new typed_buffer.Float64Buffer.new(initialLength);
    }
    [_createBuffer$](size) {
      return _native_typed_data.NativeFloat64List.new(size);
    }
  };
  (typed_buffer.Float64Buffer.new = function(initialLength = 0) {
    typed_buffer.Float64Buffer.__proto__.new.call(this, _native_typed_data.NativeFloat64List.new(initialLength));
    ;
  }).prototype = typed_buffer.Float64Buffer.prototype;
  dart.addTypeTests(typed_buffer.Float64Buffer);
  dart.addTypeCaches(typed_buffer.Float64Buffer);
  dart.setMethodSignature(typed_buffer.Float64Buffer, () => ({
    __proto__: dart.getMethods(typed_buffer.Float64Buffer.__proto__),
    [_createBuffer$]: dart.fnType(typed_data.Float64List, [core.int])
  }));
  dart.setLibraryUri(typed_buffer.Float64Buffer, I[73]);
  typed_buffer.Int32x4Buffer = class Int32x4Buffer extends typed_buffer.TypedDataBuffer$(typed_data.Int32x4) {
    static ['_#new#tearOff'](initialLength = 0) {
      return new typed_buffer.Int32x4Buffer.new(initialLength);
    }
    get [_defaultValue$]() {
      return typed_buffer.Int32x4Buffer._zero;
    }
    [_createBuffer$](size) {
      return new _native_typed_data.NativeInt32x4List.new(size);
    }
  };
  (typed_buffer.Int32x4Buffer.new = function(initialLength = 0) {
    typed_buffer.Int32x4Buffer.__proto__.new.call(this, new _native_typed_data.NativeInt32x4List.new(initialLength));
    ;
  }).prototype = typed_buffer.Int32x4Buffer.prototype;
  dart.addTypeTests(typed_buffer.Int32x4Buffer);
  dart.addTypeCaches(typed_buffer.Int32x4Buffer);
  dart.setMethodSignature(typed_buffer.Int32x4Buffer, () => ({
    __proto__: dart.getMethods(typed_buffer.Int32x4Buffer.__proto__),
    [_createBuffer$]: dart.fnType(typed_data.Int32x4List, [core.int])
  }));
  dart.setGetterSignature(typed_buffer.Int32x4Buffer, () => ({
    __proto__: dart.getGetters(typed_buffer.Int32x4Buffer.__proto__),
    [_defaultValue$]: typed_data.Int32x4
  }));
  dart.setLibraryUri(typed_buffer.Int32x4Buffer, I[73]);
  dart.setStaticFieldSignature(typed_buffer.Int32x4Buffer, () => ['_zero']);
  dart.defineLazy(typed_buffer.Int32x4Buffer, {
    /*typed_buffer.Int32x4Buffer._zero*/get _zero() {
      return new _native_typed_data.NativeInt32x4.new(0, 0, 0, 0);
    }
  }, false);
  typed_buffer.Float32x4Buffer = class Float32x4Buffer extends typed_buffer.TypedDataBuffer$(typed_data.Float32x4) {
    static ['_#new#tearOff'](initialLength = 0) {
      return new typed_buffer.Float32x4Buffer.new(initialLength);
    }
    get [_defaultValue$]() {
      return new _native_typed_data.NativeFloat32x4.zero();
    }
    [_createBuffer$](size) {
      return new _native_typed_data.NativeFloat32x4List.new(size);
    }
  };
  (typed_buffer.Float32x4Buffer.new = function(initialLength = 0) {
    typed_buffer.Float32x4Buffer.__proto__.new.call(this, new _native_typed_data.NativeFloat32x4List.new(initialLength));
    ;
  }).prototype = typed_buffer.Float32x4Buffer.prototype;
  dart.addTypeTests(typed_buffer.Float32x4Buffer);
  dart.addTypeCaches(typed_buffer.Float32x4Buffer);
  dart.setMethodSignature(typed_buffer.Float32x4Buffer, () => ({
    __proto__: dart.getMethods(typed_buffer.Float32x4Buffer.__proto__),
    [_createBuffer$]: dart.fnType(typed_data.Float32x4List, [core.int])
  }));
  dart.setGetterSignature(typed_buffer.Float32x4Buffer, () => ({
    __proto__: dart.getGetters(typed_buffer.Float32x4Buffer.__proto__),
    [_defaultValue$]: typed_data.Float32x4
  }));
  dart.setLibraryUri(typed_buffer.Float32x4Buffer, I[73]);
  dart.trackLibraries("zapp_user_main", {
    "file:///zapp/project/.zapp_entry.dart": $46zapp_entry,
    "file:///zapp/project/lib/main.dart": main,
    "package:bloc/bloc.dart": bloc,
    "package:flutter_app/app.dart": app$,
    "package:flutter_app/simple_bloc_observer.dart": simple_bloc_observer,
    "package:flutter_bloc/flutter_bloc.dart": flutter_bloc,
    "package:bloc/src/bloc.dart": bloc$,
    "package:bloc/src/bloc_observer.dart": bloc_observer,
    "package:bloc/src/change.dart": change,
    "package:bloc/src/cubit.dart": cubit,
    "package:bloc/src/transition.dart": transition,
    "package:flutter_app/posts/view/post_page.dart": post_page,
    "package:provider/provider.dart": provider,
    "package:flutter_bloc/src/bloc_builder.dart": bloc_builder,
    "package:flutter_bloc/src/bloc_consumer.dart": bloc_consumer,
    "package:flutter_bloc/src/bloc_listener.dart": bloc_listener,
    "package:flutter_bloc/src/bloc_provider.dart": bloc_provider,
    "package:flutter_bloc/src/bloc_selector.dart": bloc_selector,
    "package:flutter_bloc/src/multi_bloc_listener.dart": multi_bloc_listener,
    "package:flutter_bloc/src/multi_bloc_provider.dart": multi_bloc_provider,
    "package:flutter_bloc/src/multi_repository_provider.dart": multi_repository_provider,
    "package:flutter_bloc/src/repository_provider.dart": repository_provider,
    "package:flutter_app/posts/bloc/post_bloc.dart": post_bloc,
    "package:flutter_app/posts/bloc/post_event.dart": post_event,
    "package:flutter_app/posts/view/post_list.dart": post_list,
    "package:http/http.dart": http,
    "package:provider/src/async_provider.dart": async_provider,
    "package:provider/src/change_notifier_provider.dart": change_notifier_provider,
    "package:provider/src/consumer.dart": consumer,
    "package:provider/src/listenable_provider.dart": listenable_provider,
    "package:provider/src/provider.dart": provider$,
    "package:provider/src/proxy_provider.dart": proxy_provider,
    "package:provider/src/reassemble_handler.dart": reassemble_handler,
    "package:provider/src/selector.dart": selector$,
    "package:provider/src/value_listenable_provider.dart": value_listenable_provider,
    "package:provider/single_child_widget.dart": single_child_widget,
    "package:bloc_concurrency/bloc_concurrency.dart": bloc_concurrency,
    "package:equatable/equatable.dart": equatable,
    "package:flutter_app/posts/bloc/post_state.dart": post_state,
    "package:flutter_app/posts/models/post.dart": post,
    "package:stream_transform/stream_transform.dart": stream_transform,
    "package:flutter_app/posts/widgets/bottom_loader.dart": bottom_loader,
    "package:flutter_app/posts/widgets/post_list_item.dart": post_list_item,
    "package:http/src/client.dart": client$,
    "package:http/src/exception.dart": exception,
    "package:http/src/request.dart": request$,
    "package:http/src/response.dart": response$,
    "package:http/src/streamed_request.dart": streamed_request,
    "package:http/src/base_client.dart": base_client,
    "package:http/src/base_request.dart": base_request,
    "package:http/src/base_response.dart": base_response,
    "package:http/src/byte_stream.dart": byte_stream,
    "package:http/src/multipart_file.dart": multipart_file,
    "package:http/src/multipart_request.dart": multipart_request,
    "package:http/src/streamed_response.dart": streamed_response,
    "package:nested/nested.dart": nested,
    "package:bloc_concurrency/src/concurrent.dart": concurrent,
    "package:bloc_concurrency/src/droppable.dart": droppable,
    "package:bloc_concurrency/src/restartable.dart": restartable,
    "package:bloc_concurrency/src/sequential.dart": sequential,
    "package:equatable/src/equatable.dart": equatable$,
    "package:equatable/src/equatable_config.dart": equatable_config,
    "package:equatable/src/equatable_mixin.dart": equatable_mixin,
    "package:stream_transform/src/async_map.dart": async_map,
    "package:stream_transform/src/combine_latest.dart": combine_latest,
    "package:stream_transform/src/concatenate.dart": concatenate,
    "package:stream_transform/src/merge.dart": merge,
    "package:stream_transform/src/rate_limit.dart": rate_limit,
    "package:stream_transform/src/scan.dart": scan,
    "package:stream_transform/src/switch.dart": $switch,
    "package:stream_transform/src/take_until.dart": take_until,
    "package:stream_transform/src/tap.dart": tap,
    "package:stream_transform/src/where.dart": where,
    "package:http/src/browser_client.dart": browser_client,
    "package:http_parser/http_parser.dart": http_parser,
    "package:http/src/utils.dart": utils,
    "package:http/src/multipart_file_stub.dart": multipart_file_stub,
    "package:http/src/boundary_characters.dart": boundary_characters,
    "package:equatable/src/equatable_utils.dart": equatable_utils,
    "package:stream_transform/src/aggregate_sample.dart": aggregate_sample,
    "package:stream_transform/src/from_handlers.dart": from_handlers,
    "package:http_parser/src/authentication_challenge.dart": authentication_challenge,
    "package:http_parser/src/case_insensitive_map.dart": case_insensitive_map,
    "package:http_parser/src/chunked_coding.dart": chunked_coding,
    "package:http_parser/src/http_date.dart": http_date,
    "package:http_parser/src/media_type.dart": media_type,
    "package:http_parser/src/scan.dart": scan$,
    "package:http_parser/src/utils.dart": utils$,
    "package:http_parser/src/chunked_coding/decoder.dart": decoder,
    "package:http_parser/src/chunked_coding/encoder.dart": encoder,
    "package:typed_data/typed_data.dart": typed_data$,
    "package:http_parser/src/chunked_coding/charcodes.dart": charcodes,
    "package:typed_data/src/typed_queue.dart": typed_queue,
    "package:typed_data/typed_buffers.dart": typed_buffers,
    "package:typed_data/src/typed_buffer.dart": typed_buffer
  }, {
    "package:bloc/src/bloc.dart": ["bloc_base.dart", "bloc_overrides.dart", "emitter.dart"],
    "package:provider/src/provider.dart": ["deferred_inherited_provider.dart", "devtool.dart", "inherited_provider.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["/zapp/project/.zapp_entry.dart","/zapp/project/lib/main.dart","/zapp/project/lib/app.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/bloc-8.0.3/lib/src/bloc_observer.dart","/zapp/project/lib/simple_bloc_observer.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/bloc-8.0.3/lib/src/bloc.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/bloc-8.0.3/lib/src/bloc_base.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/bloc-8.0.3/lib/src/bloc_overrides.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/bloc-8.0.3/lib/src/emitter.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/bloc-8.0.3/lib/src/change.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/bloc-8.0.3/lib/src/cubit.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/bloc-8.0.3/lib/src/transition.dart","/zapp/project/lib/posts/view/post_page.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_bloc-8.0.1/lib/src/bloc_builder.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_bloc-8.0.1/lib/src/bloc_consumer.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/nested-1.0.0/lib/nested.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_bloc-8.0.1/lib/src/bloc_listener.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_bloc-8.0.1/lib/src/bloc_provider.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_bloc-8.0.1/lib/src/bloc_selector.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/provider-6.0.3/lib/src/provider.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_bloc-8.0.1/lib/src/multi_bloc_listener.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_bloc-8.0.1/lib/src/multi_bloc_provider.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_bloc-8.0.1/lib/src/multi_repository_provider.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/provider-6.0.3/lib/src/inherited_provider.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/flutter_bloc-8.0.1/lib/src/repository_provider.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/equatable-2.0.3/lib/src/equatable.dart","/zapp/project/lib/posts/bloc/post_event.dart","/zapp/project/lib/posts/bloc/post_state.dart","/zapp/project/lib/posts/bloc/post_bloc.dart","/zapp/project/lib/posts/view/post_list.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/http-0.13.4/lib/http.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/provider-6.0.3/lib/src/deferred_inherited_provider.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/provider-6.0.3/lib/src/async_provider.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/provider-6.0.3/lib/src/listenable_provider.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/provider-6.0.3/lib/src/change_notifier_provider.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/provider-6.0.3/lib/src/consumer.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/provider-6.0.3/lib/src/devtool.dart","/workspace/build/dart-sdk/packages/flutter/lib/src/widgets/framework.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/provider-6.0.3/lib/src/proxy_provider.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/provider-6.0.3/lib/src/reassemble_handler.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/provider-6.0.3/lib/src/selector.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/provider-6.0.3/lib/src/value_listenable_provider.dart","/zapp/project/lib/posts/models/post.dart","/zapp/project/lib/posts/widgets/bottom_loader.dart","/zapp/project/lib/posts/widgets/post_list_item.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/http-0.13.4/lib/src/client.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/http-0.13.4/lib/src/exception.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/http-0.13.4/lib/src/base_request.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/http-0.13.4/lib/src/request.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/http-0.13.4/lib/src/base_response.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/http-0.13.4/lib/src/response.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/http-0.13.4/lib/src/streamed_request.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/http-0.13.4/lib/src/base_client.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/http-0.13.4/lib/src/byte_stream.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/http-0.13.4/lib/src/multipart_file.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/http-0.13.4/lib/src/multipart_request.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/http-0.13.4/lib/src/streamed_response.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/bloc_concurrency-0.2.0/lib/src/concurrent.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/bloc_concurrency-0.2.0/lib/src/droppable.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/bloc_concurrency-0.2.0/lib/src/restartable.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/bloc_concurrency-0.2.0/lib/src/sequential.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/equatable-2.0.3/lib/src/equatable_config.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/equatable-2.0.3/lib/src/equatable_mixin.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/stream_transform-2.0.0/lib/src/async_map.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/stream_transform-2.0.0/lib/src/combine_latest.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/stream_transform-2.0.0/lib/src/concatenate.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/stream_transform-2.0.0/lib/src/merge.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/stream_transform-2.0.0/lib/src/rate_limit.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/stream_transform-2.0.0/lib/src/scan.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/stream_transform-2.0.0/lib/src/switch.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/stream_transform-2.0.0/lib/src/take_until.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/stream_transform-2.0.0/lib/src/tap.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/stream_transform-2.0.0/lib/src/where.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/http-0.13.4/lib/src/browser_client.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/http-0.13.4/lib/src/utils.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/http-0.13.4/lib/src/multipart_file_stub.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/http-0.13.4/lib/src/boundary_characters.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/equatable-2.0.3/lib/src/equatable_utils.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/stream_transform-2.0.0/lib/src/aggregate_sample.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/stream_transform-2.0.0/lib/src/from_handlers.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/http_parser-4.0.1/lib/src/authentication_challenge.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/http_parser-4.0.1/lib/src/case_insensitive_map.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/http_parser-4.0.1/lib/src/chunked_coding.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/http_parser-4.0.1/lib/src/http_date.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/http_parser-4.0.1/lib/src/media_type.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/http_parser-4.0.1/lib/src/scan.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/http_parser-4.0.1/lib/src/utils.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/http_parser-4.0.1/lib/src/chunked_coding/decoder.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/http_parser-4.0.1/lib/src/chunked_coding/encoder.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/http_parser-4.0.1/lib/src/chunked_coding/charcodes.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/typed_data-1.3.1/lib/src/typed_queue.dart","/zapp/pub/.pub_cache/hosted/pub.dartlang.org/typed_data-1.3.1/lib/src/typed_buffer.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAqCI,IAnBF,iCAAgB;AACd,UAAoB,8BAGD;AAF8B,QAA9B,AAAkB,8BAElB,eAF2B;;AAEL,QAAF,CAApB;;yBAElB,SAAC,GAAG;AACL,UAAO,AAAQ,uBAAY;AAIvB,QAHC,AAAQ,sBAAW,wBAAwB,CAC5C,AAAE,CAAD,eACD,AAAW,UAAD;;4DAGM,yCACb,SAAC,MAAM,QAAQ,MAAM;AAC1B,cAAO,AAAQ,uBAAY;AAC4B,YAAlD,AAAQ,sBAAW,wBAAwB,CAAC,IAAI;;;EAI3D;;AAEiB;AAQd,MAPD,MAAS,gCACC;AACS,UAAf;8CAEe;;IAIrB;;;ACtCG,IAHa,wCACZ,cAAM,eAAO,sDACC;EAElB;;;;;;;ACRU,6CAAY;;EAAY;;;;;aCOT;IAAO;YAMZ,MAAc;IAAQ;aAOjB,MAAa;IAAS;iBAStB,MAAiB;IAAa;YAO/B,MAAa,OAAkB;IAAa;YAQ5C;IAAO;;;;EAC/B;;;;;;;;;;;;;;iBC7CyB,MAAiB;AACF,MAA9B,mBAAa,IAAI,EAAE,UAAU;AAClB,MAAjB,WAAM,UAAU;IAClB;YAGsB,MAAa,OAAkB;AACvC,MAAZ,WAAM,KAAK;AAC2B,MAAhC,cAAQ,IAAI,EAAE,KAAK,EAAE,UAAU;IACvC;;;;;;;EACF;;;;;;;;;ICGA;;;;;;;;;;;;;IAuBqC;;;;;;IACxB;;;;;;;;;;;;;QAFmB;QAAsB;IAAtB;IAAsB;;EAAM;;;;;;;;;;;;;;;;;;;;;;;;;;;ACqB/C;kCAAmB,4KAAnB;MAAsD;;AAO9C;MAAM;;AAGG,cAAA,AAAiB;MAAM;;AAO9B,cAAA,AAAiB;MAAQ;WAc9B;;AACd;AACE,cAAI;AAC4D,YAA9D,WAAM,wBAAW;;AAEnB,cAAU,YAAN,KAAK,EAAI,kBAAU,gBAAU;AACkC,UAAnE,cAAS,6CAAiC,uBAAkB,KAAK;AACnD,UAAd,gBAAS,KAAK;AACc,UAA5B,AAAiB,2BAAI;AACN,UAAf,iBAAW;;cACJ;cAAO;AAAd;AAC0B,YAA1B,aAAQ,KAAK,EAAE,UAAU;AAClB,YAAP;;;;MAEJ;eAwB4B;;;AAEW,aAArC;4BAAe,YAAS,MAAM,MAAM;MACtC;eAMqB,OAAoB;;AACS,QAAhD,aAAQ,KAAK,GAAa,KAAX,UAAU,EAAV,aAAyB;MAC1C;cAiBoB,OAAkB;;AAEW,aAA/C;4BAAe,WAAQ,MAAM,KAAK,EAAE,UAAU;MAChD;;AAOkB;;AAEY,eAA5B;8BAAe,WAAQ;AACO,UAA9B,MAAM,AAAiB;QACzB;;;6BAtHc;;MAKR,uEAA8B,OAAS;0CAElC;;MAIN,iBAAW;MAXF;AAEiB,YAA7B;2BAAe,aAAS;IAC1B;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UDae;;AACb,aAAO,AAUN;AATO,8BAAgB,AAAU,sBAAI,QAAC;;AAAY,wBAAO;iBAAQ,KAAK;kBAAN;;AAC/D,eAAK,aAAa;AACV,4BAAkB,iBAAN,KAAK;AAItB,YAHD,WAAM,wBAAU,AACd,kBAAQ,SAAS,2DACjB,qDAA2C,SAAS;;AAGxD,gBAAO;;AAET;AACgB,UAAd,aAAQ,KAAK;AACc,UAA3B,AAAiB,2BAAI,KAAK;;cACnB;cAAO;AAAd;AAC0B,YAA1B,aAAQ,KAAK,EAAE,UAAU;AAClB,YAAP;;;;MAEJ;cAsBmB;;;AAEkB,aAAnC;4BAAe,WAAQ,MAAM,KAAK;MACpC;WAwBgB;;AAAU,cAAM,YAAK,KAAK;MAAC;YA4BlB;;;YACF;AAErB,aAAO,AAUN;AATO,8BAAgB,AAAU,sBAAI,QAAC,WAAY,AAAQ,AAAK,OAAN,cAAS;AACjE,cAAI,aAAa;AAId,YAHD,WAAM,wBAAU,AACd,iBAAK,oBAAC,kCACN;;AAG2D,UAA/D,AAAU,sBAAI,gCAAiB,QAAS,KAAQ,KAAF,CAAC,8BAAa;AAC5D,gBAAO;;AAGH,4BAA2B,KAAZ,WAAW,EAAX,aAAe;AAC9B,2BAyCJ,WAzC+B,WAAZ,YAAY,GAC/B,AAAiB,AAAO,AAA6B,oCAAvB,QAAC,SAAgB,KAAN,KAAK,gCAC9C,QAAS;AACP,kBAAK,SAAa;AAChB,kBAAI,eAAU;AACd,kBAAe,YAAN,YAAS,KAAK,KAAI,gBAAU;AAKnC,cAJF,kBAAa,uDACQ,mBACN,KAAN,KAAK,cACD,KAAK;AAEP,cAAX,UAAK,KAAK;;;AAGN,0BAAU,gCAAS,MAAM;AACzB,6BAAa,4CACX,gBACY,UAAR,OAAO;AAGnB,kBAAK;AAAW;AACd,sBAAK;AACe,kBAAlB,AAAQ,OAAD;AACkB,kBAAzB,AAAU,yBAAO,OAAO;AACxB,uBAAK,AAAW,UAAD,WAAW,AAAW,AAAO,UAAR;;;AAGtC;AACwB,kBAAtB,AAAU,sBAAI,OAAO;AACa,kBAAlC,MAAM,AAAO,OAAA,CAAO,KAAN,KAAK,GAAO,OAAO;;sBAC1B;sBAAO;AAAd;AAC0B,oBAA1B,aAAQ,KAAK,EAAE,UAAU;AAClB,oBAAP;;;;AAEQ,kBAAR,MAAM;;cAEV;;;AAEa,YAAb,WAAW;AACX,kBAAO,AAAW,WAAD;0EAEZ;AACuB,QAAhC,AAAe,uDAAI,YAAY;MACjC;mBA0B2C;;;AAEI,aAA7C;4BAAe,gBAAa,MAAM,UAAU;MAC9C;;AAUkB;AACc,UAA9B,MAAM,AAAiB;AACvB,mBAAW,UAAW;AACJ,YAAhB,AAAQ,OAAD;;AAE8C,UAAvD,MAAa,6BAAW,AAAU,yCAAI,QAAC,KAAM,AAAE,CAAD;AACgB,UAA9D,MAAa,6BAAW,AAAe,8CAAI,QAAC,KAAM,AAAE,CAAD;AACnD,gBAAa;QACf;;;;;;yBA5NW;;MAEL,yBAAmB;MACnB,uBAA8C;MAC9C,kBAAsB;MACtB,kBAAsB;MACtB,4BACsC,sDAA1B,OAAS,sBAAT,cAA6B;AAPpB,oCAAM,YAAY;;IAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IC7ChD;;;;;;;;;;;;;;IAMA;;;;;;;;;;;;;;;IAIiD;;;;;;;;;;;;;EAYjD;;;;;;;;;IAMA;;;;;;;;;;;;EAUA;;;;;;;ACRuC,YAAqB,wBAAhB,AAAO,wBAAC;IAAyB;uBAI5D;UACC;UACI;AAEZ,sBAAY,kCAAoB,YAAY,EAAE,gBAAgB;AACpE,YAAO,AAAc,yBAAC,IAAI,eAAc,4CAAC,4BAAQ,SAAS;IAC5D;;AAKiC;IAAoB;;AAcZ;IAAwB;;;;EACnE;;;;;;;;;;;;;MAxCe,0BAAM;YAAG;;;;;;;;;AAmDd,yBAAe;AACrB,UAAI,YAAY,UAAU,MAAO,aAAY;AAEvC,qBAAW;AACjB,UAAI,QAAQ,UAAU,MAAO,AAAS,SAAD;AAErC,YAAa;IACf;;AAIQ,6BAAmB;AACzB,UAAI,gBAAgB,UAAU,MAAO,iBAAgB;AAE/C,qBAAW;AACjB,UAAI,QAAQ,UAAU,MAAO,AAAS,SAAD;AAErC,YAAa;IACf;;4CA1ByB,eAAoB;IAExB,kBAA0B;IAFtB;IAAoB;;EAAkB;;;;;;;;;;;;;;;;;EAoChB;;;;;;;;;;;;;;;WAMd;;AACzB,yBAAa,2CAAoC;AAkCtD,QAhCD,AAAW,UAAD,YAAY;AACd,8BAA6C;AAE7C,kCAAoB,AAAO,MAAD,QAC9B,QAAC;AACO,+BAAe,AAAM,KAAD,yBACb,UAAX,UAAU,qBACU,UAAX,UAAU;AAMnB,YAHF,AAAa,YAAD,QAAQ;AACgB,cAAlC,AAAc,aAAD,UAAQ,YAAY;AACjC,kBAAI,AAAc,aAAD,YAAU,AAAW,AAAO,UAAR;;AAGR,YAA/B,AAAc,aAAD,OAAK,YAAY;+CAEZ,UAAX,UAAU;AAMnB,UAHF,AAAkB,iBAAD,QAAQ;AACgB,YAAvC,AAAc,aAAD,UAAQ,iBAAiB;AACtC,gBAAI,AAAc,aAAD,YAAU,AAAW,AAAO,UAAR;;AAGH,UAApC,AAAc,aAAD,OAAK,iBAAiB;AAMlC,UAJD,AAAW,UAAD,YAAY;AACpB,gBAAI,AAAc,aAAD,YAAU,MAAO;AAC5B,0BAAU;;AAAC,uBAAW,IAAK,cAAa;AAAI,wBAAF,CAAC;;;AACjD,kBAAc,AAAc,8BAAT,OAAO,kBAAO,QAAC;;;;AAItC,cAAO,AAAW,WAAD;MACnB;;;AAzCM;;IAA2B;;;;;;;;;;;;;;;;;;IC/CnC;;;;;;;;;;;;;;;;;;;;;;;gBAcc;YACqB;YACqB;AAHhC;;AAKd,0BAAY;AACZ,6BAAe,AAAO,MAAD,QACzB,MAAM,yCACY,UAAV,SAAS,0BACA,KAAR,OAAO,EAAP,aAAqB,UAAV,SAAS,yCACd,AAAQ,OAAD;AAEa,UAArC,AAAa,yBAAiB,UAAb,YAAY;AAC7B,gBAAc,AAAgC,6BAA5B,+BAAC,aAAQ,AAAU,SAAD,wBAAuB;AACpC,YAArB,AAAa,YAAD;AAC4B,YAAxC,AAAa,4BAAoB,UAAb,YAAY;;QAEpC;;iBAIY;YACsB;;YACqB;;AAErD,cAAO,gBACL,MAAM,WACE,QAAC,QAAS,UAAK,AAAM,MAAA,CAAC,IAAI,2CACzB,AAAQ,OAAD,WACV,SAAQ,OAAkB;AACQ,YAAhC,UAAK,AAAO,OAAA,CAAC,KAAK,EAAE,UAAU;+CAEhC;MAEV;WAGgB;;;AACd,cACG,sCACD;AAkBF,aAAK,mBAAyB;eAAN,KAAK;UAAX,AAAK;;MACzB;;AAGmB,cAAA,AAAY,sBAAG;MAAY;;AAG5C,YAAI,aAAQ;AACM,QAAlB,oBAAc;AACN,QAAR;MACF;;AAGE,YAAI,aAAQ;AACZ,aACE,AAAa,gDACb;AAyBiB,QAAnB,qBAAe;AACP,QAAR;MACF;;AAGE,iBAAW,aAAc;AACN,UAAjB,AAAW,UAAD;;AAEQ,QAApB,AAAa;AACb,aAAK,AAAW,8BAAa,AAAW,AAAU;MACpD;;AAE2B,cAAA,AAAW;MAAM;;6BAzH9B;MAGR,mBAAa;MACb,qBAA0C;MAE5C,oBAAc;MACd,qBAAe;MAPL;;IAAM;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;ADkCX;gCAAuB,mKAAvB;IAA6C;;;AAC7C;gCAA2B,SAAQ,QAAoB,WACzD,AACF,AACA,MAFQ,mBACJ,MAAM,0MAFN;IAIV;;;MArGK,oBAAc;;;MAgGT,+BAAsB;YAAtB;;;2CAA4B;YAA5B;;;MACA,mCAA0B;YAA1B;;;+CAAgC;YAAhC;;;;;;;;;;MEvFG;;;;;;MAGA;;;;;;;;;;;cAGY;;AACpB,cAAA,AAAU,AAAa,UAAP,KAAK,IACf,uBAAN,KAAK,KACD,AAAY,2BAAG,AAAM,KAAD,mBACP,YAAb,mBAAgB,AAAM,KAAD,kBACX,YAAV,gBAAa,AAAM,KAAD;MAAU;;AAGhB,cAAsB,EAAT,cAAb,qBAAkC,cAAV;MAAkB;;AAI5D,cAAO,AAA+D,sCAAtC,qBAAY,2BAAc,kBAAS;MACrE;;;UAtB4B;UAA4B;MAA5B;MAA4B;;IAAW;;;;;;;;;;;;;;;;;;;0BCavD;AAAgB,qCAAM,YAAY;;IAAC;;;;;;;;;;;;;;MCLnC;;;;;;;;;;;;cAGY;;AACpB,cAAA,AAAU,AAAa,UAAP,KAAK,IACf,iCAAN,KAAK,KACD,AAAY,2BAAG,AAAM,KAAD,mBACP,YAAb,mBAAgB,AAAM,KAAD,kBACf,YAAN,YAAS,AAAM,KAAD,WACJ,YAAV,gBAAa,AAAM,KAAD;MAAU;;AAIlC,cAA8C,EAA1B,AAAS,cAAtB,qBAA8B,cAAN,cAA2B,cAAV;MAClD;;AAIE,cAAO,AAAsF,0CAAvD,qBAAY,uBAAU,cAAK,2BAAc,kBAAS;MAC1F;;;UAzBiB;UACD;UACC;MADD;AAEX,yDAAoB,YAAY,aAAa,SAAS;;IAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UCLlC;AACxB,YAAO,oCACG,sDACF,+CACI,QAAC;;AAAM,yDAA0B;kBAA1B;AAAqC,qBAAI;;;kDACjD;IAGb;;;;;;;;EACF;;;;;;;;;;;;;;;MC2FW;;;;;;MAGsB;;;;;;;AAMe;MAA6B;;;UAf/C;UAAU;UAAW;MAAX;MAAW;AAC3C,qDAAW,GAAG;;IAAC;;;;;;;;;;;;;;;;;;;;;MAlBM;;;;;;;;;;;;;YAGD,SAAW;;;AAAU,aAAQ,OAAO;aAAE,KAAK;cAAtB,AAAO;MAAgB;;;UAb/D;UACS;UACX;UACsB;MAFX;AAGX,iDAAW,GAAG,QAAQ,IAAI,aAAa,SAAS;;IAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA2C/C;;MAAK;kBAAL;;MAAK;;;AACL;MAAM;mBAAN;;;MAAM;;;AAIM,QAAX;AACkC,QAAxC,eAAoB,KAAZ,AAAO,kBAAA,aAAgB,iCAAR;AACH,QAApB,eAAS,AAAM;MACjB;sBAG2C;;;AACT,QAA1B,sBAAgB,SAAS;AACzB,uBAAyB,KAAf,AAAU,SAAD,OAAC,aAAgB,iCAAR;AAC5B,2BAA0B,MAAZ,AAAO,kBAAA,cAAQ,OAAO;AAC1C,aAAI,OAAO,WAAI,WAAW;AACL,UAAnB,cAAQ,WAAW;AACC,UAApB,eAAS,AAAM;;MAEnB;;;AAI+B,QAAvB;AACA,oBAAmB,KAAZ,AAAO,kBAAA,aAAgB,iCAAR;AAC5B,aAAI,sBAAS,IAAI;AACH,UAAZ,cAAQ,IAAI;AACQ,UAApB,eAAS,AAAM;;MAEnB;YAG0B;AACxB,YAAI,AAAO,AAAK;AAG2C,UAAjD,gDAAR,OAAO,EAAiB,QAAC,QAAS,AAAU,gBAAO,IAAI;;AAEzD,cAAO,0CACC,+CACM,AAAO,kCACT,SAAC,SAAS,UAAU,cAAS,cAAM,eAAS,KAAK,2DACpD,AAAO,kBAAM,OAAO,EAAE;MAEjC;;;;;;4CA5CO;6CACA;;;;IA4CT;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MC9FW;;;;;;MAMkB;;;;;;MAIC;;;;;;MAKG;;;;;;MAKC;;;;;;;;;;;;;;;;AAGW;MAA0B;;;UAlC9D;UACS;UACA;UACT;UACA;UACA;MAJS;MACA;MACT;MACA;MACA;AACF,kDAAW,GAAG;;IAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAiCb;;MAAK;mBAAL;;MAAK;;;AAIO,QAAX;AACkC,QAAxC,gBAAoB,KAAZ,AAAO,kBAAA,aAAgB,iCAAR;MACzB;sBAGwC;;;AACN,QAA1B,sBAAgB,SAAS;AACzB,uBAAyB,KAAf,AAAU,SAAD,OAAC,aAAgB,iCAAR;AAC5B,2BAA0B,MAAZ,AAAO,kBAAA,cAAQ,OAAO;AAC1C,aAAI,OAAO,WAAI,WAAW,GAAE,AAAmB,eAAX,WAAW;MACjD;;;AAI+B,QAAvB;AACA,oBAAmB,KAAZ,AAAO,kBAAA,aAAgB,iCAAR;AAC5B,aAAI,uBAAS,IAAI,GAAE,AAAY,eAAJ,IAAI;MACjC;YAG0B;AACxB,YAAI,AAAO,AAAK;AAG2C,UAAjD,gDAAR,OAAO,EAAiB,QAAC,QAAS,AAAU,iBAAO,IAAI;;AAEzD,cAAO,yCACC,yDACG,AAAO,iCACL,SAAC,UAAU;;AACpB,2BAA+C,kCAA3C,AAAO,sCAAA,OAAY,GAAK,QAAQ,EAAE,OAAO,IAAlC,cAAuC;AACf,qBAAjC;mBAAgB,OAAO;mBAAE,OAAO;cAAjB,gCAAR;;AAET,iDAAO,AAAO,uCAAA,OAAW,KAAK,QAAQ,EAAE,OAAO;kBAAjC,gBAAsC;;MAG1D;;;;;;yCAxCO;;;IAyCT;;;;;;;;;;;;;;;;;;;;;;;;;;;;ECoEA;;;;;;;;;;;;;;;;;;IAmFgB;;;;;;;AAIZ,YAAO,2CAA2B;IACpC;;;QATsC;QAAa;IACtC,eAAE,KAAK;AACd,oEAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;MC9KP;;;;;;MAIL;;;;;;MAKmB;;;;;;MAGI;;;;;;;AAI5B;MAA8B;;;UAzB3B;UACS;UACT;UACA;UACA;MAHS;MACT;MACA;MACA;AACF,sDAAW,GAAG,SAAS,KAAK;;IAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UA9B3B;UAC0B;UAC5B;UACuB;UAClB;AACL,kDACQ,GAAG,SACD,KAAK,YACF,QAAQ,QACZ,IAAI,cACE,UAAU;;IACvB;;;;;;;;;;;;;;;;;;;;YD6NmB;AAAY,mCAAe,OAAO,EAAE,AAAO;MAAO;;;;;IAC9E;;;;;;;;;;;;;;;;;;;;;;;;ACjLS;;MAAK;oBAAL;;MAAK;;;AACL;MAAc;2BAAd;;;MAAc;;;AAIF,QAAX;AACkC,QAAxC,iBAAoB,KAAZ,AAAO,kBAAA,aAAgB,iCAAR;AACK,QAA5B,uBAAiB,AAAM;AACX,QAAZ;MACF;sBAG4C;;;AACV,QAA1B,sBAAgB,SAAS;AACzB,uBAAyB,KAAf,AAAU,SAAD,OAAC,aAAgB,iCAAR;AAC5B,2BAA0B,MAAZ,AAAO,kBAAA,cAAQ,OAAO;AAC1C,aAAI,OAAO,WAAI,WAAW;AACxB,cAAI;AACY,YAAd;AACmB,YAAnB,gBAAQ,WAAW;AACS,YAA5B,uBAAiB,AAAM;;AAEb,UAAZ;;MAEJ;;;AAI+B,QAAvB;AACA,oBAAmB,KAAZ,AAAO,kBAAA,aAAgB,iCAAR;AAC5B,aAAI,wBAAS,IAAI;AACf,cAAI;AACY,YAAd;AACY,YAAZ,gBAAQ,IAAI;AACgB,YAA5B,uBAAiB,AAAM;;AAEb,UAAZ;;MAEJ;qBAGmC,SAAiB;AAClD,cACE,AAAM,KAAD,6BAC6E,SAA7E,AAAO,6BAAY;AAE1B,YAAI,AAAO,AAAK;AAG2C,UAAjD,gDAAR,OAAO,EAAiB,QAAC,QAAS,AAAU,kBAAO,IAAI;;AAEzD,cAAY,gBAAL,KAAK;MACd;;AAIgB,QAAd;AACe,QAAT;MACR;;AAQI,QALF,sBAAgB,AAAM,AAAO,4BAAO,QAAC;;AACnC,yBAAmD,kCAA/C,AAAO,sCAAA,OAAY,GAAK,sBAAgB,KAAK,IAAtC,cAA2C;AACrB,mBAA/B;iBAAgB;iBAAS,KAAK;YAAf,gCAAR;;AAEa,UAAtB,uBAAiB,KAAK;;MAE1B;;;AAGyB,aAAvB;4BAAe;AACK,QAApB,sBAAgB;MAClB;;;;;;MAzEuB;6CAChB;sDACA;;;;IAwET;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IDkCgB;;;;;;UAWY;AAAY,iCAAe,OAAO,EAAE;IAAO;;AAInE,YAAO,4CAA4B;IACrC;;;QApBuC;QAAa;IACvC,iBAAE,KAAK;AACd,qEAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;ME1KP;;;;;;MAIH;;;;;;MAEM;;;;;;MAER;;;;;;;;;;;;;;;;;;;mBAYM;YACR;AAEL;AACE,gBAAgB,0BAAM,OAAO,WAAU,MAAM;;cACT;AAApC;AACA,iBAAI,AAAE,CAAD,mBAAc,mBAAG,AAAO;AAU5B,YATD,WAAM,4BACJ,AAOG,sFAN8D,oBAAC,iHACuB,oBAAC,mJAInE,OAAO;;;;MAIpC;qBAGmC,SAAiB;AAClD,cACE,AAAM,KAAD,6BACgE,SAAnE,sBAAW;AAET,oBAAQ;AACd,cAAO,AAAM,MAAD,WACN,+CACS,KAAK,uCAEN,kBACC,KAAK,KAEd,8CACU,yBACC,SAAC,GAAG,SAAS,AAAK,IAAD,+EAEnB,KAAK,QACN;MAEhB;6BAGqC,GACnB;AAEV,2BAAe,AAAM,AAAO,KAAR,eACxB,QAAS,KAAM,AAAE,CAAD;AAElB,cAAoB,WAAb,YAAY;MACrB;;;UA1GO;UACc;UACd;UACA;MADA;MACA;MACO,gBAAE,MAAM;MACT,eAAE;AACT,kDAAW,GAAG,SAAS,KAAK;;IAAC;;UAoB5B;UACM;UACN;;MACM,eAAE,KAAK;MACN,gBAAE;MACL,cAAE;AACP,kDAAW,GAAG,SAAS,KAAK;;IAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;MClC1B;;;;;;MAOkB;;;;;;MAKI;;;;;;;;;;;;;;AAGe;MAA6B;;;UAxBpE;UACS;UACA;UACT;MAFS;MACA;MACT;AACF,kDAAW,GAAG;;IAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAyBb;;MAAK;oBAAL;;MAAK;;;AACL;MAAM;qBAAN;;;MAAM;;;AAIM,QAAX;AACkC,QAAxC,iBAAoB,KAAZ,AAAO,kBAAA,aAAgB,iCAAR;AACc,QAArC,wBAAS,kBAAgB,AAAM,qBAAP,cAAR;MAClB;sBAG2C;;;AACT,QAA1B,sBAAgB,SAAS;AACzB,uBAAyB,KAAf,AAAU,SAAD,OAAC,aAAgB,iCAAR;AAC5B,2BAA0B,MAAZ,AAAO,kBAAA,cAAQ,OAAO;AAC1C,aAAI,OAAO,WAAI,WAAW;AACL,UAAnB,gBAAQ,WAAW;AACkB,UAArC,yBAAS,kBAAgB,AAAM,qBAAP,cAAR;;MAEpB;;;AAI+B,QAAvB;AACA,oBAAmB,KAAZ,AAAO,kBAAA,aAAgB,iCAAR;AAC5B,aAAI,wBAAS,IAAI;AACH,UAAZ,gBAAQ,IAAI;AACyB,UAArC,wBAAS,kBAAgB,AAAM,qBAAP,cAAR;;MAEpB;YAG0B;;AACxB,YAAI,AAAO,AAAK;AAG2C,UAAjD,gDAAR,OAAO,EAAiB,QAAC,QAAS,AAAU,kBAAO,IAAI;;AAEzD,cAAO,0CACC,yBACI,SAAC,SAAS;;AACZ,sCAAgB,kBAAgB,KAAK,EAAN,cAAR;AAC7B,6BAAI,gBAAU,aAAa,GAAE,AAAsC,cAA7B,cAAM,iBAAS,aAAa;yDAE7D,kBAAe,OAAO,OAAE,gBAAV,kCAAP;MAElB;;;;;;yCA9CO;0CACA;;;;IA8CT;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UH1B4B;AACkB,MAA1C,WAAM,wBAAW;IACnB;;AAGkC,2CAAe;IAAK;;;QAjB/C;QAC4B;QACzB;SACG,AAAS,QAAD;IACL,kBAAE,QAAQ;IACb,gBAAE,KAAK;AACd,iDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;QIoDd;QAC4B;QACzB;QACW;AAChB,2DACQ,GAAG,YACE,SAAS,SACZ,AAAQ,OAAD,WACR,gCACW,QAAC,WAAY,AAAO,OAAA,CAAC,OAAO,EAAE,KAAK,kCAE9C,KAAK;;EACZ;;;;;;;;;;;;;QCrFA;QACwC;QAC7B;AACb,yEAAW,GAAG,aAAa,SAAS,SAAS,KAAK;;EAAC;;;;;;;;;;;;;QCHjD;QACwC;QAC7B;AACb,yEAAW,GAAG,aAAa,SAAS,SAAS,KAAK;;EAAC;;;;;;;;;;;;;QCTjD;QAC8C;QACnC;AACb,qFAAW,GAAG,aAAa,SAAS,SAAS,KAAK;;EAAC;;;;;;;;;;;;;;;;;;;;;MC4F/B;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;0BAG4B;AACd,QAA/B,0BAAoB,UAAU;AACK,QAAzC,AAAU,oCAAoB,UAAU;MAC1C;;AAIE,cAAO,8CAA6B;MACtC;qBAGmC,SAAiB;AAClD,cACE,AAAgB,wBAAG,KAAK,6BACyC,SAA/D,sBAAW;AAEf,cAAO,qDACE,iBAEI,OAA4B,SAAb,sBAAe,WAClC,AAAQ,uBACT,gCACW,QAAC,WAAmB,AAAC,eAAR,cAAS,OAAO,EAAE,KAAK,kCAE1C,eAAL,KAAK;MAEf;;;UA/GO;UACM;UACiC;UACrB;UACC;UACL;UACP;UACP;UACC;UACE;MAFH;MAGK,cAAE,IAAI;MACF,kBAAE,qDACF,MAAM,UACN,MAAM,sBACM,kBAAkB,8BACV,0BAA0B,kBACtC,cAAc,WACrB,OAAO;AAElB,uDAAW,GAAG,SAAS,KAAK;;IAAC;;UAI5B;UACM;UACY;UACJ;UACb;UACD;UACG;MADH;MAEK,cAAE,IAAI;MACF,kBAAE,mDACH,KAAK,sBACQ,kBAAkB,kBACtB,cAAc;AAEhC,uDAAW,GAAG,SAAS,KAAK;;IAAC;;UAG5B;UACiB;UAChB;UACD;UACG;MADH;MAEK,cAAE,IAAI;MACF,kBAAE,QAAQ;AACpB,uDAAW,GAAG,SAAS,KAAK;;IAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;mBJsKP;;YAAe;AACzC,cACe,AAAE,AACK,eADpB,AAAQ,OAAD,yBACH,AAAO,MAAD,KAAI,SACV,+DACJ,AAaH,mQANU,oBAAC,uNAKS,OAAO;AAIpB,+BAAmB,0CAAuB,OAAO;AAEvD,YAAI,MAAM;AAKiE,UAAzE,AAAQ,OAAD;;AAGH,0BAAQ,gBAAgB,eAAhB,OAAkB;AAEhC,YAAI;AACF,eAAU,KAAN,KAAK;AACmD,YAA1D,WAAM,wCAAsB,kBAAG,AAAQ,AAAO,OAAR;;AAExC,gBAAO,MAAK;;AAGd,cAAa,MAAN,KAAK;MACd;oCAGe;AAGb,cAAO,AAAQ,OAAD,8BAAU;AAMxB,cACE,AAAkB,gCAAG,0BACrB;AAEF,aACI,CAAF,yEACA;AAQI,+BAC6B,8EADV,AAAQ,OAAD;AAGhC,YAAI,AAAiB,gBAAD,aAAiB,KAAL;AACgC,UAA9D,WAAM,4CAA0B,kBAAG,AAAQ,AAAO,OAAR;;AAG5C,cAAO,iBAAgB;MACzB;;;UA1IO;UACc;UACP;UACN;UACa;UACX;AACL,8CACQ,GAAG,QACF,IAAI,WACD,OAAO,UACR,MAAM,WACL,OAAO,8BACY,QACtB,OACA,QAAG;;AACD,eAAS;qCAA4B,MAAQ,KAAK;kCACnD,KAAK;;IACb;;UAYA;UACM;UACY;UACJ;UACX;WACG,AAGN;;AAFoD,aAA1C;4BAA4B,MAAQ,KAAK;AAClD,cAAO;;AAEH,gDACC,GAAG,WACC,OAAO,SACT,KAAK,sBACQ,kBAAkB,SAC/B,KAAK;;IACb;;;;;;;;;;;MAmI2B,6CAA0B;YAAM,aAAG;AACnE,aAAO,AA6BN;AA5BC,cAAU,8BAAN,KAAK,KAAwB,gBAAN,KAAK;AAyBlC,YAxBI,WAAM,4BAAa,AAwBxB,yEAvByD,oBAAC,yGAGvD,oBAAC;;AAsBD,gBAAO;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;mBK5ViB;YAAe;AACzC;AACE,gBAAgB,0BAAM,OAAO,WAAU,MAAM;;cACT;AAApC;AACA,iBAAI,AAAE,CAAD,mBAAc,mBAAG,AAAO;AAU5B,YATD,WAAM,4BACJ,AAOG,+GANuF,oBAAC,uHACI,oBAAC,yJAIzE,OAAO;;;;MAIpC;;;UA5CO;UACc;UACX;UACF;AACH,wDACQ,GAAG,UACA,MAAM,WACL,SAAC,GAAG;iDACN,KAAK,QACN,IAAI;;IACX;;UAOA;UACM;UACH;AACC,0DACE,GAAG,SACD,KAAK,SACL,KAAK;;IACb;;;;;;;;;;;;;;;;;;;;AClBgB;IAAI;YAGH;;AACpB,YAAA,AAAU,AAAa,UAAP,KAAK,IACf,wBAAN,KAAK,KACD,AAAY,2BAAG,AAAM,KAAD,mBACpB,uBAAO,YAAO,AAAM,KAAD;IAAO;;AAGd,YAAqB,EAArB,AAAY,8BAAW,mCAAmB;IAAM;;AAIlE,cAAQ;;;AAEJ,kBAAO,kCAAiB,oBAAa;;;;AAErC,kBAAqB,UAAZ;;;;AAET,kBAAuB,AAAU,gDAAG,OAC9B,iCAAiB,oBAAa,cAChB,SAAZ;;;IAEd;;;;EA5CiB;;;;;;;;;;;;AClBS;IAAE;;;;;EAE9B;;;;;;;;;;;;ICOoB;;;;;;IACA;;;;;;IACN;;;;;;;;;;;;;;UAGG;UACA;UACN;AAEN,YAAO,wCACU,KAAP,MAAM,EAAN,aAAe,2BACV,MAAN,KAAK,EAAL,cAAc,mCACQ,OAAd,aAAa,EAAb,eAAsB;IAEzC;;AAIE,YAAO,AAAyF,mCAAjE,eAAM,+BAAkB,sBAAa,uBAAW,AAAM,uBAAO;IAC9F;;AAG0B,sCAAC,aAAO,YAAM;IAAc;;;QA3B/C;QACA;QACA;IAFA;IACA;IACA;AAHA;;EAIL;;;;;;;;;;;;;;;;;;;;ICoBe;;;;;;;;;;qBAGJ,OACO;AAFM;;AAIzB,YAAI,AAAM,0BAAe;AACzB;AACE,cAAI,AAAM,AAAO,sBAAc;AACvB,yBAAQ,MAAM;AACpB,kBAAO,AAAI,KAAA,MAAC,AAAM,6BACG,sCACZ,KAAK,iBACG;;AAGb,uBAAQ,MAAM,kBAAY,AAAM,AAAM;AASrC,UARP,AAAM,KAAD,aACC,AAAI,IAAA,MAAC,AAAM,oCAAwB,UACnC,AAAI,IAAA,MACF,AAAM,6BACe,4CACP,mBAAG,AAAM,mBAAT;AAAiB,0BAAO,KAAK;;kCAC1B;;cAGlB;AAAP;AACgD,YAAhD,AAAI,IAAA,MAAC,AAAM,6BAA4B;;;;MAE3C;;kBAEoC;AAAN;AACtB,wBAAW,MAAM,AAAW,oBAC5B,gBACF,gCACA,UACgB,4CAAC,UAAuB,SAAX,UAAU,GAAG,UAAuB;AAGrE,YAAI,AAAS,AAAW,QAAZ,gBAAe;AACnB,qBAAkC,aAA3B,AAAK,oBAAO,AAAS,QAAD;AACjC,gBAAO,AAAK,AAMT,KANQ,kBAAK,QAAS,QAChB,uBACU,YAAP,WAAJ,IAAI,WAAC,gBACY,eAAV,WAAJ,IAAI,WAAC,kBACO,eAAT,WAAJ,IAAI,WAAC;;AAIsB,QAAvC,WAAM,mBAAU;MAClB;;;;QAzDwB;;AAAe;AAIpC,IAHD,0CACE,qCACa,oDAAkB;EAEnC;;;;;;;;;;;;;8DAZgD;AAChD,UAAO,UAAC,QAAQ,WACP,AAAe,uBAAY,oCAAP,MAAM,EAAU,QAAQ,GAAG,MAAM;EAEhE;;;MAPM,oBAAU;;;MACV,0BAAgB;;;;;;;;;;;;EFLtB;;;;;;AGCmC;IAAiB;;;;;;;;EACpD;;;;;;;;;;;;;;;;;;;;;;;;;;;AAOqB,MAAX;AACkC,MAAxC,AAAkB,8CAAY;IAChC;UAG0B;AACxB,YAAO,0DACI,SAAC,SAAS;AACjB,kBAAQ,AAAM,KAAD;;;AAET;;;;AAEA,oBAAI,AAAM,AAAM,KAAP;AACP;;AAEF,sBAAgB,gDACD,SAAc,SAAa,UAC/B,AAAM,KAAD,IAAI,AAAM,AAAM,KAAP,kBACf,uCACA,2CAAmB,AAAM,AAAK,KAAN,cAAO,KAAK,2DAEjC,AAAM,KAAD,iBACV,AAAM,AAAM,KAAP,kBACL,AAAM,AAAM,AAAO,KAAd,kBAAgB,eACf;;;;AAGd;;;;IAIV;;;AAMe,WAFb;;AACI,oCAAe;AACf;;;AACW,MAAT;IACR;;AAGE,UAAI,iBAAmB,AAAiB,AAAkB,kDAA3C,kBAA6B;IAC9C;;AAGE,WAAK,AAAkB,oCAAY,MAAO;AACpC,sBAAY,AAAkB,AAAS;AACvC,0BAAgB,AAAkB;AACxC,YAAO,AAAc,cAAD,IAAK,AAAU,SAAD,GAAG;IACvC;;;;;;IAtDM,0BAAoB;;;EAuD5B;;;;;;;;;;;;;;;;;4BCpC0B;QAA2B;AACjD,gDAAY,QAAC,UAAW,AAAO,MAAD,MAAM,GAAG,YAAW,OAAO;EAAE;0BAStC;QAA2B;AAChD,gDAAY,QAAC,UAAW,AAAO,MAAD,KAAK,GAAG,YAAW,OAAO;EAAE;6BAoBpC;QACI;QAAiB;QAAgB;AAC3D,gDAAY,QAAC,UACT,AAAO,MAAD,MAAM,GAAG,YAAW,OAAO,QAAQ,IAAI,YAAY,QAAQ;EAAE;0BAoBlD;QACK;QAAiB;QAAgB;AAC3D,gDAAY,QAAC,UACT,AAAO,MAAD,KAAK,GAAG,YAAW,OAAO,QAAQ,IAAI,YAAY,QAAQ;EAAE;8BAqB/C;QACG;QAAiB;QAAgB;AAC3D,gDAAY,QAAC,UACT,AAAO,MAAD,OAAO,GAAG,YAAW,OAAO,QAAQ,IAAI,YAAY,QAAQ;EAAE;iCAShD;QACE;QAAiB;QAAgB;AAC3D,gDAAY,QAAC,UACT,AAAO,MAAD,QAAQ,GAAG,YAAW,OAAO,QAAQ,IAAI,YAAY,QAAQ;EAAE;4BAcrD;QAA2B;AAC/C,yCAAY,QAAC,UAAW,AAAO,MAAD,MAAM,GAAG,YAAW,OAAO;EAAE;sCAe/B;QAA2B;AACvD,kDAAY,QAAC,UAAW,AAAO,MAAD,WAAW,GAAG,YAAW,OAAO;EAAE;6CAEhB;AAA5B;AAClB,mBAAS;AACb;AACE,cAAO,OAAM,AAAE,EAAA,CAAC,MAAM;;AAER,QAAd,AAAO,MAAD;;IAEV;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UCpIS;UACc;UACP;UAC0B;UACf;UACjB;UACa;UACX;AACC,wEACE,GAAG,SACD,KAAK,QACN,IAAI,WACD,OAAO,YACN,+DACA,MAAM,WACL,OAAO,sBACI,kBAAkB,kBACtB,cAAc;;IAEjC;;UAIA;UACM;UAC2B;UACf;UACjB;UACa;UACX;AACC,wEACE,GAAG,QACF,IAAI,WACD,OAAO,YACN,qDACR,KAAK,EACL,kBAAkB,EAClB,cAAc,UAET,KAAK;;IACb;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UCIA;UACuB;UACjB;UACM;UACM;UACjB;UACa;UACX;AACL,oDACQ,GAAG,QACF,IAAI,WACD,OAAO,UACR,MAAM,sBACM,kBAAkB,kBACtB,qDACF,UAAU,eACT,WAAW,WAEnB,KAAK;;IACb;;UAIA;UACe;UACT;UACM;UACM;UACjB;UACa;UACX;AACC,sDACE,GAAG,QACF,IAAI,WACD,OAAO,SACT,KAAK,sBACQ,kBAAkB,kBACtB,qDACF,UAAU,eACT,WAAW,WAEnB,KAAK;;IACb;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UA+DA;UACuB;UACjB;UACM;UACM;UACjB;UACa;UACX;AACL,oDACQ,GAAG,QACF,IAAI,WACD,OAAO,UACR,MAAM,sBACM,kBAAkB,kBACtB,qDACF,UAAU,eACT,WAAW,WAEnB,KAAK;;IACb;;UAIA;UACe;UACT;UACM;UACM;UACJ;UACX;AACC,sDACE,GAAG,WACC,OAAO,QACV,cACC,KAAK,sBACQ,kBAAkB,kBACtB,qDACF,UAAU,eACT,WAAW,WAEnB,KAAK;;IACb;;;;;;;;;;QAlNI;QACM;AAEjB,UAAO,UAAC,GAAG,UAAU,YAAY;AAC/B,WAAK,AAAE,CAAD;AACiB,QAArB,AAAQ,QAAA,CAAC,WAAW;;AAEtB,UAAI,AAAW,UAAD;AACZ,cAAO;;;AAEH,gBAAM,AAAW,UAAD,QACpB,QAAQ,YACC,QAAS;AAChB,cAAI,UAAU;AACkB,YAA9B,AAAQ,QAAA,CAAC,AAAU,UAAA,CAAC,CAAC,EAAE,KAAK;;AAa3B,YAXY,oCACX,iDACW,uBACE,4BAAa,AAMnC,wCALoC,iBAAX,UAAU,KAAa,2CACnC,oBAAC,kEAGhB,KAAK;;;AAQF,YAAW,WAAJ,GAAG;;EAEd;;QA4Ea;QACM;AAGjB,UAAO,UAAC,GAAG,UAAU,YAAY;;AAC/B,WAAK,AAAE,CAAD;AACiB,QAArB,AAAQ,QAAA,CAAC,WAAW;;AAGlB,qBAAW;AA6Bd,WA5BD,UAAU;mBAAV,OAAY,mBACV,QAAC;AACC,YAAI,QAAQ;AACV;;AAEa,QAAf,AAAQ,QAAA,CAAC,KAAK;iDAEP,QAAS;AAChB,cAAI,QAAQ;AACV;;AAEF,cAAI,UAAU;AACkB,YAA9B,AAAQ,QAAA,CAAC,AAAU,UAAA,CAAC,CAAC,EAAE,KAAK;;AAa3B,YAXY,oCACX,iDACW,uBACE,4BAAa,AAMnC,wCALoC,iBAAX,UAAU,KAAa,2CACnC,oBAAC,kEAGhB,KAAK;;;AAQF,YAAO,eAAM,WAAW;;EAE5B;;;;;;;;;;;;;;;;;;;;;6BC9GqB,GACL;;AAEmC,aAA/C,KAAK;qBAAL,OAAO,eAAc,UAAF,CAAC;AACpB,cAAO;;AAAM,oBAAK;8BAAL,OAAO,kBAAiB,UAAF,CAAC;;MACtC;;;UAtCO;UACc;UACP;UACN;UACa;UACX;AACL,wDACQ,GAAG,2CAEA,MAAM,WACL,OAAO,QACV,IAAI,WACD,OAAO,SACT,KAAK;;IACb;;UAIA;UACM;UACY;UACJ;UACX;AACC,0DACE,GAAG,WACC,OAAO,SACT,KAAK,sBACQ,kBAAkB,0CAE/B,KAAK;;IACb;;;;;;;;;;;;;;;;;;;;;;;;;;;;sBC6E2B,SAAyB;;AACtC,aAAnB,QAAQ;qBAAR,OAAU;MACZ;;;UA7BO;UACc;UACb;UACa;UACX;AACL,4DACQ,GAAG,UACA,MAAM,kCAER,IAAI,WACD,OAAO,SACT,KAAK;;IACb;;UAIA;UACM;UACQ;UACX;AACC,8DACE,GAAG,WACC,OAAO,SACT,KAAK,SACL,KAAK;;IACb;;;;;;;;;;;;;;;;;;;;;;;;;;UD3DA;UACM;UACoC;UACnC;UACW;UACjB;UACa;UACX;AACL,8DACQ,GAAG,UACA,MAAM,UACN,MAAM,QACR,IAAI,WACD,OAAO,WACP,OAAO,sBACI,kBAAkB,0CAE/B,KAAK;;IACb;;;;;;;;;;;;;;;;;;;;;;;;;;UAqBA;UACM;UACyB;UACxB;UACN;UACa;UACX;AACL,6DACQ,GAAG,UACA,MAAM,QACR,IAAI,WACD,OAAO,UACR,SAAC,SAAS,aAAa,AAAM,MAAA,CACnC,OAAO,EACE,yBAAG,OAAO,GACnB,QAAQ,yCAED,OAAO,SACT,KAAK;;IACb;;;;;;;;;;;;;;;;;;;;;;;UCsFA;UACc;UACiB;UAC9B;UACa;UACX;AACL,iEACQ,GAAG,UACA,MAAM,UACN,MAAM,kCAER,IAAI,WACD,OAAO,SACT,KAAK;;IACb;;;;;;;;;;;;;;;;;;;;;;;UAQA;UACc;UACyB;UACtC;UACa;UACX;AACL,kEACQ,GAAG,UACA,MAAM,UACN,MAAM,kCAER,IAAI,WACD,OAAO,SACT,KAAK;;IACb;;;;;;;;;;;;;;;;;;;;;;;;;;UDlHA;UACM;UAC8B;UAC7B;UACN;UACa;UACX;AACL,8DACQ,GAAG,UACA,MAAM,QACR,IAAI,WACD,OAAO,UACR,SAAC,SAAS,aAAa,AAAM,MAAA,CACnC,OAAO,EACE,yBAAG,OAAO,GACV,0BAAG,OAAO,GACnB,QAAQ,yCAED,OAAO,SACT,KAAK;;IACb;;;;;;;;;;;;;;;;;;;;;;;UCsGA;UACc;UACsB;UACnC;UACa;UACX;AACL,kEACQ,GAAG,UACA,MAAM,UACN,MAAM,kCAER,IAAI,WACD,OAAO,SACT,KAAK;;IACb;;;;;;;;;;;;;;;;;;;;;;;;;;UD5GA;UACM;UACkC;UACjC;UACN;UACa;UACX;AACL,8DACQ,GAAG,UACA,MAAM,QACR,IAAI,WACD,OAAO,UACR,SAAC,SAAS,aAAa,AAAM,MAAA,CACnC,OAAO,EACE,yBAAG,OAAO,GACV,0BAAG,OAAO,GACV,0BAAG,OAAO,GACnB,QAAQ,yCAED,OAAO,SACT,KAAK;;IACb;;;;;;;;;;;;;;;;;;;;;;;UC+FA;UACc;UAC0B;UACvC;UACa;UACX;AACL,kEACQ,GAAG,UACA,MAAM,UACN,MAAM,kCAER,IAAI,WACD,OAAO,SACT,KAAK;;IACb;;;;;;;;;;;;;;;;;;;;;;;;;;UDrGA;UACM;UACsC;UACrC;UACN;UACa;UACX;AACL,8DACQ,GAAG,UACA,MAAM,QACR,IAAI,WACD,OAAO,UACR,SAAC,SAAS,aAAa,AAAM,MAAA,CACnC,OAAO,EACE,yBAAG,OAAO,GACV,0BAAG,OAAO,GACV,0BAAG,OAAO,GACV,0BAAG,OAAO,GACnB,QAAQ,yCAED,OAAO,SACT,KAAK;;IACb;;;;;;;;;;;;;;;;;;;;;;;UCuFA;UACc;UAC8B;UAC3C;UACa;UACX;AACL,kEACQ,GAAG,UACA,MAAM,UACN,MAAM,kCAER,IAAI,WACD,OAAO,SACT,KAAK;;IACb;;;;;;;;;;;;;;;;;;;;;;;;;;UD7FA;UACM;UAC0C;UACzC;UACN;UACa;UACX;AACL,8DACQ,GAAG,UACA,MAAM,QACR,IAAI,WACD,OAAO,UACR,SAAC,SAAS,aAAa,AAAM,MAAA,CACnC,OAAO,EACE,yBAAG,OAAO,GACV,0BAAG,OAAO,GACV,0BAAG,OAAO,GACV,0BAAG,OAAO,GACV,0BAAG,OAAO,GACnB,QAAQ,yCAED,OAAO,SACT,KAAK;;IACb;;;;;;;;;;;;;;;;;;;;;;;UC8EA;UACc;UACkC;UAC/C;UACa;UACX;AACL,kEACQ,GAAG,UACA,MAAM,UACN,MAAM,kCAER,IAAI,WACD,OAAO,SACT,KAAK;;IACb;;;;;;;;;;;;;;;;;;;;;;;;;;UDpFA;UACM;UAC8C;UAC7C;UACN;UACa;UACX;AACL,8DACQ,GAAG,UACA,MAAM,QACR,IAAI,WACD,OAAO,UACR,SAAC,SAAS,aAAa,AAAM,MAAA,CACnC,OAAO,EACE,yBAAG,OAAO,GACV,0BAAG,OAAO,GACV,0BAAG,OAAO,GACV,0BAAG,OAAO,GACV,0BAAG,OAAO,GACV,0BAAG,OAAO,GACnB,QAAQ,yCAED,OAAO,SACT,KAAK;;IACb;;;;;;;;;;;;;;;;;;;;;;;UCqEA;UACc;UACsC;UACnD;UACa;UACX;AACL,kEACQ,GAAG,UACA,MAAM,UACN,MAAM,kCAER,IAAI,WACD,OAAO,SACT,KAAK;;IACb;;;;;;;;;;;;;MC3LL;;;;;;;;;;;;qBAGiC,SAAiB;;AAClD,aACE,OAAO;aACE,yBAAM,OAAO;aACtB,KAAK;cAHA,AAAO;MAKhB;;;UAvBO;UACS;UACN;MADM;AAEX,8CAAW,GAAG,SAAS,KAAK;;IAAC;;;;;;;;;;;;;;;;;;;;;MAsChC;;;;;;;;;;;;qBAGiC,SAAiB;;AAClD,aACE,OAAO;aACE,yBAAM,OAAO;aACb,yBAAM,OAAO;cACtB,KAAK;cAJA,AAAO;MAMhB;;;UArBO;UACS;UACN;MADM;AAEX,+CAAW,GAAG,SAAS,KAAK;;IAAC;;;;;;;;;;;;;;;;;;;;;MAqChC;;;;;;;;;;;;qBAGiC,SAAiB;;AAClD,aACE,OAAO;aACE,yBAAM,OAAO;aACb,yBAAM,OAAO;cACb,yBAAM,OAAO;cACtB,KAAK;cALA,AAAO;MAOhB;;;UAvBO;UACS;UACN;MADM;AAEX,+CAAW,GAAG,SAAS,KAAK;;IAAC;;;;;;;;;;;;;;;;;;;;;MAwChC;;;;;;;;;;;;qBAGiC,SAAiB;;AAClD,aACE,OAAO;aACE,yBAAM,OAAO;aACb,yBAAM,OAAO;cACb,yBAAM,OAAO;cACb,yBAAM,OAAO;cACtB,KAAK;cANA,AAAO;MAQhB;;;UAzBO;UACS;UACN;MADM;AAEX,+CAAW,GAAG,SAAS,KAAK;;IAAC;;;;;;;;;;;;;;;;;;;;;MA2ChC;;;;;;;;;;;;qBAGiC,SAAiB;;AAClD,aACE,OAAO;aACE,yBAAM,OAAO;aACb,yBAAM,OAAO;cACb,yBAAM,OAAO;cACb,yBAAM,OAAO;cACb,yBAAM,OAAO;cACtB,KAAK;cAPA,AAAO;MAShB;;;UA3BO;UACS;UACN;MADM;AAEX,+CAAW,GAAG,SAAS,KAAK;;IAAC;;;;;;;;;;;;;;;;;;;;;MA8ChC;;;;;;;;;;;;qBAGiC,SAAiB;;AAClD,aACE,OAAO;aACE,yBAAM,OAAO;aACb,yBAAM,OAAO;cACb,yBAAM,OAAO;cACb,yBAAM,OAAO;cACb,yBAAM,OAAO;cACb,yBAAM,OAAO;cACtB,KAAK;cARA,AAAO;MAUhB;;;UA7BO;UACS;UACN;MADM;AAEX,+CAAW,GAAG,SAAS,KAAK;;IAAC;;;;;;;;;;;;;;;;;;;;IhB2GvB;;;;;;IAGA;;;;;;;;;;AAGT;AACE,cAAO,AAAuD,8BAAtC,kBAAS;;AAEnC,YAAO,AAKR,iCAJgB,mBAAU,sCAAyB,kBAAS,0GAGjB,kBAAS,4BAAe,kBAAS;IAE7E;;kDAlB2B,WAAgB;IAAhB;IAAgB;;EAAW;;;;;;;;;;;;;;IA+B3C;;;;;;IAGA;;;;;;;;;;AAIT;AACE,cAAO,AAAgD,wBAArC,kBAAS,8BAAiB;;AAE9C,YAAO,AAiDR,0DAhDyC,kBAAS,2BAAc,mBAAU,0kBAe3D,mBAAU,oDAAuC,kBAAS;IAkC1E;;sDAjEO,WACA;IADA;IACA;;EACN;;;;;;;;;;;;;;0BI+LoD;MAAa;;;;IACpE;;;;;;;;;;;;;;;;sCQljByB,oBAAyB;MAAzB;MAAyB;;IAAe;;;;;;;;;;;;;;;;;;;;;;;;;;MRqjB3B;;;;;;;AAIlB,cAAgC,MAAzB,AAAE,AAAO,AAAM,eAAtB;MAAoC;4BAItB;AAC9B,cAAc,AAAE,gBAAT,sCAAgC,KAAK;MAC9C;yBAE0B;;AAAgB;MAAK;;MAE/B;0BAEqC;MAAa;;YAExC;MAA8B;;;MAlBpB;;IAmBtC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AQnjB+C,QAApC,AAAE,eAAT,4CAAsC;AAMrC,QALe,gCAAhB,8BAAoB,oBACX,eAAP,8BACA,yBACA,uBACA,gBAJyC,6CAAd,wCAAb;AAM0B,QAAnC,AAAE,eAAT,4CAAsC;AACtC,aAAc,AAAE,eAAT,0CAAmB,AAkBvB,wGAjBkF,oBAAC,gBAAG,oBAAC;AAkB1F,cAAO,AAAgB;AACvB,cAAc,MAAP;MACT;;;AAIiB,QAAT;AACiB,aAAvB;4BAAiB;MACnB;;AAEqB,cAAA,AAAgB;MAAO;;AAKvB;MAAS;eAEd;;AACd,YAAI;AACI,6BAA2C,sBAA5B,AAAS,4CACG,AAAC,qCAA5B,AAAS,mCAA2B,KAAP,iBAAa,KAAK,IACxC,aAAP,gBAAU,KAAK;AACrB,cAAI,YAAY;AACsB,YAA7B,AAAE,eAAT;;;AAGY,QAAhB,kBAAY;AACE,QAAd,iBAAS,KAAK;MAChB;;;MAjEc;MAIX;MA6CE,kBAAY;;;IAiBnB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAeI,cAAO;MACT;;;UAZgB;UACT;UACkB;UACe;MAHxB;MACT;AAGF,gEAAM,kBAAkB,EAAE,cAAc;;IAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAoB5C,aAAK;AACH,eAAO,2BAAsB;AACvB;AACA;AAEN,eAAO,AAMN;AAJqC,YADpC,4CACI;AAEgC,YADpC,4CACI;AACJ,kBAAO;;AAGT;AACE,iBAAO,AAIN;AAHwC,cAAvC,6CAAmC;AACK,cAAxC,6CAAmC;AACnC,oBAAO;;AAE8B,YAAvC,0BAAc,oBAAuB,eAAP,eAAD;;AAE7B,iBAAO,AAMN;AAJ+C,cAD9C,6CAC6C,eAAzC,yCAAyC;AAEC,cAD9C,6CAC6C,eAAzC,yCAAyC;AAC7C,oBAAO;;;AAGK,UAAhB,kBAAY;;AAEd,cAAmB,MAAZ;MACT;;;AAIiB,QAAT;AACN,YAAI;AACgD,gDAAlD,AAAS;uBAAA,OAAS,GAAY,eAAP,eAAsB,KAAZ;;MAErC;0BAGqD;;AACd,QAA/B,0BAAoB,UAAU;AACpC,YAAI;AAG0C,eAF5C,UAAU;UAAV;AACI,mBAAI,uCAAoB,cAAc;AACtC,mBAAI,uCAAoB,SAAS;;;;AAkBlC,gBAhBH,UAAU;UAAV;AACI,oBACA,iCACE,sBACO,gBACG,cACF;AAGV,oBACA,iCACE,iBACO,gBACG,cACF;;;;MAIlB;;;;;;MA1EK,kBAAY;MAEd;;;IAyEL;;;;;;;;;;;;;;;;;;;;;;;;;;;AAaI,cAAO;MACT;0BAGqD;AACd,QAA/B,0BAAoB,UAAU;AACoB,QAAxD,AAAW,UAAD,KAAK,uCAAoB,cAAc;MACnD;;oDAhBO,OACkB,oBACM;MAFxB;AAGH,+DAAM,kBAAkB,EAAE,cAAc;;IAAC;;;;;;;;;;;;;;;;;;;;;;yBAmBiB;;AAC5D,yBAAI,AAAS,qBAAS,AAAY,WAAD;AAC/B,cAAI;AACgB,YAAH,AAAC,eAAhB;AACsB,YAAtB,wBAAkB;;AAEpB,gBAAO;;AAET,cAAO;MACT;;AAGoB,cAAA,AAAS;MAAK;0BAGmB;AACd,QAA/B,0BAAoB,UAAU;AACpC,YAAI;AACiD,UAAnD,AAAW,UAAD,KAAK,uCAAoB,SAAS;;AAS3C,UAPD,AAAW,UAAD,KACR,iCACE,iBACO,gBACG,cACF;;MAIhB;;;;;;;;IACF;;;;;;;;;;;;;;;;IKtRe;;;;;;IACe;;;;;;;;;;yCAFP,WAAgB;IAAhB;IAAgB;;EAAM;;;;;;;;;;;;IAQrC;;;;;;;;;;AAGJ,WAC0B,YAAxB,6CAA2B,sCAC3B;AAE4B,MAA9B,oCAA0B;IAC5B;iBAGS,WACe;AAEqB,MAA3C,AAAK,gBAAkB,+BAAE,SAAS,EAAE,KAAK;IAC3C;;;IAfM,aAAsB;;EADZ;;;;;;;;;;;;;;;;;;;;IA4BH;;;;;;IACA;;;;;;IACM;;;;;;IACkB;;;;;;;;;;;;;;AAEhB,YAAA,AAAS,AAAe;IAAK;;;QAXlC;QACA;QACA;QAC0B;IAH1B;IACA;IACA;IAEF,iBAAE,OAAO;;;;;;;;;;;;;;;;;;;;;;;AAmB0B;IAAgB;wBACnB;AAC0B,MAAtE,yBAAe,kCAAoD;AAC3C,MAAxB,yBAAmB,KAAK;IAC1B;sBAE8B;AAI3B,MAHD,yBACE,6BACkB,+BAAC,MAAM,UAAU;IAEvC;;;IAZ0B,yBAAmB;;EAN1B;;;;;;;;;;;;;;;;;;;;;;MAEN,uCAAa;YAAG,QACP,qCAChB,WAAM,8BAAiB;;;;;;;IrBuIT;;;;;;UAGA,QAAgB;AAClC,UAAW,4BAAP,MAAM;AACQ,QAAhB,gBAAU,MAAM;;AAEU,MAAtB,YAAM,MAAM,EAAE,OAAO;IAC7B;;AAIkB,MAAV;AAMJ,MALF,2BAAsB,QAAC;AACrB,YAAW,6BAAP,MAAM;AACQ,UAAhB,gBAAU,MAAM;;AAElB,cAAO;;IAEX;;;IAnBoB;;;;;;;;;;;;;;;oEsB0iJmB;;;;;;;;;;AtB7+IrC,UAAI;AACF,cAAO,AAAO,4BAAe,MAAa,AAAE,eAAT;;AAErC,YAAa;IACf;;AAII,YAAa,sCAAP;IAAoC;;qDAbS;AACjD,gEAAM,MAAM;;EAAC;;;;;;;;;;;;;;0BQ9FkC;AACd,QAA/B,0BAAoB,UAAU;AACmB,QAAvD,mBAAc,QAAC,KAAM,AAAE,CAAD,qBAAqB,UAAU;MACvD;;8CAN+C;AAAU,yDAAM,MAAM;;IAAC;;;;;;;;;;;;;;IA+JxE;;;;;;;;;;;;;;;MAU6B;;;;;;MACd;;;;;;;;;;;;yBAG2B;;AACtC,cAAO;MACT;;AAIE,cAAO,mDAAkC;MAC3C;;;UAjBgB;UACA;UACE;MAFF;MACA;WAEE,KAAL;AACP,+DAAa,KAAK;;IAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAiBpB,4BAAuB;MACvB,oCAA+B;MAC9B,iBAAgC;;IACxC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAc6C;yCACvC,AAAO,AAAM,AAAU,4CAAA;AAAe,uBAAU;;yLADT;MACa;;;AAC5C;;MAAQ;qBAAR;;MAAQ;;AAKA;AAQhB,QAJF,2BAAsB,QAAC;AAEoD,UADzE,mBACI,AAAO,MAAD;AACV,gBAAO;;AAET,cAAO,iBAAgB;MACzB;YAGoB,QAAgB;;AAClC;AACmC,UAAjC,iBAAiC,UAAJ,KAAf,0HAAe;AAU5B,UATe,AAAc,0DAAkB;;AACb,0BAAd;AAAc;AACzB,sBAAR,gBAAU,oCACJ,wDAGE,AAAO,gCACJ;;;;AAKa,QAAtB,YAAM,MAAM,EAAE,OAAO;MAC7B;;AAII,cAAa,qCAAP;MAAoC;;AAI1B,QAAZ;AAEA,oBAAQ,AAAe,gCAAW,AAAe,6BAAQ;AAC/D,YAAU,wCAAN,KAAK;AACW,UAAlB,AAAM,KAAD;;MAET;yBAGgC,WAAmB;;AAC3C,2BAAe,qBAAgB,SAAS;AAE9C,YAAI,YAAY,aAAyB,wBAAb,YAAY;AACtC;;AAGF,YAAW,iBAAP,MAAM;AACF,mCACiC,yBAArB,KAAb,YAAY,EAAZ,aAAgB;AAErB,cAAI,AAAmB,kBAAD;AAC2B,YAA/C,AAAmB,kBAAD,wBAAwB;AACN,YAAP,uBAA7B,AAAmB,kBAAD;;AAEpB,cAAI,AAAmB,AAA6B,kBAA9B,kCAAiC;AACC,YAAtD,AAAmB,kBAAD,gCAAgC;AAKhD,YAJK,4BAAU;;AAGgB,mBAF/B,kBAAkB;cAAlB;AACI,kDAA+B;AAC/B,0CAAuB;;;;;AAGS,UAAX,uBAA7B,AAAmB,kBAAD,kBAAe,MAAM;AACO,UAA9C,qBAAgB,SAAS,EAAE,kBAAkB;;AAGH,UAA1C,qBAAgB,SAAS;;MAE7B;sBAGqC,WAAmB;;AAChD,2BAAe,qBAAgB,SAAS;AAE9C;AAC2D,UAAzC,AAAc,0DAAkB;;AAG9C,2BAAe;AACnB,YAAI,YAAY;AACd,cAAiB,wBAAb,YAAY;AAId,gBAAI,AAAU,SAAD;AACX;;AAGF,qBAAW,6CAAsB,AAAa,YAAD;AAC3C;AACE,qBAAO,AAGN;AAFyB,kBAAxB,8BAAoB;AACpB,wBAAO;;AAE+B,gBAAxC,eAAe,AAAkB,kBAAA,CAAC;;AAElC,qBAAO,AAGN;AAF0B,kBAAzB,8BAAoB;AACpB,wBAAO;;;AAGX,kBAAI,YAAY;AACd;;;;AAIe,YAAnB,eAAe;;;AAInB,YAAI,YAAY;AACmB,UAAjC,AAAU,SAAD;;MAEb;aAGuC;;AACrC,aAAO,AAWN;AAVC,eAAI,AAAO,AAAM,AAAU,mDACvB,AAAU,AAAM,AAAU,SAAjB;AAMf,YALI,WAAM,wBAAW,AAKtB,sBAJM,eAAM;;AAMT,gBAAO;;AAGyB,QAAlC,oCAA8B;AAEkC,QADhE,6BACI,AAAe,wCAAmB,AAAU,AAAM,SAAP;AACxB,QAAjB,aAAO,SAAS;AACM,QAA5B,6BAAuB;MACzB;cAG6B;;AACH,QAAlB,cAAQ,SAAS;AACvB,YAAI;AACsB,UAAxB,mBAAc,SAAS;;MAE3B;;AAIoC,QAAlC,oCAA8B;AACD,QAAvB;MACR;;AAIE,YAAI,AAAO,AAAM,AAAM,6BAAG;AACnB,UAAL;;AAID,QAFD,AAAe,wDACe;AAEK,QAAnC,oCAA8B;AAC9B,YAAI;AAC6B,UAA/B,gCAA0B;AACL,UAArB,mBAAc;;AAEhB,cAAa;MACf;;;AAI0B,QAAxB,AAAe;AACf;AAGqB,UAFH,AAAc,iEAAkB;;AACb,2BAAd;AAAc;;gBADa;AAE7C,yBAAO;;;;AAEG,QAAT;MACR;;AAGqB,cAAA,AAAe;MAAQ;;AAI1C,aAAK;AACH;;AAGc,QAAhB;AAC8B,QAA9B,gCAA0B;MAC5B;+BAEiC;AAC/B,aAAO,AAGN;AAF4B,UAA3B,4BAAsB,KAAK;AAC3B,gBAAO;;AAET,cAAO;MACT;;AAGe,cAAA,AAAe;MAAK;+BAIhB;YACT;AAER,aAAO,AA2BN;AA1BC,cAAI;AAuBD,YAtBD,WAAmB,sCACA,kCACf,gCAAY,AACV,2CACA,qDAEF,oCAAiB;;AAkBvB,gBAAO;;AAET,cAAa,gCAAyB,QAAQ,WAAU,MAAM;MAChE;0BAGqD;AACd,QAA/B,0BAAoB,UAAU;AACU,QAA9C,AAAe,yCAAoB,UAAU;MAC/C;;mDA1Q0D;MAKrD,gCAA0B;MAC1B,4BAAsB;MACtB,mCAA6B;MAC7B,6BAAuB;MACvB,oCAA8B;8DACQ;wDAE/B;AAXN,8DAAM,MAAM;;IAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAER,wDAAe;YAAG;;;;;;;;;;;;;;;;;;;;AA6TzB;MAA+B;;;UAlB5B;UACA;UACkB;UAClB;UACA;UACA;MALA;MACA;MAEA;MACA;MACA;YACM,AAAe,MAAT,YAAY,MAAM;MACX,4BAAE,kBAAkB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAgC5C,YAAI,uBAAiB;AAMlB,UAJD,WAAM,wBAAU,AACd,4EACA,iEAAqD,oBAAC,0DACnD,OAAY;;AAGb;AACA;AAEN,aAAO,AAMN;AAJqC,UADpC,4CACI;AAEgC,UADpC,4CACI;AACJ,gBAAO;;AAGT,aAAK;AACiB,UAApB,sBAAgB;AAChB,cAAI,AAAS;AACX,iBAAO,2BAAsB;AAC7B;AACE,mBAAO,AAIN;AAHwC,gBAAvC,6CAAmC;AACK,gBAAxC,6CAAmC;AACnC,sBAAO;;AAE0B,cAAnC,iBAAwB,AAAC,eAAhB,AAAS,sBAAe,eAAP;;kBACnB;kBAAG;AAAV;AAKC,gBAJD,mBAAa,iDACF,uBACE,CAAC,SACL,UAAU;AAEZ,gBAAP;;;;AAEA,mBAAO,AAMN;AAJ+C,gBAD9C,6CAC6C,eAAzC,yCAAyC;AAEC,gBAD9C,6CAC6C,eAAzC,yCAAyC;AAC7C,sBAAO;;;AAGX,iBAAO,2BAAsB;AAE7B,iBAAO,AAGN;;AAFuD,sCAAtD,AAAS;4BAAA,OAA4B,IAAY,KAAP;AAC1C,oBAAO;;;AAGX,6CAAI,AAAS;AACX;AACE,mBAAO,AAIN;AAHyC,gBAAxC,6CAAmC;AACI,gBAAvC,6CAAmC;AACnC,sBAAO;;AAEkC,cAA3C,iBAAwB,AAAC,8CAAhB,AAAS,uBAAe,eAAP,eAAU;;AAEpC,mBAAO,AAMN;AAJ+C,gBAD9C,6CAC6C,eAAzC,yCAAyC;AAEC,gBAD9C,6CAC6C,eAAzC,yCAAyC;AAC7C,sBAAO;;;AAIX,iBAAO,AAGN;;AAFuD,sCAAtD,AAAS;4BAAA,OAA4B,IAAY,KAAP;AAC1C,oBAAO;;;;AAK8B,QAApC,AAAE,eAAT,4CAAsC;AACkC,QAAxD,gCAAhB,sEAAoB,AAAS,6CAAA,OAAgB,IAAY,eAAP,eAAiB,KAAP,oBAA5C;AAC0B,QAAnC,AAAE,eAAT,4CAAsC;AACtC,cAA+B,AAAQ,uCAAhC,AAAS,yCAA0B;AAC1C,cAAc,MAAP;MACT;;;AAIiB,QAAT;AACiB,cAAvB;6BAAiB;AACjB,YAAI;AAC2C,kDAA7C,AAAS;yBAAA,OAAS,KAAY,eAAP,eAAiB,KAAP;;MAErC;0BAGqD;;AACd,QAA/B,0BAAoB,UAAU;AACpC,YAAI;AAUC,gBATH,UAAU;UAAV;AACI,oBAAI,uCAAoB,SAAS;AACjC,oBACA,iCACE,YACO,AAAgB,6CACT,eACN;;;;AAWb,UAPD,AAAW,UAAD,KACR,iCACE,iBACO,gBACG,cACF;;MAIhB;;;YAG0B;AACpB,2BAAe;AAGnB,YAAI,0BAA0B,IAC1B,sDACA,AAAS;AACL,8BAAgB;AAEhB;AACA;AACN,eAAO,AAMN;AAJqC,YADpC,4CACI;AAEgC,YADpC,4CACI;AACJ,kBAAO;;AAET;AACE,iBAAO,AAIN;AAHyC,cAAxC,6CAAmC;AACI,cAAvC,6CAAmC;AACnC,oBAAO;;AAEuC,YAAhD,iBAAwB,AAAC,8CAAhB,AAAS,uBAAe,eAAP,eAAiB,KAAP;;AAEpC,iBAAO,AAMN;AAJ+C,cAD9C,6CAC6C,eAAzC,yCAAyC;AAEC,cAD9C,6CAC6C,eAAzC,yCAAyC;AAC7C,oBAAO;;;AAIX,oCAAI,AAAS;AAIV,YAHD,eAA2C,AAAC,qCAA7B,AAAS,qCACR,KAAd,aAAa,GACN,KAAP;;AAGoC,YAAtC,eAAsB,aAAP,gBAAU,aAAa;;AAGxC,cAAI,YAAY;AACd,iBAAO,AAGN;;AAFuD,sCAAtD,AAAS;4BAAA,OAA4B,IAAY,KAAP;AAC1C,oBAAO;;AAET,gBAAI;AACgB,cAAH,AAAC,eAAhB;AACsB,cAAtB,wBAAkB;;AAEwC,kBAA5D;yEAAiB,4BAAjB,OAA0B,IAAY,eAAP,eAAwB,KAAd,aAAa;;;AAI1D,YAAI,YAAY;AACyB,UAAhC,AAAE,eAAT,yCAAmC;;AAEX,QAA1B,wBAAkB;AAClB,cAAa,0CAAkC,0BAA0B;MAC3E;;AAGqB;MAAa;;;;;;MAlMpB;MACT,sBAAgB;MAClB;MAC0B;MACR;;;IA+LvB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;0BAcuD;AACd,QAA/B,0BAAoB,UAAU;AACe,QAAnD,AAAW,UAAD,KAAK,uCAAoB,SAAS;MAC9C;;AAIE,cAAO;MACT;;;UAlBgB;UACS;UAClB;MAFS;MAET;MACkB,4BAAE,kBAAkB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAwBA,QAApC,AAAE,eAAT,4CAAsC;AACqC,QAA3D,gCAAhB,sEAAoB,AAAS,6CAAA,OAAgB,IAAY,eAAP,eAAU,AAAS,wBAArD;AAC0B,QAAnC,AAAE,eAAT,4CAAsC;AACtC,cAA+B,AAAQ,uCAAhC,AAAS,yCAA0B;AAC1C,cAAO,AAAS;MAClB;yBAGmD;;AAC5C;AACL,kCAAI,AAAS;AAIV,UAHD,eAA2C,AAAC,qCAA7B,AAAS,qCACtB,AAAS,qBACT,AAAY,WAAD;;AAGqC,UAAlD,eAAiC,aAAlB,AAAY,WAAD,QAAU,AAAS;;AAG/C,YAAI,YAAY,IAAI;AACA,UAAH,AAAC,eAAhB;AACsB,UAAtB,wBAAkB;;AAEpB,cAAO,aAAY;MACrB;;;AAIiB,QAAT;AACiB,cAAvB;6BAAiB;MACnB;0BAGqD;AACd,QAA/B,0BAAoB,UAAU;AAQnC,QAPD,AAAW,UAAD,KACR,iCACE,YACO,AAAgB,6CACT,eACN;MAGd;;AAGqB;MAAI;;;;;;MAlDX;;;IAmDhB;;;;;;;;;;;;;;;;;;;;qDaj8BS,WACe;AAEtB,QAAI;AACwC,MAAnB,AAAC,eAAxB,mCAAyB,SAAS,EAAE,KAAK;;AAEJ,MAA3B,oBAAU,SAAS,EAAE,KAAK;;EAExC;;AAGE,UAAO,AAAwB,8DAAS;AAElC,cAAmB;AACe,IAAxC,oCAA8B,UAAJ,GAAG;AAC7B,UAAO,IAAG;EACZ;oFb2NqC;;AACjC,UAAc,oCAAP,iCAAsC;AAmB7C,UAAc,AAAiB,gCAAxB,iBAA2B,0CAAiB;AAM7C,2BAA4B;AAClC;AACQ,yBAAQ,gBAAgB,gBAAhB,OAAkB;AAChC,WAAU,KAAN,KAAK;AAC2C,QAAlD,WAAM,wCAAsB,kBAAG,AAAO;;AAGxC,WAAO,AAGN;AAFyB,QAAxB,8BAAoB;AACpB,cAAO;;AAEH,qBAAW,AAAQ,QAAA,CAAC,KAAK;AAE/B,UAAI,gBAAgB;AAWjB,QAVD,+BACE,gBAAgB,WACR,QAAI;AACV,iBAAa,KAAT,QAAQ;AACwC,cAAlD,WAAM,wCAAsB,kBAAG,AAAO;;AAGxC,oBACK,yBAAO,AAAQ,QAAA,CAAC,QAAQ,GAAG,QAAQ;;;AAMqB,QAAjE;;AAEF,YAAO,SAAQ;;AAEf,WAAO,AAGN;AAF0B,QAAzB,8BAAoB;AACpB,cAAO;;;EAGb;;AA/DE,0BAAiC,4DAAjC,QAAQ;EA+DV;;AJoVE,UAAgB,0CAAoB;EACtC;;AAFE;EAEF;;AA2CE,UAAgB;EAClB;;AAFE;EAEF;;MA5pBS,sBAAY;cAAY,kBAAH;;MiBlB7B,iCAAuB;;;;MbgLrB,2BAAiB;YAAG;;;MA2fpB,0CAAgC;YAAG;;;MAInC,0CAAgC;YAAG;;;;;;;;;;;;;;;;;;;;;Ue7mB/B;UACM;UACyC;UAC7B;UACX;UACN;UACa;UACX;AACL,oDACQ,GAAG,QACF,IAAI,WACD,OAAO,UACR,MAAM,UACN,MAAM,WACL,OAAO,sBACI,kBAAkB,8BACV,QACtB,OACA,QAAG;;AACD,gBAAS;sCAA4B,OAAQ,KAAK;kCACnD,KAAK;;IACb;;;;;;;;;;;;;;;;;;;;;;;;;;;UAoDA;UACM;UACyB;UACb;UACX;UACN;UACa;UACX;AACL,mDACQ,GAAG,QACF,IAAI,WACD,OAAO,UACR,MAAM,UACN,SAAC,SAAS,UAAU,AAAM,MAAA,CAChC,OAAO,EACE,yBAAG,OAAO,GACnB,KAAK,oDAEa,kBAAkB,WAC7B,OAAO,SACT,KAAK;;IACb;;;;;;;;;;;;;;;;;;;;;;;;;;;UAOA;UACM;UAC8B;UAClB;UACX;UACN;UACa;UACX;AACL,oDACQ,GAAG,QACF,IAAI,WACD,OAAO,UACR,MAAM,UACN,SAAC,SAAS,UAAU,AAAM,MAAA,CAChC,OAAO,EACE,yBAAG,OAAO,GACV,0BAAG,OAAO,GACnB,KAAK,oDAEa,kBAAkB,WAC7B,OAAO,SACT,KAAK;;IACb;;;;;;;;;;;;;;;;;;;;;;;;;;;UAOA;UACM;UACkC;UACtB;UACX;UACN;UACa;UACX;AACL,oDACQ,GAAG,QACF,IAAI,WACD,OAAO,UACR,MAAM,UACN,SAAC,SAAS,UAAU,AAAM,MAAA,CAChC,OAAO,EACE,yBAAG,OAAO,GACV,0BAAG,OAAO,GACV,0BAAG,OAAO,GACnB,KAAK,oDAEa,kBAAkB,WAC7B,OAAO,SACT,KAAK;;IACb;;;;;;;;;;;;;;;;;;;;;;;;;;;UAOA;UACM;UACsC;UAC1B;UACX;UACN;UACa;UACX;AACL,oDACQ,GAAG,QACF,IAAI,WACD,OAAO,UACR,MAAM,UACN,SAAC,SAAS,UAAU,AAAM,MAAA,CAChC,OAAO,EACE,yBAAG,OAAO,GACV,0BAAG,OAAO,GACV,0BAAG,OAAO,GACV,0BAAG,OAAO,GACnB,KAAK,oDAEa,kBAAkB,WAC7B,OAAO,SACT,KAAK;;IACb;;;;;;;;;;;;;;;;;;;;;;;;;;;UAOA;UACM;UAC0C;UAC9B;UACX;UACN;UACa;UACX;AACL,oDACQ,GAAG,QACF,IAAI,WACD,OAAO,UACR,MAAM,UACN,SAAC,SAAS,UAAU,AAAM,MAAA,CAChC,OAAO,EACE,yBAAG,OAAO,GACV,0BAAG,OAAO,GACV,0BAAG,OAAO,GACV,0BAAG,OAAO,GACV,0BAAG,OAAO,GACnB,KAAK,oDAEa,kBAAkB,WAC7B,OAAO,SACT,KAAK;;IACb;;;;;;;;;;;;;;;;;;;;;;;;;;;UAOA;UACM;UAC8C;UAClC;UACX;UACN;UACa;UACX;AACL,oDACQ,GAAG,QACF,IAAI,WACD,OAAO,UACR,MAAM,UACN,SAAC,SAAS,UAAU,AAAM,MAAA,CAChC,OAAO,EACE,yBAAG,OAAO,GACV,0BAAG,OAAO,GACV,0BAAG,OAAO,GACV,0BAAG,OAAO,GACV,0BAAG,OAAO,GACV,0BAAG,OAAO,GACnB,KAAK,oDAEa,kBAAkB,WAC7B,OAAO,SACT,KAAK;;IACb;;;;;;;;;;;;EChTT;;;;;;;;;;;MCiC8B;;;;;;MAQG;;;;;;;;;;;;;;;AAKK;MAAoB;;;UA7BjD;UACS;UACA;UACI;UACV;MAHM;MACA;MAGK,uBAAE,aAAa;AAC9B,+CAAW,GAAG,SAAS,KAAK;;IAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;MA2BhC;;;;;;qBAKgC,SAAiB;;AAC5C,8BAAW,mBAAgB,OAAO,EAAR;AAE1B,oCAEgD,aAFxB,gBAAa,sCACtC,AAAO,wCACiB,AAAC,qCAAtB,AAAO,8BAAsB,KAAN,aAAY,QAAQ,KACxB,sBAAtB,AAAO,yCAC4B,yBAAO,YAAO,QAAQ;AAC9D,YAAI,qBAAqB;AACP,UAAhB,aAAQ,QAAQ;AACE,UAAlB,iBAAY;AAKX,UAJD,qBAAQ,oBACN,OAAO,QACP,QAAQ,QACR,KAAK,EAHe,4CAAP;;AAMjB,cAAY,gBAAL;MACT;0BAGqD;AACd,QAA/B,0BAAoB,UAAU;AACkB,QAAtD,AAAW,UAAD,KAAK,uCAAuB,SAAS;MACjD;;;;;;MA7BG;MACK;MACA;;;IA4BV;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UA2CS;UAC0B;UACM;UACnB;UACV;AACL,8CACQ,GAAG,iBACO,aAAa,WACnB,OAAO,YACN,QAAC,WAAY,AAAQ,QAAA,CAAC,OAAO,EAAW,yBAAG,OAAO,mCACrD,KAAK;;IACb;;;;;;;;;;;;;;;;;;;;;;;UAOA;UAC0B;UACS;UACtB;UACV;AACL,+CACQ,GAAG,iBACO,aAAa,WACnB,OAAO,YACN,QAAC,WAAY,AAAQ,QAAA,CAC7B,OAAO,EACE,yBAAG,OAAO,GACV,yBAAG,OAAO,mCAEd,KAAK;;IACb;;;;;;;;;;;;;;;;;;;;;;;UAOA;UAC0B;UACY;UACzB;UACV;AACL,+CACQ,GAAG,iBACO,aAAa,WACnB,OAAO,YACN,QAAC,WAAY,AAAQ,QAAA,CAC7B,OAAO,EACE,yBAAG,OAAO,GACV,yBAAG,OAAO,GACV,yBAAG,OAAO,mCAEd,KAAK;;IACb;;;;;;;;;;;;;;;;;;;;;;;UAOA;UAC0B;UACe;UAC5B;UACV;AACL,+CACQ,GAAG,iBACO,aAAa,WACnB,OAAO,YACN,QAAC,WAAY,AAAQ,QAAA,CAC7B,OAAO,EACE,yBAAG,OAAO,GACV,yBAAG,OAAO,GACV,yBAAG,OAAO,GACV,yBAAG,OAAO,mCAEd,KAAK;;IACb;;;;;;;;;;;;;;;;;;;;;;;UAOA;UAC0B;UACkB;UAC/B;UACV;AACL,+CACQ,GAAG,iBACO,aAAa,WACnB,OAAO,YACN,QAAC,WAAY,AAAQ,QAAA,CAC7B,OAAO,EACE,yBAAG,OAAO,GACV,yBAAG,OAAO,GACV,yBAAG,OAAO,GACV,yBAAG,OAAO,GACV,yBAAG,OAAO,mCAEd,KAAK;;IACb;;;;;;;;;;;;;;;;;;;;;;;UAOA;UAC0B;UACqB;UAClC;UACV;AACL,+CACQ,GAAG,iBACO,aAAa,WACnB,OAAO,YACN,QAAC,WAAY,AAAQ,QAAA,CAC7B,OAAO,EACE,yBAAG,OAAO,GACV,yBAAG,OAAO,GACV,yBAAG,OAAO,GACV,yBAAG,OAAO,GACV,yBAAG,OAAO,GACV,yBAAG,OAAO,mCAEd,KAAK;;IACb;;;;;;;;;;;;;;;;;;;;;;;;;qBClO4B,SAAiB;AAClD,cAAO,6DACY,iCACR,SAAC,SAAS,OAAO,MACjB,sCACE,KAAK,sBACQ,mCACb,KAAK;MAIpB;0BAGqD;AACd,QAA/B,0BAAoB,UAAU;AACgC,QAApE,AAAW,UAAD,KAAK,uCAAoB,SAAS,AAAiB;MAC/D;;;UA7BO;UACuB;UACL;UACf;MACa,yBAAE,KAAK;MACJ,6BAAE,kBAAkB;AACxC,6DAAW,GAAG,SAAS,KAAK;;IAAC;;;;;;;;;;;;;;;;;;;;;;IdrCK;;+CAArC;;;EAAqC;;;;;;;MAArC,4BAAM;;;MAAM,6BAAO;;;MAAE,6BAAO;;;MAAE,6BAAO;;;;;;;;IeG9B;;;;;;IACG;;;;;;IACA;;;;;;;;;;;;;AAGa,sCAAC,SAAI,YAAO;IAAK;;;QAPjB;QAAkB;QAAqB;IAAvC;IAAkB;IAAqB;AAA3D;;EAAiE;;;;;;;;;;;;;;;;;UCA7C;AACxB;IAOF;;;;;;;;EACF;;;;;;;;;;ICLa;;;;;;;;;;;UAGe;AAClB,sBAAkB,AAAY,eAAT,OAAO;AAClC,YAAO,mCACE,qCACI,kBAAiB,SAAT,AAAK,uBAAa,AAAU,SAAD,mBACrC,kBAAK,AAAK,+BACJ,gBACH,kBAAK,AAAK,wBACb;IAGb;;;QAhByB;QAAmB;;AAAS,+DAAW,GAAG;;EAAC;;;;;;;;;;;;;;ACyBhD;IAAc;;;;;;;;;;;;;;ICzBrB;;;;;;IAGF;;;;;;;;;;AAKU;IAAO;;4CAHP,SAAe;IAAf;IAAe;;EAAK;;;;;;;;;;;;;;;;;;;;;;;;;;ICgB5B;;;;;;IAGH;;;;;;IAsDgB;;;;;;;AAhDA;IAAc;sBAGjB;AACrB,UAAI,KAAK,YAAkB,aAAN,KAAK,IAAG;AAC0B,QAArD,WAAM,2BAAc,AAAgC,qCAAP,KAAK;;AAEnC,MAAjB;AACsB,MAAtB,uBAAiB,KAAK;IACxB;;AAKiC;IAAqB;6BAGxB;AACX,MAAjB;AAC6B,MAA7B,8BAAwB,KAAK;IAC/B;;AAK4B;IAAgB;wBAGnB;AACN,MAAjB;AACwB,MAAxB,yBAAmB,KAAK;IAC1B;;AAMwB;IAAa;qBAGhB;AACF,MAAjB;AACqB,MAArB,sBAAgB,KAAK;IACvB;;AAQsB;IAAU;2BAIK;AACnC,WAAK,AAAS,2CAAS,MAAM;AACsC,QAAjE,WAAoB,6BAAM,MAAM,EAAE,UAAU;;AAE9C,YAAO,OAAM;IACf;;AAqBE,UAAI,gBAAW,AAAuD,WAAjD,wBAAW;AACf,MAAjB,mBAAa;AACb;IACF;;AAQ6B;AACvB,qBAAS;AAEb;AACM,0BAAW,MAAM,AAAO,MAAD,MAAM;AAC7B,uBAAS,6BAAO,AAAS,QAAD,SAAgB,UAAP,MAAM;AAC3C,gBAAO,4CAAiB,+BAAW,MAAM,GAAG,AAAS,QAAD,6BACjC,AAAS,QAAD,yBACd,AAAS,QAAD,mBACR,AAAS,QAAD,sBACL,AAAS,QAAD,mCACE,AAAS,QAAD,qCAChB,AAAS,QAAD;;cACnB;AAAP;AACc,YAAd,AAAO,MAAD;AACC,YAAP;;;;MAEJ;;;AAIE,WAAK,gBAAW;AACqC,MAArD,WAAM,wBAAW;IACnB;;AAGqB,YAAE,AAAY,eAAN,eAAE;IAAI;;2CAxDhB,QAAa;IA7D3B;IAcA,8BAAwB;IAWxB,yBAAmB;IAYpB,sBAAgB;IAcf,mBAAa;IAUc;IACnB,gBAAE,yCAAgB,MAAM;IACvB,gBAAE,+CACE,SAAC,MAAM,SAAS,AAAK,AAAc,IAAf,qBAAkB,AAAK,IAAD,yDACxC,QAAC,OAAQ,AAAI,AAAc,GAAf;;EAAwB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAZ3C,iCAAQ;YAAG,iBAAO;;;;;ACrEN,YAAA,AAAU;IAAM;sBAGlB;AAEgB,MADrC,WAAM,8BAAgB,AAAC,8CACnB;IACN;;AAwBE,UAAI,AAAa,+BACA,AAAE,AAAW,eAAzB,6CAAqC;AACxC,cAAO;;AAET,YAAO,kCAA8D,eAAvB,AAAE,AAAU,eAAxB,sCAAyB;IAC7D;iBAEsB;AACH,MAAjB;AACwB,MAAxB,yBAAmB,KAAK;AACpB,wBAAc;AAClB,UAAI,AAAY,WAAD,UAAU;AAC6C,MAAtE,qBAAe,AAAY,WAAD,qBAAoB,4CAAC,WAAW,AAAM,KAAD;IACjE;;AAQ2B;IAAU;kBAGb;AACL,MAAjB;AAC+B,MAA/B,mBAAa,kBAAY,KAAK;IAChC;;AAUmB,YAAA,AAAS,sBAAO;IAAU;aAE7B;AACoB,MAAlC,iBAAY,AAAS,qBAAO,KAAK;AAC7B,wBAAc;AAClB,UAAI,AAAY,WAAD;AACwD,QAArE,qBAAe,6BAAU,QAAQ,SAAS,4CAAC,WAAW,AAAS;YAC1D,MAAK,AAAY,AAAW,WAAZ,0BAAwB;AAC4B,QAAzE,qBAAe,AAAY,WAAD,qBAAoB,4CAAC,WAAW,AAAS;;IAEvE;;AAmBM,wBAAc;AAClB,UAAI,AAAY,WAAD,YACX,AAAY,WAAD,cAAa;AAE8B,QADxD,WAAM,wBAAU,AAAC,wDACb;;AAGN,YAAW,2BAAiB,sBAAgB;IAC9C;mBAEmC;AAC7B,wBAAc;AAClB,UAAI,AAAY,WAAD;AACmD,QAAhE,qBAAe,6BAAU,eAAe;YACnC,KAAI,AAAY,WAAD,cAAa;AAEa,QAD9C,WAAM,wBAAU,AAAC,kDACb,oBAAiB,AAAY,WAAD,YAAU;;AAGC,MAA7C,YAAO,iBAAW,MAAM,aAAY;IACtC;;;;;AAWkB,MAAV;AACN,YAAkB,kCAAU;IAC9B;;AAIM,wBAAc,AAAO,oBAAC;AAC1B,UAAI,AAAY,WAAD,UAAU,MAAO;AAChC,YAAiB,4BAAM,WAAW;IACpC;uBAE4B;AAC1B,UAAI,AAAM,KAAD;AACuB,QAA9B,AAAQ,sBAAO;;AAE2B,QAA1C,AAAO,oBAAC,gBAAwB,cAAN,KAAK;;IAEnC;;AAIE,WAAK,gBAAW;AACqC,MAArD,WAAM,wBAAW;IACnB;;mCAhCe,QAAY;IACJ,yBAAE;IACR,mBAAE,uCAAU;AACvB,8CAAM,MAAM,EAAE,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;ICjIL;;;;;;IAGT;;;;;;IAGI;;;;;;IAKH;;;;;;IAKe;;;;;;IAEf;;;;;;IAGA;;;;;;;6CAEO;QACR;QACD;QACA;QACA;QACA;QACA;IANS;IACR;IACD;IACA;IACA;IACA;IACA;AACP,QAAI,AAAW,kBAAE;AACwC,MAAvD,WAAM,2BAAc,AAAkC,kCAAZ,mBAAU;UAC/C,KAAI,8BAAsC,AAAE,eAAf,sBAAiB;AACU,MAA7D,WAAM,2BAAc,AAAwC,qCAAf,sBAAa;;EAE9D;;;;;;;;;;;;;;;IC/BgB;;;;;;;AAUG,YAAA,AAA6B,+BAAT,qBAAgB;IAAU;;;;;;;;;;;;;;;;;sBAkCb;AAAlB;AAC1B,oBAAO,MAAM,AAAS,AAAO,QAAR;AAC3B,cAAgB,8BAAM,IAAI,EAAE,AAAS,QAAD,uBACvB,AAAS,QAAD,mBACR,AAAS,QAAD,sBACL,AAAS,QAAD,mCACE,AAAS,QAAD,qCAChB,AAAS,QAAD;MAC5B;;;qCAvCgB,MAAU;QACR;QACM;QACf;QACA;QACG;wCACK,AAA6B,8BAAT,OAAO,SAAS,IAAI,GAAG,UAAU,YACnD,OAAO,WACP,OAAO,cACJ,UAAU,wBACA,oBAAoB,gBAC5B,YAAY;EAAC;uCAGZ,WAAe;QACtB;QACM;QACf;QACA;QACG;IACI,mBAAE,kBAAY,SAAS;AACjC,gDAAM,UAAU,kBACG,AAAU,SAAD,oBACf,OAAO,WACP,OAAO,cACJ,UAAU,wBACA,oBAAoB,gBAC5B,YAAY;;EAAC;;;;;;;;;;;;;+DAmBU;AAC7C,oCAAmB,AAAgC,AAAU,iCAAnB,OAAO,oBAAa;EAAW;qEAKxB;AAC/C,sBAAc,AAAO,OAAA,QAAC;AAC1B,QAAI,WAAW,UAAU,MAAiB,4BAAM,WAAW;AAC3D,UAAO,8BAAU,eAAe;EAClC;;;;AC9DmC,YAAA,AAAY;IAAI;;;;;AAe/B,MAAV;AACN,YAAO,gCAAW,AAAY;IAChC;;mDAVuB,QAAY;IACjB,qBAAE,4CAAkC;AAChD,8DAAM,MAAM,EAAE,GAAG;;EAAC;;;;;;;;;;;;;;;SCZE;UAA2B;AACjD,mCAAgB,QAAQ,GAAG,EAAE,OAAO;IAAC;QAGhB;UAA2B;AAChD,mCAAgB,OAAO,GAAG,EAAE,OAAO;IAAC;SAGd;UACI;UAAiB;UAAgB;AAC3D,mCAAgB,QAAQ,GAAG,EAAE,OAAO,EAAE,IAAI,EAAE,QAAQ;IAAC;QAGhC;UACK;UAAiB;UAAgB;AAC3D,mCAAgB,OAAO,GAAG,EAAE,OAAO,EAAE,IAAI,EAAE,QAAQ;IAAC;UAG7B;UACG;UAAiB;UAAgB;AAC3D,mCAAgB,SAAS,GAAG,EAAE,OAAO,EAAE,IAAI,EAAE,QAAQ;IAAC;WAG9B;UACE;UAAiB;UAAgB;AAC3D,mCAAgB,UAAU,GAAG,EAAE,OAAO,EAAE,IAAI,EAAE,QAAQ;IAAC;SAGnC;UAA2B;AAAhC;AACX,wBAAW,MAAM,SAAI,GAAG,YAAW,OAAO;AACZ,QAApC,4BAAsB,GAAG,EAAE,QAAQ;AACnC,cAAO,AAAS,SAAD;MACjB;;cAGgC;UAA2B;AAAhC;AACnB,wBAAW,MAAM,SAAI,GAAG,YAAW,OAAO;AACZ,QAApC,4BAAsB,GAAG,EAAE,QAAQ;AACnC,cAAO,AAAS,SAAD;MACjB;;sBAcW,QAAY,KAA0B,SAC5C,aAAgB;AAFW;AAG1B,sBAAU,yBAAQ,MAAM,EAAE,GAAG;AAEjC,YAAI,OAAO,UAAU,AAAQ,AAAQ,AAAe,OAAxB,kBAAgB,OAAO;AACnD,YAAI,QAAQ,UAAU,AAAQ,AAAmB,OAApB,YAAY,QAAQ;AACjD,YAAI,IAAI;AACN,cAAS,OAAL,IAAI;AACa,YAAnB,AAAQ,OAAD,QAAQ,IAAI;gBACd,KAAS,aAAL,IAAI;AACuB,YAApC,AAAQ,OAAD,aAAa,AAAK,IAAD;gBACnB,KAAS,YAAL,IAAI;AACmC,YAAhD,AAAQ,OAAD,cAAc,AAAK,IAAD;;AAE2B,YAApD,WAAM,2BAAc,AAA+B,qCAAP,IAAI;;;AAIpD,cAAgB,+BAAW,MAAM,UAAK,OAAO;MAC/C;;4BAG+B,KAAc;AAC3C,UAAI,AAAS,AAAW,QAAZ,cAAc,KAAK;AAC3B,oBAAU,AAA2D,yBAA9C,GAAG,sCAAsB,AAAS,QAAD;AAC5D,UAAI,AAAS,QAAD;AACoC,QAA9C,UAAY,AAAkC,OAA3B,mBAAI,AAAS,QAAD;;AAEM,MAAvC,WAAM,kCAAkB,AAAS,OAAF,QAAI,GAAG;IACxC;;IAGc;;;;EAChB;;;;;;;;;;;;;;;;;;;;;;;;qBC7FyC;AACnC,4CAAkB,6BAAM,KAAK;IAAE;;;;;AAI7B,sBAAY;AACZ,iBAA0B,kCAC1B,QAAC,SAAU,AAAU,SAAD,UAAoB,4CAAS,KAAK;AAIlC,MAHxB,oCAAY,UAAL,IAAI,qBACY,UAAV,SAAS,4BACL,UAAL,IAAI,2BACG;AACnB,YAAO,AAAU,UAAD;IAClB;kBAIuC;AACnC,YAAA,AAAS,SAAD,cAAc;IAAK;mBAES;AACpC,YAAA,AAAS,AAAQ,SAAT,cAAc;IAAK;;yCAzBI;AAAU,oDAAM,MAAM;;EAAC;;;;;;;;;;;;;;;;;;ICQ7C;;;;;;IAMH;;;;;;IAKI;;;;;;IAKE;;;;;;;AAMQ;IAAY;;;;;;qBAmBG,OAAiB;UAC3C;UAAqB;AAC5B,mBAAoB,iCAAU,KAAK;AACvC,YAAO,sCAAc,KAAK,EAAE,MAAM,EAAE,AAAM,KAAD,sBAC3B,QAAQ,eAAe,WAAW;IAClD;;;;;;sBAQwC,OAAc;UACzC;UAAqB;AACU,MAA1C,AAAY,WAAD,WAAX,cAAgB,6BAAU,QAAQ,WAAtB;AACR,qBAAW,yBAAmB,AAAY,AAAU,WAAX,mBAAY,YAAY;AACG,MAAxE,cAAc,AAAY,WAAD,qBAAoB,4CAAC,WAAW,AAAS,QAAD;AAEjE,YAAqB,wCAAU,KAAK,EAAE,AAAS,QAAD,QAAQ,KAAK,cAC7C,QAAQ,eAAe,WAAW;IAClD;;;;;;oBAW6C,OAAc;UAC1C;UAAqB;AAClC,uDAAsB,KAAK,EAAE,QAAQ,aACvB,QAAQ,eAAe,WAAW;IAAC;;AAMnD,UAAI;AAC2D,QAA7D,WAAM,wBAAW;;AAEA,MAAnB,qBAAe;AACf,YAAO;IACT;;+CAvDmB,OAAyB,QAAa;;QAC/C;QAAqB;IAV1B,qBAAe;IASD;IAAsC;IAC/C;IACI,gBAAE,mBAAa,MAAM;IACjB,sBAAc,MAAZ,WAAW,EAAX,cAAe,6BAAU,eAAe;;EAAe;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;ICXrE;;;;;;IAGA;;;;;;;;;;AASA,mBAAS;AASX,MAPF,AAAO,sBAAQ,SAAC,MAAM;AAMH,QALjB,SAAA,AAAO,MAAD,IAAI,AAAK,AAAO,AACF,AACF,AACmC,AACvB,mBAF1B,AAAO,gBACP,AAAK,AAAqC,oBAA9B,sBAAgB,IAAI,EAAE,KAAK,cACvC,AAAK,AAAc,oBAAP,KAAK,aACjB,AAAO;;AAGb,eAAS,OAAQ;AAME,QALjB,SAAA,AAAO,MAAD,IAAI,AAAK,AAAO,AACF,AACF,AAC2B,AAC7B,mBAFZ,AAAO,gBACP,AAAK,AAA6B,oBAAtB,qBAAe,IAAI,cAC/B,AAAK,IAAD,UACJ,AAAO;;AAGb,YAAO,AAAO,AAAc,AAAkB,OAAjC,GAAG,AAAK,mBAA2B,AAAS;IAC3D;sBAGuB;AAEK,MAD1B,WAAM,8BAAgB,AAAC,8CACnB;IACN;;AAOQ,qBAAW;AACkD,MAAnE,AAAO,oBAAC,gBAAkB,AAAyC,mCAAT,QAAQ;AAClD,MAAV;AACN,YAAO,gCAAW,gBAAU,QAAQ;IACtC;gBAEmC;AAAR;AACnB;AACA,wBAAY,AAAK,oBAAO,AAAiB,OAAb,QAAQ;AACpC,oBAAQ,AAAK,oBAAO,AAAmB,OAAf,QAAQ;AAEtC,iBAAS,QAAS,AAAO;AACvB,yBAAM,SAAS;UAAf;AACA,yBAAM,AAAK,oBAAO,sBAAgB,AAAM,KAAD,MAAM,AAAM,KAAD;UAAlD;AACA,yBAAM,AAAK,oBAAO,AAAM,KAAD;UAAvB;AACA,yBAAM,IAAI;UAAV;;AAGF,iBAAW,OAAQ;AACjB,yBAAM,SAAS;UAAf;AACA,yBAAM,AAAK,oBAAO,qBAAe,IAAI;UAArC;AACA,+BAAO,AAAK,IAAD;UAAX;AACA,yBAAM,IAAI;UAAV;;AAEF,uBAAM,KAAK;QAAX;MACF;;sBAK8B,MAAa;AACrC,mBACA,AAAgE,4CAAvB,qBAAe,IAAI,IAAE;AAClE,WAAK,mBAAa,KAAK;AAGkB,QAFvC,SAAO,AAAI,MAAM,YACb,gDACA;;AAEN,YAAS,AAAe,OAAT;IACjB;qBAKoC;AAC9B,mBAAO,AAAE,4BAAiB,AAAK,IAAD,gBAAa,SAC3C,4CAAyC,qBAAe,AAAK,IAAD,UAAQ;AAExE,UAAI,AAAK,IAAD;AAC0D,QAAhE,SAAW,AAAqD,MAA/C,qBAAc,qBAA4B,eAAb,AAAK,IAAD,cAAY;;AAEhE,YAAS,AAAe,OAAT;IACjB;qBAG6B;AAMzB,YAAA,AAAM,AAAqC,MAAtC,cAAY,kCAAgB,uBAAqB,MAAK;IAAM;;AAI/D,mBAAS;AACT,iBAAO,wBACS,KAAE,AAAO,MAAD,SACxB,QAAC,SACG,AAAkB,8CAAC,AAAQ,mDAAQ,AAAmB,8EAChD;AACd,YAAS,AAAoC,OAA9B,GAAS,0BAAc,IAAI;IAC5C;;qDAjHwB,QAAY;IAL9B,eAAyB;IAGzB,cAAuB;AAEc,gEAAM,MAAM,EAAE,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;MAV5C,kDAAe;;;MAEZ,0CAAO;YAAG;;;;MA1B1B,gCAAc;YAAG,iBAAO;;;;;ICEX;;;;;;;;;;;;;;;;qDAKkB,QAAY;QACrC;QACO;QACO;QACf;QACA;QACG;IACC,gBAAE,mBAAa,MAAM;AAC5B,gEAAM,UAAU,kBACG,aAAa,WACnB,OAAO,WACP,OAAO,cACJ,UAAU,wBACA,oBAAoB,gBAC5B,YAAY;;EAAC;;;;;;;;;qEnB8tJE;;;;;;;;;;AtBpqJlB,YAAa,kBAAP;IAAgB;;;AAM5B;AACT,sBAAkC,2CAAvB,OAAS,oBAAT,eAA0B,AAAO;AAEhD,eAAW,QAAS,AAAO,AAAU;AAKlC,QAJD,WAAW,aAAa,mCACf,qBACQ,KAAK,iBACL,QAAQ;;AAI3B,UAAI,UAAU;AAIZ,iBAAW,OAAQ;AAG2B,kBAF5C,IAAI;UAAJ;AACI,iCAAyB,AAAE,eAAZ,UAAU;AACzB,kCAAgB,AAAW,UAAD;;;AAExB,qBAAO,AAAW,UAAD;AACvB,cAAS,sBAAL,IAAI;AACW,YAAjB,aAAa,IAAI;;AAEjB;;;;AAKN,YAAe,gBAAR,QAAQ;IACjB;;wCAvCsB;IAKhB,aAA4B;AALF,mDAAM,MAAM;;EAAC;;;;;;;;;;;;;;;;;;;;AAsDP,+CAAmB;IAAK;UAGpC;AAAY,wBAAM,wBAAW;IAAqB;;;QAbrE;QACS;QACA;IAFT;IACS;IACA;AAHhB;;EAIE;;;;;;;;;;;;;;;;;;;;;;AAiBwB,YAAa,uBAAP;IAAqB;;AAGxB;IAAc;sBACjB;AAClB,qBAAW;AACjB,UAAU,sBAAN,KAAK,KACI,sBAAT,QAAQ,KACD,2BAAU,AAAM,KAAD,gBAAgB,AAAS,QAAD;AAGhD;;AAEF,uBAAI,QAAQ,EAAI,KAAK;AACG,QAAtB,uBAAiB,KAAK;AACkB,QAAxC,mBAAc,QAAC,KAAM,AAAE,CAAD;;IAE1B;;AAGuC;IAAa;qBAChB;AAClC,uBAAI,qBAAiB,KAAK;AACH,QAArB,sBAAgB,KAAK;AACL,QAAhB;;IAEJ;UAGoB,QAAgB;AACN,MAA5B,AAAO,AAAM,AAAM,4BAAI;AACa,MAApC,sBAAgB,AAAO;AACc,MAArC,uBAAiB,AAAO;AACI,MAAtB,YAAM,MAAM,EAAE,OAAO;IAC7B;;AAIiC,MAA/B,AAAO,AAAM,AAAM,+BAAO;AACX,MAAT;IACR;;AAIE,YAAmB,gBAAZ;IACT;;4CAhD+B;IAKvB;IAiBW;AAtBsB,uDAAM,MAAM;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;mEsB2nJvB;;;;;;;;;;AtB18I3B,YAAa,qCAAP;IAAmC;;AAIzC,YAAY,qDAAN;IAAoD;;AAI5D,UAAI;AACF,cAAO,AAAM,2BAAe,MAA4B,eAAf,AAAE,eAAT;;AAEpC,YAAa;IACf;;oDAhBqD;AAAU,+DAAM,MAAM;;EAAC;;;;;;;;;;;IAiCjB;;;;;;;;;;;;mBAGxB,SAAiB;;AAClD,YAAe,OAAO;YAAE,KAAK;YAAtB,AAAO;IAChB;;;QAZ+B;QAAmB;QAAiB;IAAjB;AAC5C,6DAAW,GAAG,SAAS,KAAK;;EAAC;;;;;;;;;;;;;;;AAmBb;IAAK;;AAIzB,YAAO,4CAA4B;IACrC;UAG0B;AACxB,YAAO,qBAAe,OAAO,EAAE;IACjC;;;;;;;;;;;;;;;;;;;;AASI,6DAAiC;IAAK;;;;;;;;;;;;;;YAOhB;AACxB,cAAO,qBACL,OAAO,EACyC,eAAxC,AAAmC,yCAA1C;MAEL;;;;;;;;;;;;;;;;oEsBi4I+B;;;;;;;;;;AtBv3I3B,YAAa,0CAAP;IAAwC;;AAI9C,YAAY,+CAAN;IAA8C;;AAItD,UAAI;AACF,cAAO,AAAM,2BAAe,MAA4B,eAAf,AAAE,eAAT;;AAEpC,YAAa;IACf;;0DAjBgE;AAC1D,qEAAM,MAAM;;EAAC;;;;;;;;;;;;AAuBjB,UAAI;AACF,cAA6B,gBAAf,AAAE,eAAT;;AAET,YAAa;IACf;;;;;;;;;;;A0CvaA,UAAO,UAAC,QAAQ,WAAkB,mDAAP,MAAM,EAAuB,MAAM;EAChE;;;;;;;;;;;;;WCS2B;;AACI;;;;;;;;;;;AACJ;AAEjB,yBAAa,yCACP;;AAC0B,YAAlC,aAAM,kBAAkB,gBAAlB,OAAoB;AAC1B,kBAAO,AAAa;UACrB,oCACK;AAiBP,QAdD,mBAAe,AAAO,MAAD,QACnB,QAAC;;AACC,cAAI,kBAAkB,UAAU;AAChB;AAEW,UAA3B,sBAAsB,IAAI,EAAX,AAAM;AAKpB,UAJD,qBAAqB,AAAa,YAAD,yBACpB,UAAX,UAAU,qBACU,UAAX,UAAU,uBACX,cAAM,qBAAqB;qCAGnB,UAAX,UAAU,uBACX;;AAAM,oCAAkB;kBAAlB,eAAsB,AAAW,UAAD;;AAGhD,cAAO,AAAW,WAAD;MACnB;;;MAlCkC;AAAlC;;IAAyC;;;;;;;;;;;;;;;;;;AANzC,UAAO,UAAC,QAAQ,WACP,AAAO,MAAD,kBAAW,yDAA6B,MAAM;EAE/D;;ACAE,UAAO,UAAC,QAAQ,WAAkB,0CAAP,MAAM,EAAW,MAAM;EACpD;;ACLE,UAAO,UAAC,QAAQ,WAAW,AAAO,MAAD,oBAAa,MAAM;EACtD;;;;ACYI,UAAI,AAAW;AACb,aAAO,AAGN;AAFkB,UAAjB,8CAAa;AACb,gBAAO;;;AAGX,YAAO;2BAAW,8CAAI;IACxB;yBAG0B;AAAU,2DAAa,KAAK;;;;;;;;EAGxD;;;;;;;;MADe,2CAAU;;;;;;;;;AClBA;MAAI;cAGH;;AACtB,cAAO,AAAU,AAAa,UAAP,KAAK,IAClB,kCAAN,KAAK,KACD,AAAY,2BAAG,AAAM,KAAD,mBACpB,uBAAO,YAAO,AAAM,KAAD;MAC7B;;AAGoB,cAAqB,EAArB,AAAY,8BAAW,mCAAmB;MAAM;;AAIlE,gBAAQ;;;AAEJ,oBAAO,kCAAiB,oBAAa;;;;AAErC,oBAAqB,UAAZ;;;;AAET,oBAAuB,AAAU,gDAAG,OAC9B,iCAAiB,oBAAa,cAChB,SAAZ;;;MAEd;;;;;;;;;;;;;;;;0FCDwD;;AAClD,iEAAe;AAEf,cAAI;;;AACR,UAAmC,uDAA5B,yCAAO,AAAa,YAAD,UAAuB,OAAO,qBAAe,UAAb,YAAY;EACxE;;AALU,uBAA8C,8DAA9C,OAAO;;;;;;;;;EAKjB;0FAqBkD;;AAC5C,iEAAe;AAEf,cAAI;;;AACR,UACK,2CADE,iEAAgB,AAAa,YAAD,SAAS,iCACzB,OAAO,qBAAe,UAAb,YAAY;EAC1C;;AANU,uBAAwC,8DAAxC,OAAO;;;;;;;;;EAMjB;kGAmBwD;AAClD,wBAAgB;AAChB,qBAAa;AACjB,UAAO,gFAA4B,SAAC,SAAS;AAC5B,QAAf,gBAAA,AAAa,aAAA;AASV,QARH,AAQC;AAPC;AACkC,YAAhC,AAAK,IAAD,KAAK,MAAM,AAAO,OAAA,CAAC,OAAO;;gBACvB;gBAAG;AAAV;AACoB,cAApB,AAAK,IAAD,UAAU,CAAC,EAAE,EAAE;;;;AAEN,UAAf,gBAAA,AAAa,aAAA;AACb,cAAI,AAAc,aAAD,IAAI,KAAK,UAAU,EAAE,AAAK,AAAO,IAAR;QAC3C;oEACQ,QAAC;AACO,QAAjB,aAAa;AACb,YAAI,AAAc,aAAD,IAAI,GAAG,AAAK,AAAO,IAAR;;EAEhC;;AAlBU,uBAA8C,kEAA9C,OAAO;;;;;;;;;EAkBjB;wFAM0B,SAA6B;AACvC;AACd,UAAO,gFAA4B,SAAC,OAAO;AAE6B,QADtE,eACI,AAAO,AAAQ,AAAe,AAA0B,OAAjD,CAAC,KAAK,iDAAY,UAAL,IAAI,sBAAsB,UAAL,IAAI,+BAAgB,IAAI;oEAC5D,QAAC;AACV,YAAI,YAAY;AACyB,UAA3B,AAAE,eAAd,YAAY,kBAAO,QAAC,KAAM,AAAK,IAAD;;AAElB,UAAZ,AAAK,IAAD;;;EAGV;;AAbU,uBACgB,SAA6B,0DAD7C,OAAO,EAAP,IAAI;;;;;;;;;EAad;sDAGmB,OAAO;AAAM,gBAAK;;2GC7FtB,OAAmC;AAC1C,qBAAa,oBACb,4CAAoC,SACpC,sCAA0B;AAG2C,IAD3E,QACK,AAAY,sBAAI,AAAM,KAAD,eAAgB,AAAM,KAAD,uBAAuB,KAAK;AAEpD;AACC;AAEpB,qBAAa;AACb,oBAAY;AAET;;;;;;;;;;;AACC;;;;;;;;;;;AAEJ,wBAAgB;AAChB,uBAAe;AAEnB,aAAK;AACH,WAAK,aAAa,KAAK,YAAY,EAAE;AACzB;AACZ;AAC6C,QAA3C,SAAS,AAAO,OAAA,CAAC,sBAAc;;YACxB;YAAG;AAAV;AACyB,UAAzB,AAAW,UAAD,UAAU,CAAC,EAAE,CAAC;AACxB;;;;AAEF,UAAW,oBAAP,MAAM;AACmB,QAAT,AAAE,eAApB,kBAAkB;AACQ,QAAT,AAAE,eAAnB,iBAAiB;AAMf,QALF,AACK,AACA,MAFC,gDACe,UAAX,UAAU,qBAA0B,UAAX,UAAU,6BAC3B;AACY,UAAV,AAAE,eAApB,kBAAkB;AACS,UAAV,AAAE,eAAnB,iBAAiB;;;AAGG,QAAtB,AAAW,UAAD,KAAK,MAAM;;;;AA8DxB,IA1DD,AAAW,UAAD,YAAY;;AACpB,YAAO,AAAmB,kBAAD;AAiBnB,MAhBN,qBAAqB,aACjB,QAAC;AACqB,QAApB,gBAAgB;AACA,QAAhB,mBAAe,CAAC;AACF,QAAd,YAAY;iDAEM,UAAX,UAAU,uBACX;AACW,UAAjB,aAAa;AACb,cAAI,SAAS;AACO,YAAlB,AAAW,UAAD;gBACL,MAAK,aAAa;AAEI,YAAV,AAAE,eAAnB,iBAAiB;AACC,YAAlB,AAAW,UAAD;;;AAmBZ,MAhBN,oBAAoB,AAAM,KAAD,QACrB,QAAC;AACoB,QAAnB,eAAe;AACA,QAAf,kBAAc,CAAC;AACD,QAAd,YAAY;kDAEM,UAAX,UAAU,uBACX;AACU,UAAhB,YAAY;AACZ,cAAI,UAAU;AACM,YAAlB,AAAW,UAAD;gBACL,MAAK,YAAY;AAEM,YAAV,AAAE,eAApB,kBAAkB;AACA,YAAlB,AAAW,UAAD;;;AAGlB,WAAK;AASA,cARH,UAAU;QAAV;AACI,wBAAU;AACiB,YAAT,AAAE,eAApB,kBAAkB;AACQ,YAAT,AAAE,eAAnB,iBAAiB;;AAEjB,yBAAW;AACiB,YAAV,AAAE,eAApB,kBAAkB;AACS,YAAV,AAAE,eAAnB,iBAAiB;;;;;AAatB,MAVD,AAAW,UAAD,YAAY;;AAChB,6BAAU,+BACM,AAAE,eAApB,kBAAkB,YACD,AAAE,eAAnB,iBAAiB,cAFL;AAKV,4BAAY,QAAS,KAAM,AAAE,CAAD;;;AACP,QAAzB,qBAAqB;AACG,QAAxB,oBAAoB;AACpB,cAAc,AAAc,8BAAT,OAAO,kBAAO,QAAC,KAAM;;;AAG5C,UAAO,AAAW,WAAD;EACnB;;AAxGU,2BACK,OAAmC,2EADxC,KAAK,EAAL,OAAO;;;;;;;;;;;EAwGjB;0GAqCqD;AAC7C,qBAAa,oBACb,wDAA0C,SAC1C,kDAAgC;AAEhC,qBAAa;;AAEjB,eAAW,QAAS,OAAM;AACU,iBAArB,CAAZ,qBAAe,AAAM,KAAD,eAAe,KAAK,GAAG,AAAM,KAAD;;;AAsDpD,IAnDD,AAAW,UAAD,YAAY;;AACd,0BAAuC;AAEvC,uBAAa,oCAAgB,AAAW,UAAD,WAAS;AAChD,uBAAkB;AACxB,eAAK,WAAe,OAAS;AACH,QAAxB,AAAU,UAAA,QAAC,KAAK,EAAI,IAAI;AACH,QAArB,AAAW,UAAD,KAAK,KAAK;AACpB,YAAI,AAAW,AAAO,UAAR,cAAW,AAAW,UAAD;AACI,UAArC,AAAW,UAAD,KAAU,mBAAK,UAAU;;;;AAInC,qBAAW;AACf,eAAW,SAAU,WAAU;AACvB,oBAAQ,QAAQ;AAEhB,2BAAe,AAAO,MAAD,QAAQ,QAAC,QAAS,UAAU,CAAC,KAAK,EAAE,IAAI,2CAC3C,UAAX,UAAU;AAOrB,QANF,AAAa,YAAD,QAAQ;AAClB,eAAO,AAAc,aAAD,YAAU,YAAY;AACR,UAAlC,AAAc,aAAD,UAAQ,YAAY;AACjC,cAAI,AAAc,aAAD,eAAa,AAAW,UAAD,UAAU,KAAK;AACnC,YAAlB,AAAW,UAAD;;;AAGiB,QAA/B,AAAc,aAAD,OAAK,YAAY;AAEpB,QAAV,WAAA,AAAQ,QAAA;;AAEV,WAAK;AAWA,cAVH,UAAU;QAAV;AACI,wBAAU;AACV,qBAAW,eAAgB,cAAa;AAClB,cAApB,AAAa,YAAD;;;AAGd,yBAAW;AACX,qBAAW,eAAgB,cAAa;AACjB,cAArB,AAAa,YAAD;;;;;;AAWnB,MAPD,AAAW,UAAD,YAAY;;AACpB,YAAI,AAAc,aAAD,YAAU,MAAO;AAC9B,6BAAU;;AAAC,mBAAS,IAAK,cAAa;AAAI,qBAAF,CAAC;;cAA/B;AAEV,4BAAY,QAAS,KAAM,AAAE,CAAD;;;AAChC,YAAI,AAAQ,OAAD,YAAU,MAAO;AAC5B,cAAc,AAAc,8BAAT,OAAO,kBAAO,QAAC,KAAM;;;AAG5C,UAAO,AAAW,WAAD;EACnB;;AAhEgB,mBAAqC,qEAArC,MAAM;EAgEtB;uFCzN+B;AACzB,qBAAa,oBACX,4CAAoC,SACpC,sCAA0B;AAEyC,IAAzE,OAAO,AAAY,sBAAI,AAAK,IAAD,eAAe,AAAK,IAAD,uBAAuB,IAAI;AAElD;AACnB;AACA,mBAAW;AACX,qBAAa;AAEI;;;;;;;;;;;AAErB,aAAK;AAEkE,MADrE,eAAe,AAAc,aAAD,uCAAmB,UAAX,UAAU,qBACtB,UAAX,UAAU,uBAAmB,cAAM,AAAkB;;;AAGpE,aAAK;AACc,MAAjB,aAAa;AACK,MAAlB,AAAW,UAAD;;;AAGZ,aAAK;AACY,MAAf,WAAW;AACS,MAApB,gBAAgB,IAAI;AACa,MAAjC,yBAAqB,YAAY;AACzB,MAAR,MAAM;;;AAGuB,IAA/B,yBAAqB,UAAU;AAuB9B,IArBD,AAAW,UAAD,YAAY;;AACpB,YAAO,AAAa,YAAD;AACX,MAAR,MAAM;AACN,WAAK;AAUA,cATH,UAAU;QAAV;AACI,wBAAU;AACV,iBAAK,QAAQ,KAAK,AAAK,IAAD,cAAc,MAAmB,AAAE,gBAAd,YAAY;AACjC,YAAV,AAAE,eAAd,YAAY;AACO,YAAnB,eAAe;;AAEf,yBAAW;AACX,iBAAK,QAAQ,KAAK,AAAK,IAAD,cAAc,MAAmB,AAAE,gBAAd,YAAY;AAC/C,YAAR,MAAM;;;;;AAQX,MALD,AAAW,UAAD,YAAY;AACpB,YAAI,UAAU,EAAE,MAAO;AACnB,uBAAuB,eAAZ,YAAY;AACR,QAAnB,eAAe;AACf,cAAO,AAAS,SAAD;;;AAGnB,UAAO,AAAW,WAAD;EACnB;;AAxDU,mBAAqB,wDAArB,IAAI;EAwDd;qFAMsB;AAClB,gEAAuB,AAAe,uBAAT,OAAO;EAAa;;AAD3C,mBAAY,0DAAZ,OAAO;EACoC;6FAQjB;AAChC,gEAAuB,8BAAa,OAAO;EAAE;;AADvC,mBAA0B,8DAA1B,OAAO;EACgC;iGAQb;AAClC,QAAI,sBAAgB,AAAQ,OAAD;AACY,MAArC,UAAU,AAAQ,OAAD;;AAEnB,UAAe,0CAAR,OAAO;EAChB;;AALU,mBAA0B,gEAA1B,OAAO;EAKjB;2DC5E0B;AAAU,6CAAS,6CAAC,KAAK;EAAE;;AAA3C,mBAAgB,wCAAhB,KAAK;EAAsC;iEAyBd;AAC/B,qBAAa,oBACb,4CAAoC,SACpC,sCAA0B;AAE1B,qBAAa;;AAEjB,eAAW,QAAS,OAAM;AACU,iBAArB,CAAZ,qBAAe,AAAM,KAAD,eAAe,KAAK,GAAG,AAAM,KAAD;;;AAmCpD,IAhCD,AAAW,UAAD,YAAY;;AACd,0BAAuC;AAC7C,eAAW,SAAU,WAAU;AACvB,2BACF,AAAO,MAAD,uCAAmB,UAAX,UAAU,qBAA0B,UAAX,UAAU;AAInD,QAHF,AAAa,YAAD,QAAQ;AACgB,UAAlC,AAAc,aAAD,UAAQ,YAAY;AACjC,cAAI,AAAc,aAAD,YAAU,AAAW,AAAO,UAAR;;AAER,QAA/B,AAAc,aAAD,OAAK,YAAY;;AAEhC,WAAK;AAWA,cAVH,UAAU;QAAV;AACI,wBAAU;AACV,qBAAW,eAAgB,cAAa;AAClB,cAApB,AAAa,YAAD;;;AAGd,yBAAW;AACX,qBAAW,eAAgB,cAAa;AACjB,cAArB,AAAa,YAAD;;;;;;AAWnB,MAPD,AAAW,UAAD,YAAY;;AACpB,YAAI,AAAc,aAAD,YAAU,MAAO;AAC9B,6BAAU;;AAAC,mBAAS,IAAK,cAAa;AAAI,qBAAF,CAAC;;cAA/B;AAEV,4BAAY,QAAS,KAAM,AAAE,CAAD;;;AAChC,YAAI,AAAQ,OAAD,YAAU,MAAO;AAC5B,cAAc,AAAc,8BAAT,OAAO,kBAAO,QAAC,KAAM;;;AAG5C,UAAO,AAAW,WAAD;EACnB;;AA7CU,mBAA6B,4CAA7B,MAAM;EA6ChB;8FA4ByD;AACrD,UAAa,0CAAb,4BAAI,OAAO;EAAiB;;AADtB,uBAA+C,8DAA/C,OAAO;;;;;;;EACe;;AAKxB,qBAAa,oBACb,4CAAoC,SACpC,sCAA0B;AAyC/B,IAvCD,AAAW,UAAD,YAAY;;AACd,0BAA6C;AAC7C,8BAAoB,aAAO,QAAC;AAChC,YAAI,sBAAgB,AAAM,KAAD;AACU,UAAjC,QAAQ,AAAM,KAAD;;AAET,2BACF,AAAM,KAAD,uCAAmB,UAAX,UAAU,qBAA0B,UAAX,UAAU;AAIlD,QAHF,AAAa,YAAD,QAAQ;AACgB,UAAlC,AAAc,aAAD,UAAQ,YAAY;AACjC,cAAI,AAAc,aAAD,YAAU,AAAW,AAAO,UAAR;;AAER,QAA/B,AAAc,aAAD,OAAK,YAAY;gEACT,UAAX,UAAU;AAIpB,MAHF,AAAkB,iBAAD,QAAQ;AACgB,QAAvC,AAAc,aAAD,UAAQ,iBAAiB;AACtC,YAAI,AAAc,aAAD,YAAU,AAAW,AAAO,UAAR;;AAEH,MAApC,AAAc,aAAD,OAAK,iBAAiB;AACnC,WAAK;AAWA,cAVH,UAAU;QAAV;AACI,wBAAU;AACV,qBAAW,eAAgB,cAAa;AAClB,cAApB,AAAa,YAAD;;;AAGd,yBAAW;AACX,qBAAW,eAAgB,cAAa;AACjB,cAArB,AAAa,YAAD;;;;;;AAUnB,MAND,AAAW,UAAD,YAAY;;AACpB,YAAI,AAAc,aAAD,YAAU,MAAO;AAC9B,6BAAU;;AAAC,mBAAS,IAAK,cAAa;AAAI,qBAAF,CAAC;;cAA/B;AAEV,4BAAY,QAAS,KAAM,AAAE,CAAD;;;AAChC,cAAc,AAAc,8BAAT,OAAO,kBAAO,QAAC,KAAM;;;AAG5C,UAAO,AAAW,WAAD;EACnB;;AA9CU;EA8CV;8EC7H4B;QACd;QAAsB;AAChC,mEAAmB,QAAQ,EAAE,0CAChB,OAAO,YAAY,QAAQ;EAAC;;AAHnC,oBAAkB;UACd;UAAsB;AAD1B,gEAAQ,YAAR,OAAO,YAAP,QAAQ;;EAG2B;0FAkBL;AACpC,+EAAmB,QAAQ,EAAE,0CAAmB,iBAAiB;EAAK;;AAD1D,mBAAwB,6DAAxB,QAAQ;EACkD;8EAyC9C;QAAgB;AACxC,mBAAQ,GAAG,oDAAkB,QAAQ,IAAI,4CAAU,QAAQ,CAAnD;EAAoD;;AADtD,oBAAkB;UAAgB;AAAlC,gEAAQ,aAAR,QAAQ;;EAC8C;gFAEnC;AACpB;AAEP,UAAO,gFAA4B,SAAC,MAAM;AACxC,YAAI,AAAM,KAAD;AACO,UAAd,AAAK,IAAD,KAAK,IAAI;AAGX,UAFF,QAAQ,gBAAM,QAAQ,EAAE;AACV,YAAZ,QAAQ;;;;EAIhB;;AAXU,mBAAmB,wDAAnB,QAAQ;EAWlB;gGAEqC;AAC5B;AACJ;AACC,qBAAa;AACb,iBAAS;AAEb,UAAO,gFAA4B,SAAC,MAAM;AACxC,iBAAK;AACH,cAAI,UAAU;AACU,YAAtB,AAAK,IAAD,KAAa,KAAR,OAAO;AAChB,gBAAI,MAAM;AACI,cAAZ,AAAK,IAAD;;AAE4B,cAAhC,QAAQ,gBAAM,QAAQ,EAAE,OAAO;AACb,cAAlB,aAAa;AACC,cAAd,UAAU;;;AAGA,YAAZ,QAAQ;;;;AAIZ,YAAI,AAAM,KAAD;AACO,UAAd,AAAK,IAAD,KAAK,IAAI;AACmB,UAAhC,QAAQ,gBAAM,QAAQ,EAAE,OAAO;;AAEd,UAAjB,aAAa;AACC,UAAd,UAAU,IAAI;;oEAEP,QAAC;;AACG,QAAb,SAAS;AACT,YAAI,UAAU,EAAE;AACJ,QAAZ,AAAK,IAAD;AACW,cAAf,KAAK;sBAAL,OAAO;AACK,QAAZ,QAAQ;;EAEZ;;AApCU,mBAA2B,gEAA3B,QAAQ;EAoClB;wEA6ByB;AAChB;AACH,sBAAc;AAChB;AAEF,UAAO,gFAA4B,SAAC,MAAM;AACvB,QAAjB,aAAa,IAAI;AAOf,QANF,AAAM,KAAD,WAAL,QAAU,gBAAM,QAAQ,EAAE;AACJ,UAApB,AAAK,IAAD,KAAK,UAAU;AACP,UAAZ,QAAQ;AACR,cAAI,WAAW;AACD,YAAZ,AAAK,IAAD;;+BAJF;oEAOG,QAAC;AACV,YAAI,KAAK;AACW,UAAlB,cAAc;;AAEF,UAAZ,AAAK,IAAD;;;EAGV;;AArBU,mBAAe,oDAAf,QAAQ;EAqBlB;0EAYoC;AAChC,wFAAyB,OAAO,EAAE;EAAS;;AAD/B,mBAAoB,oDAApB,OAAO;EACwB;qGAKlC,UAA0C;QACpC;QAAuB;AACjC;AACJ;AACC,qBAAa;AACb,sBAAc;AACd,iCAAyB;AAE7B,UAAO,gFAA4B,SAAC,OAAO;;AACzC,iBAAK;AACiB,UAApB,AAAK,IAAD,KAAW,KAAN,KAAK;AACF,UAAZ,QAAQ;AACU,UAAlB,aAAa;;;AAGA,cAAf,KAAK;sBAAL,OAAO;AACsB,QAA7B,QAAQ,AAAO,OAAA,CAAC,KAAK,EAAE,KAAK;AACX,QAAjB,aAAa;AACb,YAAI,AAAM,KAAD,YAAY,OAAO;AACG,UAA7B,yBAAyB;AACnB,UAAN,IAAI;;AAE0B,UAA9B,yBAAyB;;AAMzB,QAJF,QAAQ,gBAAM,QAAQ,EAAE;AACtB,cAAI,QAAQ,KAAK,sBAAsB,EAAE,AAAM,IAAF;AAC7C,cAAI,WAAW,EAAE,AAAK,AAAO,IAAR;AACT,UAAZ,QAAQ;;oEAED,QAAc;;AACvB,YAAI,UAAU,IAAI,QAAQ;AACN,UAAlB,cAAc;;AAEC,gBAAf,KAAK;wBAAL,OAAO;AACK,UAAZ,AAAK,IAAD;;;EAGV;;AAtCU,uBACG,UAA0C;UACpC;UAAuB;AAFhC,6EAAQ,EAAR,OAAO,YAAP,OAAO,YAAP,QAAQ;;;;;;;;;;EAsClB;wDAGmB,SAAS;AAAM,kBAAO;;6CACrB,OAAgB;;AAAU,YAAO,MAAN,KAAK,EAAL,cAAY;UAAN;AAAW,iBAAI,KAAK;;;EAAC;yDCxQpE,cAAuD;AACvD,sBAAc,YAAY;AAC9B,UAAO,mBAAS,QAAC;AACX,mBAAS,AAAO,OAAA,CAAC,WAAW,EAAE,KAAK;AACvC,UAAW,oBAAP,MAAM;AACR,cAAO,AAAO,OAAD,SAAM,QAAC,KAAM,cAAc,CAAC;;AAEzC,cAAO,eAAc,MAAM;;;EAGjC;;AAXU,uBACJ,cAAuD,2CADnD,YACT,EADS,OAAO;;;;;;;;;EAWjB;0ECc6C;AAC3C,UAAoB,yCAAb,4BAAI,OAAO;EACpB;;AAFU,uBAAmC,qDAAnC,OAAO;;;;;;;EAEjB;;AAaM,qBAAa,oBACX,4CAAoC,SACpC,sCAA0B;AAyC/B,IAvCD,AAAW,UAAD,YAAY;;AACG;AACnB,4BAAkB;AAEhB,8BAAoB,aACtB,QAAC;;AAC4B,cAA3B,iBAAiB;sBAAjB,OAAmB;AAKjB,QAJF,oBAAoB,AAAY,WAAD,uCAAmB,UAAX,UAAU,qBACzB,UAAX,UAAU,uBAAmB;AAChB,YAAxB,oBAAoB;AACpB,gBAAI,eAAe,EAAE,AAAW,AAAO,UAAR;;gEAGf,UAAX,UAAU,uBACX;AACgB,UAAtB,kBAAkB;AAClB,cAAI,AAAkB,iBAAD,UAAU,AAAW,AAAO,UAAR;;AAE/C,WAAK;AASA,cARH,UAAU;QAAV;AACI,wBAAU;;AACgB,kBAA1B,iBAAiB;0BAAjB,OAAmB;AACM,YAAzB,AAAkB,iBAAD;;AAEjB,yBAAW;;AACgB,kBAA3B,iBAAiB;0BAAjB,OAAmB;AACO,YAA1B,AAAkB,iBAAD;;;;;AAYtB,MATD,AAAW,UAAD,YAAY;;AAChB,6BAAU;;AACZ,eAAK,eAAe,EAAoB,SAAlB,iBAAiB;AACvC,cAAI,iBAAiB,UAA6B,SAAF,eAAjB,iBAAiB;;cAFpC;AAKV,4BAAY,QAAS,KAAM,AAAE,CAAD;;;AAChC,YAAI,AAAQ,OAAD,YAAU,MAAO;AAC5B,cAAc,AAAc,8BAAT,OAAO,kBAAO,QAAC,KAAM;;;AAG5C,UAAO,AAAW,WAAD;EACnB;;AA9CU;EA8CV;gFCrFiC;AAC3B,qBAAa,oBACX,4CAAoC,SACpC,sCAA0B;AAET;AACnB,iBAAS;AAMX,IALF,AAAQ,OAAD,iBAAM,QAAC;;AACZ,UAAI,MAAM,EAAE;AACC,MAAb,SAAS;AACa,YAAtB,YAAY;oBAAZ,OAAc;AACI,MAAlB,AAAW,UAAD;;AAsBX,IAnBD,AAAW,UAAD,YAAY;;AACpB,UAAI,MAAM,EAAE;AAMV,MALF,eACI,4CAAkB,UAAX,UAAU,qBAA0B,UAAX,UAAU,uBAAmB;AAC/D,cAAI,MAAM,EAAE;AACC,UAAb,SAAS;AACS,UAAlB,AAAW,UAAD;;AAEZ,WAAK;AAGgC,cAFnC,UAAU;QAAV;AACI,wBAAwB,UAAF,eAAZ,YAAY;AACtB,yBAAyB,UAAF,eAAZ,YAAY;;;;AAO5B,MALD,AAAW,UAAD,YAAY;AACpB,YAAI,MAAM,EAAE,MAAO;AACf,uBAAuB,eAAZ,YAAY;AACR,QAAnB,eAAe;AACf,cAAO,AAAS,SAAD;;;AAGnB,UAAO,AAAW,WAAD;EACnB;;AAnCU,mBAAuB,uDAAvB,OAAO;EAmCjB;iDC1BgC;QACY;QACnB;AACrB,0FAA4B,SAAC,OAAO;;AAClC;AACsB,gBAApB,OAAO;wBAAP,OAAS,IAAK,KAAK;;cACZ;AAAP;;;;AACa,QAAf,AAAK,IAAD,KAAK,KAAK;qEACJ,SAAC,OAAO,YAAY;;AAC9B;AACkC,gBAAhC,OAAO;wBAAP,OAAS,IAAK,KAAK,EAAE,UAAU;;cACxB;AAAP;;;;AAC8B,QAAhC,AAAK,IAAD,UAAU,KAAK,EAAE,UAAU;+FACtB,QAAC;;AACV;AACgB,gBAAd,MAAM;wBAAN,OAAQ;;cACD;AAAP;;;;AACU,QAAZ,AAAK,IAAD;;EACJ;;AAlBI,oBAAsB;UACY;UACnB;AAFf,6CAAO,YAAP,OAAO,UAAP,MAAM;;EAkBV;;ACvBsB,0FAA4B,SAAC,OAAO;AAC1D,YAAU,KAAN,KAAK,GAAO,AAAK,AAAU,IAAX,KAAK,KAAK;;EAC9B;;AAFI;EAEJ;qEAiB0C;AAC1C,wBAAgB;AAChB,qBAAa;AACjB,UAAO,gFAA4B,SAAC,SAAS;AAC5B,QAAf,gBAAA,AAAa,aAAA;AASV,QARH,AAQC;AAPC;AACE,gBAAI,MAAM,AAAI,IAAA,CAAC,OAAO,GAAG,AAAK,AAAY,IAAb,KAAK,OAAO;;gBAClC;gBAAG;AAAV;AACoB,cAApB,AAAK,IAAD,UAAU,CAAC,EAAE,EAAE;;;;AAEN,UAAf,gBAAA,AAAa,aAAA;AACb,cAAI,AAAc,aAAD,IAAI,KAAK,UAAU,EAAE,AAAK,AAAO,IAAR;QAC3C;oEACQ,QAAC;AACO,QAAjB,aAAa;AACb,YAAI,AAAc,aAAD,IAAI,GAAG,AAAK,AAAO,IAAR;;EAEhC;;AAlBU,mBAAsC,4CAAtC,IAAI;EAkBd;;;;ICnBK;;;;;;SAIqC;AAAb;;AACvB,qBAAQ,MAAM,AAAQ,AAAW,OAAZ;AACrB,kBAAM;AACI,QAAd,AAAM,gBAAI,GAAG;AAIwB,eAHrC,GAAG;QAAH;AACI,oBAAK,AAAQ,OAAD,SAAyB,SAAb,AAAQ,OAAD,eAAe;AAC9C,gCAAe;AACf,iCAAkB;;;AACuB,QAA7C,AAAQ,AAAQ,OAAT,mBAAqB,UAAJ,GAAG;AAEvB,wBAAY;AAUb,QARH,gBAAU,AAAI,AAAO,AAAM,GAAd,gCAAmB,QAAC;AAC3B,qBAAqB,AAAe,yBAA5B,AAAI,GAAD;AAMmB,UALlC,AAAU,SAAD,UAAU,2CACJ,iCAAU,IAAI,GAAa,eAAV,AAAI,GAAD,0BAChB,AAAK,IAAD,oBACV,OAAO,WACP,AAAI,GAAD,kCACE,AAAI,GAAD;;AASpB,QANH,gBAAU,AAAI,AAAQ,AAAM,GAAf,iCAAoB,QAAC;AAKT,UAFvB,AAAU,SAAD,eACL,kCAAgB,yBAAyB,AAAQ,OAAD,OACrC;;AAGF,QAAf,AAAI,GAAD,MAAM,KAAK;AAEd;AACE,gBAAO,OAAM,AAAU,SAAD;;AAEL,UAAjB,AAAM,mBAAO,GAAG;;MAEpB;;;AAOE,eAAS,MAAO;AACH,QAAX,AAAI,GAAD;;IAEP;;;;;;IAzDM,cAAqB;IAMtB,wBAAkB;;EAoDzB;;;;;;;;;;;;;;AAxE6B;EAAe;;yCCHN;QAAgB;AAChD,gBAAsB;AAInB,IAHP,AAAI,GAAD,WAAS,SAAC,KAAK;;AAAU,YAAA,AAAM,MAAD,OAAK,yBAC5B,8BAAqB,GAAG,cAAqB,OAAT,QAAQ,EAAR,eAAY,wBAChD,8BAAqB,KAAK,cAAqB,QAAT,QAAQ,EAAR,gBAAY;;AAE5D,UAAO,AAAM,AAAuC,MAAxC,oBAAK,QAAC,QAAY,AAAI,AAAgB,IAAhB,QAAC,KAAG,MAAG,AAAI,IAAA,QAAC,uCAAW;EAC3D;yDAMoC,SAAmB;;AACrD,QAAI,AAAQ,OAAD,UAAU,MAAO,SAAQ;AACpC,WAAgB,2BAAU,OAAO;UAAjB,gBAAsB,QAAQ;EAChD;yEAQ2C;;AACvC,WAAS,2BAAU,OAAO;UAAjB,gBACR,WAAM,6BAAgB,AAAkC,4BAAV,OAAO;EAAK;6CAQtC;AAAW,UAAA,AAAW,2BAAS,MAAM;EAAC;2CAK/B;AAC9B,QAAU,wBAAN,KAAK,GAAe,MAAO,MAAK;AACpC,QAAU,wBAAN,KAAK;AAEP,YAAiB,2BAAY,AAAc,wBAApB,KAAK;;AAE9B,UAAiB,6CAAS,KAAK;EACjC;6CAE0C;AACxC,QAAW,0BAAP,MAAM,GAAgB,MAAO,OAAM;AACvC,UAAO,gCAAW,MAAM;EAC1B;oCAM8B,QAAwB;AAClD,UAAA,AAAO,OAAD,cAA6B,8DAAyB,QAAC;AAC/C,QAAZ,AAAK,IAAD;AACI,QAAR,AAAM,MAAA;;EACL;;MA/BD,gBAAU;YAAG,iBAAO;;;6ECpCyB,OAAc;QAChD;QAAqB;AAClC,sBAAM,8BACF;EAA8D;;MCCtD,sCAAkB;;;;mECRD;AAC7B,mCAAQ,AAAM,KAAD,WAAW,IAAI,AAAM,KAAD,kBAAM;EAAa;2CAKtC,OAAa;;AAC7B,QAAI,AAAU,KAAK,IAAE,KAAK,EAAG,MAAO;AACpC,QAAI,AAAM,KAAD,YAAY,AAAM,KAAD,UAAU,MAAO;AACrC,iBAAS,AAAM,KAAD;AACpB,QAAI,MAAM,KAAI,AAAM,KAAD,WAAS,MAAO;AAEnC,aAAS,IAAI,GAAG,AAAE,CAAD,GAAG,MAAM,EAAE,IAAA,AAAC,CAAA;AACb,kBAAQ,AAAK,KAAA,QAAC,CAAC;AACf,kBAAQ,AAAK,KAAA,QAAC,CAAC;AAE7B,UAAI,6BAAa,KAAK,KAAK,6BAAa,KAAK;AAC3C,yBAAI,KAAK,EAAI,KAAK,GAAE,MAAO;YACtB,KAAU,iBAAN,KAAK,KAAsB,YAAN,KAAK;AACnC,aAAK,AAAU,iCAAO,KAAK,EAAE,KAAK,GAAG,MAAO;YACvC,0BAAI,KAAK,iBAAL,OAAO,kCAAe,KAAK,kBAAL,OAAO;AACtC,cAAO;YACF,kBAAI,KAAK,EAAI,KAAK;AACvB,cAAO;;;AAGX,UAAO;EACT;uDAE0B;AACxB,UAAc,AAAa,yBAApB,MAAM,KAAwB,kCAAP,MAAM;EACtC;+CAIiB,MAAc;AAC7B,QAAW,YAAP,MAAM;AAKN,MAHG,AACA,8DAFL,AAAO,MAAD,SACM,SAAS,GAAW,MAAQ,AAAS,cAAX,CAAC,IAAc,cAAF,CAAC,2CACvC,QAAS;AACqC,QAAzD,OAAY,CAAL,IAAI,GAAG,yBAAS,IAAI,EAAW,CAAC,GAAG,EAAE,AAAM,MAAA,QAAC,GAAG;;AAExD,YAAO,KAAI;;AAEb,QAAW,iBAAP,MAAM;AACR,eAAW,QAAS,OAAM;AACW,QAAnC,OAAY,CAAL,IAAI,GAAG,yBAAS,IAAI,EAAE,KAAK;;AAEpC,YAAY,EAAL,IAAI,GAAG,AAAO,MAAD;;AAGsB,IAA5C,OAAO,AAAW,YAAG,AAAK,IAAD,GAAU,cAAP,MAAM;AACsB,IAAxD,OAAO,AAAW,YAAG,AAAK,IAAD,IAAwB,CAAnB,AAAW,SAAE,IAAI,KAAK;AACpD,UAAY,EAAL,IAAI,GAAI,AAAK,IAAD,cAAI;EACzB;6CAEgB;AACyC,IAAvD,OAAO,AAAW,YAAG,AAAK,IAAD,IAAwB,CAAnB,AAAW,WAAE,IAAI,KAAK;AAC1B,IAA1B,OAAY,CAAL,IAAI,GAAI,AAAK,IAAD,cAAI;AACvB,UAAO,AAAW,aAAG,AAAK,IAAD,IAAwB,CAAnB,AAAW,QAAE,IAAI,KAAK;EACtD;+DAG6B,aAA2B;AACpD,UAAkE,UAAhE,WAAW,UAAG,AAAM,AAA+B,KAAhC,oBAAK,QAAC,QAAc,cAAL,IAAI,iCAAkB,QAAM;EAAE;;MA7DzC,yBAAS;;;;iHCUnB,SAA2B;AACtC,qBAAa,oBACX,4CAAoC,SACpC,sCAA0B;AAE7B;AACC,4BAAoB;AACpB,4BAAoB;AACpB,wBAAgB;AAChB,sBAAc;AACK;AACG;AAE1B,aAAK;AACgC,MAAnC,AAAW,UAAD,KAAoB,KAAf,cAAc;AACR,MAArB,iBAAiB;AACQ,MAAzB,oBAAoB;AACI,MAAxB,oBAAoB;;;AAGtB,aAAK,QAAU;AACoC,MAAjD,iBAAiB,AAAS,SAAA,CAAC,KAAK,EAAE,cAAc;AACxB,MAAxB,oBAAoB;AAEpB,WAAK,iBAAiB,EAAE,AAAM,IAAF;AAE5B,UAAI,aAAa;AACG,QAAV,AAAE,eAAV,QAAQ;AACU,QAAlB,AAAW,UAAD;;;;AAId,aAAK;;AACe,MAAlB,cAAc;AACd,WAAK,iBAAiB;AACA,eAApB,UAAU;uBAAV,OAAY;AACM,QAAlB,AAAW,UAAD;;;;AAId,aAAK,UAAU;AACY,MAAzB,oBAAoB;AAEpB,UAAI,iBAAiB,EAAE,AAAM,IAAF;AAE3B,UAAI,WAAW;AACO,QAAV,AAAE,eAAZ,UAAU;AACQ,QAAlB,AAAW,UAAD;;;;AAId,aAAK;;AACiB,MAApB,gBAAgB;AAChB,UAAI,iBAAiB;AACD,eAAlB,QAAQ;uBAAR,OAAU;AACQ,QAAlB,AAAW,UAAD;;;;AAwCb,IApCD,AAAW,UAAD,YAAY;;AACpB,YAAO,AAAS,QAAD;AAEwD,MADvE,WACI,aAAO,OAAO,YAAsB,UAAX,UAAU,uBAAmB,YAAY;AAChE,4BAAkB,UAAU;AAClC,UAAI,eAAe;AACjB,YAAI,AAAgB,eAAD,WAAW,AAAgB,AAAQ,eAAT;;AAGW,QADxD,aAAa,AAAQ,OAAD,QAAQ,SAAS,YACb,UAAX,UAAU,uBAAmB,aAAa;;AAEzD,WAAK;AASA,eARH,UAAU;QAAV;AACI,yBAAU;;AACO,mBAAjB,QAAQ;2BAAR,OAAU;AACS,oBAAnB,UAAU;4BAAV,OAAY;;AAEZ,0BAAW;;AACO,mBAAlB,QAAQ;2BAAR,OAAU;AACU,oBAApB,UAAU;4BAAV,OAAY;;;;;AAgBjB,MAbD,AAAW,UAAD,YAAY;AAChB,sBAAwB;;AAAC,eAAK,WAAW,EAAY,UAAF,eAAR,QAAQ;;;AACxC,QAAf,WAAW;AACX,YAAI,AAAQ,OAAD,iBAAiB;AAC1B,eAAK,aAAa,EAAE,AAAQ,AAAyB,OAA1B,OAAe,AAAE,eAAZ,UAAU;AACzB,UAAjB,aAAa;;AAEM,UAAT,AAAE,eAAZ,UAAU;;AAGiC,QAA7C,AAAQ,OAAD,eAAa,QAAS,KAAM,AAAE,CAAD;AACpC,YAAI,AAAQ,OAAD,YAAU,MAAO;AAC5B,cAAc,AAAc,8BAAT,OAAO,kBAAO,QAAC,KAAM;;;AAG5C,UAAO,AAAW,WAAD;EACnB;;AAlGU,uBACO,SAA2B,+EADlC,OAAO,EAAP,SAAS;;;;;;;;;EAkGnB;;;QCrGqC;QACgB;QACpB;AACzB,sBAAoB,OAAP,MAAM,EAAN,eAAU;AACvB,uBAAsB,QAAR,OAAO,EAAP,gBAAW;AACzB,sBAAoB,SAAP,MAAM,EAAN,iBAAU;AAEzB,qBAAa,oBACX,4CAAoC,SACpC,sCAA0B;AAET;AAsBtB,IArBD,AAAW,UAAD,YAAY;;AACpB,YAAO,AAAa,YAAD;AACf,uBAAa;AAOf,MANF,eAAe,aAAO,QAAC,SAAU,AAAU,UAAA,CAAC,KAAK,EAAE,UAAU,2CAChD,SAAQ,OAAkB;AACK,UAA1C,AAAW,WAAA,CAAC,KAAK,EAAE,UAAU,EAAE,UAAU;oDAChC;AACQ,UAAjB,aAAa;AACS,UAAtB,AAAU,UAAA,CAAC,UAAU;;AAEvB,WAAK;AAGgC,eAFnC,UAAU;QAAV;AACI,yBAAwB,UAAF,eAAZ,YAAY;AACtB,0BAAyB,UAAF,eAAZ,YAAY;;;;AAO5B,MALD,AAAW,UAAD,YAAY;AAChB,uBAAW,YAAY;AACR,QAAnB,eAAe;AACf,aAAK,UAAU,EAAE,MAAe,AAAE,gBAAV,QAAQ;AAChC,cAAO;;;AAGX,UAAO,AAAW,WAAD;EACnB;;AApCU;UAC2B;UACgB;UACpB;AAHvB,kGAAM,WAAN,OAAO,UAAP,MAAM;;;;;;;;;;;;;;;;;;EAoChB;qHAEuC,OAAoB;AACrC,IAApB,AAAK,IAAD,KAAW,KAAN,KAAK;EAChB;oHAGW,OAAkB,YAAyB;AACpB,IAAhC,AAAK,IAAD,UAAU,KAAK,EAAE,UAAU;EACjC;kHAE+C;AACjC,IAAZ,AAAK,IAAD;EACN;;;;ICtCa;;;;;;IAMa;;;;;;uBAM8B;AACpD,4EAAoB,yBAAyB,MAAM,EAAE;AAC7C,sBAAU,qCAAc,MAAM;AACZ,QAAxB,AAAQ,OAAD,MAAM;AACP,yBAAa,kEAAU,OAAO,EAAE;AAC9B,uBAAS,6DAAY,OAAO,mBAAkB;AAI9C,uBAAyB;AAG/B,iBAAO,AAAQ,OAAD,MAAM;AACM,YAAxB,AAAQ,OAAD,MAAM;;AAGgB,UAA/B,gEAAe,OAAO,EAAE,MAAM;AAE1B,4BAAc,AAAQ,OAAD;AACzB,iBAAO,AAAQ,OAAD,MAAM;AACM,YAAxB,AAAQ,OAAD,MAAM;AAGb,gBAAI,AAAQ,OAAD,SAAS,QAAQ,AAAQ,OAAD,SAAS;AAEN,YAAtC,AAAQ,OAAD,QAAQ,oBAAa;AACtB,uBAA4B,eAAJ,AAAC,eAAlB,AAAQ,OAAD,iBAAY;AACR,YAAxB,AAAQ,OAAD,MAAM;AAIb,iBAAK,AAAQ,OAAD,MAAM;AACc,cAA9B,AAAQ,OAAD,YAAY,WAAW;AAC9B;;AAGsB,YAAxB,AAAQ,OAAD,MAAM;AAEb,gBAAI,AAAQ,OAAD,MAAM;AACsB,cAArC,AAAM,MAAA,QAAC,IAAI,EAAyB,eAAJ,AAAC,eAAlB,AAAQ,OAAD,iBAAY;;AAGK,cADvC,AAAM,MAAA,QAAC,IAAI,EAAI,yBAAmB,OAAO,SAC/B;;AAGY,YAAxB,AAAQ,OAAD,MAAM;AACiB,YAA9B,cAAc,AAAQ,OAAD;;AAGvB,gBAAO,0DAAwB,MAAM,EAAE,MAAM;;AAG3B,QAApB,AAAQ,OAAD;AACP,cAAO,WAAU;;IACjB;iBAKuC;AACzC,0FAAoB,4BAA4B,SAAS,EAAE;AACnD,sBAAU,qCAAc,SAAS;AACf,QAAxB,AAAQ,OAAD,MAAM;AACP,qBAAS,6DAAY,OAAO;AAE5B,qBAAyB;AAC0B,QAAzD,2BAAU,OAAO,EAAE,cAAM,gEAAe,OAAO,EAAE,MAAM;AAEnC,QAApB,AAAQ,OAAD;AACP,cAAO,0DAAwB,MAAM,EAAE,MAAM;;IAC7C;;;;uBAMkC;UAAkB;AAClB,MAAtC,AAAQ,OAAD,QAAQ,oBAAa;AACtB,mBAA8B,AAAE,eAAN,AAAC,eAAlB,AAAQ,OAAD,iBAAY;AAEV,MAAxB,AAAQ,OAAD,MAAM;AAIb,UAAI,AAAQ,AAAU,OAAX,uBAA4C,AAAE,eAAN,AAAC,eAAlB,AAAQ,OAAD,iBAAY,eAAa;AACvB,QAAzC,AAAQ,OAAD,QAAQ,YAAW,cAAc;;AAG1C,YAAO,OAAM;IACf;0BAGyC,SAAa;AACd,MAAtC,AAAQ,OAAD,QAAQ,oBAAa;AACtB,iBAAwB,AAAC,eAAlB,AAAQ,OAAD,iBAAY;AACR,MAAxB,AAAQ,OAAD,MAAM;AACM,MAAnB,AAAQ,OAAD,QAAQ;AACS,MAAxB,AAAQ,OAAD,MAAM;AAEb,UAAI,AAAQ,OAAD,MAAM;AACqB,QAApC,AAAM,MAAA,QAAC,IAAI,EAAqB,AAAC,eAAlB,AAAQ,OAAD,iBAAY;;AAGiC,QADnE,AAAM,MAAA,QAAC,IAAI,EACP,yBAAmB,OAAO,SAAQ;;AAGhB,MAAxB,AAAQ,OAAD,MAAM;IACf;;;;;mEAG6B,QAA4B;IAA5B;IACZ,oBAAE,kDAAuC,2CAAK,UAAU;;EAAE;;;;;;;;;;;;;;;;;;;;;ACxIpD,kDAAM,QAAC,OAAQ,AAAI,GAAD;;IAAe;wCAEjB;AAC3B,mDAAK,KAAK,EAAE,QAAC,OAAQ,AAAI,GAAD;;IAAe;;;;;;;;;;;ACsBf;IAAoB;;AAGpB;IAAoB;;;;;;AAElD;;EAAsB;;;;;;;;;;MA3BxB,4BAAa;;;;qDCqBY;;AACV,IAAnB,OAAO,AAAK,IAAD;AACL,sDAAS;AACX,iBAAM,AAAS,2BAAC,AAAK,AAAQ,IAAT,WAAW;AAC/B,iBAAM;AACN,iBAAM,AAAK,AAAI,IAAL,QAAQ,IAAI,MAAM;AAC5B,iBAAM,AAAK,AAAI,IAAL;AACV,iBAAM;AACN,iBAAM,AAAO,yBAAC,AAAK,AAAM,IAAP,SAAS;AAC3B,iBAAM;AACN,iBAAM,AAAK,AAAK,IAAN;AACV,iBAAM,AAAK,AAAK,IAAN,SAAS,IAAI,OAAO;AAC9B,iBAAM,AAAK,AAAK,IAAN;AACV,iBAAM,AAAK,AAAO,IAAR,WAAW,IAAI,OAAO;AAChC,iBAAM,AAAK,AAAO,IAAR;AACV,iBAAM,AAAK,AAAO,IAAR,WAAW,IAAI,OAAO;AAChC,iBAAM,AAAK,AAAO,IAAR;AACV,iBAAM;;;AACV,UAAO,AAAO,OAAD;EACf;mDAM8B;AAC1B,qDAAoB,aAAa,IAAI,EAAE;AAC/B,oBAAU,qCAAc,IAAI;AAElC,UAAI,AAAQ,OAAD,MAAM;AAEK,QAApB,AAAQ,OAAD,QAAQ;AACT,kBAAM,oBAAU,OAAO,EAAE;AACZ,QAAnB,AAAQ,OAAD,QAAQ;AACT,oBAAQ,sBAAY,OAAO;AACd,QAAnB,AAAQ,OAAD,QAAQ;AACT,mBAAO,AAAK,OAAE,oBAAU,OAAO,EAAE;AACpB,QAAnB,AAAQ,OAAD,QAAQ;AACT,mBAAO,qBAAW,OAAO;AACT,QAAtB,AAAQ,OAAD,QAAQ;AACK,QAApB,AAAQ,OAAD;AAEP,cAAO,yBAAc,IAAI,EAAE,KAAK,EAAE,GAAG,EAAE,IAAI;;AAIV,MAAnC,AAAQ,OAAD,QAAQ;AACf,UAAI,AAAQ,OAAD,MAAM;AAET,kBAAM,oBAAU,OAAO,EAAE;AACZ,QAAnB,AAAQ,OAAD,QAAQ;AACT,oBAAQ,sBAAY,OAAO;AACd,QAAnB,AAAQ,OAAD,QAAQ;AACT,mBAAO,oBAAU,OAAO,EAAE;AACb,QAAnB,AAAQ,OAAD,QAAQ;AACT,mBAAO,qBAAW,OAAO;AACT,QAAtB,AAAQ,OAAD,QAAQ;AACK,QAApB,AAAQ,OAAD;AAEP,cAAO,yBAAc,IAAI,EAAE,KAAK,EAAE,GAAG,EAAE,IAAI;;AAI1B,MAAnB,AAAQ,OAAD,QAAQ;AACT,kBAAQ,sBAAY,OAAO;AACd,MAAnB,AAAQ,OAAD,QAAQ;AACT,gBACF,AAAQ,OAAD,MAAM,OAAO,oBAAU,OAAO,EAAE,KAAK,oBAAU,OAAO,EAAE;AAChD,MAAnB,AAAQ,OAAD,QAAQ;AACT,iBAAO,qBAAW,OAAO;AACZ,MAAnB,AAAQ,OAAD,QAAQ;AACT,iBAAO,oBAAU,OAAO,EAAE;AACZ,MAApB,AAAQ,OAAD;AAEP,YAAO,yBAAc,IAAI,EAAE,KAAK,EAAE,GAAG,EAAE,IAAI;;EAC3C;+CAGwB;AACA,IAA5B,AAAQ,OAAD,QAAQ;AAEf,UAAO,AAAQ,AAAgC,6BAAH,eAAJ,AAAC,eAAlB,AAAQ,OAAD,iBAAY,OAAO;EACnD;2CAG4B,SAAa;AACX,IAA5B,AAAQ,OAAD,QAAQ;AACf,QAAyB,AAAE,eAAN,AAAC,eAAlB,AAAQ,OAAD,iBAAY,eAAc,MAAM;AACQ,MAAjD,AAAQ,OAAD,OAAO,AAAkC,yBAArB,MAAM;;AAGnC,UAAW,gBAA2B,eAAJ,AAAC,eAAlB,AAAQ,OAAD,iBAAY;EACtC;6CAGkC;AAC1B,gBAAQ,oBAAU,OAAO,EAAE;AACjC,QAAI,AAAM,KAAD,IAAI,IAAI,AAAQ,AAA0C,OAA3C,OAAO;AACZ,IAAnB,AAAQ,OAAD,QAAQ;AAET,kBAAU,oBAAU,OAAO,EAAE;AACnC,QAAI,AAAQ,OAAD,IAAI,IAAI,AAAQ,AAA4C,OAA7C,OAAO;AACd,IAAnB,AAAQ,OAAD,QAAQ;AAET,kBAAU,oBAAU,OAAO,EAAE;AACnC,QAAI,AAAQ,OAAD,IAAI,IAAI,AAAQ,AAA4C,OAA7C,OAAO;AAEjC,UAAO,uBAAS,GAAG,GAAG,GAAG,KAAK,EAAE,OAAO,EAAE,OAAO;EAClD;mDAM2B,MAAU,OAAW,KAAc;AACtD,mBACO,sBAAI,IAAI,EAAE,KAAK,EAAE,GAAG,EAAE,AAAK,IAAD,OAAO,AAAK,IAAD,SAAS,AAAK,IAAD;AAG/D,QAAI,AAAS,QAAD,WAAU,KAAK;AACsC,MAA/D,WAAM,6BAAgB,AAAwC,2BAAzB,GAAG,+BAAc,KAAK;;AAE7D,UAAO,SAAQ;EACjB;;MArJM,mBAAS;;;MACT,iBAAO;;;MAeP,6BAAmB;YAAG,iBAAO;;MAC7B,4BAAkB;YACpB,iBAAO;;MACL,sBAAY;YAAG,iBAAO;;MACtB,sBAAY;YAAG,iBAAO;;;;;;;ICJb;;;;;;IAKA;;;;;;IAKa;;;;;;;AAGH,YAAE,AAAc,aAAV,MAAE;IAAQ;iBAKR;AAG3B,8DAAoB,cAAc,SAAS,EAAE;AACrC,sBAAU,qCAAc,SAAS;AACf,QAAxB,AAAQ,OAAD,MAAM;AACQ,QAArB,AAAQ,OAAD,QAAQ;AACT,mBAA4B,eAAJ,AAAC,eAAlB,AAAQ,OAAD,iBAAY;AACb,QAAnB,AAAQ,OAAD,QAAQ;AACM,QAArB,AAAQ,OAAD,QAAQ;AACT,sBAA+B,eAAJ,AAAC,eAAlB,AAAQ,OAAD,iBAAY;AACX,QAAxB,AAAQ,OAAD,MAAM;AAEP,yBAA6B;AACnC,eAAO,AAAQ,OAAD,MAAM;AACM,UAAxB,AAAQ,OAAD,MAAM;AACQ,UAArB,AAAQ,OAAD,QAAQ;AACT,0BAAiC,eAAJ,AAAC,eAAlB,AAAQ,OAAD,iBAAY;AAClB,UAAnB,AAAQ,OAAD,QAAQ;AAER;AACP,cAAI,AAAQ,OAAD,MAAM;AACe,YAA9B,QAA6B,eAAJ,AAAC,eAAlB,AAAQ,OAAD,iBAAY;;AAEQ,YAAnC,QAAQ,yBAAmB,OAAO;;AAGZ,UAAxB,AAAQ,OAAD,MAAM;AACgB,UAA7B,AAAU,UAAA,QAAC,SAAS,EAAI,KAAK;;AAGX,QAApB,AAAQ,OAAD;AACP,cAAO,8BAAU,IAAI,EAAE,OAAO,EAAE,UAAU;;IAC1C;;;;;;;;UAkBO;UACD;UACA;UACa;UAChB;AACP,UAAI,QAAQ;AACV,YAAI,IAAI;AAC6D,UAAnE,WAAM,2BAAc;cACf,KAAI,OAAO;AAEE,UADlB,WAAM,2BAAa,AAAC,yCAChB;;AAGA,uBAAW,AAAS,QAAD,SAAO;AAChC,YAAI,AAAS,QAAD,cAAW;AACkC,UAAvD,WAAM,6BAAgB,AAAgC,kCAAX,QAAQ;;AAGnC,QAAlB,OAAO,AAAQ,QAAA,QAAC;AACK,QAArB,UAAU,AAAQ,QAAA,QAAC;;AAGH,MAAlB,AAAK,IAAD,WAAJ,OAAc,YAAT;AACmB,MAAxB,AAAQ,OAAD,WAAP,UAAiB,eAAT;AACS,MAAjB,AAAW,UAAD,WAAV,aAAe,8CAAJ;AAEX,WAAK,eAAe;AACZ,4BAAgB,UAAU;AACM,QAAtC,aAAiB,uCAAU;AACK,QAAhC,AAAW,UAAD,UAAQ,aAAa;;AAGjC,YAAO,8BAAU,IAAI,EAAE,OAAO,EAAE,UAAU;IAC5C;;;AAOQ,wDAAS;AACX,mBAAM;AACN,mBAAM;AACN,mBAAM;;;AAaR,MAXF,AAAW,0BAAQ,SAAC,WAAW;;AACA,QAA7B,AAAO,MAAD,OAAO,AAAe,OAAX,SAAS;AAC1B,YAAI,AAAS,wBAAS,KAAK;AAKX,iBAJd,MAAM;UAAN;AACI,uBAAM;AACN,uBACE,AAAM,KAAD,oBAAkB,yBAAc,QAAC,SAAU,AAAe,gBAAV,AAAK,KAAA,MAAC;AAC7D,uBAAM;;;;AAES,UAAnB,AAAO,MAAD,OAAO,KAAK;;;AAItB,YAAO,AAAO,OAAD;IACf;;uCA3EiB,MAAa,SAA+B;IAClD,eAAE,AAAK,IAAD;IACH,iBAAE,AAAQ,OAAD;IACN,qBAAE,kDACT,AAAW,UAAD,WAAW,8CAAwB,2CAAK,UAAU;;EAAE;;;;;;;;;;;;;;;;;;;;;MApEpE,uBAAY;YAAG,iBAAO;;;0CCmBO,SAAsB;AACjD,iBAAY;AAGlB,WAAO,AAAQ,OAAD,MAAM;AACM,MAAxB,AAAQ,OAAD,MAAM;;AAGW,IAA1B,AAAO,MAAD,OAAK,AAAY,YAAA;AACC,IAAxB,AAAQ,OAAD,MAAM;AAEb,WAAO,AAAQ,OAAD,MAAM;AACM,MAAxB,AAAQ,OAAD,MAAM;AAGb,UAAI,AAAQ,OAAD,SAAS,QAAQ,AAAQ,OAAD,SAAS;AAElB,MAA1B,AAAO,MAAD,OAAK,AAAY,YAAA;AACC,MAAxB,AAAQ,OAAD,MAAM;;AAGf,UAAO,OAAM;EACf;yDAOgB;QACP;AAEkC,IAAzC,AAAQ,OAAD,QAAQ,4BAAqB,IAAI;AAClC,iBAA8B,eAAJ,AAAC,eAAlB,AAAQ,OAAD,iBAAY;AAClC,UAAO,AACF,AACA,OAFQ,aACE,GAAG,AAAO,AAAO,MAAR,UAAU,sBACZ,mBAAa,QAAC,SAAkB,eAAR,AAAK,KAAA,MAAC;EACtD;;MA9DM,WAAK;YAAG,iBAAO;;MAGf,UAAI;YAAG,iBAAO;;MAGd,mBAAa;YAAG,iBAAO;;MAGvB,iBAAW;YAAG,iBAAO;;MAGrB,cAAQ;YAAG,iBAAO;;MAGlB,gBAAU;YAAG,iBAAO,AAAsB,QAAhB,AAAK,qBAAQ;;;+DCZb,MAAa,OAAoB;AAC/D;AACE,YAAO,AAAI,KAAA;;;AACX;YAAoC;AAE4B,QADhE,WAAM,iDACF,AAAiC,aAAvB,IAAI,UAAI,AAAM,KAAD,UAAY,AAAM,KAAD,OAAO,AAAM,KAAD;YACxD;YAA0B;AAEiD,QAD3E,WAAM,6BACF,AAA0C,aAAhC,IAAI,WAAG,KAAK,YAAK,AAAM,KAAD,UAAY,AAAM,KAAD,SAAS,AAAM,KAAD;;;;EAEvE;;;;;;;YCC8B;;AACpB,iBAAO,sBAAM;AACb,mBAAS,AAAK,IAAD,UAAS,KAAK,EAAE,GAAG,AAAM,KAAD;AAC3C,UAAI,AAAK,AAAO,IAAR,qBAAkB,qBAAK,MAAO,OAAM;AAE2B,MAAvE,WAAM,6BAAgB,6BAA6B,KAAK,EAAE,AAAM,KAAD;IACjE;2BAG0D;;AACtD,mCAAM,IAAI;IAAC;;;AAbT;;EAAwB;;;;;;;;;;;;;;;;;;AA2BrB;;IAAK;gBAAL;;IAAK;;;;QAKK;;AAAU,2BAAS,KAAK,EAAE,GAAG,AAAM,KAAD,WAAS;IAAM;aAG5C,OAAW,OAAW,KAAU;AACF,MAAzC,gCAAgB,KAAK,EAAE,GAAG,EAAE,AAAM,KAAD;AACtC,mBAAS,cAAQ,KAAK,EAAE,KAAK,EAAE,GAAG;AACxC,UAAI,AAAO,MAAD,eAAa,AAAM,AAAW,iBAAP,MAAM;AACvC,UAAI,MAAM,EAAE,AAAkB,cAAX,KAAK,EAAE,GAAG;IAC/B;;AAGgB;IAAQ;cAIA,cAAY;AAClC,WAAI,yBAAiB;AAC6C,QAAhE,WAAM,6BAAgB,6BAA6B,KAAK,EAAE,KAAK;;AAGpD,MAAb,AAAM;IACR;cAG4B,OAAW,OAAW;AAGhD,eAAK,kBAAsB,MAAa;AACtC,YAAI,AAAK,KAAA,QAAC,KAAK,MAAK,IAAI;AACgC,UAAtD,WAAM,6BAAgB,AAAiB,cAAN,IAAI,QAAI,KAAK,EAAE,KAAK;;;;AAInD,mBAAS;AACf,aAAO,KAAK,KAAI,GAAG;AACjB,gBAAQ;;;AAE+B,cAAnC,cAAQ,oBAAc,KAAK,EAAE,KAAK;AACd,cAApB,iBAAgB;AACT,cAAP,QAAA,AAAK,KAAA;AACL;;;;AAGA,kBAAI,AAAK,AAAQ,KAAR,QAAC,KAAK;AACe,gBAA5B,iBAAgB;;AAIkC,gBAAlD,cAAqB,CAAZ,AAAM,eAAG,WAAK,oBAAc,KAAK,EAAE,KAAK;;AAE5C,cAAP,QAAA,AAAK,KAAA;AACL;;;;AAG4B,cAA5B,iBAAiB,KAAM;AAC+B,cAAtD,iBAAS,AAAM,gBAAG,IAAW,6BAAqB;AAC3C,cAAP,QAAA,AAAK,KAAA;AACL;;;;AAGM,6BAAgB,mBAAI,GAAG,EAAE,AAAM,KAAD,GAAG;AACF,cAArC,AAAO,MAAD,QAAQ,KAAK,EAAE,KAAK,EAAE,QAAQ;AACX,cAAzB,cAAA,AAAM,eAAG,AAAS,QAAD,GAAG,KAAK;AACT,cAAhB,QAAQ,QAAQ;AAChB,kBAAI,AAAM,gBAAG,GAAG,AAA4B,iBAAZ;AAChC;;;;AAG4B,cAA5B,iBAAiB,KAAM;AACK,cAA5B,iBAAgB;AACT,cAAP,QAAA,AAAK,KAAA;AACL;;;;AAG4B,cAA5B,iBAAiB,KAAM;AACC,cAAxB,iBAAgB;AACT,cAAP,QAAA,AAAK,KAAA;AACL;;;;AAG4B,cAA5B,iBAAiB,KAAM;AACI,cAA3B,iBAAgB;AACT,cAAP,QAAA,AAAK,KAAA;AACL;;;;AAG4B,cAA5B,iBAAiB,KAAM;AACJ,cAAnB,iBAAgB;AACT,cAAP,QAAA,AAAK,KAAA;AACL;;;;AAG6D,cAA7D,WAAM,6BAAgB,0BAA0B,KAAK,EAAE,KAAK;;;;AAGlE,YAAO,AAAO,AAAO,OAAR,sBAAoB,GAAG,AAAO,MAAD;IAC5C;oBAO4B,OAAW;AAQ/B,iBAAO,AAAK,KAAA,QAAC,KAAK;AAClB,kBAAW,MAAE,IAAI;AACvB,UAAI,AAAM,KAAD,IAAI;AACX,YAAI,AAAM,KAAD,IAAI,GAAG,MAAO,MAAK;;AAMtB,qBAAc,CAAL,KAAO,IAAI;AAC1B,YAAO,MAAG,MAAM,IAAI,AAAO,MAAD,SAAQ,MAAO,AAAO,AAAK,OAAN,QAAQ;;AAM/C,MAHV,WAAM,6BACF,AAAqE,gCAAvC,AAAK,AAAkB,IAAnB,iBAAe,sBAAkB,KACnE,KAAK,EACL,KAAK;IACX;;gCAnIW;IAPP,iBAAgB;0BAKX;IAEE;AAAX;;EAAiB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA6LJ;;;;;;;;;;AAKQ;IAAK;;;IAHN;;EAAM;;;;;;;;;;;MAlDb,uBAAQ;;;MAMR,mBAAI;;;MAMJ,2BAAY;;;MAMZ,mBAAI;;;MAMJ,2BAAY;;;MAMZ,2BAAY;;;MAMZ,0BAAW;;;MAMX,0BAAW;;;MAIX,kBAAG;;;;;MA5NZ,4BAAoB;;;;;;;;YCMI;;AACxB,8BAAS,KAAK,EAAE,GAAG,AAAM,KAAD,oBAAiB;IAAK;2BAGQ;;AACtD,mCAAM,IAAI;IAAC;;;AART;;EAAwB;;;;;;;;;;;;;;QAmBX;;AAC0B,MAA3C,AAAM,kBAAI,iBAAS,KAAK,EAAE,GAAG,AAAM,KAAD;IACpC;aAGwB,OAAW,OAAW,KAAU;AACF,MAAzC,gCAAgB,KAAK,EAAE,GAAG,EAAE,AAAM,KAAD;AACU,MAAtD,AAAM,kBAAI,iBAAS,KAAK,EAAE,KAAK,EAAE,GAAG,WAAU,MAAM;AACpD,UAAI,MAAM,EAAE,AAAM,AAAO;IAC3B;;AAIuB,MAArB,AAAM,kBAAI;AACG,MAAb,AAAM;IACR;;;IAlBW;AAAX;;EAAiB;;;;;;;;;;;;;uCA0BU,OAAW,OAAW;;QAAW;AAC5D,QAAI,AAAI,GAAD,KAAI,KAAK,EAAE,MAAO,OAAM,GAAG,oCAAH;AAEzB,eAAO,AAAI,GAAD,GAAG,KAAK;AAClB,oBAAY,AAAK,IAAD,iBAAe;AAC/B,qBAAa,MAAM,GAAG,AAAW,8BAAS,CAAvB;AAGnB,eAAO,uCAAU,AAAU,AAAO,AAAI,AAAO,SAAnB,UAAU,IAAI,IAAI,GAAG,UAAU;AACR,IAAvD,AAAK,IAAD,YAAU,GAAG,AAAU,SAAD,SAAS,AAAU,SAAD;AAExC,iBAAS,AAAU,SAAD;AACF,IAApB,AAAI,IAAA,SAAO,OAAN,MAAM;AACS,IAApB,AAAI,IAAA,SAAO,QAAN,MAAM;AAC8C,IAAzD,AAAK,IAAD,YAAU,MAAM,EAAE,AAAO,AAAM,MAAP,GAAG,GAAG,GAAG,KAAK,EAAE,KAAK,EAAE,KAAK;AACnC,IAArB,SAAA,AAAO,MAAD,IAAI,AAAI,GAAD,GAAG,KAAK;AACD,IAApB,AAAI,IAAA,SAAO,SAAN,MAAM;AACS,IAApB,AAAI,IAAA,SAAO,SAAN,MAAM;AAEX,QAAI,MAAM;AACwD,MAAhE,AAAK,IAAD,YAAU,AAAK,AAAO,IAAR,YAAU,UAAU,EAAE,AAAK,IAAD,WAAS;;AAEvD,UAAO,KAAI;EACb;;MAxEM,4BAAoB;;;MAGpB,kBAAU;YAAa,6CAAS;;;;MCR5B,aAAG;;;MAGH,aAAG;;;MAGH,YAAE;;;MAGF,YAAE;;;MAGF,YAAE;;;MAGF,YAAE;;;;;;;;;;;;;;;;;;;;;;;;;;MCHR;;;;;;MAEE;;;;;;MACA;;;;;;;AAWc,cAAgB,EAAf,AAAM,eAAE,eAAU,AAAO,AAAO,yBAAE;MAAE;;YAGlC;AACf,mBAAO,QAAQ,GAAG,oBAAc,eAAU,kBAAY,YAAvC;AACD,QAAlB,mBAAa,IAAI;AACjB,cAAO,KAAI;MACb;;AAIE,YAAS,4BAAL,OAAsB,MAAY,6BAAL;AACkC,QAAnE,WAAM,8BAA4D,SAAzC,QAAI;MAC/B;;AAG4B;MAAS;cAItB;;AACQ,QAArB,AAAM,qBAAC,cAAS,KAAK;AACoB,QAAzC,eAAoB,CAAX,AAAM,eAAE,IAAM,AAAO,AAAO,yBAAE;AACvC,YAAI,AAAM,iBAAG,cAAO,AAAiB;MACvC;eAEgB;;AAC2B,QAAzC,eAAoB,CAAX,AAAM,eAAE,IAAM,AAAO,AAAO,yBAAE;AAClB,QAArB,AAAM,qBAAC,cAAS,KAAK;AACrB,YAAI,AAAM,iBAAG,cAAO,AAAiB;MACvC;;AAGE,YAAI,AAAM,iBAAG,cAAO,AAA8B,WAAxB,wBAAW;AACjC,qBAAS,AAAM,qBAAC;AACqB,QAAzC,eAAoB,CAAX,AAAM,eAAE,IAAM,AAAO,AAAO,yBAAE;AACvC,cAAO,OAAM;MACf;;AAIE,YAAI,AAAM,iBAAG,cAAO,AAA8B,WAAxB,wBAAW;AACI,QAAzC,eAAoB,CAAX,AAAM,eAAE,IAAM,AAAO,AAAO,yBAAE;AACvC,cAAO,AAAM,sBAAC;MAChB;UAKW;;AAAU,4BAAQ,KAAK;MAAC;iBAGpB;AAC+B,QAAjC,iCAAiB,KAAK,EAAE;AAE/B,oBAAQ,AAAM,KAAD,GAAG;AACpB,YAAI,AAAM,KAAD,IAAI;AACP,4BAAc,AAAO,AAAO,0BAAG,KAAK;AACxC,cAAI,WAAW,EAAE,AAAc,cAAN,KAAK;AACe,UAA7C,eAAwB,CAAf,AAAM,eAAE,KAAK,GAAK,AAAO,AAAO,yBAAE;AAK3C,eAAK,WAAW,EAAE,AAA8C,eAApC,AAAM,KAAD,GAAG,KAAK,EAAE,KAAK,EAAE;;AAExB,UAA1B,iBAAY,KAAK,EAAE;;MAEvB;WAGkB;AACqC,QAA1C,gCAAgB,KAAK,EAAE,MAAM,MAAM;AAC9C,cAAO,AAAM,sBAAiB,CAAf,AAAM,eAAE,KAAK,GAAK,AAAO,AAAO,yBAAE;MACnD;WAGsB;YAAS;;AACU,QAA5B,gCAAgB,KAAK,EAAE;AACmB,QAArD,AAAM,qBAAiB,CAAf,AAAM,eAAE,KAAK,GAAK,AAAO,AAAO,yBAAE,UAAM,KAAK;;MACvD;kBAGqB,OAAW;AAC1B,qBAAc;AAC4B,QAAnC,gCAAgB,KAAK,EAAE,GAAG,EAAE,MAAM;AAI7C,YAAI,AAAM,KAAD,KAAI;AACgC,UAA3C,eAAsB,CAAb,AAAM,eAAE,GAAG,GAAK,AAAO,AAAO,yBAAE;AACzC;;AAGE,4BAAgB,AAAO,MAAD,GAAG,GAAG;AAChC,YAAI,AAAc,aAAD,KAAI;AAC0B,UAA7C,eAAwB,CAAf,AAAM,eAAE,KAAK,GAAK,AAAO,AAAO,yBAAE;AAC3C;;AAKE,8BAAkB,AAAI,GAAD,GAAG,KAAK;AACjC,YAAI,AAAM,KAAD,GAAG,aAAa;AACa,UAApC,cAAS,eAAe,EAAE,GAAG,EAAE;AACwB,UAAvD,eAAkC,CAAzB,AAAM,eAAE,eAAe,GAAK,AAAO,AAAO,yBAAE;;AAED,UAApD,cAAS,KAAK,EAAE,AAAO,MAAD,GAAG,eAAe,EAAE,MAAM,GAAG;AACI,UAAvD,eAAkC,CAAzB,AAAM,eAAE,eAAe,GAAK,AAAO,AAAO,yBAAE;;MAEzD;eAGkB,OAAW,KAAiB,UAAe;;AACb,QAAnC,gCAAgB,KAAK,EAAE,GAAG,EAAE;AACvC,YAAI,AAAM,KAAD,KAAI,GAAG,EAAE;AAEd,0BAA8B,CAAf,AAAM,eAAE,KAAK,GAAK,AAAO,AAAO,yBAAE;AACjD,wBAA0B,CAAb,AAAM,eAAE,GAAG,GAAK,AAAO,AAAO,yBAAE;AAC7C,iCAAqB,AAAY,WAAD,GAAG,SAAS;AAChD,YAAI,AAAU,QAAQ,KAAE;AAKlB,4BAAkC,CAAnB,AAAM,eAAE,SAAS,GAAK,AAAO,AAAO,yBAAE;AACrD,0BAA0C,CAA7B,AAAY,WAAD,IAAI,AAAI,GAAD,GAAG,KAAK,IAAM,AAAO,AAAO,yBAAE;AACjE,cAAI,AAAY,WAAD,KAAI,WAAW,EAAE;AAE5B,mCAAqB,AAAY,WAAD,GAAG,SAAS;AAChD,cAAI,kBAAkB,IAAI,kBAAkB;AAGkB,YAA5D,AAAO,yBAAS,WAAW,EAAE,SAAS,EAAE,eAAQ,WAAW;gBACtD,MAAK,kBAAkB,KAAK,kBAAkB;AAEnD,gBAAI,AAAY,WAAD,GAAG,WAAW;AAKvB,6BAAW,AAAY,WAAD,GAAG,WAAW;AACpC,6BAAW,AAAO,AAAO,yBAAE,QAAQ;AACoB,cAA3D,AAAO,yBAAS,WAAW,EAAE,QAAQ,EAAE,eAAQ,WAAW;AACV,cAAhD,AAAO,yBAAS,QAAQ,EAAE,AAAO,wBAAQ;AACM,cAA/C,AAAO,yBAAS,GAAG,SAAS,EAAE,eAAQ,QAAQ;kBACzC,KAAI,AAAU,SAAD,GAAG,SAAS;AAK1B,+BAAa,AAAU,SAAD,GAAG,SAAS;AACQ,cAA9C,AAAO,yBAAS,UAAU,EAAE,SAAS,EAAE;AAC2B,cAAlE,AAAO,yBAAS,GAAG,UAAU,EAAE,eAAQ,AAAO,AAAO,yBAAE,UAAU;AACD,cAAhE,AAAO,yBAAS,WAAW,EAAE,AAAO,wBAAQ,eAAQ,WAAW;;gBAE5D,KAAI,AAAY,WAAD,GAAG,SAAS;AAEhC,gBAAI,kBAAkB;AAI4C,cAAhE,AAAO,yBAAS,WAAW,EAAE,AAAO,wBAAQ,eAAQ,WAAW;AAEf,cADhD,AAAO,yBAAS,GAAG,SAAS,EAAE,eAC1B,AAAY,WAAD,IAAI,AAAO,AAAO,yBAAE,WAAW;;AAK1C,6BAAW,AAAO,AAAO,yBAAE,WAAW;AACiB,cAA3D,AAAO,yBAAS,WAAW,EAAE,QAAQ,EAAE,eAAQ,WAAW;AACd,cAA5C,AAAO,yBAAS,QAAQ,EAAE,SAAS,EAAE;;;AAMvC,gBAAI,kBAAkB;AAK4B,cADhD,AAAO,yBAAS,GAAG,SAAS,EAAE,eAC1B,AAAY,WAAD,IAAI,AAAO,AAAO,yBAAE,WAAW;AACkB,cAAhE,AAAO,yBAAS,WAAW,EAAE,AAAO,wBAAQ,eAAQ,WAAW;;AAK3D,+BAAa,AAAU,SAAD,GAAG,SAAS;AACQ,cAA9C,AAAO,yBAAS,UAAU,EAAE,SAAS,EAAE;AACsB,cAA7D,AAAO,yBAAS,WAAW,EAAE,UAAU,EAAE,eAAQ,WAAW;;;cAG3D,KAAI,kBAAkB;AAGiC,UAA5D,AAAO,yBAAS,WAAW,EAAE,SAAS,EAAE,QAAQ,EAAE,SAAS;cACtD,KAAa,iBAAT,QAAQ;AAG+C,UAAhE,AAAO,yBAAS,WAAW,EAAE,AAAO,wBAAQ,QAAQ,EAAE,SAAS;AAEO,UADtE,AAAO,yBACH,GAAG,SAAS,EAAE,QAAQ,EAAE,AAAU,SAAD,IAAI,AAAO,AAAO,yBAAE,WAAW;;AAMrB,UAAzC,eAAS,KAAK,EAAE,GAAG,EAAE,QAAQ,EAAE,SAAS;;MAElD;gBAGmB,OAAW,KAAS;;AACjC,2BAA+B,CAAf,AAAM,eAAE,KAAK,GAAK,AAAO,AAAO,yBAAE;AAClD,yBAA2B,CAAb,AAAM,eAAE,GAAG,GAAK,AAAO,AAAO,yBAAE;AAClD,YAAI,AAAa,YAAD,IAAI,UAAU;AACqB,UAAjD,AAAO,0BAAU,YAAY,EAAE,UAAU,EAAE,KAAK;;AAEI,UAApD,AAAO,0BAAU,YAAY,EAAE,AAAO,wBAAQ,KAAK;AACb,UAAtC,AAAO,0BAAU,GAAG,UAAU,EAAE,KAAK;;MAEzC;cAGc,OAAa;AACrB,qBAAc;AACd,yBAAwB,gCAAgB,KAAK,EAAE,GAAG,EAAE,MAAM;AAE1D,mBAAO,kBAAY,AAAW,UAAD,GAAG,KAAK;AACJ,QAArC,mBAAa,IAAI,EAAE,KAAK,EAAE,UAAU;AACpC,cAAO,KAAI;MACb;qBAWyB,QAAc,cAAY;AACtC,QAAX,AAAM,KAAD,WAAL,QAAU,IAAJ;AACQ,QAAd,AAAI,GAAD,WAAH,MAAQ,cAAJ;AACJ,cAAO,AAAO,AAAO,MAAR,aAAe,aAAJ,GAAG,iBAAG,KAAK;AACnC,cAAa,aAAN,KAAK,kBAAI,GAAG;AAEf,8BAAsB,aAAJ,GAAG,iBAAG,KAAK;AAC7B,2BAA+B,CAAf,AAAM,4BAAE,KAAK,IAAK,AAAO,AAAO,yBAAE;AAClD,yBAA2B,CAAb,AAAM,4BAAE,GAAG,IAAK,AAAO,AAAO,yBAAE;AAClD,YAAI,AAAa,YAAD,IAAI,UAAU;AAC6B,UAAzD,AAAO,MAAD,YAAU,GAAG,eAAe,EAAE,eAAQ,YAAY;;AAEpD,8BAAgB,AAAO,AAAO,yBAAE,YAAY;AACO,UAAvD,AAAO,MAAD,YAAU,GAAG,aAAa,EAAE,eAAQ,YAAY;AACe,UAArE,AAAO,MAAD,YAAU,aAAa,EAAE,AAAc,aAAD,GAAG,UAAU,EAAE,eAAQ;;AAErE,cAAO,gBAAe;MACxB;;AAKE,cAAO,AAAM,iBAAG;AAEZ,uBAAW,kBAAY,AAAO,AAAO,yBAAE;AAIvC,6BAAiB,AAAO,AAAO,yBAAE;AACc,QAAnD,AAAS,QAAD,YAAU,GAAG,cAAc,EAAE,eAAQ;AAC7C,YAAI,cAAc,KAAI,AAAO;AAC6B,UAAxD,AAAS,QAAD,YAAU,cAAc,EAAE,AAAO,wBAAQ;;AAE1C,QAAT,eAAQ;AACa,QAArB,eAAQ,AAAO;AACE,QAAjB,gBAAS,QAAQ;MACnB;gBAIiB;AACf,cAAO,AAAgB,eAAD,IAAI;AAIa,QAAvC,kBAAA,AAAgB,eAAD,GAAI,AAAgB,eAAD,cAAI;AAClC,uBAAW,kBAAY,0BAAc,eAAe;AAC1B,QAA9B,eAAQ,mBAAa,QAAQ;AACZ,QAAjB,gBAAS,QAAQ;AACR,QAAT,eAAQ;MACV;;gCA7SoB;MACP,eAAQ,KAAN,KAAK;MACR,cAAE;MACF,cAAE;;IAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA4TU;MAAC;;8BAHd;AAAS,yCAAM,KAAK;;IAAC;;;;;;;;;;;;;;;;;AAWL;MAAG;;gCAHjB;AAAS,2CAAM,KAAK;;IAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;oBAoBG;;AAClC,4CAAW,AAAS,QAAD;YAAnB;AAA6B,oBAAO,QAAQ;;;IAAC;;;;kBAGvB;AAAS,oDAAU,IAAI;IAAC;oBAEpB;AAAS,8CAAY,IAAI;IAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;yCAVvC;AACX,oDAAM,uCAAU,uCAA2B,eAAe;;EAAG;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;oBA2B9B;;AACjC,2CAAU,AAAS,QAAD;YAAlB;AAA4B,oBAAO,QAAQ;;;IAAC;;;;kBAGvB;AAAS,mDAAS,IAAI;IAAC;oBAEnB;AAAS,6CAAW,IAAI;IAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;wCAVtC;AACV,mDAAM,sCAAS,uCAA2B,eAAe;;EAAG;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;oBA6BrB;;AACzC,mDAAkB,AAAS,QAAD;YAA1B;AAAoC,oBAAO,QAAQ;;;IAAC;;;;kBAGvB;AAAS,2DAAiB,IAAI;IAAC;oBAE3B;AAAS,qDAAmB,IAAI;IAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;gDAX9C;AAClB,2DAAM,8CAAiB,uCAA2B,eAAe;;EAAG;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;oBA2BnC;;AACnC,6CAAY,AAAS,QAAD;YAApB;AAA8B,oBAAO,QAAQ;;;IAAC;;;;kBAGvB;AAAS,qDAAW,IAAI;IAAC;oBAErB;AAAS,+CAAa,IAAI;IAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;0CAVxC;AACZ,qDAAM,wCAAW,uCAA2B,eAAe;;EAAG;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;oBA2B9B;;AAClC,4CAAW,AAAS,QAAD;YAAnB;AAA6B,oBAAO,QAAQ;;;IAAC;;;;kBAGvB;AAAS,oDAAU,IAAI;IAAC;oBAEpB;AAAS,8CAAY,IAAI;IAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;yCAVvC;AACX,oDAAM,uCAAU,uCAA2B,eAAe;;EAAG;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;oBA0B5B;;AACnC,6CAAY,AAAS,QAAD;YAApB;AAA8B,oBAAO,QAAQ;;;IAAC;;;;kBAGvB;AAAS,qDAAW,IAAI;IAAC;oBAErB;AAAS,+CAAa,IAAI;IAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;0CAVxC;AACZ,qDAAM,wCAAW,uCAA2B,eAAe;;EAAG;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;oBA2B9B;;AAClC,4CAAW,AAAS,QAAD;YAAnB;AAA6B,oBAAO,QAAQ;;;IAAC;;;;kBAGvB;AAAS,oDAAU,IAAI;IAAC;oBAEpB;AAAS,8CAAY,IAAI;IAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;yCAVvC;AACX,oDAAM,uCAAU,uCAA2B,eAAe;;EAAG;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;oBA2B5B;;AACnC,6CAAY,AAAS,QAAD;YAApB;AAA8B,oBAAO,QAAQ;;;IAAC;;;;kBAGvB;AAAS,uCAAW,IAAI;IAAC;oBAErB;AAAS,+CAAa,IAAI;IAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;0CAVxC;AACZ,qDAAM,0BAAW,uCAA2B,eAAe;;EAAG;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;oBA2B9B;;AAClC,4CAAW,AAAS,QAAD;YAAnB;AAA6B,oBAAO,QAAQ;;;IAAC;;;;kBAGvB;AAAS,sCAAU,IAAI;IAAC;oBAEpB;AAAS,8CAAY,IAAI;IAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;yCAVvC;AACX,oDAAM,yBAAU,uCAA2B,eAAe;;EAAG;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;oBA4BxB;;AACvC,8CAAa,AAAS,QAAD;YAArB;AAA+B,oBAAO,QAAQ;;;IAAC;;;;kBAGvB;AAAS,sDAAY,IAAI;IAAC;oBAEtB;AAAS,gDAAc,IAAI;IAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2CAVzC;AACb,sDAAM,yCAAY,uCAA2B,eAAe;;EAAG;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;oBAyB1B;;AACvC,8CAAa,AAAS,QAAD;YAArB;AAA+B,oBAAO,QAAQ;;;IAAC;;;;kBAGvB;AAAS,sDAAY,IAAI;IAAC;oBAEtB;AAAS,gDAAc,IAAI;IAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2CAVzC;AACb,sDAAM,yCAAY,uCAA2B,eAAe;;EAAG;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;oBA0BzB;;AACxC,8CAAa,AAAS,QAAD;YAArB;AAA+B,oBAAO,QAAQ;;;IAAC;;;;kBAGvB;AAAS,0DAAY,IAAI;IAAC;oBAEtB;AAAS,gDAAc,IAAI;IAAC;;AAE/B;IAAK;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2CAZf;AACb,sDAAM,6CAAY,uCAA2B,eAAe;;EAAG;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MALhD,8BAAK;YAAG,0CAAQ,GAAG,GAAG,GAAG;;;;;;;oBA+BE;;AAC5C,gDAAe,AAAS,QAAD;YAAvB;AAAiC,oBAAO,QAAQ;;;IAAC;;;;kBAGvB;AAAS,4DAAc,IAAI;IAAC;oBAExB;AAAS,kDAAgB,IAAI;IAAC;;AAEjC,YAAU;IAAM;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6CAZ1B;AACf,wDAAM,+CAAc,uCAA2B,eAAe;;EAAG;;;;;;;;;;;;;;;;;;;;;;;;;;;;+EAmBrC;AAClC,QAAI,AAAgB,eAAD,YAA4B,aAAhB,eAAe;AAC5C;UACK,MAAK,wBAAY,eAAe;AACrC,YAAO,2BAAc,eAAe;;AAEpC,YAAO,gBAAe;;EAE1B;iDAKqB;AAAW,UAAwB,EAAvB,AAAO,MAAD,GAAI,AAAO,MAAD,GAAG,OAAO;EAAC;qDAOtC;AACpB,UAAO,AAAO,MAAD,GAAG;AACU,IAA1B,SAAuB,CAAb,AAAO,MAAD,IAAI,WAAK;AACzB;AACM,uBAAoB,CAAP,MAAM,GAAI,AAAO,MAAD,GAAG;AACpC,UAAI,AAAW,UAAD,KAAI,GAAG,MAAO,OAAM;AACf,MAAnB,SAAS,UAAU;;EAEvB;;MAhCM,mCAAuB;;;;;;;;;;;;;;;;;;;;;;ACvoBG,cAAQ,yBAAR;MAAoB;;AAUhC;MAAO;WAGP;AAChB,YAAI,AAAM,KAAD,IAAI,aAAQ,AAAmC,WAAlB,wBAAM,KAAK,EAAE;AACnD,cAAO,AAAO,sBAAC,KAAK;MACtB;WAGsB;YAAS;;AAC7B,YAAI,AAAM,KAAD,IAAI,aAAQ,AAAmC,WAAlB,wBAAM,KAAK,EAAE;AAC7B,QAAtB,AAAO,qBAAC,KAAK,EAAI,KAAK;;MACxB;iBAGe;AACb,YAAI,AAAU,SAAD,GAAG;AACV,6BAAe;AACnB,mBAAS,IAAI,SAAS,EAAE,AAAE,CAAD,GAAG,eAAS,IAAA,AAAC,CAAA;AACX,YAAzB,AAAO,qBAAC,CAAC,EAAI,YAAY;;cAEtB,KAAI,AAAU,SAAD,GAAG,AAAQ;AACrB;AACR,cAAI,AAAQ;AAC0B,YAApC,YAAY,qBAAc,SAAS;;AAEO,YAA1C,YAAY,0BAAoB,SAAS;;AAEJ,UAAvC,AAAU,SAAD,YAAU,GAAG,eAAS;AACZ,UAAnB,gBAAU,SAAS;;AAEF,QAAnB,gBAAU,SAAS;MACrB;eAEY;;AACV,YAAI,AAAQ,kBAAG,AAAQ,wBAAQ,AAAc,cAAR;AACX,QAA1B,AAAO,sBAAQ,sBAAP,uBAAO,UAAM,KAAK;MAC5B;UAMW;;AACI,QAAb,aAAK,OAAO;MACd;aAYwB,QAAa,WAAgB;;AACR,QAAhC,iCAAiB,KAAK,EAAE;AACnC,YAAI,GAAG,YAAY,AAAM,KAAD,gBAAG,GAAG;AACmB,UAA/C,WAAiB,0BAAM,GAAG,EAAE,KAAK,EAAE,MAAM;;AAGhB,QAA3B,cAAQ,MAAM,EAAE,KAAK,EAAE,GAAG;MAC5B;gBAYmB,OAAmB,QAAa,WAAgB;;;AACJ,QAAlD,gCAAgB,KAAK,EAAE,MAAM,SAAS,AAAQ,gBAAE;AAChB,QAAhC,iCAAiB,KAAK,EAAE;AACnC,YAAI,GAAG;AACL,cAAI,AAAM,KAAD,gBAAG,GAAG;AACkC,YAA/C,WAAiB,0BAAM,GAAG,EAAE,KAAK,EAAE,MAAM;;AAE3C,cAAI,AAAM,KAAD,KAAI,GAAG,EAAE;;AAOpB,YAAI,AAAM,KAAD,KAAI;AACgB,UAA3B,cAAQ,MAAM,EAAE,KAAK,EAAE,GAAG;AAC1B;;AAGF,YAAI,AAAI,GAAD,YAAmB,aAAP,MAAM;AACJ,UAAnB,MAAM,AAAO,MAAD;;AAEd,YAAI,GAAG;AACwC,UAA7C,yBAAmB,KAAK,EAAE,MAAM,EAAE,KAAK,EAAE,GAAG;AAC5C;;AAKE,yBAAa;AACb,wBAAY,KAAK;AACrB,iBAAS,QAAS,OAAM;AACtB,cAAI,AAAU,SAAD,GAAG;AACH,YAAX,YAAA,AAAS,SAAA;AACT;;AAEF,cAAI,AAAW,UAAD,KAAI,AAAQ;AACP,YAAjB,cAAM,UAAU;;AAEW,UAA7B,AAAO,sBAAW,OAAV,UAAU,gCAAM,KAAK;;AAG/B,YAAI,AAAU,SAAD,GAAG;AACsB,UAApC,WAAM,wBAAW;;AAEnB,YAAI,GAAG,YAAY,AAAW,UAAD,gBAAG,GAAG;AACoB,UAArD,WAAiB,0BAAM,GAAG,EAAE,KAAK,EAAE,UAAU,EAAE;;AAIhB,QAAjC,sCAAS,eAAS,KAAK,EAAE;AACa,QAAtC,sCAAS,eAAS,eAAS,UAAU;AACD,QAApC,sCAAS,eAAS,KAAK,EAAE,UAAU;AACf,QAApB,gBAAU,UAAU;AACpB;MACF;sBAG0B,QAAY,OAAW;AAC1C,QAAL,MAAA,AAAG,GAAA;AACH,eAAO,AAAM,KAAD,GAAG,GAAG;AACZ,sBAAQ,AAAM,MAAA,QAAC,KAAK;AACpB,qBAAO,AAAM,MAAA,QAAC,GAAG;AACF,UAAnB,AAAM,MAAA,QAAC,GAAG,EAAI,KAAK;AACC,UAApB,AAAM,MAAA,QAAC,KAAK,EAAI,IAAI;AACb,UAAP,QAAA,AAAK,KAAA;AACA,UAAL,MAAA,AAAG,GAAA;;MAEP;gBAOyB,QAAa,WAAgB;AACpD,YAAW,aAAP,MAAM,GAAU,AAAI,AAAiB,GAAlB,WAAH,MAAQ,AAAO,MAAD,YAAV;AAKxB,YAAI,GAAG;AAC0C,UAA/C,yBAAmB,eAAS,MAAM,EAAE,KAAK,EAAE,GAAG;AAC9C;;AAIE,gBAAI;AACR,iBAAS,QAAS,OAAM;AACtB,cAAI,AAAE,CAAD,IAAI,KAAK,EAAE,AAAU,SAAN,KAAK;AACtB,UAAH,IAAA,AAAC,CAAA;;AAEH,YAAI,AAAE,CAAD,GAAG,KAAK,EAAE,AAAoC,WAA9B,wBAAW;MAClC;2BAG4B,OAAmB,QAAY,OAAW;AACpE,YAAW,aAAP,MAAM;AACR,cAAI,AAAM,KAAD,GAAG,AAAO,MAAD,aAAW,AAAI,GAAD,GAAG,AAAO,MAAD;AACH,YAApC,WAAM,wBAAW;;;AAIjB,2BAAe,AAAI,GAAD,GAAG,KAAK;AAC1B,wBAAY,AAAQ,gBAAE,YAAY;AACZ,QAA1B,sBAAgB,SAAS;AAGwC,QADjE,AAAQ,yBACJ,AAAM,KAAD,GAAG,YAAY,EAAE,AAAQ,gBAAE,YAAY,EAAE,eAAS,KAAK;AACJ,QAA5D,AAAQ,yBAAS,KAAK,EAAE,AAAM,KAAD,GAAG,YAAY,EAAE,MAAM,EAAE,KAAK;AACxC,QAAnB,gBAAU,SAAS;MACrB;aAGgB,OAAS;;AACvB,YAAI,AAAM,KAAD,GAAG,KAAK,AAAM,KAAD,GAAG;AACkB,UAAzC,WAAiB,0BAAM,KAAK,EAAE,GAAG;;AAEnC,YAAI,AAAQ,gBAAE,AAAQ;AACoC,UAAxD,AAAQ,yBAAS,AAAM,KAAD,GAAG,GAAG,AAAQ,gBAAE,GAAG,eAAS,KAAK;AAC/B,UAAxB,AAAO,qBAAC,KAAK,EAAI,OAAO;AACf,UAAT,gBAAA,AAAO,gBAAA;AACP;;AAEE,wBAAY,0BAAoB;AACC,QAArC,AAAU,SAAD,YAAU,GAAG,KAAK,EAAE;AAC6B,QAA1D,AAAU,SAAD,YAAU,AAAM,KAAD,GAAG,GAAG,AAAQ,gBAAE,GAAG,eAAS,KAAK;AAC/B,QAA1B,AAAS,SAAA,QAAC,KAAK,EAAI,OAAO;AACjB,QAAT,gBAAA,AAAO,gBAAA;AACY,QAAnB,gBAAU,SAAS;MACrB;wBAKyB;AACvB,YAAI,AAAiB,gBAAD,IAAI,AAAQ,wBAAQ;AACpC,wBAAY,0BAAoB,gBAAgB;AACb,QAAvC,AAAU,SAAD,YAAU,GAAG,eAAS;AACZ,QAAnB,gBAAU,SAAS;MACrB;4BAQiC;AAC3B,wBAAY,AAAQ,AAAO,yBAAE;AACjC,YAAI,gBAAgB,YAAsB,aAAV,SAAS,iBAAG,gBAAgB;AAC9B,UAA5B,YAAY,gBAAgB;cACvB,KAAc,aAAV,SAAS;AACQ,UAA1B;;AAEF,cAAO,sBAAc,SAAS;MAChC;gBAKe;;AACoD,QAAjE,wBAAU,0BAAoB,OAApB;AAA2B,0BAAS,GAAG,MAAM,EAAE;;;MAC3D;eAGkB,OAAW,KAAiB,UAAe;;AAC3D,YAAI,AAAI,GAAD,GAAG,eAAS,AAAuC,WAAtB,0BAAM,GAAG,EAAE,GAAG;AACR,QAA1C,gBAAU,KAAK,EAAE,GAAG,EAAE,QAAQ,EAAE,SAAS;MAC3C;kBAGmB,OAAW,KAAiB,QAAY;AACzD,YAAW,4BAAP,MAAM;AAC+C,UAAvD,AAAQ,yBAAS,KAAK,EAAE,GAAG,EAAE,AAAO,MAAD,WAAU,SAAS;;AAEP,UAA/C,AAAQ,yBAAS,KAAK,EAAE,GAAG,EAAE,MAAM,EAAE,SAAS;;MAElD;;AAI8B,cAAA,AAAa;MAAkB;;AAEpC,cAAA,AAAQ,iBAAE,AAAa;MAAkB;;AAEzC,cAAA,AAAa;MAAa;;AAQ1B,cAAA,AAAa;MAAM;;oCAnRpB;MACV,gBAAE,MAAM;MACR,gBAAE,AAAO,MAAD;;IAAO;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAhBZ,2CAAc;;;;;;;AAiTN;IAAC;;0CAHL;AAAU,qDAAM,MAAM;;EAAC;;;;;;;;;;AAUhB;IAAG;;4CAHL;AAAU,uDAAM,MAAM;;EAAC;;;;;;;;;;;;qBAUrB;AAAS,oDAAU,IAAI;IAAC;;2CAHnC;AAAsB,sDAAM,uCAAU,aAAa;;EAAE;;;;;;;;;;;;qBAU3C;AAAS,mDAAS,IAAI;IAAC;;0CAHlC;AAAsB,qDAAM,sCAAS,aAAa;;EAAE;;;;;;;;;;;;qBAWjC;AAAS,2DAAiB,IAAI;IAAC;;kDAJ1C;AAClB,6DAAM,8CAAiB,aAAa;;EAAE;;;;;;;;;;;;qBAUf;AAAS,qDAAW,IAAI;IAAC;;4CAHpC;AAAsB,uDAAM,wCAAW,aAAa;;EAAE;;;;;;;;;;;;qBAU5C;AAAS,oDAAU,IAAI;IAAC;;2CAHnC;AAAsB,sDAAM,uCAAU,aAAa;;EAAE;;;;;;;;;;;;qBAUzC;AAAS,qDAAW,IAAI;IAAC;;4CAHpC;AAAsB,uDAAM,wCAAW,aAAa;;EAAE;;;;;;;;;;;;qBAU5C;AAAS,oDAAU,IAAI;IAAC;;2CAHnC;AAAsB,sDAAM,uCAAU,aAAa;;EAAE;;;;;;;;;;;;qBAUzC;AAAS,uCAAW,IAAI;IAAC;;4CAHpC;AAAsB,uDAAM,0BAAW,aAAa;;EAAE;;;;;;;;;;;;qBAU5C;AAAS,sCAAU,IAAI;IAAC;;2CAHnC;AAAsB,sDAAM,yBAAU,aAAa;;EAAE;;;;;;;;;;;;qBAUxC;AAAS,sDAAY,IAAI;IAAC;;6CAHrC;AAAsB,wDAAM,yCAAY,aAAa;;EAAE;;;;;;;;;;;;qBAU5C;AAAS,sDAAY,IAAI;IAAC;;6CAHrC;AAAsB,wDAAM,yCAAY,aAAa;;EAAE;;;;;;;;;;;;;AAY7C;IAAK;qBAGJ;AAAS,0DAAY,IAAI;IAAC;;6CANrC;AAAsB,wDAAM,6CAAY,aAAa;;EAAE;;;;;;;;;;;;;;MAFrD,gCAAK;YAAG,0CAAQ,GAAG,GAAG,GAAG;;;;;;;;AAgBf,YAAU;IAAM;qBAGf;AAAS,4DAAc,IAAI;IAAC;;+CAPvC;AACf,0DAAM,+CAAc,aAAa;;EAAE","file":"main.js"}');
  // Exports:
  return {
    zapp__project__$46zapp_entry: $46zapp_entry,
    zapp__project__lib__main: main,
    bloc: bloc,
    app: app$,
    simple_bloc_observer: simple_bloc_observer,
    flutter_bloc: flutter_bloc,
    src__bloc: bloc$,
    src__bloc_observer: bloc_observer,
    src__change: change,
    src__cubit: cubit,
    src__transition: transition,
    posts__view__post_page: post_page,
    provider: provider,
    src__bloc_builder: bloc_builder,
    src__bloc_consumer: bloc_consumer,
    src__bloc_listener: bloc_listener,
    src__bloc_provider: bloc_provider,
    src__bloc_selector: bloc_selector,
    src__multi_bloc_listener: multi_bloc_listener,
    src__multi_bloc_provider: multi_bloc_provider,
    src__multi_repository_provider: multi_repository_provider,
    src__repository_provider: repository_provider,
    posts__bloc__post_bloc: post_bloc,
    posts__bloc__post_event: post_event,
    posts__view__post_list: post_list,
    http: http,
    src__async_provider: async_provider,
    src__change_notifier_provider: change_notifier_provider,
    src__consumer: consumer,
    src__listenable_provider: listenable_provider,
    src__provider: provider$,
    src__proxy_provider: proxy_provider,
    src__reassemble_handler: reassemble_handler,
    src__selector: selector$,
    src__value_listenable_provider: value_listenable_provider,
    single_child_widget: single_child_widget,
    bloc_concurrency: bloc_concurrency,
    equatable: equatable,
    posts__bloc__post_state: post_state,
    posts__models__post: post,
    stream_transform: stream_transform,
    posts__widgets__bottom_loader: bottom_loader,
    posts__widgets__post_list_item: post_list_item,
    src__client: client$,
    src__exception: exception,
    src__request: request$,
    src__response: response$,
    src__streamed_request: streamed_request,
    src__base_client: base_client,
    src__base_request: base_request,
    src__base_response: base_response,
    src__byte_stream: byte_stream,
    src__multipart_file: multipart_file,
    src__multipart_request: multipart_request,
    src__streamed_response: streamed_response,
    nested: nested,
    src__concurrent: concurrent,
    src__droppable: droppable,
    src__restartable: restartable,
    src__sequential: sequential,
    src__equatable: equatable$,
    src__equatable_config: equatable_config,
    src__equatable_mixin: equatable_mixin,
    src__async_map: async_map,
    src__combine_latest: combine_latest,
    src__concatenate: concatenate,
    src__merge: merge,
    src__rate_limit: rate_limit,
    src__scan: scan,
    src__switch: $switch,
    src__take_until: take_until,
    src__tap: tap,
    src__where: where,
    src__browser_client: browser_client,
    http_parser: http_parser,
    src__utils: utils,
    src__multipart_file_stub: multipart_file_stub,
    src__boundary_characters: boundary_characters,
    src__equatable_utils: equatable_utils,
    src__aggregate_sample: aggregate_sample,
    src__from_handlers: from_handlers,
    src__authentication_challenge: authentication_challenge,
    src__case_insensitive_map: case_insensitive_map,
    src__chunked_coding: chunked_coding,
    src__http_date: http_date,
    src__media_type: media_type,
    src__scan: scan$,
    src__utils: utils$,
    src__chunked_coding__decoder: decoder,
    src__chunked_coding__encoder: encoder,
    typed_data: typed_data$,
    src__chunked_coding__charcodes: charcodes,
    src__typed_queue: typed_queue,
    typed_buffers: typed_buffers,
    src__typed_buffer: typed_buffer
  };
}));

//# sourceMappingURL=main.js.map
