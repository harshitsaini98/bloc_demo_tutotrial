import 'package:bloc/bloc.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_app/app.dart';
import 'package:flutter_app/simple_bloc_observer.dart';
import 'package:flutter_bloc/flutter_bloc.dart';


void main() {
  BlocOverrides.runZoned(
    () => runApp(App()),
    blocObserver: SimpleBlocObserver(),
  );
}
